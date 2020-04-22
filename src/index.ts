import { dynamicValidator, getFrameStateProgress, extendCurves } from './core'
import { Dynamic } from './types'

// eslint-disable-next-line
function getType(target: any): string {
  return Object.prototype.toString
    .call(target)
    .replace(/\[object |\]/g, '')
    .toLowerCase()
}

// eslint-disable-next-line
function isNumber(target: any): boolean {
  return Number.isFinite(target)
}

// eslint-disable-next-line
function recursiveAble(target: any): boolean {
  const type = getType(target)

  return type === 'array' || type === 'object'
}

// eslint-disable-next-line
function transitionAble(startState: any): boolean {
  const stateType = getType(startState)

  return ['number', 'array', 'object'].includes(stateType)
}

// eslint-disable-next-line
function asNumber(target: any): number {
  return target
}

function createTargetArray<T>(target: T, num: number): T[] {
  return new Array(num).fill(0).map(_ => target)
}

// eslint-disable-next-line
function updateTargetValues<T = any>(target: T[], values: any[], key: string): T[] {
  // eslint-disable-next-line
  target.forEach((_: any, i) => (_[key] = values[i]))

  return target
}

function createInitState(isArray: boolean): [] | {} {
  return isArray ? [] : {}
}

function getTransitionState(start: number, end: number, frameStateProgress: number[]): number[] {
  const minus = end - start

  return frameStateProgress.map(s => start + minus * s)
}

function validator<T>(dynamic: Dynamic, startState: T, endState: T, frameNum: number): true {
  const argTypes = [dynamic, startState, endState, frameNum].map(getType)

  if (argTypes.find(_ => _ === 'undefined')) throw new Error('transition: Missing Parameters!')

  if (argTypes[1] !== argTypes[2])
    throw new Error('transition: The start state type and the end state type are inconsistent!')

  if (argTypes[3] !== 'number' || frameNum <= 0)
    throw new Error(`Transition: frameNum should be a number and greater than 1`)

  dynamicValidator(dynamic)

  return true
}

function recursiveTransition<T>(
  startState: T,
  endState: T,
  frameStateProgress: number[],
  deep: boolean
): T[] {
  const stateType = getType(startState)
  const { length } = frameStateProgress

  if (stateType === 'number')
    return (getTransitionState(
      asNumber(startState),
      asNumber(endState),
      frameStateProgress
    ) as unknown) as T[]

  const isArray = stateType === 'array'
  let state = new Array(length).fill(isArray).map(createInitState)

  for (const key in endState) {
    const start = startState[key]
    const end = endState[key]

    // eslint-disable-next-line
    let keyState: any[] = []

    if (isNumber(start) && isNumber(end)) {
      keyState = getTransitionState(asNumber(start), asNumber(end), frameStateProgress)
    } else if (recursiveAble(start) && recursiveAble(end) && deep) {
      keyState = recursiveTransition(start, end, frameStateProgress, deep)
    } else {
      keyState = createTargetArray(end, length)
    }

    state = updateTargetValues(state, keyState, key)
  }

  return (state as unknown) as T[]
}

/**
 * @description Get the N-frame animation state by the start and end state
 *              of the animation and the dynamic curve
 * @param {TDynamic} dynamic Dynamic curve name or data
 * @param {Any} startState   Animation start state
 * @param {Any} endState     Animation end state
 * @param {Number} frameNum  Number of Animation frames
 * @param {Boolean} deep     Whether to use recursive mode
 * @return {Array|Boolean} State of each frame of the animation (Invalid input will return false)
 */

function transition<T>(
  dynamic: Dynamic,
  startState: T,
  endState: T,
  frameNum = 30,
  deep = false
): T[] {
  validator(dynamic, startState, endState, frameNum)

  if (!transitionAble(startState)) {
    console.warn('Transition: Only supports array number and object types')

    return [startState, endState]
  }

  try {
    const frameStateProgress = getFrameStateProgress(dynamic, frameNum)

    return recursiveTransition(startState, endState, frameStateProgress, deep)
  } catch {
    console.warn('Transition: parameter may be abnormal!')

    return [endState]
  }
}

export { extendCurves, transition }

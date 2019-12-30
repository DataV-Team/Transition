import { injectNewCurve, getFrameStateProgress } from './core'
import { curves } from './core/curves'
import { tweens } from './core/tweens'
import { TCurve } from './core/curves'

type TDynamic = string | TCurve

/**
 * @description Get target type
 * @param {Any} target Target
 * @return {String} Target type
 */
type TGetType = (target: any) => string

const getType: TGetType = (target) => {
  return Object
    .prototype.toString.call(target)
    .replace(/\[object |\]/g, '').toLowerCase()
}

/**
 * @description Check if the parameters are legal
 * @param {TDynamic} dynamic Dynamic curve name or data
 * @param {Any} startState   Transition start state
 * @param {Any} endState     Transition end state
 * @param {Number} frameNum  Number of transition frames
 * @return {Boolean} Is the parameter legal
 */
type TCheckParams =
  <T>(dynamic: TDynamic, starState: T, endState: T, frameNum: number)
    => boolean

const checkParams: TCheckParams = (dynamic, startState, endState, frameNum) => {
  const [starStateType, endStateType] = [typeof startState, typeof endState]

  if (
    typeof dynamic === 'undefined' ||
    starStateType === 'undefined' ||
    endStateType === 'undefined'
  ) {
    console.error('transition: Missing Parameters!')

    return false
  }

  if (typeof frameNum !== 'number') {
    console.error('transition: frameNum should be of type number!')

    return false
  }

  if (starStateType !== typeof endStateType) {
    console.error('transition: Inconsistent Status Types!')

    return false
  }

  if (
    typeof dynamic === 'string' && !curves.has(dynamic) && !tweens.has(dynamic) ||
    !(dynamic instanceof Array)
  ) {
    console.warn('transition: Transition dynamic curve not found, default dynamic curve will be used!')
  }

  return true
}

/**
 * @description Get the transition data of the number type
 * @param {Number} startState           Transition start state
 * @param {Number} endState             Transition end state
 * @param {Number[]} frameStateProgress Frame state progress
 * @return {Array} Transition frame state
 */
type TGetNumberTransitionState = <T extends number>(starState: T, endState: T, frameStateProgress: number[]) => number[]

const getNumberTransitionState: TGetNumberTransitionState = (startState, endState, frameStateProgress) => {
  const minus = endState - startState

  return frameStateProgress.map(s => startState + minus * s)
}

/**
 * @description Get the transition data of the array type
 * @param {any[]} startState            Transition start state
 * @param {any[]} endState              Transition end state
 * @param {Number[]} frameStateProgress Frame state progress
 * @return {Array} Transition frame state
 */
type TGetArrayTransitionState = <T extends any[]>(startState: T, endState: T, frameStateProgress: number[]) => T[]

const getArrayTransitionState: TGetArrayTransitionState = (startState, endState, frameStateProgress) => {
  const minus = endState.map((v, i) => {
    if (typeof v !== 'number') return false

    return v - startState[i]
  })

  return frameStateProgress.map(s =>
    minus.map((v, i) => {
      if (v === false) return endState[i]

      return startState[i] + v * s
    })) as typeof endState[]
}

interface StringPropNameObject {
  [propName: string]: any;
}

/**
 * @description Get the transition data of the object type
 * @param {Object} startState           Transition start state
 * @param {Object} endState             Transition end state
 * @param {Number[]} frameStateProgress Frame state progress
 * @return {Array} Transition frame state
 */
type TGetObjectTransitionState = <T extends StringPropNameObject>(startState: T, endState: T, frameStateProgress: number[]) => T[]

const getObjectTransitionState: TGetObjectTransitionState = (startState, endState, frameStateProgress) => {
  const keys = Object.keys(endState)

  const startValue = keys.map(k => startState[k])
  const endValue = keys.map(k => endState[k])

  const arrayState = getArrayTransitionState<typeof startValue>(startValue, endValue, frameStateProgress)

  return arrayState.map(item => {
    const frameData: any = {}

    item.forEach((v, i) => frameData[keys[i]] = v)

    return frameData
  })
}

/**
 * @description Get transition state according to frame progress
 * @param {Any} startState              Transition start state
 * @param {Any} endState                Transition end state
 * @param {Number[]} frameStateProgress Frame state progress
 * @return {Array} Transition frame state
 */
type TGetTransitionState = <T>(startState: T, endState: T, frameStateProgress: number[]) => T[]

const getTransitionState: TGetTransitionState = (startState, endState, frameStateProgress) => {
  const stateType = getType(startState)

  if (stateType === 'number') return getNumberTransitionState(startState as unknown as number, endState as unknown as number, frameStateProgress) as unknown[] as typeof startState[]
  if (stateType === 'array') return getArrayTransitionState(startState as unknown as any[], endState as unknown as any[], frameStateProgress) as unknown[] as typeof startState[]
  if (stateType === 'object') return getObjectTransitionState(startState, endState, frameStateProgress)

  return frameStateProgress.map(() => endState)
}

/**
 * @description Get the transition state data by recursion
 * @param {Array|Object} startState     Transition start state
 * @param {Array|Object} endState       Transition end state
 * @param {Number[]} frameStateProgress Frame state progress
 * @return {Array} Transition frame state
 */
type TRecursionTransitionState = <T>(startState: T, endState: T, frameStateProgress: number[]) => T[]

const recursionTransitionState: TRecursionTransitionState = (startState, endState, frameStateProgress) => {
  const state = getTransitionState<typeof startState>(startState, endState, frameStateProgress)

  for (const key in endState) {
    const bTemp = startState[key]
    const eTemp = endState[key]

    if (typeof eTemp !== 'object') continue

    const data = recursionTransitionState(bTemp, eTemp, frameStateProgress)

    state.forEach((fs: any, i: any) => fs[key] = data[i])
  }

  return state
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
type TTransition =
  <T>(dynamic: TDynamic, starState: T, endState: T, frameNum: number, deep: boolean)
    => T[]

const transition: TTransition = (dynamic, startState, endState, frameNum = 30, deep = false) => {
  if (!checkParams(dynamic, startState, endState, frameNum)) return [endState]

  const stateType = getType(startState)

  if (
    stateType !== 'number' &&
    stateType !== 'array' &&
    stateType !== 'object'
  ) return new Array(frameNum).fill(endState)

  try {
    const frameStateProgress = getFrameStateProgress(dynamic, frameNum, 'linear')

    // If the recursion mode is not enabled or the state type is Number, the shallow state calculation is performed directly.
    if (!deep || typeof endState === 'number') return getTransitionState(startState, endState, frameStateProgress)

    return recursionTransitionState(startState, endState, frameStateProgress)
  } catch {
    console.warn('Transition parameter may be abnormal!')

    return [endState]
  }
}

export {
  injectNewCurve,
  transition
}


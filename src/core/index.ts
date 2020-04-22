import { extendCurves, getFrameStateProgressByCurve, curves } from './curves'
import { getFrameStateProgressByTween, tweens } from './tweens'
import { TweenName } from '../types/tweens'
import { Calculator, Dynamic, DynamicType } from '../types'

export function dynamicValidator(dynamic: Dynamic): DynamicType {
  const isArray = dynamic instanceof Array
  const isCurve = curves.has(dynamic as string)
  const isTween = tweens.has(dynamic as TweenName)

  if (isArray) return 'transitionCurve'
  if (isCurve) return 'transitionCurveName'
  if (isTween) return 'tween'

  throw new Error(`Transition: Invalid dynamic of ${dynamic}`)
}

export function getFrameStateProgress(dynamic: Dynamic, frameNum = 30): number[] {
  const dynamicType = dynamicValidator(dynamic)

  const calculator: Calculator =
    dynamicType === 'tween' ? getFrameStateProgressByTween : getFrameStateProgressByCurve

  return calculator(dynamic, frameNum)
}

export { extendCurves, getFrameStateProgressByCurve, getFrameStateProgressByTween }

export default getFrameStateProgress

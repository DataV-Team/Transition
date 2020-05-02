import { extendCurves, getFrameStateProgressByCurve, curves } from './curves'
import { getFrameStateProgressByTween, tweens } from './tweens'
import { TweenName } from '../types/core/tweens'
import { Calculator, EaseCurve, EaseCurveType } from '../types/core'

export function easeCurveValidator(easeCurve: EaseCurve): EaseCurveType {
  const isArray = easeCurve instanceof Array
  const isCurve = curves.has(easeCurve as string)
  const isTween = tweens.has(easeCurve as TweenName)

  if (isArray) return 'transitionCurve'
  if (isCurve) return 'transitionCurveName'
  if (isTween) return 'tween'

  throw new Error(`Transition: Invalid ease curve of ${easeCurve}`)
}

export function getFrameStateProgress(easeCurve: EaseCurve, frameNum = 30): number[] {
  const easeCurveType = easeCurveValidator(easeCurve)

  const calculator: Calculator =
    easeCurveType === 'tween' ? getFrameStateProgressByTween : getFrameStateProgressByCurve

  return calculator(easeCurve, frameNum)
}

export { extendCurves, getFrameStateProgressByCurve, getFrameStateProgressByTween }

export default getFrameStateProgress

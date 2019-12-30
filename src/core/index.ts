import { injectNewCurve, getFrameStateProgressByCurve, curves, TCurve } from './curves'
import { getFrameStateProgressByTween, tweens, TTweenName } from './tweens'

type TGetFrameStateProgress = (dynamic: string | TCurve, frameNum: number, defaultDynamic: TTweenName) => number[]

export const getFrameStateProgress: TGetFrameStateProgress = (dynamic, frameNum, defaultDynamic) => {
  let validDynamic = true

  if (typeof dynamic !== 'string' && !(dynamic instanceof Array)) validDynamic = false

  if (
    typeof dynamic === 'string' &&
    (!curves.get(dynamic) && !tweens.get(dynamic))
  ) validDynamic = false

  if (!validDynamic) dynamic = defaultDynamic

  const calculator: Function = tweens.get(dynamic as string) || getFrameStateProgressByCurve

  return calculator(dynamic, frameNum)
}

export {
  injectNewCurve,
  getFrameStateProgressByCurve,
  getFrameStateProgressByTween
}

export default getFrameStateProgress

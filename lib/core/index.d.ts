import { injectNewCurve, getFrameStateProgressByCurve, TCurve } from './curves';
import { getFrameStateProgressByTween, TTweenName } from './tweens';
declare type TGetFrameStateProgress = (dynamic: string | TCurve, frameNum: number, defaultDynamic: TTweenName) => number[];
export declare const getFrameStateProgress: TGetFrameStateProgress;
export { injectNewCurve, getFrameStateProgressByCurve, getFrameStateProgressByTween };
export default getFrameStateProgress;

import { extendCurves, getFrameStateProgressByCurve } from './curves';
import { getFrameStateProgressByTween } from './tweens';
import { EaseCurve, EaseCurveType } from '../types/core';
export declare function easeCurveValidator(easeCurve: EaseCurve): EaseCurveType;
export declare function getFrameStateProgress(easeCurve: EaseCurve, frameNum?: number): number[];
export { extendCurves, getFrameStateProgressByCurve, getFrameStateProgressByTween };
export default getFrameStateProgress;

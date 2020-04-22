import { extendCurves, getFrameStateProgressByCurve } from './curves';
import { getFrameStateProgressByTween } from './tweens';
import { Dynamic, DynamicType } from 'types';
export declare function dynamicValidator(dynamic: Dynamic): DynamicType;
export declare function getFrameStateProgress(dynamic: Dynamic, frameNum?: number): number[];
export { extendCurves, getFrameStateProgressByCurve, getFrameStateProgressByTween };
export default getFrameStateProgress;

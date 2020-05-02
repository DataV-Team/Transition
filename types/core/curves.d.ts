import { TransitionCurve } from '../types/core/curves';
export declare const curves: Map<string, TransitionCurve>;
/**
 * @description Get frame state progress by curve
 * @param {TransitionCurve|string} curve Transition curve or curve name extended
 * @param {number} frameNum              Frame number
 * @return {number[]} Frame state progress
 */
export declare function getFrameStateProgressByCurve(curve: TransitionCurve | string, frameNum: number): number[];
/**
 * @description Extend curves (add new transition curve into curves)
 * @param {string} curveName      Curve name
 * @param {TransitionCurve} curve Transition curve
 * @return {boolean} Result
 */
export declare function extendCurves(curveName: string, transitionCurve: TransitionCurve): boolean;

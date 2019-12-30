export declare type TPoint = [number, number];
export declare type TCurveSegment = TPoint[];
export declare type TCurve = TCurveSegment[];
export declare const curves: Map<string, TCurve>;
/**
 * @description Get frame state progress by curve
 * @param {String|TCurve} curve Curve name or easing curve data
 * @param {Number} frameNum      Frame number
 * @return {Number[]} Frame state progress
 */
declare type TGetFrameStateProgressByCurve = (curve: string | TCurve, frameNum: number) => number[];
export declare const getFrameStateProgressByCurve: TGetFrameStateProgressByCurve;
/**
 * @description Inject new curve into curves as config
 * @param {String} curveName The key of curve
 * @param {TCurve} curve     Bezier curve data
 * @return {Boolean} Result
 */
declare type TInjectNewCurve = (curveName: string, curve: TCurve) => boolean;
export declare const injectNewCurve: TInjectNewCurve;
export {};

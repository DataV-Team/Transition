/**
 * @description Tween
 * @param {number} t Frame index
 * @param {number} b Begin state
 * @param {number} c Change value
 * @param {number} d Duration
 * @return {number} Current State
 */
declare type TTween = (t: number, b: number, c: number, d: number) => number;
/**
 * @description Linear
 */
export declare const linear: TTween;
/**
 * @description Sine
 */
export declare const easeInSine: TTween;
export declare const easeOutSine: TTween;
export declare const easeInOutSine: TTween;
/**
 * @description Quad
 */
export declare const easeInQuad: TTween;
export declare const easeOutQuad: TTween;
export declare const easeInOutQuad: TTween;
/**
 * @description Cubic
 */
export declare const easeInCubic: TTween;
export declare const easeOutCubic: TTween;
export declare const easeInOutCubic: TTween;
/**
 * @description Quart
 */
export declare const easeInQuart: TTween;
export declare const easeOutQuart: TTween;
export declare const easeInOutQuart: TTween;
/**
 * @description Quint
 */
export declare const easeInQuint: TTween;
export declare const easeOutQuint: TTween;
export declare const easeInOutQuint: TTween;
/**
 * @description Back
 */
export declare const easeInBack: TTween;
export declare const easeOutBack: TTween;
export declare const easeInOutBack: TTween;
/**
 * @description Elastic
 */
export declare const easeInElastic: TTween;
export declare const easeOutElastic: TTween;
export declare const easeInOutElastic: TTween;
/**
 * @description Bounce
 */
export declare const easeOutBounce: TTween;
export declare const easeInBounce: TTween;
export declare const easeInOutBounce: TTween;
/**
 * @description Expo
 */
export declare const easeInExpo: TTween;
export declare const easeOutExpo: TTween;
export declare const easeInOutExpo: TTween;
/**
 * @description Circ
 */
export declare const easeInCirc: TTween;
export declare const easeOutCirc: TTween;
export declare const easeInOutCirc: TTween;
export declare const tweens: Map<string, TTween>;
export declare type TTweenName = 'linear' | 'easeInSine' | 'easeOutSine' | 'easeInOutSine' | 'easeInQuad' | 'easeOutQuad' | 'easeInOutQuad' | 'easeInCubic' | 'easeOutCubic' | 'easeInOutCubic' | 'easeInQuart' | 'easeOutQuart' | 'easeInOutQuart' | 'easeInQuint' | 'easeOutQuint' | 'easeInOutQuint' | 'easeInBack' | 'easeOutBack' | 'easeInOutBack' | 'easeInElastic' | 'easeOutElastic' | 'easeInOutElastic' | 'easeInBounce' | 'easeOutBounce' | 'easeInOutBounce';
/**
 * @description Get frame state progress by tween
 * @param {TTweenName} tweenName Tween name
 * @param {Number} frameNum      Frame number
 * @return {Number[]} Frame state progress
 */
declare type TGetFrameStateProgressByTween = (tweenName: TTweenName, frameNum: number) => number[];
export declare const getFrameStateProgressByTween: TGetFrameStateProgressByTween;
export default getFrameStateProgressByTween;

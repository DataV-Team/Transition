import { Tween, TweenName } from '../types/core/tweens';
/**
 * @description Linear
 */
export declare const linear: Tween;
/**
 * @description Sine
 */
export declare const easeInSine: Tween;
export declare const easeOutSine: Tween;
export declare const easeInOutSine: Tween;
/**
 * @description Quad
 */
export declare const easeInQuad: Tween;
export declare const easeOutQuad: Tween;
export declare const easeInOutQuad: Tween;
/**
 * @description Cubic
 */
export declare const easeInCubic: Tween;
export declare const easeOutCubic: Tween;
export declare const easeInOutCubic: Tween;
/**
 * @description Quart
 */
export declare const easeInQuart: Tween;
export declare const easeOutQuart: Tween;
export declare const easeInOutQuart: Tween;
/**
 * @description Quint
 */
export declare const easeInQuint: Tween;
export declare const easeOutQuint: Tween;
export declare const easeInOutQuint: Tween;
/**
 * @description Back
 */
export declare const easeInBack: Tween;
export declare const easeOutBack: Tween;
export declare const easeInOutBack: Tween;
/**
 * @description Elastic
 */
export declare const easeInElastic: Tween;
export declare const easeOutElastic: Tween;
export declare const easeInOutElastic: Tween;
/**
 * @description Bounce
 */
export declare const easeOutBounce: Tween;
export declare const easeInBounce: Tween;
export declare const easeInOutBounce: Tween;
/**
 * @description Expo
 */
export declare const easeInExpo: Tween;
export declare const easeOutExpo: Tween;
export declare const easeInOutExpo: Tween;
/**
 * @description Circ
 */
export declare const easeInCirc: Tween;
export declare const easeOutCirc: Tween;
export declare const easeInOutCirc: Tween;
export declare const tweens: Map<TweenName, Tween>;
/**
 * @description Get frame state progress by tween
 * @param {TweenName} tweenName Tween name
 * @param {number} frameNum     Frame number
 * @return {number[]} Frame state progress
 */
export declare function getFrameStateProgressByTween(tweenName: TweenName, frameNum?: number): number[];
export default getFrameStateProgressByTween;

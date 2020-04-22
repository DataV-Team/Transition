/**
 * @description Tween
 * @param {number} t Frame index
 * @param {number} b Begin state
 * @param {number} c Change value
 * @param {number} d Duration
 * @return {number} Current State
 */
export declare type Tween = (t: number, b: number, c: number, d: number) => number;
export declare type TweenName = 'linear' | 'easeInSine' | 'easeOutSine' | 'easeInOutSine' | 'easeInQuad' | 'easeOutQuad' | 'easeInOutQuad' | 'easeInCubic' | 'easeOutCubic' | 'easeInOutCubic' | 'easeInQuart' | 'easeOutQuart' | 'easeInOutQuart' | 'easeInQuint' | 'easeOutQuint' | 'easeInOutQuint' | 'easeInBack' | 'easeOutBack' | 'easeInOutBack' | 'easeInElastic' | 'easeOutElastic' | 'easeInOutElastic' | 'easeInBounce' | 'easeOutBounce' | 'easeInOutBounce';

import { extendCurves } from './core';
import { EaseCurve } from './types/core';
import { createAnimator } from './animator';
/**
 * @description Get the N-frame animation state by the start and end state
 *              of the animation and the ease curve
 * @param {EaseCurve} easeCurve Ease curve name or data
 * @param {Any} startState      Animation start state
 * @param {Any} endState        Animation end state
 * @param {Number} frameNum     Number of Animation frames
 * @param {Boolean} deep        Whether to use recursive mode
 * @return {Array} State of each frame of the animation
 */
declare function transition<T>(easeCurve: EaseCurve, startState: T, endState: T, frameNum?: number, deep?: boolean): T[];
export { transition, extendCurves, createAnimator };
export default transition;

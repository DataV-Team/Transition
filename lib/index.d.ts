import { injectNewCurve } from './core';
import { TCurve } from './core/curves';
declare type TDynamic = string | TCurve;
/**
 * @description Get the N-frame animation state by the start and end state
 *              of the animation and the dynamic curve
 * @param {TDynamic} dynamic Dynamic curve name or data
 * @param {Any} startState   Animation start state
 * @param {Any} endState     Animation end state
 * @param {Number} frameNum  Number of Animation frames
 * @param {Boolean} deep     Whether to use recursive mode
 * @return {Array|Boolean} State of each frame of the animation (Invalid input will return false)
 */
declare type TTransition = <T>(dynamic: TDynamic, starState: T, endState: T, frameNum: number, deep: boolean) => T[];
declare const transition: TTransition;
export { injectNewCurve, transition };

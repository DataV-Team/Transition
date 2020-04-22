import { TransitionCurve } from './curves';
import { TweenName } from './tweens';
export declare type Dynamic = TransitionCurve | TweenName | string;
export declare type DynamicType = 'transitionCurve' | 'transitionCurveName' | 'tween';
export declare type Calculator = (...params: any[]) => number[];

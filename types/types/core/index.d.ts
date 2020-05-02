import { TransitionCurve } from './curves';
import { TweenName } from './tweens';
export declare type EaseCurve = TransitionCurve | TweenName | string;
export declare type EaseCurveType = 'transitionCurve' | 'transitionCurveName' | 'tween';
export declare type Calculator = (...params: any[]) => number[];

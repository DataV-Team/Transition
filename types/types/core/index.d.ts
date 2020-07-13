import { TransitionCurve } from './curves';
import { TweenName } from './tweens';
import { LiteralUnion } from '../common';
export declare type EaseCurve = TransitionCurve | LiteralUnion<TweenName, string>;
export declare type EaseCurveType = 'transitionCurve' | 'transitionCurveName' | 'tween';
export declare type Calculator = (...params: any[]) => number[];

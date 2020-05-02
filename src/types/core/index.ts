import { TransitionCurve } from './curves'
import { TweenName } from './tweens'

export type EaseCurve = TransitionCurve | TweenName | string

export type EaseCurveType = 'transitionCurve' | 'transitionCurveName' | 'tween'

// eslint-disable-next-line
export type Calculator = (...params: any[]) => number[]

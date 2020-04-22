import { TransitionCurve } from './curves'
import { TweenName } from './tweens'

export type Dynamic = TransitionCurve | TweenName | string

export type DynamicType = 'transitionCurve' | 'transitionCurveName' | 'tween'

// eslint-disable-next-line
export type Calculator = (...params: any[]) => number[]

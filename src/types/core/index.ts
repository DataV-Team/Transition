import { TransitionCurve } from './curves'
import { TweenName } from './tweens'
import { LiteralUnion } from '../common'

export type EaseCurve = TransitionCurve | LiteralUnion<TweenName, string>

export type EaseCurveType = 'transitionCurve' | 'transitionCurveName' | 'tween'

// eslint-disable-next-line
export type Calculator = (...params: any[]) => number[]

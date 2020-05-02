import { TransitionCurve, TransitionCurveSegment, BezierCurve } from '../types/core/curves'

export const curves = new Map<string, TransitionCurve>([])

/**
 * @description Get bezier curve by t
 * @param {TransitionCurve} transitionCurve transition curve
 * @param {number} t                        Current frame t
 * @return {BezierCurve} Bezier Curve
 */
function getBezierCurveByT(transitionCurve: TransitionCurve, t: number): BezierCurve {
  const curveNum = transitionCurve.length

  const lastIndex = curveNum - 1

  let begin!: TransitionCurveSegment
  let end!: TransitionCurveSegment

  for (let i = 0; i < curveNum; i++) {
    if (i === lastIndex) continue

    const segment = transitionCurve[i]

    begin = segment
    end = transitionCurve[i + 1]

    const currentMainPointX = begin[0][0]
    const nextMainPointX = end[0][0]

    if (t >= currentMainPointX && t < nextMainPointX) break
  }

  const p0 = begin[0]
  const p1 = begin[2] || begin[0]
  const p2 = end[1] || end[0]
  const p3 = end[0]

  return [p0, p1, p2, p3]
}

/**
 * @description Get bezier curve relative t
 * @param {BezierCurve} bezierCurve Bezier Curve
 * @param {number} t                Current frame t
 * @return {number} Relative t of bezier curve
 */
function getBezierCurveRelativeT(bezierCurve: BezierCurve, t: number): number {
  const reBeginX = bezierCurve[0][0]
  const reEndX = bezierCurve[3][0]

  const xMinus = reEndX - reBeginX

  const tMinus = t - reBeginX

  return tMinus / xMinus
}

/**
 * @description Get the bezier curve progress of t
 * @param {BezierCurve} bezierCurve Bezier curve
 * @param {number} t                Current frame t
 * @return {number} Progress of current frame
 */
function getBezierCurveTProgress([[, p0], [, p1], [, p2], [, p3]]: BezierCurve, t: number): number {
  const tMinus = 1 - t

  const result1 = p0 * Math.pow(tMinus, 3)

  const result2 = 3 * p1 * t * Math.pow(tMinus, 2)

  const result3 = 3 * p2 * Math.pow(t, 2) * tMinus

  const result4 = p3 * Math.pow(t, 3)

  return 1 - (result1 + result2 + result3 + result4)
}

/**
 * @description Get frame progress at time t
 * @param {TransitionCurve} transitionCurve Transition bezier curve
 * @param {number} t                        Current frame t
 * @return {number} Progress of frame
 */
function getFrameProgressByT(transitionCurve: TransitionCurve, t: number): number {
  const bezierCurve = getBezierCurveByT(transitionCurve, t)

  const relativeT = getBezierCurveRelativeT(bezierCurve, t)

  return getBezierCurveTProgress(bezierCurve, relativeT)
}

/**
 * @description Get frame state progress by curve
 * @param {TransitionCurve|string} curve Transition curve or curve name extended
 * @param {number} frameNum              Frame number
 * @return {number[]} Frame state progress
 */
export function getFrameStateProgressByCurve(
  curve: TransitionCurve | string,
  frameNum: number
): number[] {
  let targetCurve: TransitionCurve

  if (typeof curve === 'string') {
    targetCurve = curves.get(curve)!
  } else {
    targetCurve = curve
  }

  const tGap = 1 / (frameNum - 1)
  const tState = new Array(frameNum).fill(0).map((_, i) => i * tGap)

  return tState.map(t => getFrameProgressByT(targetCurve, t))
}

/**
 * @description Extend curves (add new transition curve into curves)
 * @param {string} curveName      Curve name
 * @param {TransitionCurve} curve Transition curve
 * @return {boolean} Result
 */
export function extendCurves(curveName: string, transitionCurve: TransitionCurve): boolean {
  if (!curveName || !transitionCurve) {
    console.error('InjectNewCurve: Missing Parameters!')

    return false
  }

  curves.set(curveName, transitionCurve)

  return true
}

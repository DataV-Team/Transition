export type TPoint = [number, number]
export type TCurveSegment = TPoint[]
export type TCurve = TCurveSegment[]

export const curves = new Map<string, TCurve>([])

/**
 * @description Get the corresponding segment-curve according by t
 * @param {TCurve} bezierCurve Easing bezier curve
 * @param {Number} t           Current frame t
 * @return {TCurveSegment} Segment curve
 */
type TGetBezierCurveSegmentByT = (bezierCurve: TCurve, t: number) => TCurveSegment

const getBezierCurveSegmentByT: TGetBezierCurveSegmentByT = (bezierCurve, t) => {
  const lastIndex = bezierCurve.length - 1

  let begin!: TCurveSegment, end!: TCurveSegment

  for (let i = 0, segmentNum = bezierCurve.length; i < segmentNum; i++) {
    if (i === lastIndex) continue

    const segment = bezierCurve[i]

    begin = segment
    end = bezierCurve[i + 1]

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
 * @description Get local t based on relative t and segment-curve
 * @param {TCurveSegment} segment Segment-curve
 * @param {Number} t              Current frame t
 * @return {Number} local t of segment-curve
 */
type TGetBezierCurvePointTByRelativeT = (segment: TCurveSegment, t: number) => number

const getBezierCurvePointTByRelativeT: TGetBezierCurvePointTByRelativeT = (segment, t) => {
  const reBeginX = segment[0][0]
  const reEndX = segment[3][0]

  const xMinus = reEndX - reBeginX

  const tMinus = t - reBeginX

  return tMinus / xMinus
}

/**
 * @description Get the segment-curve progress of t
 * @param {Array} segment Segment-curve
 * @param {Number} t      Current frame t
 * @return {Number} Progress of current frame
 */
type TGetCurveSegmentTState = (segment: TCurveSegment, t: number) => number

const getCurveSegmentTState: TGetCurveSegmentTState = ([[, p0], [, p1], [, p2], [, p3]], t) => {
  const { pow } = Math

  const tMinus = 1 - t

  const result1 = p0 * pow(tMinus, 3)

  const result2 = 3 * p1 * t * pow(tMinus, 2)

  const result3 = 3 * p2 * pow(t, 2) * tMinus

  const result4 = p3 * pow(t, 3)

  return 1 - (result1 + result2 + result3 + result4)
}

/**
 * @description Get frame progress at time t
 * @param {TCurve} bezierCurve Transition bezier curve
 * @param {Number} t           Current frame t
 * @return {Number} Progress of frame
 */
type TGetFrameStateByT = (bezierCurve: TCurve, t: number) => number

const getFrameStateByT: TGetFrameStateByT = (bezierCurve, t) => {
  const segment = getBezierCurveSegmentByT(bezierCurve, t)

  const bezierCurvePointT = getBezierCurvePointTByRelativeT(segment, t)

  return getCurveSegmentTState(segment, bezierCurvePointT)
}

/**
 * @description Get frame state progress by curve
 * @param {String|TCurve} curve Curve name or easing curve data
 * @param {Number} frameNum      Frame number
 * @return {Number[]} Frame state progress
 */
type TGetFrameStateProgressByCurve = (curve: string|TCurve, frameNum: number) => number[]

export const getFrameStateProgressByCurve: TGetFrameStateProgressByCurve = (curve, frameNum) => {
  let targetCurve: TCurve

  if (typeof curve === 'string') {
    targetCurve = curves.get(curve) as TCurve
  } else {
    targetCurve = curve
  }

  const tGap = 1 / (frameNum - 1)
  const tState = new Array(frameNum).fill(0).map((t, i) => i * tGap)

  return tState.map(t => getFrameStateByT(targetCurve, t))
}

/**
 * @description Inject new curve into curves as config
 * @param {String} curveName The key of curve
 * @param {TCurve} curve     Bezier curve data
 * @return {Boolean} Result
 */
type TInjectNewCurve = (curveName: string, curve: TCurve) => boolean

export const injectNewCurve: TInjectNewCurve = (curveName, curve) => {
  if (!curveName || !curve) {
    console.error('InjectNewCurve Missing Parameters!')

    return false
  }

  curves.set(curveName, curve)

  return true
}

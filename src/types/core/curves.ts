export type Point = [number, number]

// [main point, last control point, next control point]
export type TransitionCurveSegment = [Point] | [Point, Point, Point]

export type TransitionCurve = TransitionCurveSegment[]

// [start point, control point1, control point2, end point]
export type BezierCurve = [Point, Point, Point, Point]

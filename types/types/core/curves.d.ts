export declare type Point = [number, number];
export declare type TransitionCurveSegment = [Point] | [Point, Point, Point];
export declare type TransitionCurve = TransitionCurveSegment[];
export declare type BezierCurve = [Point, Point, Point, Point];

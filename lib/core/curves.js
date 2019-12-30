"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.curves = new Map([]);
var getBezierCurveSegmentByT = function (bezierCurve, t) {
    var lastIndex = bezierCurve.length - 1;
    var begin, end;
    for (var i = 0, segmentNum = bezierCurve.length; i < segmentNum; i++) {
        if (i === lastIndex)
            continue;
        var segment = bezierCurve[i];
        begin = segment;
        end = bezierCurve[i + 1];
        var currentMainPointX = begin[0][0];
        var nextMainPointX = end[0][0];
        if (t >= currentMainPointX && t < nextMainPointX)
            break;
    }
    var p0 = begin[0];
    var p1 = begin[2] || begin[0];
    var p2 = end[1] || end[0];
    var p3 = end[0];
    return [p0, p1, p2, p3];
};
var getBezierCurvePointTByRelativeT = function (segment, t) {
    var reBeginX = segment[0][0];
    var reEndX = segment[3][0];
    var xMinus = reEndX - reBeginX;
    var tMinus = t - reBeginX;
    return tMinus / xMinus;
};
var getCurveSegmentTState = function (_a, t) {
    var _b = _a[0], p0 = _b[1], _c = _a[1], p1 = _c[1], _d = _a[2], p2 = _d[1], _e = _a[3], p3 = _e[1];
    var pow = Math.pow;
    var tMinus = 1 - t;
    var result1 = p0 * pow(tMinus, 3);
    var result2 = 3 * p1 * t * pow(tMinus, 2);
    var result3 = 3 * p2 * pow(t, 2) * tMinus;
    var result4 = p3 * pow(t, 3);
    return 1 - (result1 + result2 + result3 + result4);
};
var getFrameStateByT = function (bezierCurve, t) {
    var segment = getBezierCurveSegmentByT(bezierCurve, t);
    var bezierCurvePointT = getBezierCurvePointTByRelativeT(segment, t);
    return getCurveSegmentTState(segment, bezierCurvePointT);
};
exports.getFrameStateProgressByCurve = function (curve, frameNum) {
    var targetCurve;
    if (typeof curve === 'string') {
        targetCurve = exports.curves.get(curve);
    }
    else {
        targetCurve = curve;
    }
    var tGap = 1 / (frameNum - 1);
    var tState = new Array(frameNum).fill(0).map(function (t, i) { return i * tGap; });
    return tState.map(function (t) { return getFrameStateByT(targetCurve, t); });
};
exports.injectNewCurve = function (curveName, curve) {
    if (!curveName || !curve) {
        console.error('InjectNewCurve Missing Parameters!');
        return false;
    }
    exports.curves.set(curveName, curve);
    return true;
};

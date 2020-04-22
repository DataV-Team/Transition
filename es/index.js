import _typeof from '@babel/runtime/helpers/esm/typeof';

var curves = new Map([]);

var getBezierCurveSegmentByT = function getBezierCurveSegmentByT(bezierCurve, t) {
  var lastIndex = bezierCurve.length - 1;
  var begin, end;

  for (var i = 0, segmentNum = bezierCurve.length; i < segmentNum; i++) {
    if (i === lastIndex) continue;
    var segment = bezierCurve[i];
    begin = segment;
    end = bezierCurve[i + 1];
    var currentMainPointX = begin[0][0];
    var nextMainPointX = end[0][0];
    if (t >= currentMainPointX && t < nextMainPointX) break;
  }

  var p0 = begin[0];
  var p1 = begin[2] || begin[0];
  var p2 = end[1] || end[0];
  var p3 = end[0];
  return [p0, p1, p2, p3];
};

var getBezierCurvePointTByRelativeT = function getBezierCurvePointTByRelativeT(segment, t) {
  var reBeginX = segment[0][0];
  var reEndX = segment[3][0];
  var xMinus = reEndX - reBeginX;
  var tMinus = t - reBeginX;
  return tMinus / xMinus;
};

var getCurveSegmentTState = function getCurveSegmentTState(_a, t) {
  var _b = _a[0],
      p0 = _b[1],
      _c = _a[1],
      p1 = _c[1],
      _d = _a[2],
      p2 = _d[1],
      _e = _a[3],
      p3 = _e[1];
  var pow = Math.pow;
  var tMinus = 1 - t;
  var result1 = p0 * pow(tMinus, 3);
  var result2 = 3 * p1 * t * pow(tMinus, 2);
  var result3 = 3 * p2 * pow(t, 2) * tMinus;
  var result4 = p3 * pow(t, 3);
  return 1 - (result1 + result2 + result3 + result4);
};

var getFrameStateByT = function getFrameStateByT(bezierCurve, t) {
  var segment = getBezierCurveSegmentByT(bezierCurve, t);
  var bezierCurvePointT = getBezierCurvePointTByRelativeT(segment, t);
  return getCurveSegmentTState(segment, bezierCurvePointT);
};

var getFrameStateProgressByCurve = function getFrameStateProgressByCurve(curve, frameNum) {
  var targetCurve;

  if (typeof curve === 'string') {
    targetCurve = curves.get(curve);
  } else {
    targetCurve = curve;
  }

  var tGap = 1 / (frameNum - 1);
  var tState = new Array(frameNum).fill(0).map(function (t, i) {
    return i * tGap;
  });
  return tState.map(function (t) {
    return getFrameStateByT(targetCurve, t);
  });
};
var injectNewCurve = function injectNewCurve(curveName, curve) {
  if (!curveName || !curve) {
    console.error('InjectNewCurve Missing Parameters!');
    return false;
  }

  curves.set(curveName, curve);
  return true;
};

/**
 * @description Linear
 */
var linear = function linear(t, b, c, d) {
  return c * t / d + b;
};
/**
 * @description Sine
 */

var easeInSine = function easeInSine(t, b, c, d) {
  return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
};
var easeOutSine = function easeOutSine(t, b, c, d) {
  return c * Math.sin(t / d * (Math.PI / 2)) + b;
};
var easeInOutSine = function easeInOutSine(t, b, c, d) {
  return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
};
/**
 * @description Quad
 */

var easeInQuad = function easeInQuad(t, b, c, d) {
  return c * (t /= d) * t + b;
};
var easeOutQuad = function easeOutQuad(t, b, c, d) {
  return -c * (t /= d) * (t - 2) + b;
};
var easeInOutQuad = function easeInOutQuad(t, b, c, d) {
  if ((t /= d / 2) < 1) return c / 2 * t * t + b;
  return -c / 2 * (--t * (t - 2) - 1) + b;
};
/**
 * @description Cubic
 */

var easeInCubic = function easeInCubic(t, b, c, d) {
  return c * (t /= d) * t * t + b;
};
var easeOutCubic = function easeOutCubic(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t + 1) + b;
};
var easeInOutCubic = function easeInOutCubic(t, b, c, d) {
  if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
  return c / 2 * ((t -= 2) * t * t + 2) + b;
};
/**
 * @description Quart
 */

var easeInQuart = function easeInQuart(t, b, c, d) {
  return c * (t /= d) * t * t * t + b;
};
var easeOutQuart = function easeOutQuart(t, b, c, d) {
  return -c * ((t = t / d - 1) * t * t * t - 1) + b;
};
var easeInOutQuart = function easeInOutQuart(t, b, c, d) {
  if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
  return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
};
/**
 * @description Quint
 */

var easeInQuint = function easeInQuint(t, b, c, d) {
  return c * (t /= d) * t * t * t * t + b;
};
var easeOutQuint = function easeOutQuint(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
};
var easeInOutQuint = function easeInOutQuint(t, b, c, d) {
  if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
  return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
};
/**
 * @description Back
 */

var easeInBack = function easeInBack(t, b, c, d) {
  var s = 1.70158;
  return c * (t /= d) * t * ((s + 1) * t - s) + b;
};
var easeOutBack = function easeOutBack(t, b, c, d) {
  var s = 1.70158;
  return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
};
var easeInOutBack = function easeInOutBack(t, b, c, d) {
  var s = 1.70158;
  if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
  return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
};
/**
 * @description Elastic
 */

var easeInElastic = function easeInElastic(t, b, c, d) {
  if (t === 0) return b;
  if ((t /= d) === 1) return b + c;
  return -(c * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - d * 0.3 / 4) * (2 * Math.PI) / (d * 0.3))) + b;
};
var easeOutElastic = function easeOutElastic(t, b, c, d) {
  if (t === 0) return b;
  if ((t /= d) === 1) return b + c;
  return c * Math.pow(2, -10 * t) * Math.sin((t * d - d * 0.3 / 4) * (2 * Math.PI) / (d * 0.3)) + c + b;
};
var easeInOutElastic = function easeInOutElastic(t, b, c, d) {
  if (t === 0) return b;
  if ((t /= d / 2) === 2) return b + c;
  var p = d * (0.3 * 1.5);
  var s = p / 4;
  if (t < 1) return -0.5 * (c * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
  return c * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
};
/**
 * @description Bounce
 */

var easeOutBounce = function easeOutBounce(t, b, c, d) {
  if ((t /= d) < 1 / 2.75) {
    return c * (7.5625 * t * t) + b;
  } else if (t < 2 / 2.75) {
    return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
  } else if (t < 2.5 / 2.75) {
    return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
  }

  return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
};
var easeInBounce = function easeInBounce(t, b, c, d) {
  return c - easeOutBounce(d - t, 0, c, d) + b;
};
var easeInOutBounce = function easeInOutBounce(t, b, c, d) {
  if (t < d / 2) return easeInBounce(t * 2, 0, c, d) * 0.5 + b;
  return easeOutBounce(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
};
var tweens = new Map([['linear', linear], ['easeInSine', easeInSine], ['easeOutSine', easeOutSine], ['easeInOutSine', easeInOutSine], ['easeInQuad', easeInQuad], ['easeOutQuad', easeOutQuad], ['easeInOutQuad', easeInOutQuad], ['easeInCubic', easeInCubic], ['easeOutCubic', easeOutCubic], ['easeInOutCubic', easeInOutCubic], ['easeInQuart', easeInQuart], ['easeOutQuart', easeOutQuart], ['easeInOutQuart', easeInOutQuart], ['easeInQuint', easeInQuint], ['easeOutQuint', easeOutQuint], ['easeInOutQuint', easeInOutQuint], ['easeInBack', easeInBack], ['easeOutBack', easeOutBack], ['easeInOutBack', easeInOutBack], ['easeInElastic', easeInElastic], ['easeOutElastic', easeOutElastic], ['easeInOutElastic', easeInOutElastic], ['easeInBounce', easeInBounce], ['easeOutBounce', easeOutBounce], ['easeInOutBounce', easeInOutBounce]]);

var getFrameStateProgress = function getFrameStateProgress(dynamic, frameNum, defaultDynamic) {
  var validDynamic = true;
  if (typeof dynamic !== 'string' && !(dynamic instanceof Array)) validDynamic = false;
  if (typeof dynamic === 'string' && !curves.get(dynamic) && !tweens.get(dynamic)) validDynamic = false;
  if (!validDynamic) dynamic = defaultDynamic;
  var calculator = tweens.get(dynamic) || getFrameStateProgressByCurve;
  return calculator(dynamic, frameNum);
};

var getType = function getType(target) {
  return Object.prototype.toString.call(target).replace(/\[object |\]/g, '').toLowerCase();
};

var checkParams = function checkParams(dynamic, startState, endState, frameNum) {
  var _a = [_typeof(startState), _typeof(endState)],
      starStateType = _a[0],
      endStateType = _a[1];

  if (typeof dynamic === 'undefined' || starStateType === 'undefined' || endStateType === 'undefined') {
    console.error('transition: Missing Parameters!');
    return false;
  }

  if (typeof frameNum !== 'number') {
    console.error('transition: frameNum should be of type number!');
    return false;
  }

  if (starStateType !== _typeof(endStateType)) {
    console.error('transition: Inconsistent Status Types!');
    return false;
  }

  if (typeof dynamic === 'string' && !curves.has(dynamic) && !tweens.has(dynamic) || !(dynamic instanceof Array)) {
    console.warn('transition: Transition dynamic curve not found, default dynamic curve will be used!');
  }

  return true;
};

var getNumberTransitionState = function getNumberTransitionState(startState, endState, frameStateProgress) {
  var minus = endState - startState;
  return frameStateProgress.map(function (s) {
    return startState + minus * s;
  });
};

var getArrayTransitionState = function getArrayTransitionState(startState, endState, frameStateProgress) {
  var minus = endState.map(function (v, i) {
    if (typeof v !== 'number') return false;
    return v - startState[i];
  });
  return frameStateProgress.map(function (s) {
    return minus.map(function (v, i) {
      if (v === false) return endState[i];
      return startState[i] + v * s;
    });
  });
};

var getObjectTransitionState = function getObjectTransitionState(startState, endState, frameStateProgress) {
  var keys = Object.keys(endState);
  var startValue = keys.map(function (k) {
    return startState[k];
  });
  var endValue = keys.map(function (k) {
    return endState[k];
  });
  var arrayState = getArrayTransitionState(startValue, endValue, frameStateProgress);
  return arrayState.map(function (item) {
    var frameData = {};
    item.forEach(function (v, i) {
      return frameData[keys[i]] = v;
    });
    return frameData;
  });
};

var getTransitionState = function getTransitionState(startState, endState, frameStateProgress) {
  var stateType = getType(startState);
  if (stateType === 'number') return getNumberTransitionState(startState, endState, frameStateProgress);
  if (stateType === 'array') return getArrayTransitionState(startState, endState, frameStateProgress);
  if (stateType === 'object') return getObjectTransitionState(startState, endState, frameStateProgress);
  return frameStateProgress.map(function () {
    return endState;
  });
};

var recursionTransitionState = function recursionTransitionState(startState, endState, frameStateProgress) {
  var state = getTransitionState(startState, endState, frameStateProgress);

  var _loop_1 = function _loop_1(key) {
    var bTemp = startState[key];
    var eTemp = endState[key];
    if (_typeof(eTemp) !== 'object') return "continue";
    var data = recursionTransitionState(bTemp, eTemp, frameStateProgress);
    state.forEach(function (fs, i) {
      return fs[key] = data[i];
    });
  };

  for (var key in endState) {
    _loop_1(key);
  }

  return state;
};

var transition = function transition(dynamic, startState, endState, frameNum, deep) {
  if (frameNum === void 0) {
    frameNum = 30;
  }

  if (deep === void 0) {
    deep = false;
  }

  if (!checkParams(dynamic, startState, endState, frameNum)) return [endState];
  var stateType = getType(startState);
  if (stateType !== 'number' && stateType !== 'array' && stateType !== 'object') return new Array(frameNum).fill(endState);

  try {
    var frameStateProgress = getFrameStateProgress(dynamic, frameNum, 'linear'); // If the recursion mode is not enabled or the state type is Number, the shallow state calculation is performed directly.

    if (!deep || typeof endState === 'number') return getTransitionState(startState, endState, frameStateProgress);
    return recursionTransitionState(startState, endState, frameStateProgress);
  } catch (_a) {
    console.warn('Transition parameter may be abnormal!');
    return [endState];
  }
};

export { injectNewCurve, transition };

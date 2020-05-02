(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
typeof define === 'function' && define.amd ? define(['exports'], factory) :
(global = global || self, factory(global.Transition = {}));
}(this, (function (exports) { 'use strict';

var curves = new Map([]);
/**
 * @description Get bezier curve by t
 * @param {TransitionCurve} transitionCurve transition curve
 * @param {number} t                        Current frame t
 * @return {BezierCurve} Bezier Curve
 */

function getBezierCurveByT(transitionCurve, t) {
  var curveNum = transitionCurve.length;
  var lastIndex = curveNum - 1;
  var begin;
  var end;

  for (var i = 0; i < curveNum; i++) {
    if (i === lastIndex) continue;
    var segment = transitionCurve[i];
    begin = segment;
    end = transitionCurve[i + 1];
    var currentMainPointX = begin[0][0];
    var nextMainPointX = end[0][0];
    if (t >= currentMainPointX && t < nextMainPointX) break;
  }

  var p0 = begin[0];
  var p1 = begin[2] || begin[0];
  var p2 = end[1] || end[0];
  var p3 = end[0];
  return [p0, p1, p2, p3];
}
/**
 * @description Get bezier curve relative t
 * @param {BezierCurve} bezierCurve Bezier Curve
 * @param {number} t                Current frame t
 * @return {number} Relative t of bezier curve
 */


function getBezierCurveRelativeT(bezierCurve, t) {
  var reBeginX = bezierCurve[0][0];
  var reEndX = bezierCurve[3][0];
  var xMinus = reEndX - reBeginX;
  var tMinus = t - reBeginX;
  return tMinus / xMinus;
}
/**
 * @description Get the bezier curve progress of t
 * @param {BezierCurve} bezierCurve Bezier curve
 * @param {number} t                Current frame t
 * @return {number} Progress of current frame
 */


function getBezierCurveTProgress(_a, t) {
  var _b = _a[0],
      p0 = _b[1],
      _c = _a[1],
      p1 = _c[1],
      _d = _a[2],
      p2 = _d[1],
      _e = _a[3],
      p3 = _e[1];
  var tMinus = 1 - t;
  var result1 = p0 * Math.pow(tMinus, 3);
  var result2 = 3 * p1 * t * Math.pow(tMinus, 2);
  var result3 = 3 * p2 * Math.pow(t, 2) * tMinus;
  var result4 = p3 * Math.pow(t, 3);
  return 1 - (result1 + result2 + result3 + result4);
}
/**
 * @description Get frame progress at time t
 * @param {TransitionCurve} transitionCurve Transition bezier curve
 * @param {number} t                        Current frame t
 * @return {number} Progress of frame
 */


function getFrameProgressByT(transitionCurve, t) {
  var bezierCurve = getBezierCurveByT(transitionCurve, t);
  var relativeT = getBezierCurveRelativeT(bezierCurve, t);
  return getBezierCurveTProgress(bezierCurve, relativeT);
}
/**
 * @description Get frame state progress by curve
 * @param {TransitionCurve|string} curve Transition curve or curve name extended
 * @param {number} frameNum              Frame number
 * @return {number[]} Frame state progress
 */


function getFrameStateProgressByCurve(curve, frameNum) {
  var targetCurve;

  if (typeof curve === 'string') {
    targetCurve = curves.get(curve);
  } else {
    targetCurve = curve;
  }

  var tGap = 1 / (frameNum - 1);
  var tState = new Array(frameNum).fill(0).map(function (_, i) {
    return i * tGap;
  });
  return tState.map(function (t) {
    return getFrameProgressByT(targetCurve, t);
  });
}
/**
 * @description Extend curves (add new transition curve into curves)
 * @param {string} curveName      Curve name
 * @param {TransitionCurve} curve Transition curve
 * @return {boolean} Result
 */

function extendCurves(curveName, transitionCurve) {
  if (!curveName || !transitionCurve) {
    console.error('InjectNewCurve: Missing Parameters!');
    return false;
  }

  curves.set(curveName, transitionCurve);
  return true;
}

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
/**
 * @description Get frame state progress by tween
 * @param {TweenName} tweenName Tween name
 * @param {number} frameNum     Frame number
 * @return {number[]} Frame state progress
 */

function getFrameStateProgressByTween(tweenName, frameNum) {
  if (frameNum === void 0) {
    frameNum = 30;
  }

  var _a = [0, 1],
      startState = _a[0],
      changeValue = _a[1];
  var tGap = frameNum / (frameNum - 1);
  var tweenFun = tweens.get(tweenName);
  return new Array(frameNum).fill(0).map(function (_, i) {
    return tweenFun(i * tGap, startState, changeValue, frameNum);
  });
}

function easeCurveValidator(easeCurve) {
  var isArray = easeCurve instanceof Array;
  var isCurve = curves.has(easeCurve);
  var isTween = tweens.has(easeCurve);
  if (isArray) return 'transitionCurve';
  if (isCurve) return 'transitionCurveName';
  if (isTween) return 'tween';
  throw new Error("Transition: Invalid ease curve of " + easeCurve);
}
function getFrameStateProgress(easeCurve, frameNum) {
  if (frameNum === void 0) {
    frameNum = 30;
  }

  var easeCurveType = easeCurveValidator(easeCurve);
  var calculator = easeCurveType === 'tween' ? getFrameStateProgressByTween : getFrameStateProgressByCurve;
  return calculator(easeCurve, frameNum);
}

function recursiveRender(render, state, endCallback, frameIndex, lastIndex) {
  if (frameIndex === void 0) {
    frameIndex = 0;
  }

  if (lastIndex === void 0) {
    lastIndex = state.length - 1;
  }

  if (frameIndex > lastIndex) return endCallback();
  var currentState = state[frameIndex];
  requestAnimationFrame(function () {
    var next = render(currentState, frameIndex);
    if (next === false) return endCallback();
    recursiveRender(render, state, endCallback, ++frameIndex, lastIndex);
  });
}

function createAnimator(render) {
  return function (state) {
    return new Promise(function (resolve) {
      recursiveRender(render, state, resolve);
    });
  };
}

function getType(target) {
  return Object.prototype.toString.call(target).replace(/\[object |\]/g, '').toLowerCase();
} // eslint-disable-next-line


function isNumber(target) {
  return Number.isFinite(target);
} // eslint-disable-next-line


function recursiveAble(target) {
  var type = getType(target);
  return type === 'array' || type === 'object';
} // eslint-disable-next-line


function transitionAble(startState) {
  var stateType = getType(startState);
  return ['number', 'array', 'object'].includes(stateType);
} // eslint-disable-next-line


function asNumber(target) {
  return target;
}

function createTargetArray(target, num) {
  return new Array(num).fill(0).map(function (_) {
    return target;
  });
} // eslint-disable-next-line


function updateTargetValues(target, values, key) {
  // eslint-disable-next-line
  target.forEach(function (_, i) {
    return _[key] = values[i];
  });
  return target;
}

function createInitState(isArray) {
  return isArray ? [] : {};
}

function getTransitionState(start, end, frameStateProgress) {
  var minus = end - start;
  return frameStateProgress.map(function (s) {
    return start + minus * s;
  });
}

function validator(easeCurve, startState, endState, frameNum) {
  var argTypes = [easeCurve, startState, endState, frameNum].map(getType);
  if (argTypes.find(function (_) {
    return _ === 'undefined';
  })) throw new Error('transition: Missing Parameters!');
  if (argTypes[1] !== argTypes[2]) throw new Error('transition: The start state type and the end state type are inconsistent!');
  if (argTypes[3] !== 'number' || frameNum <= 0) throw new Error("Transition: frameNum should be a number and greater than 1");
  easeCurveValidator(easeCurve);
  return true;
}

function recursiveTransition(startState, endState, frameStateProgress, deep) {
  var stateType = getType(startState);
  var length = frameStateProgress.length;
  if (stateType === 'number') return getTransitionState(asNumber(startState), asNumber(endState), frameStateProgress);
  var isArray = stateType === 'array';
  var state = new Array(length).fill(isArray).map(createInitState);

  for (var key in endState) {
    var start = startState[key];
    var end = endState[key]; // eslint-disable-next-line

    var keyState = [];

    if (isNumber(start) && isNumber(end)) {
      keyState = getTransitionState(asNumber(start), asNumber(end), frameStateProgress);
    } else if (recursiveAble(start) && recursiveAble(end) && deep) {
      keyState = recursiveTransition(start, end, frameStateProgress, deep);
    } else {
      keyState = createTargetArray(end, length);
    }

    state = updateTargetValues(state, keyState, key);
  }

  return state;
}
/**
 * @description Get the N-frame animation state by the start and end state
 *              of the animation and the ease curve
 * @param {EaseCurve} easeCurve Ease curve name or data
 * @param {Any} startState      Animation start state
 * @param {Any} endState        Animation end state
 * @param {Number} frameNum     Number of Animation frames
 * @param {Boolean} deep        Whether to use recursive mode
 * @return {Array} State of each frame of the animation
 */


function transition(easeCurve, startState, endState, frameNum, deep) {
  if (frameNum === void 0) {
    frameNum = 30;
  }

  if (deep === void 0) {
    deep = false;
  }

  validator(easeCurve, startState, endState, frameNum);

  if (!transitionAble(startState)) {
    console.warn('Transition: Only supports array number and object types');
    return [startState, endState];
  }

  try {
    var frameStateProgress = getFrameStateProgress(easeCurve, frameNum);
    return recursiveTransition(startState, endState, frameStateProgress, deep);
  } catch (_a) {
    console.warn('Transition: parameter may be abnormal!');
    return [endState];
  }
}

exports.createAnimator = createAnimator;
exports.default = transition;
exports.extendCurves = extendCurves;
exports.transition = transition;

Object.defineProperty(exports, '__esModule', { value: true });

})));

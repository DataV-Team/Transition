(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var transition = require('../lib/index')

window.transition = transition
},{"../lib/index":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.easeInOutBounce = exports.easeOutBounce = exports.easeInBounce = exports.easeInOutElastic = exports.easeOutElastic = exports.easeInElastic = exports.easeInOutBack = exports.easeOutBack = exports.easeInBack = exports.easeInOutQuint = exports.easeOutQuint = exports.easeInQuint = exports.easeInOutQuart = exports.easeOutQuart = exports.easeInQuart = exports.easeInOutCubic = exports.easeOutCubic = exports.easeInCubic = exports.easeInOutQuad = exports.easeOutQuad = exports.easeInQuad = exports.easeInOutSine = exports.easeOutSine = exports.easeInSine = exports.linear = void 0;
var linear = [[[0, 1], '', [0.33, 0.67]], [[1, 0], [0.67, 0.33]]];
/**
 * @description Sine
 */

exports.linear = linear;
var easeInSine = [[[0, 1]], [[0.538, 0.564], [0.169, 0.912], [0.880, 0.196]], [[1, 0]]];
exports.easeInSine = easeInSine;
var easeOutSine = [[[0, 1]], [[0.444, 0.448], [0.169, 0.736], [0.718, 0.16]], [[1, 0]]];
exports.easeOutSine = easeOutSine;
var easeInOutSine = [[[0, 1]], [[0.5, 0.5], [0.2, 1], [0.8, 0]], [[1, 0]]];
/**
 * @description Quad
 */

exports.easeInOutSine = easeInOutSine;
var easeInQuad = [[[0, 1]], [[0.550, 0.584], [0.231, 0.904], [0.868, 0.264]], [[1, 0]]];
exports.easeInQuad = easeInQuad;
var easeOutQuad = [[[0, 1]], [[0.413, 0.428], [0.065, 0.816], [0.760, 0.04]], [[1, 0]]];
exports.easeOutQuad = easeOutQuad;
var easeInOutQuad = [[[0, 1]], [[0.5, 0.5], [0.3, 0.9], [0.7, 0.1]], [[1, 0]]];
/**
 * @description Cubic
 */

exports.easeInOutQuad = easeInOutQuad;
var easeInCubic = [[[0, 1]], [[0.679, 0.688], [0.366, 0.992], [0.992, 0.384]], [[1, 0]]];
exports.easeInCubic = easeInCubic;
var easeOutCubic = [[[0, 1]], [[0.321, 0.312], [0.008, 0.616], [0.634, 0.008]], [[1, 0]]];
exports.easeOutCubic = easeOutCubic;
var easeInOutCubic = [[[0, 1]], [[0.5, 0.5], [0.3, 1], [0.7, 0]], [[1, 0]]];
/**
 * @description Quart
 */

exports.easeInOutCubic = easeInOutCubic;
var easeInQuart = [[[0, 1]], [[0.812, 0.74], [0.611, 0.988], [1.013, 0.492]], [[1, 0]]];
exports.easeInQuart = easeInQuart;
var easeOutQuart = [[[0, 1]], [[0.152, 0.244], [0.001, 0.448], [0.285, -0.02]], [[1, 0]]];
exports.easeOutQuart = easeOutQuart;
var easeInOutQuart = [[[0, 1]], [[0.5, 0.5], [0.4, 1], [0.6, 0]], [[1, 0]]];
/**
 * @description Quint
 */

exports.easeInOutQuart = easeInOutQuart;
var easeInQuint = [[[0, 1]], [[0.857, 0.856], [0.714, 1], [1, 0.712]], [[1, 0]]];
exports.easeInQuint = easeInQuint;
var easeOutQuint = [[[0, 1]], [[0.108, 0.2], [0.001, 0.4], [0.214, -0.012]], [[1, 0]]];
exports.easeOutQuint = easeOutQuint;
var easeInOutQuint = [[[0, 1]], [[0.5, 0.5], [0.5, 1], [0.5, 0]], [[1, 0]]];
/**
 * @description Back
 */

exports.easeInOutQuint = easeInOutQuint;
var easeInBack = [[[0, 1]], [[0.667, 0.896], [0.380, 1.184], [0.955, 0.616]], [[1, 0]]];
exports.easeInBack = easeInBack;
var easeOutBack = [[[0, 1]], [[0.335, 0.028], [0.061, 0.22], [0.631, -0.18]], [[1, 0]]];
exports.easeOutBack = easeOutBack;
var easeInOutBack = [[[0, 1]], [[0.5, 0.5], [0.4, 1.4], [0.6, -0.4]], [[1, 0]]];
/**
 * @description Elastic
 */

exports.easeInOutBack = easeInOutBack;
var easeInElastic = [[[0, 1]], [[0.474, 0.964], [0.382, 0.988], [0.557, 0.952]], [[0.619, 1.076], [0.565, 1.088], [0.669, 1.08]], [[0.770, 0.916], [0.712, 0.924], [0.847, 0.904]], [[0.911, 1.304], [0.872, 1.316], [0.961, 1.34]], [[1, 0]]];
exports.easeInElastic = easeInElastic;
var easeOutElastic = [[[0, 1]], [[0.073, -0.32], [0.034, -0.328], [0.104, -0.344]], [[0.191, 0.092], [0.110, 0.06], [0.256, 0.08]], [[0.310, -0.076], [0.260, -0.068], [0.357, -0.076]], [[0.432, 0.032], [0.362, 0.028], [0.683, -0.004]], [[1, 0]]];
exports.easeOutElastic = easeOutElastic;
var easeInOutElastic = [[[0, 1]], [[0.210, 0.94], [0.167, 0.884], [0.252, 0.98]], [[0.299, 1.104], [0.256, 1.092], [0.347, 1.108]], [[0.5, 0.496], [0.451, 0.672], [0.548, 0.324]], [[0.696, -0.108], [0.652, -0.112], [0.741, -0.124]], [[0.805, 0.064], [0.756, 0.012], [0.866, 0.096]], [[1, 0]]];
/**
 * @description Bounce
 */

exports.easeInOutElastic = easeInOutElastic;
var easeInBounce = [[[0, 1]], [[0.148, 1], [0.075, 0.868], [0.193, 0.848]], [[0.326, 1], [0.276, 0.836], [0.405, 0.712]], [[0.600, 1], [0.511, 0.708], [0.671, 0.348]], [[1, 0]]];
exports.easeInBounce = easeInBounce;
var easeOutBounce = [[[0, 1]], [[0.357, 0.004], [0.270, 0.592], [0.376, 0.252]], [[0.604, -0.004], [0.548, 0.312], [0.669, 0.184]], [[0.820, 0], [0.749, 0.184], [0.905, 0.132]], [[1, 0]]];
exports.easeOutBounce = easeOutBounce;
var easeInOutBounce = [[[0, 1]], [[0.102, 1], [0.050, 0.864], [0.117, 0.86]], [[0.216, 0.996], [0.208, 0.844], [0.227, 0.808]], [[0.347, 0.996], [0.343, 0.8], [0.480, 0.292]], [[0.635, 0.004], [0.511, 0.676], [0.656, 0.208]], [[0.787, 0], [0.760, 0.2], [0.795, 0.144]], [[0.905, -0.004], [0.899, 0.164], [0.944, 0.144]], [[1, 0]]];
exports.easeInOutBounce = easeInOutBounce;

var _default = new Map([['linear', linear], ['easeInSine', easeInSine], ['easeOutSine', easeOutSine], ['easeInOutSine', easeInOutSine], ['easeInQuad', easeInQuad], ['easeOutQuad', easeOutQuad], ['easeInOutQuad', easeInOutQuad], ['easeInCubic', easeInCubic], ['easeOutCubic', easeOutCubic], ['easeInOutCubic', easeInOutCubic], ['easeInQuart', easeInQuart], ['easeOutQuart', easeOutQuart], ['easeInOutQuart', easeInOutQuart], ['easeInQuint', easeInQuint], ['easeOutQuint', easeOutQuint], ['easeInOutQuint', easeInOutQuint], ['easeInBack', easeInBack], ['easeOutBack', easeOutBack], ['easeInOutBack', easeInOutBack], ['easeInElastic', easeInElastic], ['easeOutElastic', easeOutElastic], ['easeInOutElastic', easeInOutElastic], ['easeInBounce', easeInBounce], ['easeOutBounce', easeOutBounce], ['easeInOutBounce', easeInOutBounce]]);

exports["default"] = _default;
},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transition = transition;
exports.injectNewCurve = injectNewCurve;
exports["default"] = void 0;

var _curves = _interopRequireDefault(require("./config/curves"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var defaultTransitionBC = 'linear';
/**
 * @description Get the N-frame animation state by the start and end state
 *              of the animation and the easing curve
 * @param {String|Array} tBC               Easing curve name or data
 * @param {Number|Array|Object} startState Animation start state
 * @param {Number|Array|Object} endState   Animation end state
 * @param {Number} frameNum                Number of Animation frames
 * @param {Boolean} deep                   Whether to use recursive mode
 * @return {Array|Boolean} State of each frame of the animation (Invalid input will return false)
 */

function transition(tBC) {
  var startState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var endState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var frameNum = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 30;
  var deep = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (!checkParams.apply(void 0, arguments)) return false;

  try {
    // Get the transition bezier curve
    var bezierCurve = getBezierCurve(tBC); // Get the progress of each frame state

    var frameStateProgress = getFrameStateProgress(bezierCurve, frameNum); // If the recursion mode is not enabled or the state type is Number, the shallow state calculation is performed directly.

    if (!deep || typeof endState === 'number') return getTransitionState(startState, endState, frameStateProgress);
    return recursionTransitionState(startState, endState, frameStateProgress);
  } catch (_unused) {
    console.warn('Transition parameter may be abnormal!');
    return [endState];
  }
}
/**
 * @description Check if the parameters are legal
 * @param {String} tBC      Name of transition bezier curve
 * @param {Any} startState  Transition start state
 * @param {Any} endState    Transition end state
 * @param {Number} frameNum Number of transition frames
 * @return {Boolean} Is the parameter legal
 */


function checkParams(tBC) {
  var startState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var endState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var frameNum = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 30;

  if (!tBC || startState === false || endState === false || !frameNum) {
    console.error('transition: Missing Parameters!');
    return false;
  }

  if (_typeof(startState) !== _typeof(endState)) {
    console.error('transition: Inconsistent Status Types!');
    return false;
  }

  var stateType = _typeof(endState);

  if (stateType === 'string' || stateType === 'boolean' || !tBC.length) {
    console.error('transition: Unsupported Data Type of State!');
    return false;
  }

  if (!_curves["default"].has(tBC) && !(tBC instanceof Array)) {
    console.warn('transition: Transition curve not found, default curve will be used!');
  }

  return true;
}
/**
 * @description Get the transition bezier curve
 * @param {String} tBC Name of transition bezier curve
 * @return {Array} Bezier curve data
 */


function getBezierCurve(tBC) {
  var bezierCurve = '';

  if (_curves["default"].has(tBC)) {
    bezierCurve = _curves["default"].get(tBC);
  } else if (tBC instanceof Array) {
    bezierCurve = tBC;
  } else {
    bezierCurve = _curves["default"].get(defaultTransitionBC);
  }

  return bezierCurve;
}
/**
 * @description Get the progress of each frame state
 * @param {Array} bezierCurve Transition bezier curve
 * @param {Number} frameNum   Number of transition frames
 * @return {Array} Progress of each frame state
 */


function getFrameStateProgress(bezierCurve, frameNum) {
  var tMinus = 1 / (frameNum - 1);
  var tState = new Array(frameNum).fill(0).map(function (t, i) {
    return i * tMinus;
  });
  var frameState = tState.map(function (t) {
    return getFrameStateFromT(bezierCurve, t);
  });
  return frameState;
}
/**
 * @description Get the progress of the corresponding frame according to t
 * @param {Array} bezierCurve Transition bezier curve
 * @param {Number} t          Current frame t
 * @return {Number} Progress of current frame
 */


function getFrameStateFromT(bezierCurve, t) {
  var tBezierCurvePoint = getBezierCurvePointFromT(bezierCurve, t);
  var bezierCurvePointT = getBezierCurvePointTFromReT(tBezierCurvePoint, t);
  return getBezierCurveTState(tBezierCurvePoint, bezierCurvePointT);
}
/**
 * @description Get the corresponding sub-curve according to t
 * @param {Array} bezierCurve Transition bezier curve
 * @param {Number} t          Current frame t
 * @return {Array} Sub-curve of t
 */


function getBezierCurvePointFromT(bezierCurve, t) {
  var lastIndex = bezierCurve.length - 1;
  var begin = '',
      end = '';
  bezierCurve.findIndex(function (item, i) {
    if (i === lastIndex) return;
    begin = item;
    end = bezierCurve[i + 1];
    var currentMainPointX = begin[0][0];
    var nextMainPointX = end[0][0];
    return t >= currentMainPointX && t < nextMainPointX;
  });
  var p0 = begin[0];
  var p1 = begin[2] || begin[0];
  var p2 = end[1] || end[0];
  var p3 = end[0];
  return [p0, p1, p2, p3];
}
/**
 * @description Get local t based on t and sub-curve
 * @param {Array} bezierCurve Sub-curve
 * @param {Number} t          Current frame t
 * @return {Number} local t of sub-curve
 */


function getBezierCurvePointTFromReT(bezierCurve, t) {
  var reBeginX = bezierCurve[0][0];
  var reEndX = bezierCurve[3][0];
  var xMinus = reEndX - reBeginX;
  var tMinus = t - reBeginX;
  return tMinus / xMinus;
}
/**
 * @description Get the curve progress of t
 * @param {Array} bezierCurve Sub-curve
 * @param {Number} t          Current frame t
 * @return {Number} Progress of current frame
 */


function getBezierCurveTState(_ref, t) {
  var _ref2 = _slicedToArray(_ref, 4),
      _ref2$ = _slicedToArray(_ref2[0], 2),
      p0 = _ref2$[1],
      _ref2$2 = _slicedToArray(_ref2[1], 2),
      p1 = _ref2$2[1],
      _ref2$3 = _slicedToArray(_ref2[2], 2),
      p2 = _ref2$3[1],
      _ref2$4 = _slicedToArray(_ref2[3], 2),
      p3 = _ref2$4[1];

  var pow = Math.pow;
  var tMinus = 1 - t;
  var result1 = p0 * pow(tMinus, 3);
  var result2 = 3 * p1 * t * pow(tMinus, 2);
  var result3 = 3 * p2 * pow(t, 2) * tMinus;
  var result4 = p3 * pow(t, 3);
  return 1 - (result1 + result2 + result3 + result4);
}
/**
 * @description Get transition state according to frame progress
 * @param {Any} startState   Transition start state
 * @param {Any} endState     Transition end state
 * @param {Array} frameState Frame state progress
 * @return {Array} Transition frame state
 */


function getTransitionState(begin, end, frameState) {
  var stateType = 'object';
  if (typeof begin === 'number') stateType = 'number';
  if (begin instanceof Array) stateType = 'array';
  if (stateType === 'number') return getNumberTransitionState(begin, end, frameState);
  if (stateType === 'array') return getArrayTransitionState(begin, end, frameState);
  if (stateType === 'object') return getObjectTransitionState(begin, end, frameState);
  return frameState.map(function (t) {
    return end;
  });
}
/**
 * @description Get the transition data of the number type
 * @param {Number} startState Transition start state
 * @param {Number} endState   Transition end state
 * @param {Array} frameState  Frame state progress
 * @return {Array} Transition frame state
 */


function getNumberTransitionState(begin, end, frameState) {
  var minus = end - begin;
  return frameState.map(function (s) {
    return begin + minus * s;
  });
}
/**
 * @description Get the transition data of the array type
 * @param {Array} startState Transition start state
 * @param {Array} endState   Transition end state
 * @param {Array} frameState Frame state progress
 * @return {Array} Transition frame state
 */


function getArrayTransitionState(begin, end, frameState) {
  var minus = end.map(function (v, i) {
    if (typeof v !== 'number') return false;
    return v - begin[i];
  });
  return frameState.map(function (s) {
    return minus.map(function (v, i) {
      if (v === false) return end[i];
      return begin[i] + v * s;
    });
  });
}
/**
 * @description Get the transition data of the object type
 * @param {Object} startState Transition start state
 * @param {Object} endState   Transition end state
 * @param {Array} frameState  Frame state progress
 * @return {Array} Transition frame state
 */


function getObjectTransitionState(begin, end, frameState) {
  var keys = Object.keys(end);
  var beginValue = keys.map(function (k) {
    return begin[k];
  });
  var endValue = keys.map(function (k) {
    return end[k];
  });
  var arrayState = getArrayTransitionState(beginValue, endValue, frameState);
  return arrayState.map(function (item) {
    var frameData = {};
    item.forEach(function (v, i) {
      return frameData[keys[i]] = v;
    });
    return frameData;
  });
}
/**
 * @description Get the transition state data by recursion
 * @param {Array|Object} startState Transition start state
 * @param {Array|Object} endState   Transition end state
 * @param {Array} frameState        Frame state progress
 * @return {Array} Transition frame state
 */


function recursionTransitionState(begin, end, frameState) {
  var state = getTransitionState(begin, end, frameState);

  var _loop = function _loop(key) {
    var bTemp = begin[key];
    var eTemp = end[key];
    if (_typeof(eTemp) !== 'object') return "continue";
    var data = recursionTransitionState(bTemp, eTemp, frameState);
    state.forEach(function (fs, i) {
      return fs[key] = data[i];
    });
  };

  for (var key in end) {
    var _ret = _loop(key);

    if (_ret === "continue") continue;
  }

  return state;
}
/**
 * @description Inject new curve into curves as config
 * @param {Any} key     The key of curve
 * @param {Array} curve Bezier curve data
 * @return {Undefined} No return
 */


function injectNewCurve(key, curve) {
  if (!key || !curve) {
    console.error('InjectNewCurve Missing Parameters!');
    return;
  }

  _curves["default"].set(key, curve);
}

var _default = transition;
exports["default"] = _default;
},{"./config/curves":2}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1VzZXJzL0FkbWluaXN0cmF0b3IvQXBwRGF0YS9Sb2FtaW5nL25wbS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiYnVpbGQvZW50cnkuanMiLCJsaWIvY29uZmlnL2N1cnZlcy5qcyIsImxpYi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsInZhciB0cmFuc2l0aW9uID0gcmVxdWlyZSgnLi4vbGliL2luZGV4JylcclxuXHJcbndpbmRvdy50cmFuc2l0aW9uID0gdHJhbnNpdGlvbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBleHBvcnRzLmVhc2VJbk91dEJvdW5jZSA9IGV4cG9ydHMuZWFzZU91dEJvdW5jZSA9IGV4cG9ydHMuZWFzZUluQm91bmNlID0gZXhwb3J0cy5lYXNlSW5PdXRFbGFzdGljID0gZXhwb3J0cy5lYXNlT3V0RWxhc3RpYyA9IGV4cG9ydHMuZWFzZUluRWxhc3RpYyA9IGV4cG9ydHMuZWFzZUluT3V0QmFjayA9IGV4cG9ydHMuZWFzZU91dEJhY2sgPSBleHBvcnRzLmVhc2VJbkJhY2sgPSBleHBvcnRzLmVhc2VJbk91dFF1aW50ID0gZXhwb3J0cy5lYXNlT3V0UXVpbnQgPSBleHBvcnRzLmVhc2VJblF1aW50ID0gZXhwb3J0cy5lYXNlSW5PdXRRdWFydCA9IGV4cG9ydHMuZWFzZU91dFF1YXJ0ID0gZXhwb3J0cy5lYXNlSW5RdWFydCA9IGV4cG9ydHMuZWFzZUluT3V0Q3ViaWMgPSBleHBvcnRzLmVhc2VPdXRDdWJpYyA9IGV4cG9ydHMuZWFzZUluQ3ViaWMgPSBleHBvcnRzLmVhc2VJbk91dFF1YWQgPSBleHBvcnRzLmVhc2VPdXRRdWFkID0gZXhwb3J0cy5lYXNlSW5RdWFkID0gZXhwb3J0cy5lYXNlSW5PdXRTaW5lID0gZXhwb3J0cy5lYXNlT3V0U2luZSA9IGV4cG9ydHMuZWFzZUluU2luZSA9IGV4cG9ydHMubGluZWFyID0gdm9pZCAwO1xudmFyIGxpbmVhciA9IFtbWzAsIDFdLCAnJywgWzAuMzMsIDAuNjddXSwgW1sxLCAwXSwgWzAuNjcsIDAuMzNdXV07XG4vKipcclxuICogQGRlc2NyaXB0aW9uIFNpbmVcclxuICovXG5cbmV4cG9ydHMubGluZWFyID0gbGluZWFyO1xudmFyIGVhc2VJblNpbmUgPSBbW1swLCAxXV0sIFtbMC41MzgsIDAuNTY0XSwgWzAuMTY5LCAwLjkxMl0sIFswLjg4MCwgMC4xOTZdXSwgW1sxLCAwXV1dO1xuZXhwb3J0cy5lYXNlSW5TaW5lID0gZWFzZUluU2luZTtcbnZhciBlYXNlT3V0U2luZSA9IFtbWzAsIDFdXSwgW1swLjQ0NCwgMC40NDhdLCBbMC4xNjksIDAuNzM2XSwgWzAuNzE4LCAwLjE2XV0sIFtbMSwgMF1dXTtcbmV4cG9ydHMuZWFzZU91dFNpbmUgPSBlYXNlT3V0U2luZTtcbnZhciBlYXNlSW5PdXRTaW5lID0gW1tbMCwgMV1dLCBbWzAuNSwgMC41XSwgWzAuMiwgMV0sIFswLjgsIDBdXSwgW1sxLCAwXV1dO1xuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiBRdWFkXHJcbiAqL1xuXG5leHBvcnRzLmVhc2VJbk91dFNpbmUgPSBlYXNlSW5PdXRTaW5lO1xudmFyIGVhc2VJblF1YWQgPSBbW1swLCAxXV0sIFtbMC41NTAsIDAuNTg0XSwgWzAuMjMxLCAwLjkwNF0sIFswLjg2OCwgMC4yNjRdXSwgW1sxLCAwXV1dO1xuZXhwb3J0cy5lYXNlSW5RdWFkID0gZWFzZUluUXVhZDtcbnZhciBlYXNlT3V0UXVhZCA9IFtbWzAsIDFdXSwgW1swLjQxMywgMC40MjhdLCBbMC4wNjUsIDAuODE2XSwgWzAuNzYwLCAwLjA0XV0sIFtbMSwgMF1dXTtcbmV4cG9ydHMuZWFzZU91dFF1YWQgPSBlYXNlT3V0UXVhZDtcbnZhciBlYXNlSW5PdXRRdWFkID0gW1tbMCwgMV1dLCBbWzAuNSwgMC41XSwgWzAuMywgMC45XSwgWzAuNywgMC4xXV0sIFtbMSwgMF1dXTtcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gQ3ViaWNcclxuICovXG5cbmV4cG9ydHMuZWFzZUluT3V0UXVhZCA9IGVhc2VJbk91dFF1YWQ7XG52YXIgZWFzZUluQ3ViaWMgPSBbW1swLCAxXV0sIFtbMC42NzksIDAuNjg4XSwgWzAuMzY2LCAwLjk5Ml0sIFswLjk5MiwgMC4zODRdXSwgW1sxLCAwXV1dO1xuZXhwb3J0cy5lYXNlSW5DdWJpYyA9IGVhc2VJbkN1YmljO1xudmFyIGVhc2VPdXRDdWJpYyA9IFtbWzAsIDFdXSwgW1swLjMyMSwgMC4zMTJdLCBbMC4wMDgsIDAuNjE2XSwgWzAuNjM0LCAwLjAwOF1dLCBbWzEsIDBdXV07XG5leHBvcnRzLmVhc2VPdXRDdWJpYyA9IGVhc2VPdXRDdWJpYztcbnZhciBlYXNlSW5PdXRDdWJpYyA9IFtbWzAsIDFdXSwgW1swLjUsIDAuNV0sIFswLjMsIDFdLCBbMC43LCAwXV0sIFtbMSwgMF1dXTtcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gUXVhcnRcclxuICovXG5cbmV4cG9ydHMuZWFzZUluT3V0Q3ViaWMgPSBlYXNlSW5PdXRDdWJpYztcbnZhciBlYXNlSW5RdWFydCA9IFtbWzAsIDFdXSwgW1swLjgxMiwgMC43NF0sIFswLjYxMSwgMC45ODhdLCBbMS4wMTMsIDAuNDkyXV0sIFtbMSwgMF1dXTtcbmV4cG9ydHMuZWFzZUluUXVhcnQgPSBlYXNlSW5RdWFydDtcbnZhciBlYXNlT3V0UXVhcnQgPSBbW1swLCAxXV0sIFtbMC4xNTIsIDAuMjQ0XSwgWzAuMDAxLCAwLjQ0OF0sIFswLjI4NSwgLTAuMDJdXSwgW1sxLCAwXV1dO1xuZXhwb3J0cy5lYXNlT3V0UXVhcnQgPSBlYXNlT3V0UXVhcnQ7XG52YXIgZWFzZUluT3V0UXVhcnQgPSBbW1swLCAxXV0sIFtbMC41LCAwLjVdLCBbMC40LCAxXSwgWzAuNiwgMF1dLCBbWzEsIDBdXV07XG4vKipcclxuICogQGRlc2NyaXB0aW9uIFF1aW50XHJcbiAqL1xuXG5leHBvcnRzLmVhc2VJbk91dFF1YXJ0ID0gZWFzZUluT3V0UXVhcnQ7XG52YXIgZWFzZUluUXVpbnQgPSBbW1swLCAxXV0sIFtbMC44NTcsIDAuODU2XSwgWzAuNzE0LCAxXSwgWzEsIDAuNzEyXV0sIFtbMSwgMF1dXTtcbmV4cG9ydHMuZWFzZUluUXVpbnQgPSBlYXNlSW5RdWludDtcbnZhciBlYXNlT3V0UXVpbnQgPSBbW1swLCAxXV0sIFtbMC4xMDgsIDAuMl0sIFswLjAwMSwgMC40XSwgWzAuMjE0LCAtMC4wMTJdXSwgW1sxLCAwXV1dO1xuZXhwb3J0cy5lYXNlT3V0UXVpbnQgPSBlYXNlT3V0UXVpbnQ7XG52YXIgZWFzZUluT3V0UXVpbnQgPSBbW1swLCAxXV0sIFtbMC41LCAwLjVdLCBbMC41LCAxXSwgWzAuNSwgMF1dLCBbWzEsIDBdXV07XG4vKipcclxuICogQGRlc2NyaXB0aW9uIEJhY2tcclxuICovXG5cbmV4cG9ydHMuZWFzZUluT3V0UXVpbnQgPSBlYXNlSW5PdXRRdWludDtcbnZhciBlYXNlSW5CYWNrID0gW1tbMCwgMV1dLCBbWzAuNjY3LCAwLjg5Nl0sIFswLjM4MCwgMS4xODRdLCBbMC45NTUsIDAuNjE2XV0sIFtbMSwgMF1dXTtcbmV4cG9ydHMuZWFzZUluQmFjayA9IGVhc2VJbkJhY2s7XG52YXIgZWFzZU91dEJhY2sgPSBbW1swLCAxXV0sIFtbMC4zMzUsIDAuMDI4XSwgWzAuMDYxLCAwLjIyXSwgWzAuNjMxLCAtMC4xOF1dLCBbWzEsIDBdXV07XG5leHBvcnRzLmVhc2VPdXRCYWNrID0gZWFzZU91dEJhY2s7XG52YXIgZWFzZUluT3V0QmFjayA9IFtbWzAsIDFdXSwgW1swLjUsIDAuNV0sIFswLjQsIDEuNF0sIFswLjYsIC0wLjRdXSwgW1sxLCAwXV1dO1xuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiBFbGFzdGljXHJcbiAqL1xuXG5leHBvcnRzLmVhc2VJbk91dEJhY2sgPSBlYXNlSW5PdXRCYWNrO1xudmFyIGVhc2VJbkVsYXN0aWMgPSBbW1swLCAxXV0sIFtbMC40NzQsIDAuOTY0XSwgWzAuMzgyLCAwLjk4OF0sIFswLjU1NywgMC45NTJdXSwgW1swLjYxOSwgMS4wNzZdLCBbMC41NjUsIDEuMDg4XSwgWzAuNjY5LCAxLjA4XV0sIFtbMC43NzAsIDAuOTE2XSwgWzAuNzEyLCAwLjkyNF0sIFswLjg0NywgMC45MDRdXSwgW1swLjkxMSwgMS4zMDRdLCBbMC44NzIsIDEuMzE2XSwgWzAuOTYxLCAxLjM0XV0sIFtbMSwgMF1dXTtcbmV4cG9ydHMuZWFzZUluRWxhc3RpYyA9IGVhc2VJbkVsYXN0aWM7XG52YXIgZWFzZU91dEVsYXN0aWMgPSBbW1swLCAxXV0sIFtbMC4wNzMsIC0wLjMyXSwgWzAuMDM0LCAtMC4zMjhdLCBbMC4xMDQsIC0wLjM0NF1dLCBbWzAuMTkxLCAwLjA5Ml0sIFswLjExMCwgMC4wNl0sIFswLjI1NiwgMC4wOF1dLCBbWzAuMzEwLCAtMC4wNzZdLCBbMC4yNjAsIC0wLjA2OF0sIFswLjM1NywgLTAuMDc2XV0sIFtbMC40MzIsIDAuMDMyXSwgWzAuMzYyLCAwLjAyOF0sIFswLjY4MywgLTAuMDA0XV0sIFtbMSwgMF1dXTtcbmV4cG9ydHMuZWFzZU91dEVsYXN0aWMgPSBlYXNlT3V0RWxhc3RpYztcbnZhciBlYXNlSW5PdXRFbGFzdGljID0gW1tbMCwgMV1dLCBbWzAuMjEwLCAwLjk0XSwgWzAuMTY3LCAwLjg4NF0sIFswLjI1MiwgMC45OF1dLCBbWzAuMjk5LCAxLjEwNF0sIFswLjI1NiwgMS4wOTJdLCBbMC4zNDcsIDEuMTA4XV0sIFtbMC41LCAwLjQ5Nl0sIFswLjQ1MSwgMC42NzJdLCBbMC41NDgsIDAuMzI0XV0sIFtbMC42OTYsIC0wLjEwOF0sIFswLjY1MiwgLTAuMTEyXSwgWzAuNzQxLCAtMC4xMjRdXSwgW1swLjgwNSwgMC4wNjRdLCBbMC43NTYsIDAuMDEyXSwgWzAuODY2LCAwLjA5Nl1dLCBbWzEsIDBdXV07XG4vKipcclxuICogQGRlc2NyaXB0aW9uIEJvdW5jZVxyXG4gKi9cblxuZXhwb3J0cy5lYXNlSW5PdXRFbGFzdGljID0gZWFzZUluT3V0RWxhc3RpYztcbnZhciBlYXNlSW5Cb3VuY2UgPSBbW1swLCAxXV0sIFtbMC4xNDgsIDFdLCBbMC4wNzUsIDAuODY4XSwgWzAuMTkzLCAwLjg0OF1dLCBbWzAuMzI2LCAxXSwgWzAuMjc2LCAwLjgzNl0sIFswLjQwNSwgMC43MTJdXSwgW1swLjYwMCwgMV0sIFswLjUxMSwgMC43MDhdLCBbMC42NzEsIDAuMzQ4XV0sIFtbMSwgMF1dXTtcbmV4cG9ydHMuZWFzZUluQm91bmNlID0gZWFzZUluQm91bmNlO1xudmFyIGVhc2VPdXRCb3VuY2UgPSBbW1swLCAxXV0sIFtbMC4zNTcsIDAuMDA0XSwgWzAuMjcwLCAwLjU5Ml0sIFswLjM3NiwgMC4yNTJdXSwgW1swLjYwNCwgLTAuMDA0XSwgWzAuNTQ4LCAwLjMxMl0sIFswLjY2OSwgMC4xODRdXSwgW1swLjgyMCwgMF0sIFswLjc0OSwgMC4xODRdLCBbMC45MDUsIDAuMTMyXV0sIFtbMSwgMF1dXTtcbmV4cG9ydHMuZWFzZU91dEJvdW5jZSA9IGVhc2VPdXRCb3VuY2U7XG52YXIgZWFzZUluT3V0Qm91bmNlID0gW1tbMCwgMV1dLCBbWzAuMTAyLCAxXSwgWzAuMDUwLCAwLjg2NF0sIFswLjExNywgMC44Nl1dLCBbWzAuMjE2LCAwLjk5Nl0sIFswLjIwOCwgMC44NDRdLCBbMC4yMjcsIDAuODA4XV0sIFtbMC4zNDcsIDAuOTk2XSwgWzAuMzQzLCAwLjhdLCBbMC40ODAsIDAuMjkyXV0sIFtbMC42MzUsIDAuMDA0XSwgWzAuNTExLCAwLjY3Nl0sIFswLjY1NiwgMC4yMDhdXSwgW1swLjc4NywgMF0sIFswLjc2MCwgMC4yXSwgWzAuNzk1LCAwLjE0NF1dLCBbWzAuOTA1LCAtMC4wMDRdLCBbMC44OTksIDAuMTY0XSwgWzAuOTQ0LCAwLjE0NF1dLCBbWzEsIDBdXV07XG5leHBvcnRzLmVhc2VJbk91dEJvdW5jZSA9IGVhc2VJbk91dEJvdW5jZTtcblxudmFyIF9kZWZhdWx0ID0gbmV3IE1hcChbWydsaW5lYXInLCBsaW5lYXJdLCBbJ2Vhc2VJblNpbmUnLCBlYXNlSW5TaW5lXSwgWydlYXNlT3V0U2luZScsIGVhc2VPdXRTaW5lXSwgWydlYXNlSW5PdXRTaW5lJywgZWFzZUluT3V0U2luZV0sIFsnZWFzZUluUXVhZCcsIGVhc2VJblF1YWRdLCBbJ2Vhc2VPdXRRdWFkJywgZWFzZU91dFF1YWRdLCBbJ2Vhc2VJbk91dFF1YWQnLCBlYXNlSW5PdXRRdWFkXSwgWydlYXNlSW5DdWJpYycsIGVhc2VJbkN1YmljXSwgWydlYXNlT3V0Q3ViaWMnLCBlYXNlT3V0Q3ViaWNdLCBbJ2Vhc2VJbk91dEN1YmljJywgZWFzZUluT3V0Q3ViaWNdLCBbJ2Vhc2VJblF1YXJ0JywgZWFzZUluUXVhcnRdLCBbJ2Vhc2VPdXRRdWFydCcsIGVhc2VPdXRRdWFydF0sIFsnZWFzZUluT3V0UXVhcnQnLCBlYXNlSW5PdXRRdWFydF0sIFsnZWFzZUluUXVpbnQnLCBlYXNlSW5RdWludF0sIFsnZWFzZU91dFF1aW50JywgZWFzZU91dFF1aW50XSwgWydlYXNlSW5PdXRRdWludCcsIGVhc2VJbk91dFF1aW50XSwgWydlYXNlSW5CYWNrJywgZWFzZUluQmFja10sIFsnZWFzZU91dEJhY2snLCBlYXNlT3V0QmFja10sIFsnZWFzZUluT3V0QmFjaycsIGVhc2VJbk91dEJhY2tdLCBbJ2Vhc2VJbkVsYXN0aWMnLCBlYXNlSW5FbGFzdGljXSwgWydlYXNlT3V0RWxhc3RpYycsIGVhc2VPdXRFbGFzdGljXSwgWydlYXNlSW5PdXRFbGFzdGljJywgZWFzZUluT3V0RWxhc3RpY10sIFsnZWFzZUluQm91bmNlJywgZWFzZUluQm91bmNlXSwgWydlYXNlT3V0Qm91bmNlJywgZWFzZU91dEJvdW5jZV0sIFsnZWFzZUluT3V0Qm91bmNlJywgZWFzZUluT3V0Qm91bmNlXV0pO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy50cmFuc2l0aW9uID0gdHJhbnNpdGlvbjtcbmV4cG9ydHMuaW5qZWN0TmV3Q3VydmUgPSBpbmplY3ROZXdDdXJ2ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2N1cnZlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vY29uZmlnL2N1cnZlc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxudmFyIGRlZmF1bHRUcmFuc2l0aW9uQkMgPSAnbGluZWFyJztcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gR2V0IHRoZSBOLWZyYW1lIGFuaW1hdGlvbiBzdGF0ZSBieSB0aGUgc3RhcnQgYW5kIGVuZCBzdGF0ZVxyXG4gKiAgICAgICAgICAgICAgb2YgdGhlIGFuaW1hdGlvbiBhbmQgdGhlIGVhc2luZyBjdXJ2ZVxyXG4gKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gdEJDICAgICAgICAgICAgICAgRWFzaW5nIGN1cnZlIG5hbWUgb3IgZGF0YVxyXG4gKiBAcGFyYW0ge051bWJlcnxBcnJheXxPYmplY3R9IHN0YXJ0U3RhdGUgQW5pbWF0aW9uIHN0YXJ0IHN0YXRlXHJcbiAqIEBwYXJhbSB7TnVtYmVyfEFycmF5fE9iamVjdH0gZW5kU3RhdGUgICBBbmltYXRpb24gZW5kIHN0YXRlXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBmcmFtZU51bSAgICAgICAgICAgICAgICBOdW1iZXIgb2YgQW5pbWF0aW9uIGZyYW1lc1xyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGRlZXAgICAgICAgICAgICAgICAgICAgV2hldGhlciB0byB1c2UgcmVjdXJzaXZlIG1vZGVcclxuICogQHJldHVybiB7QXJyYXl8Qm9vbGVhbn0gU3RhdGUgb2YgZWFjaCBmcmFtZSBvZiB0aGUgYW5pbWF0aW9uIChJbnZhbGlkIGlucHV0IHdpbGwgcmV0dXJuIGZhbHNlKVxyXG4gKi9cblxuZnVuY3Rpb24gdHJhbnNpdGlvbih0QkMpIHtcbiAgdmFyIHN0YXJ0U3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG4gIHZhciBlbmRTdGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogbnVsbDtcbiAgdmFyIGZyYW1lTnVtID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiAzMDtcbiAgdmFyIGRlZXAgPSBhcmd1bWVudHMubGVuZ3RoID4gNCAmJiBhcmd1bWVudHNbNF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s0XSA6IGZhbHNlO1xuICBpZiAoIWNoZWNrUGFyYW1zLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKSkgcmV0dXJuIGZhbHNlO1xuXG4gIHRyeSB7XG4gICAgLy8gR2V0IHRoZSB0cmFuc2l0aW9uIGJlemllciBjdXJ2ZVxuICAgIHZhciBiZXppZXJDdXJ2ZSA9IGdldEJlemllckN1cnZlKHRCQyk7IC8vIEdldCB0aGUgcHJvZ3Jlc3Mgb2YgZWFjaCBmcmFtZSBzdGF0ZVxuXG4gICAgdmFyIGZyYW1lU3RhdGVQcm9ncmVzcyA9IGdldEZyYW1lU3RhdGVQcm9ncmVzcyhiZXppZXJDdXJ2ZSwgZnJhbWVOdW0pOyAvLyBJZiB0aGUgcmVjdXJzaW9uIG1vZGUgaXMgbm90IGVuYWJsZWQgb3IgdGhlIHN0YXRlIHR5cGUgaXMgTnVtYmVyLCB0aGUgc2hhbGxvdyBzdGF0ZSBjYWxjdWxhdGlvbiBpcyBwZXJmb3JtZWQgZGlyZWN0bHkuXG5cbiAgICBpZiAoIWRlZXAgfHwgdHlwZW9mIGVuZFN0YXRlID09PSAnbnVtYmVyJykgcmV0dXJuIGdldFRyYW5zaXRpb25TdGF0ZShzdGFydFN0YXRlLCBlbmRTdGF0ZSwgZnJhbWVTdGF0ZVByb2dyZXNzKTtcbiAgICByZXR1cm4gcmVjdXJzaW9uVHJhbnNpdGlvblN0YXRlKHN0YXJ0U3RhdGUsIGVuZFN0YXRlLCBmcmFtZVN0YXRlUHJvZ3Jlc3MpO1xuICB9IGNhdGNoIChfdW51c2VkKSB7XG4gICAgY29uc29sZS53YXJuKCdUcmFuc2l0aW9uIHBhcmFtZXRlciBtYXkgYmUgYWJub3JtYWwhJyk7XG4gICAgcmV0dXJuIFtlbmRTdGF0ZV07XG4gIH1cbn1cbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2sgaWYgdGhlIHBhcmFtZXRlcnMgYXJlIGxlZ2FsXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSB0QkMgICAgICBOYW1lIG9mIHRyYW5zaXRpb24gYmV6aWVyIGN1cnZlXHJcbiAqIEBwYXJhbSB7QW55fSBzdGFydFN0YXRlICBUcmFuc2l0aW9uIHN0YXJ0IHN0YXRlXHJcbiAqIEBwYXJhbSB7QW55fSBlbmRTdGF0ZSAgICBUcmFuc2l0aW9uIGVuZCBzdGF0ZVxyXG4gKiBAcGFyYW0ge051bWJlcn0gZnJhbWVOdW0gTnVtYmVyIG9mIHRyYW5zaXRpb24gZnJhbWVzXHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59IElzIHRoZSBwYXJhbWV0ZXIgbGVnYWxcclxuICovXG5cblxuZnVuY3Rpb24gY2hlY2tQYXJhbXModEJDKSB7XG4gIHZhciBzdGFydFN0YXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcbiAgdmFyIGVuZFN0YXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmYWxzZTtcbiAgdmFyIGZyYW1lTnVtID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiAzMDtcblxuICBpZiAoIXRCQyB8fCBzdGFydFN0YXRlID09PSBmYWxzZSB8fCBlbmRTdGF0ZSA9PT0gZmFsc2UgfHwgIWZyYW1lTnVtKSB7XG4gICAgY29uc29sZS5lcnJvcigndHJhbnNpdGlvbjogTWlzc2luZyBQYXJhbWV0ZXJzIScpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChfdHlwZW9mKHN0YXJ0U3RhdGUpICE9PSBfdHlwZW9mKGVuZFN0YXRlKSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ3RyYW5zaXRpb246IEluY29uc2lzdGVudCBTdGF0dXMgVHlwZXMhJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHN0YXRlVHlwZSA9IF90eXBlb2YoZW5kU3RhdGUpO1xuXG4gIGlmIChzdGF0ZVR5cGUgPT09ICdzdHJpbmcnIHx8IHN0YXRlVHlwZSA9PT0gJ2Jvb2xlYW4nIHx8ICF0QkMubGVuZ3RoKSB7XG4gICAgY29uc29sZS5lcnJvcigndHJhbnNpdGlvbjogVW5zdXBwb3J0ZWQgRGF0YSBUeXBlIG9mIFN0YXRlIScpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICghX2N1cnZlc1tcImRlZmF1bHRcIl0uaGFzKHRCQykgJiYgISh0QkMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICBjb25zb2xlLndhcm4oJ3RyYW5zaXRpb246IFRyYW5zaXRpb24gY3VydmUgbm90IGZvdW5kLCBkZWZhdWx0IGN1cnZlIHdpbGwgYmUgdXNlZCEnKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiBHZXQgdGhlIHRyYW5zaXRpb24gYmV6aWVyIGN1cnZlXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSB0QkMgTmFtZSBvZiB0cmFuc2l0aW9uIGJlemllciBjdXJ2ZVxyXG4gKiBAcmV0dXJuIHtBcnJheX0gQmV6aWVyIGN1cnZlIGRhdGFcclxuICovXG5cblxuZnVuY3Rpb24gZ2V0QmV6aWVyQ3VydmUodEJDKSB7XG4gIHZhciBiZXppZXJDdXJ2ZSA9ICcnO1xuXG4gIGlmIChfY3VydmVzW1wiZGVmYXVsdFwiXS5oYXModEJDKSkge1xuICAgIGJlemllckN1cnZlID0gX2N1cnZlc1tcImRlZmF1bHRcIl0uZ2V0KHRCQyk7XG4gIH0gZWxzZSBpZiAodEJDIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICBiZXppZXJDdXJ2ZSA9IHRCQztcbiAgfSBlbHNlIHtcbiAgICBiZXppZXJDdXJ2ZSA9IF9jdXJ2ZXNbXCJkZWZhdWx0XCJdLmdldChkZWZhdWx0VHJhbnNpdGlvbkJDKTtcbiAgfVxuXG4gIHJldHVybiBiZXppZXJDdXJ2ZTtcbn1cbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gR2V0IHRoZSBwcm9ncmVzcyBvZiBlYWNoIGZyYW1lIHN0YXRlXHJcbiAqIEBwYXJhbSB7QXJyYXl9IGJlemllckN1cnZlIFRyYW5zaXRpb24gYmV6aWVyIGN1cnZlXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBmcmFtZU51bSAgIE51bWJlciBvZiB0cmFuc2l0aW9uIGZyYW1lc1xyXG4gKiBAcmV0dXJuIHtBcnJheX0gUHJvZ3Jlc3Mgb2YgZWFjaCBmcmFtZSBzdGF0ZVxyXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRGcmFtZVN0YXRlUHJvZ3Jlc3MoYmV6aWVyQ3VydmUsIGZyYW1lTnVtKSB7XG4gIHZhciB0TWludXMgPSAxIC8gKGZyYW1lTnVtIC0gMSk7XG4gIHZhciB0U3RhdGUgPSBuZXcgQXJyYXkoZnJhbWVOdW0pLmZpbGwoMCkubWFwKGZ1bmN0aW9uICh0LCBpKSB7XG4gICAgcmV0dXJuIGkgKiB0TWludXM7XG4gIH0pO1xuICB2YXIgZnJhbWVTdGF0ZSA9IHRTdGF0ZS5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICByZXR1cm4gZ2V0RnJhbWVTdGF0ZUZyb21UKGJlemllckN1cnZlLCB0KTtcbiAgfSk7XG4gIHJldHVybiBmcmFtZVN0YXRlO1xufVxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiBHZXQgdGhlIHByb2dyZXNzIG9mIHRoZSBjb3JyZXNwb25kaW5nIGZyYW1lIGFjY29yZGluZyB0byB0XHJcbiAqIEBwYXJhbSB7QXJyYXl9IGJlemllckN1cnZlIFRyYW5zaXRpb24gYmV6aWVyIGN1cnZlXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB0ICAgICAgICAgIEN1cnJlbnQgZnJhbWUgdFxyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IFByb2dyZXNzIG9mIGN1cnJlbnQgZnJhbWVcclxuICovXG5cblxuZnVuY3Rpb24gZ2V0RnJhbWVTdGF0ZUZyb21UKGJlemllckN1cnZlLCB0KSB7XG4gIHZhciB0QmV6aWVyQ3VydmVQb2ludCA9IGdldEJlemllckN1cnZlUG9pbnRGcm9tVChiZXppZXJDdXJ2ZSwgdCk7XG4gIHZhciBiZXppZXJDdXJ2ZVBvaW50VCA9IGdldEJlemllckN1cnZlUG9pbnRURnJvbVJlVCh0QmV6aWVyQ3VydmVQb2ludCwgdCk7XG4gIHJldHVybiBnZXRCZXppZXJDdXJ2ZVRTdGF0ZSh0QmV6aWVyQ3VydmVQb2ludCwgYmV6aWVyQ3VydmVQb2ludFQpO1xufVxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiBHZXQgdGhlIGNvcnJlc3BvbmRpbmcgc3ViLWN1cnZlIGFjY29yZGluZyB0byB0XHJcbiAqIEBwYXJhbSB7QXJyYXl9IGJlemllckN1cnZlIFRyYW5zaXRpb24gYmV6aWVyIGN1cnZlXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB0ICAgICAgICAgIEN1cnJlbnQgZnJhbWUgdFxyXG4gKiBAcmV0dXJuIHtBcnJheX0gU3ViLWN1cnZlIG9mIHRcclxuICovXG5cblxuZnVuY3Rpb24gZ2V0QmV6aWVyQ3VydmVQb2ludEZyb21UKGJlemllckN1cnZlLCB0KSB7XG4gIHZhciBsYXN0SW5kZXggPSBiZXppZXJDdXJ2ZS5sZW5ndGggLSAxO1xuICB2YXIgYmVnaW4gPSAnJyxcbiAgICAgIGVuZCA9ICcnO1xuICBiZXppZXJDdXJ2ZS5maW5kSW5kZXgoZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICBpZiAoaSA9PT0gbGFzdEluZGV4KSByZXR1cm47XG4gICAgYmVnaW4gPSBpdGVtO1xuICAgIGVuZCA9IGJlemllckN1cnZlW2kgKyAxXTtcbiAgICB2YXIgY3VycmVudE1haW5Qb2ludFggPSBiZWdpblswXVswXTtcbiAgICB2YXIgbmV4dE1haW5Qb2ludFggPSBlbmRbMF1bMF07XG4gICAgcmV0dXJuIHQgPj0gY3VycmVudE1haW5Qb2ludFggJiYgdCA8IG5leHRNYWluUG9pbnRYO1xuICB9KTtcbiAgdmFyIHAwID0gYmVnaW5bMF07XG4gIHZhciBwMSA9IGJlZ2luWzJdIHx8IGJlZ2luWzBdO1xuICB2YXIgcDIgPSBlbmRbMV0gfHwgZW5kWzBdO1xuICB2YXIgcDMgPSBlbmRbMF07XG4gIHJldHVybiBbcDAsIHAxLCBwMiwgcDNdO1xufVxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiBHZXQgbG9jYWwgdCBiYXNlZCBvbiB0IGFuZCBzdWItY3VydmVcclxuICogQHBhcmFtIHtBcnJheX0gYmV6aWVyQ3VydmUgU3ViLWN1cnZlXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB0ICAgICAgICAgIEN1cnJlbnQgZnJhbWUgdFxyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IGxvY2FsIHQgb2Ygc3ViLWN1cnZlXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldEJlemllckN1cnZlUG9pbnRURnJvbVJlVChiZXppZXJDdXJ2ZSwgdCkge1xuICB2YXIgcmVCZWdpblggPSBiZXppZXJDdXJ2ZVswXVswXTtcbiAgdmFyIHJlRW5kWCA9IGJlemllckN1cnZlWzNdWzBdO1xuICB2YXIgeE1pbnVzID0gcmVFbmRYIC0gcmVCZWdpblg7XG4gIHZhciB0TWludXMgPSB0IC0gcmVCZWdpblg7XG4gIHJldHVybiB0TWludXMgLyB4TWludXM7XG59XG4vKipcclxuICogQGRlc2NyaXB0aW9uIEdldCB0aGUgY3VydmUgcHJvZ3Jlc3Mgb2YgdFxyXG4gKiBAcGFyYW0ge0FycmF5fSBiZXppZXJDdXJ2ZSBTdWItY3VydmVcclxuICogQHBhcmFtIHtOdW1iZXJ9IHQgICAgICAgICAgQ3VycmVudCBmcmFtZSB0XHJcbiAqIEByZXR1cm4ge051bWJlcn0gUHJvZ3Jlc3Mgb2YgY3VycmVudCBmcmFtZVxyXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRCZXppZXJDdXJ2ZVRTdGF0ZShfcmVmLCB0KSB7XG4gIHZhciBfcmVmMiA9IF9zbGljZWRUb0FycmF5KF9yZWYsIDQpLFxuICAgICAgX3JlZjIkID0gX3NsaWNlZFRvQXJyYXkoX3JlZjJbMF0sIDIpLFxuICAgICAgcDAgPSBfcmVmMiRbMV0sXG4gICAgICBfcmVmMiQyID0gX3NsaWNlZFRvQXJyYXkoX3JlZjJbMV0sIDIpLFxuICAgICAgcDEgPSBfcmVmMiQyWzFdLFxuICAgICAgX3JlZjIkMyA9IF9zbGljZWRUb0FycmF5KF9yZWYyWzJdLCAyKSxcbiAgICAgIHAyID0gX3JlZjIkM1sxXSxcbiAgICAgIF9yZWYyJDQgPSBfc2xpY2VkVG9BcnJheShfcmVmMlszXSwgMiksXG4gICAgICBwMyA9IF9yZWYyJDRbMV07XG5cbiAgdmFyIHBvdyA9IE1hdGgucG93O1xuICB2YXIgdE1pbnVzID0gMSAtIHQ7XG4gIHZhciByZXN1bHQxID0gcDAgKiBwb3codE1pbnVzLCAzKTtcbiAgdmFyIHJlc3VsdDIgPSAzICogcDEgKiB0ICogcG93KHRNaW51cywgMik7XG4gIHZhciByZXN1bHQzID0gMyAqIHAyICogcG93KHQsIDIpICogdE1pbnVzO1xuICB2YXIgcmVzdWx0NCA9IHAzICogcG93KHQsIDMpO1xuICByZXR1cm4gMSAtIChyZXN1bHQxICsgcmVzdWx0MiArIHJlc3VsdDMgKyByZXN1bHQ0KTtcbn1cbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gR2V0IHRyYW5zaXRpb24gc3RhdGUgYWNjb3JkaW5nIHRvIGZyYW1lIHByb2dyZXNzXHJcbiAqIEBwYXJhbSB7QW55fSBzdGFydFN0YXRlICAgVHJhbnNpdGlvbiBzdGFydCBzdGF0ZVxyXG4gKiBAcGFyYW0ge0FueX0gZW5kU3RhdGUgICAgIFRyYW5zaXRpb24gZW5kIHN0YXRlXHJcbiAqIEBwYXJhbSB7QXJyYXl9IGZyYW1lU3RhdGUgRnJhbWUgc3RhdGUgcHJvZ3Jlc3NcclxuICogQHJldHVybiB7QXJyYXl9IFRyYW5zaXRpb24gZnJhbWUgc3RhdGVcclxuICovXG5cblxuZnVuY3Rpb24gZ2V0VHJhbnNpdGlvblN0YXRlKGJlZ2luLCBlbmQsIGZyYW1lU3RhdGUpIHtcbiAgdmFyIHN0YXRlVHlwZSA9ICdvYmplY3QnO1xuICBpZiAodHlwZW9mIGJlZ2luID09PSAnbnVtYmVyJykgc3RhdGVUeXBlID0gJ251bWJlcic7XG4gIGlmIChiZWdpbiBpbnN0YW5jZW9mIEFycmF5KSBzdGF0ZVR5cGUgPSAnYXJyYXknO1xuICBpZiAoc3RhdGVUeXBlID09PSAnbnVtYmVyJykgcmV0dXJuIGdldE51bWJlclRyYW5zaXRpb25TdGF0ZShiZWdpbiwgZW5kLCBmcmFtZVN0YXRlKTtcbiAgaWYgKHN0YXRlVHlwZSA9PT0gJ2FycmF5JykgcmV0dXJuIGdldEFycmF5VHJhbnNpdGlvblN0YXRlKGJlZ2luLCBlbmQsIGZyYW1lU3RhdGUpO1xuICBpZiAoc3RhdGVUeXBlID09PSAnb2JqZWN0JykgcmV0dXJuIGdldE9iamVjdFRyYW5zaXRpb25TdGF0ZShiZWdpbiwgZW5kLCBmcmFtZVN0YXRlKTtcbiAgcmV0dXJuIGZyYW1lU3RhdGUubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgcmV0dXJuIGVuZDtcbiAgfSk7XG59XG4vKipcclxuICogQGRlc2NyaXB0aW9uIEdldCB0aGUgdHJhbnNpdGlvbiBkYXRhIG9mIHRoZSBudW1iZXIgdHlwZVxyXG4gKiBAcGFyYW0ge051bWJlcn0gc3RhcnRTdGF0ZSBUcmFuc2l0aW9uIHN0YXJ0IHN0YXRlXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBlbmRTdGF0ZSAgIFRyYW5zaXRpb24gZW5kIHN0YXRlXHJcbiAqIEBwYXJhbSB7QXJyYXl9IGZyYW1lU3RhdGUgIEZyYW1lIHN0YXRlIHByb2dyZXNzXHJcbiAqIEByZXR1cm4ge0FycmF5fSBUcmFuc2l0aW9uIGZyYW1lIHN0YXRlXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldE51bWJlclRyYW5zaXRpb25TdGF0ZShiZWdpbiwgZW5kLCBmcmFtZVN0YXRlKSB7XG4gIHZhciBtaW51cyA9IGVuZCAtIGJlZ2luO1xuICByZXR1cm4gZnJhbWVTdGF0ZS5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICByZXR1cm4gYmVnaW4gKyBtaW51cyAqIHM7XG4gIH0pO1xufVxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiBHZXQgdGhlIHRyYW5zaXRpb24gZGF0YSBvZiB0aGUgYXJyYXkgdHlwZVxyXG4gKiBAcGFyYW0ge0FycmF5fSBzdGFydFN0YXRlIFRyYW5zaXRpb24gc3RhcnQgc3RhdGVcclxuICogQHBhcmFtIHtBcnJheX0gZW5kU3RhdGUgICBUcmFuc2l0aW9uIGVuZCBzdGF0ZVxyXG4gKiBAcGFyYW0ge0FycmF5fSBmcmFtZVN0YXRlIEZyYW1lIHN0YXRlIHByb2dyZXNzXHJcbiAqIEByZXR1cm4ge0FycmF5fSBUcmFuc2l0aW9uIGZyYW1lIHN0YXRlXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldEFycmF5VHJhbnNpdGlvblN0YXRlKGJlZ2luLCBlbmQsIGZyYW1lU3RhdGUpIHtcbiAgdmFyIG1pbnVzID0gZW5kLm1hcChmdW5jdGlvbiAodiwgaSkge1xuICAgIGlmICh0eXBlb2YgdiAhPT0gJ251bWJlcicpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdiAtIGJlZ2luW2ldO1xuICB9KTtcbiAgcmV0dXJuIGZyYW1lU3RhdGUubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgcmV0dXJuIG1pbnVzLm1hcChmdW5jdGlvbiAodiwgaSkge1xuICAgICAgaWYgKHYgPT09IGZhbHNlKSByZXR1cm4gZW5kW2ldO1xuICAgICAgcmV0dXJuIGJlZ2luW2ldICsgdiAqIHM7XG4gICAgfSk7XG4gIH0pO1xufVxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiBHZXQgdGhlIHRyYW5zaXRpb24gZGF0YSBvZiB0aGUgb2JqZWN0IHR5cGVcclxuICogQHBhcmFtIHtPYmplY3R9IHN0YXJ0U3RhdGUgVHJhbnNpdGlvbiBzdGFydCBzdGF0ZVxyXG4gKiBAcGFyYW0ge09iamVjdH0gZW5kU3RhdGUgICBUcmFuc2l0aW9uIGVuZCBzdGF0ZVxyXG4gKiBAcGFyYW0ge0FycmF5fSBmcmFtZVN0YXRlICBGcmFtZSBzdGF0ZSBwcm9ncmVzc1xyXG4gKiBAcmV0dXJuIHtBcnJheX0gVHJhbnNpdGlvbiBmcmFtZSBzdGF0ZVxyXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRPYmplY3RUcmFuc2l0aW9uU3RhdGUoYmVnaW4sIGVuZCwgZnJhbWVTdGF0ZSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGVuZCk7XG4gIHZhciBiZWdpblZhbHVlID0ga2V5cy5tYXAoZnVuY3Rpb24gKGspIHtcbiAgICByZXR1cm4gYmVnaW5ba107XG4gIH0pO1xuICB2YXIgZW5kVmFsdWUgPSBrZXlzLm1hcChmdW5jdGlvbiAoaykge1xuICAgIHJldHVybiBlbmRba107XG4gIH0pO1xuICB2YXIgYXJyYXlTdGF0ZSA9IGdldEFycmF5VHJhbnNpdGlvblN0YXRlKGJlZ2luVmFsdWUsIGVuZFZhbHVlLCBmcmFtZVN0YXRlKTtcbiAgcmV0dXJuIGFycmF5U3RhdGUubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgdmFyIGZyYW1lRGF0YSA9IHt9O1xuICAgIGl0ZW0uZm9yRWFjaChmdW5jdGlvbiAodiwgaSkge1xuICAgICAgcmV0dXJuIGZyYW1lRGF0YVtrZXlzW2ldXSA9IHY7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZyYW1lRGF0YTtcbiAgfSk7XG59XG4vKipcclxuICogQGRlc2NyaXB0aW9uIEdldCB0aGUgdHJhbnNpdGlvbiBzdGF0ZSBkYXRhIGJ5IHJlY3Vyc2lvblxyXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gc3RhcnRTdGF0ZSBUcmFuc2l0aW9uIHN0YXJ0IHN0YXRlXHJcbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBlbmRTdGF0ZSAgIFRyYW5zaXRpb24gZW5kIHN0YXRlXHJcbiAqIEBwYXJhbSB7QXJyYXl9IGZyYW1lU3RhdGUgICAgICAgIEZyYW1lIHN0YXRlIHByb2dyZXNzXHJcbiAqIEByZXR1cm4ge0FycmF5fSBUcmFuc2l0aW9uIGZyYW1lIHN0YXRlXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIHJlY3Vyc2lvblRyYW5zaXRpb25TdGF0ZShiZWdpbiwgZW5kLCBmcmFtZVN0YXRlKSB7XG4gIHZhciBzdGF0ZSA9IGdldFRyYW5zaXRpb25TdGF0ZShiZWdpbiwgZW5kLCBmcmFtZVN0YXRlKTtcblxuICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChrZXkpIHtcbiAgICB2YXIgYlRlbXAgPSBiZWdpbltrZXldO1xuICAgIHZhciBlVGVtcCA9IGVuZFtrZXldO1xuICAgIGlmIChfdHlwZW9mKGVUZW1wKSAhPT0gJ29iamVjdCcpIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgdmFyIGRhdGEgPSByZWN1cnNpb25UcmFuc2l0aW9uU3RhdGUoYlRlbXAsIGVUZW1wLCBmcmFtZVN0YXRlKTtcbiAgICBzdGF0ZS5mb3JFYWNoKGZ1bmN0aW9uIChmcywgaSkge1xuICAgICAgcmV0dXJuIGZzW2tleV0gPSBkYXRhW2ldO1xuICAgIH0pO1xuICB9O1xuXG4gIGZvciAodmFyIGtleSBpbiBlbmQpIHtcbiAgICB2YXIgX3JldCA9IF9sb29wKGtleSk7XG5cbiAgICBpZiAoX3JldCA9PT0gXCJjb250aW51ZVwiKSBjb250aW51ZTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gSW5qZWN0IG5ldyBjdXJ2ZSBpbnRvIGN1cnZlcyBhcyBjb25maWdcclxuICogQHBhcmFtIHtBbnl9IGtleSAgICAgVGhlIGtleSBvZiBjdXJ2ZVxyXG4gKiBAcGFyYW0ge0FycmF5fSBjdXJ2ZSBCZXppZXIgY3VydmUgZGF0YVxyXG4gKiBAcmV0dXJuIHtVbmRlZmluZWR9IE5vIHJldHVyblxyXG4gKi9cblxuXG5mdW5jdGlvbiBpbmplY3ROZXdDdXJ2ZShrZXksIGN1cnZlKSB7XG4gIGlmICgha2V5IHx8ICFjdXJ2ZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0luamVjdE5ld0N1cnZlIE1pc3NpbmcgUGFyYW1ldGVycyEnKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBfY3VydmVzW1wiZGVmYXVsdFwiXS5zZXQoa2V5LCBjdXJ2ZSk7XG59XG5cbnZhciBfZGVmYXVsdCA9IHRyYW5zaXRpb247XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyJdfQ==

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @description Linear
 */
exports.linear = function (t, b, c, d) {
    return c * t / d + b;
};
/**
 * @description Sine
 */
exports.easeInSine = function (t, b, c, d) {
    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
};
exports.easeOutSine = function (t, b, c, d) {
    return c * Math.sin(t / d * (Math.PI / 2)) + b;
};
exports.easeInOutSine = function (t, b, c, d) {
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
};
/**
 * @description Quad
 */
exports.easeInQuad = function (t, b, c, d) {
    return c * (t /= d) * t + b;
};
exports.easeOutQuad = function (t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
};
exports.easeInOutQuad = function (t, b, c, d) {
    if ((t /= d / 2) < 1)
        return c / 2 * t * t + b;
    return -c / 2 * (--t * (t - 2) - 1) + b;
};
/**
 * @description Cubic
 */
exports.easeInCubic = function (t, b, c, d) {
    return c * (t /= d) * t * t + b;
};
exports.easeOutCubic = function (t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
};
exports.easeInOutCubic = function (t, b, c, d) {
    if ((t /= d / 2) < 1)
        return c / 2 * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t + 2) + b;
};
/**
 * @description Quart
 */
exports.easeInQuart = function (t, b, c, d) {
    return c * (t /= d) * t * t * t + b;
};
exports.easeOutQuart = function (t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
};
exports.easeInOutQuart = function (t, b, c, d) {
    if ((t /= d / 2) < 1)
        return c / 2 * t * t * t * t + b;
    return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
};
/**
 * @description Quint
 */
exports.easeInQuint = function (t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b;
};
exports.easeOutQuint = function (t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
};
exports.easeInOutQuint = function (t, b, c, d) {
    if ((t /= d / 2) < 1)
        return c / 2 * t * t * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
};
/**
 * @description Back
 */
exports.easeInBack = function (t, b, c, d) {
    var s = 1.70158;
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
};
exports.easeOutBack = function (t, b, c, d) {
    var s = 1.70158;
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
};
exports.easeInOutBack = function (t, b, c, d) {
    var s = 1.70158;
    if ((t /= d / 2) < 1)
        return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
    return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
};
/**
 * @description Elastic
 */
exports.easeInElastic = function (t, b, c, d) {
    if (t === 0)
        return b;
    if ((t /= d) === 1)
        return b + c;
    return -(c * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - d * 0.3 / 4) * (2 * Math.PI) / (d * 0.3))) + b;
};
exports.easeOutElastic = function (t, b, c, d) {
    if (t === 0)
        return b;
    if ((t /= d) === 1)
        return b + c;
    return c * Math.pow(2, -10 * t) * Math.sin((t * d - d * 0.3 / 4) * (2 * Math.PI) / (d * 0.3)) + c + b;
};
exports.easeInOutElastic = function (t, b, c, d) {
    if (t === 0)
        return b;
    if ((t /= d / 2) === 2)
        return b + c;
    var p = d * (0.3 * 1.5);
    var s = p / 4;
    if (t < 1)
        return -0.5 * (c * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    return c * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
};
/**
 * @description Bounce
 */
exports.easeOutBounce = function (t, b, c, d) {
    if ((t /= d) < 1 / 2.75) {
        return c * (7.5625 * t * t) + b;
    }
    else if (t < 2 / 2.75) {
        return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
    }
    else if (t < 2.5 / 2.75) {
        return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
    }
    return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
};
exports.easeInBounce = function (t, b, c, d) {
    return c - exports.easeOutBounce(d - t, 0, c, d) + b;
};
exports.easeInOutBounce = function (t, b, c, d) {
    if (t < d / 2)
        return exports.easeInBounce(t * 2, 0, c, d) * 0.5 + b;
    return exports.easeOutBounce(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
};
/**
 * @description Expo
 */
exports.easeInExpo = function (t, b, c, d) {
    return t === 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
};
exports.easeOutExpo = function (t, b, c, d) {
    return t === d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
};
exports.easeInOutExpo = function (t, b, c, d) {
    if (t === 0)
        return b;
    if (t === d)
        return b + c;
    if ((t /= d / 2) < 1)
        return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
};
/**
 * @description Circ
 */
exports.easeInCirc = function (t, b, c, d) {
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
};
exports.easeOutCirc = function (t, b, c, d) {
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
};
exports.easeInOutCirc = function (t, b, c, d) {
    if ((t /= d / 2) < 1)
        return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
};
exports.tweens = new Map([
    ['linear', exports.linear],
    ['easeInSine', exports.easeInSine],
    ['easeOutSine', exports.easeOutSine],
    ['easeInOutSine', exports.easeInOutSine],
    ['easeInQuad', exports.easeInQuad],
    ['easeOutQuad', exports.easeOutQuad],
    ['easeInOutQuad', exports.easeInOutQuad],
    ['easeInCubic', exports.easeInCubic],
    ['easeOutCubic', exports.easeOutCubic],
    ['easeInOutCubic', exports.easeInOutCubic],
    ['easeInQuart', exports.easeInQuart],
    ['easeOutQuart', exports.easeOutQuart],
    ['easeInOutQuart', exports.easeInOutQuart],
    ['easeInQuint', exports.easeInQuint],
    ['easeOutQuint', exports.easeOutQuint],
    ['easeInOutQuint', exports.easeInOutQuint],
    ['easeInBack', exports.easeInBack],
    ['easeOutBack', exports.easeOutBack],
    ['easeInOutBack', exports.easeInOutBack],
    ['easeInElastic', exports.easeInElastic],
    ['easeOutElastic', exports.easeOutElastic],
    ['easeInOutElastic', exports.easeInOutElastic],
    ['easeInBounce', exports.easeInBounce],
    ['easeOutBounce', exports.easeOutBounce],
    ['easeInOutBounce', exports.easeInOutBounce]
]);
exports.getFrameStateProgressByTween = function (tweenName, frameNum) {
    var _a = [0, 1], startState = _a[0], changeValue = _a[1];
    var tweenFun = exports.tweens.get(tweenName);
    return new Array(frameNum).fill(0).map(function (foo, i) { return tweenFun(i + 1, startState, changeValue, frameNum); });
};
exports.default = exports.getFrameStateProgressByTween;

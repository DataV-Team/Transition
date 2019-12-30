"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("./core");
exports.injectNewCurve = core_1.injectNewCurve;
var curves_1 = require("./core/curves");
var tweens_1 = require("./core/tweens");
var getType = function (target) {
    return Object
        .prototype.toString.call(target)
        .replace(/\[object |\]/g, '').toLowerCase();
};
var checkParams = function (dynamic, startState, endState, frameNum) {
    var _a = [typeof startState, typeof endState], starStateType = _a[0], endStateType = _a[1];
    if (typeof dynamic === 'undefined' ||
        starStateType === 'undefined' ||
        endStateType === 'undefined') {
        console.error('transition: Missing Parameters!');
        return false;
    }
    if (typeof frameNum !== 'number') {
        console.error('transition: frameNum should be of type number!');
        return false;
    }
    if (starStateType !== typeof endStateType) {
        console.error('transition: Inconsistent Status Types!');
        return false;
    }
    if (typeof dynamic === 'string' && !curves_1.curves.has(dynamic) && !tweens_1.tweens.has(dynamic) ||
        !(dynamic instanceof Array)) {
        console.warn('transition: Transition dynamic curve not found, default dynamic curve will be used!');
    }
    return true;
};
var getNumberTransitionState = function (startState, endState, frameStateProgress) {
    var minus = endState - startState;
    return frameStateProgress.map(function (s) { return startState + minus * s; });
};
var getArrayTransitionState = function (startState, endState, frameStateProgress) {
    var minus = endState.map(function (v, i) {
        if (typeof v !== 'number')
            return false;
        return v - startState[i];
    });
    return frameStateProgress.map(function (s) {
        return minus.map(function (v, i) {
            if (v === false)
                return endState[i];
            return startState[i] + v * s;
        });
    });
};
var getObjectTransitionState = function (startState, endState, frameStateProgress) {
    var keys = Object.keys(endState);
    var startValue = keys.map(function (k) { return startState[k]; });
    var endValue = keys.map(function (k) { return endState[k]; });
    var arrayState = getArrayTransitionState(startValue, endValue, frameStateProgress);
    return arrayState.map(function (item) {
        var frameData = {};
        item.forEach(function (v, i) { return frameData[keys[i]] = v; });
        return frameData;
    });
};
var getTransitionState = function (startState, endState, frameStateProgress) {
    var stateType = getType(startState);
    if (stateType === 'number')
        return getNumberTransitionState(startState, endState, frameStateProgress);
    if (stateType === 'array')
        return getArrayTransitionState(startState, endState, frameStateProgress);
    if (stateType === 'object')
        return getObjectTransitionState(startState, endState, frameStateProgress);
    return frameStateProgress.map(function () { return endState; });
};
var recursionTransitionState = function (startState, endState, frameStateProgress) {
    var state = getTransitionState(startState, endState, frameStateProgress);
    var _loop_1 = function (key) {
        var bTemp = startState[key];
        var eTemp = endState[key];
        if (typeof eTemp !== 'object')
            return "continue";
        var data = recursionTransitionState(bTemp, eTemp, frameStateProgress);
        state.forEach(function (fs, i) { return fs[key] = data[i]; });
    };
    for (var key in endState) {
        _loop_1(key);
    }
    return state;
};
var transition = function (dynamic, startState, endState, frameNum, deep) {
    if (frameNum === void 0) { frameNum = 30; }
    if (deep === void 0) { deep = false; }
    if (!checkParams(dynamic, startState, endState, frameNum))
        return [endState];
    var stateType = getType(startState);
    if (stateType !== 'number' &&
        stateType !== 'array' &&
        stateType !== 'object')
        return new Array(frameNum).fill(endState);
    try {
        var frameStateProgress = core_1.getFrameStateProgress(dynamic, frameNum, 'linear');
        // If the recursion mode is not enabled or the state type is Number, the shallow state calculation is performed directly.
        if (!deep || typeof endState === 'number')
            return getTransitionState(startState, endState, frameStateProgress);
        return recursionTransitionState(startState, endState, frameStateProgress);
    }
    catch (_a) {
        console.warn('Transition parameter may be abnormal!');
        return [endState];
    }
};
exports.transition = transition;

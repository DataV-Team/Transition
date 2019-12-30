"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var curves_1 = require("./curves");
exports.injectNewCurve = curves_1.injectNewCurve;
exports.getFrameStateProgressByCurve = curves_1.getFrameStateProgressByCurve;
var tweens_1 = require("./tweens");
exports.getFrameStateProgressByTween = tweens_1.getFrameStateProgressByTween;
exports.getFrameStateProgress = function (dynamic, frameNum, defaultDynamic) {
    var validDynamic = true;
    if (typeof dynamic !== 'string' && !(dynamic instanceof Array))
        validDynamic = false;
    if (typeof dynamic === 'string' &&
        (!curves_1.curves.get(dynamic) && !tweens_1.tweens.get(dynamic)))
        validDynamic = false;
    if (!validDynamic)
        dynamic = defaultDynamic;
    var calculator = tweens_1.tweens.get(dynamic) || curves_1.getFrameStateProgressByCurve;
    return calculator(dynamic, frameNum);
};
exports.default = exports.getFrameStateProgress;

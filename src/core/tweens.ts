import { Tween, TweenName } from 'types/tweens'

/**
 * @description Linear
 */
export const linear: Tween = (t, b, c, d) => {
  return (c * t) / d + b
}

/**
 * @description Sine
 */
export const easeInSine: Tween = (t, b, c, d) => {
  return -c * Math.cos((t / d) * (Math.PI / 2)) + c + b
}

export const easeOutSine: Tween = (t, b, c, d) => {
  return c * Math.sin((t / d) * (Math.PI / 2)) + b
}

export const easeInOutSine: Tween = (t, b, c, d) => {
  return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b
}

/**
 * @description Quad
 */
export const easeInQuad: Tween = (t, b, c, d) => {
  return c * (t /= d) * t + b
}

export const easeOutQuad: Tween = (t, b, c, d) => {
  return -c * (t /= d) * (t - 2) + b
}

export const easeInOutQuad: Tween = (t, b, c, d) => {
  if ((t /= d / 2) < 1) return (c / 2) * t * t + b

  return (-c / 2) * (--t * (t - 2) - 1) + b
}

/**
 * @description Cubic
 */
export const easeInCubic: Tween = (t, b, c, d) => {
  return c * (t /= d) * t * t + b
}

export const easeOutCubic: Tween = (t, b, c, d) => {
  return c * ((t = t / d - 1) * t * t + 1) + b
}

export const easeInOutCubic: Tween = (t, b, c, d) => {
  if ((t /= d / 2) < 1) return (c / 2) * t * t * t + b

  return (c / 2) * ((t -= 2) * t * t + 2) + b
}

/**
 * @description Quart
 */
export const easeInQuart: Tween = (t, b, c, d) => {
  return c * (t /= d) * t * t * t + b
}

export const easeOutQuart: Tween = (t, b, c, d) => {
  return -c * ((t = t / d - 1) * t * t * t - 1) + b
}

export const easeInOutQuart: Tween = (t, b, c, d) => {
  if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t + b

  return (-c / 2) * ((t -= 2) * t * t * t - 2) + b
}

/**
 * @description Quint
 */
export const easeInQuint: Tween = (t, b, c, d) => {
  return c * (t /= d) * t * t * t * t + b
}

export const easeOutQuint: Tween = (t, b, c, d) => {
  return c * ((t = t / d - 1) * t * t * t * t + 1) + b
}

export const easeInOutQuint: Tween = (t, b, c, d) => {
  if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t * t + b

  return (c / 2) * ((t -= 2) * t * t * t * t + 2) + b
}

/**
 * @description Back
 */
export const easeInBack: Tween = (t, b, c, d) => {
  const s = 1.70158

  return c * (t /= d) * t * ((s + 1) * t - s) + b
}

export const easeOutBack: Tween = (t, b, c, d) => {
  const s = 1.70158

  return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
}

export const easeInOutBack: Tween = (t, b, c, d) => {
  let s = 1.70158

  if ((t /= d / 2) < 1) return (c / 2) * (t * t * (((s *= 1.525) + 1) * t - s)) + b

  return (c / 2) * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b
}

/**
 * @description Elastic
 */
export const easeInElastic: Tween = (t, b, c, d) => {
  if (t === 0) return b

  if ((t /= d) === 1) return b + c

  return (
    -(
      c *
      Math.pow(2, 10 * (t -= 1)) *
      Math.sin(((t * d - (d * 0.3) / 4) * (2 * Math.PI)) / (d * 0.3))
    ) + b
  )
}

export const easeOutElastic: Tween = (t, b, c, d) => {
  if (t === 0) return b

  if ((t /= d) === 1) return b + c

  return (
    c * Math.pow(2, -10 * t) * Math.sin(((t * d - (d * 0.3) / 4) * (2 * Math.PI)) / (d * 0.3)) +
    c +
    b
  )
}

export const easeInOutElastic: Tween = (t, b, c, d) => {
  if (t === 0) return b

  if ((t /= d / 2) === 2) return b + c

  const p = d * (0.3 * 1.5)
  const s = p / 4

  if (t < 1)
    return -0.5 * (c * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t * d - s) * (2 * Math.PI)) / p)) + b

  return c * Math.pow(2, -10 * (t -= 1)) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) * 0.5 + c + b
}

/**
 * @description Bounce
 */
export const easeOutBounce: Tween = (t, b, c, d) => {
  if ((t /= d) < 1 / 2.75) {
    return c * (7.5625 * t * t) + b
  } else if (t < 2 / 2.75) {
    return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b
  } else if (t < 2.5 / 2.75) {
    return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b
  }

  return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b
}

export const easeInBounce: Tween = (t, b, c, d) => {
  return c - easeOutBounce(d - t, 0, c, d) + b
}

export const easeInOutBounce: Tween = (t, b, c, d) => {
  if (t < d / 2) return easeInBounce(t * 2, 0, c, d) * 0.5 + b

  return easeOutBounce(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b
}

/**
 * @description Expo
 */
export const easeInExpo: Tween = (t, b, c, d) => {
  return t === 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b
}

export const easeOutExpo: Tween = (t, b, c, d) => {
  return t === d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b
}

export const easeInOutExpo: Tween = (t, b, c, d) => {
  if (t === 0) return b

  if (t === d) return b + c

  if ((t /= d / 2) < 1) return (c / 2) * Math.pow(2, 10 * (t - 1)) + b

  return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b
}

/**
 * @description Circ
 */
export const easeInCirc: Tween = (t, b, c, d) => {
  return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b
}

export const easeOutCirc: Tween = (t, b, c, d) => {
  return c * Math.sqrt(1 - (t = t / d - 1) * t) + b
}

export const easeInOutCirc: Tween = (t, b, c, d) => {
  if ((t /= d / 2) < 1) return (-c / 2) * (Math.sqrt(1 - t * t) - 1) + b

  return (c / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + b
}

export const tweens = new Map<TweenName, Tween>([
  ['linear', linear],
  ['easeInSine', easeInSine],
  ['easeOutSine', easeOutSine],
  ['easeInOutSine', easeInOutSine],
  ['easeInQuad', easeInQuad],
  ['easeOutQuad', easeOutQuad],
  ['easeInOutQuad', easeInOutQuad],
  ['easeInCubic', easeInCubic],
  ['easeOutCubic', easeOutCubic],
  ['easeInOutCubic', easeInOutCubic],
  ['easeInQuart', easeInQuart],
  ['easeOutQuart', easeOutQuart],
  ['easeInOutQuart', easeInOutQuart],
  ['easeInQuint', easeInQuint],
  ['easeOutQuint', easeOutQuint],
  ['easeInOutQuint', easeInOutQuint],
  ['easeInBack', easeInBack],
  ['easeOutBack', easeOutBack],
  ['easeInOutBack', easeInOutBack],
  ['easeInElastic', easeInElastic],
  ['easeOutElastic', easeOutElastic],
  ['easeInOutElastic', easeInOutElastic],
  ['easeInBounce', easeInBounce],
  ['easeOutBounce', easeOutBounce],
  ['easeInOutBounce', easeInOutBounce],
])

/**
 * @description Get frame state progress by tween
 * @param {TweenName} tweenName Tween name
 * @param {number} frameNum     Frame number
 * @return {number[]} Frame state progress
 */
export function getFrameStateProgressByTween(tweenName: TweenName, frameNum = 30): number[] {
  const [startState, changeValue] = [0, 1]

  const tweenFun = tweens.get(tweenName)!

  return new Array(frameNum)
    .fill(0)
    .map((_, i) => tweenFun(i + 1, startState, changeValue, frameNum))
}

export default getFrameStateProgressByTween

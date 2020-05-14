[中文](./README.md)

<h1 align="center">Transition</h1>

<p align="center">
  <a href="https://travis-ci.com/DataV-Team/transition">
    <img src="https://img.shields.io/travis/com/DataV-Team/transition.svg" alt="Travis CI">
  </a>
  <a href="https://github.com/DataV-Team/transition/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/DataV-Team/transition.svg" alt="LICENSE" />
  </a>
  <a href="https://www.npmjs.com/package/@jiaminghi/transition">
    <img src="https://img.shields.io/npm/v/@jiaminghi/transition.svg" alt="NPM" />
  </a>
</p>

### What is Transition?

- It is a dynamic effect plugin based on **Bezier Curve**.
- It provides common **easing** curve.
- **Customizable** easing curve.

### How is the animation produced?

- Get one frame data of the animation.
- Draw this frame animation.
- Repeat...

We can use three sets of data to describe an animation (**animation start state**, **animation end state**, **easing curve**).Based on these three sets of data, we can calculate the **state of each frame** of the animation,this is what **_Transition_** provided.According to the data of each frame, we carry out continuous redrawing, and the animation is generated.

### Install with npm

```shell
$ npm install @jiaminghi/transition
```

### Use

```javascript
import { transition, extendCurves, createAnimator } from '@jiaminghi/transition'

// do something
```

### Quick experience

```html
<!--Debug version-->
<script src="https://unpkg.com/@jiaminghi/transition/dist/index.js"></script>
<!--Compression version-->
<script src="https://unpkg.com/@jiaminghi/transition/dist/index.min.js"></script>
<script>
  const { transition, extendCurves, createAnimator } = window.transition
  // do something
</script>
```

Detailed documents and examples can be viewed on the [HomePage](http://transition.jiaminghi.com).

- [Annotation](#Annotation)
- [Examples](#examples)
- [Extend New Easing Curve](#Extend-New-Easing-Curve)
- [Easing Curve Table](#Easing-curve-table)

---

<h3 align="center">Annotation</h3>

```typescript
/**
 * @description Get the N-frame animation state by the start and end state
 *              of the animation and the ease curve
 * @param {EaseCurve} easeCurve Ease curve name or data
 * @param {T} startState        Animation start state
 * @param {T} endState          Animation end state
 * @param {Number} frameNum     Number of Animation frames
 * @param {Boolean} deep        Whether to use recursive mode
 * @return {T[]} State of each frame of the animation
 */
function transition<T>(
  easeCurve: EaseCurve,
  startState: T,
  endState: T,
  frameNum = 30,
  deep = false
): T[]
```

<h3 align="center">Examples</h3>

**Transition** provides three data types to describe the animation state.

- [Number](#Number)
- [Array](#Array)
- [Object](#Annotation)
- [Recursive](#Recursive)

#### Number

```typescript
import transition from '@jiaminghi/transition'

const start = 0
const end = 100
const frameNum = 10
const easeCurve = 'linear'

transition(easeCurve, start, end, frameNum)
/**
 * [
 *    0, 11.111111111111112, 22.222222222222225,
 *    33.333333333333336, 44.44444444444445, 55.55555555555556,
 *    66.66666666666667, 77.77777777777779, 88.8888888888889, 100
 * ]
 */
```

#### Array

```typescript
import transition from '@jiaminghi/transition'

const start = [10, 20, 30]
const end = [100, 200, 300]
const frameNum = 3
const easeCurve = 'linear'

transition(easeCurve, start, end, frameNum)
/**
 * [
 *    [10, 20, 30],
 *    [55, 110, 165],
 *    [100, 200, 300]
 * ]
 */
```

#### Object

```typescript
import transition from '@jiaminghi/transition'

const start = { x: 0, y: 20 }
const end = { x: 100, y: 200 }
const frameNum = 3
const easeCurve = 'linear'

transition(easeCurve, start, end, frameNum)
/**
 * [
 *    { x: 0, y: 20 },
 *    { x: 50, y: 110 },
 *    { x: 100, y: 200 }
 * ]
 */
```

#### Deep

Use recursive mode to calculate deep data in `Array` or `Object`.

```javascript
import transition from '@jiaminghi/transition'

const start = { x: 0, y: 20, radius: [10, 20, { z: 30 }] }
const end = { x: 100, y: 200, radius: [50, 90, { z: 10 }] }
const frameNum = 3
const easeCurve = 'linear'
const deep = true

transition(easeCurve, start, end, frameNum, deep)
/**
 * [
 *    { x: 0, y: 20, radius: [10, 20, { z: 30 }] },
 *    { x: 50, y: 110, radius: [30, 55, { z: 20 }] },
 *    { x: 100, y: 200, radius: [50, 90, { z: 10 }] },
 * ]
 */
```

**Notice**

- Non-Number attribute or element does not participate in calculations.
- The data type of the start and end state should be consistent（Including the number of attributes and elements）.

<h3 align="center">Extend New Easing Curve</h3>

If you want to extend the new **easing curve**, you can use the `extendCurves` method provided by `Transition` to extend.

```javascript
import { extendCurves } from '@jiaminghi/transition'

const curveName = 'linear'

// Can be obtained by drawing tools
const bezierCurve = [[[0, 1]], [[1, 0]]]

extendCurves(curveName, bezierCurve)
```

[Easing curve drawing tool](http://transition.jiaminghi.com/EN/draw/)

<h3 align="center">Easing Curve Table</h3>

- [linear](#linear)
- [easeInSine](#easeInSine)
- [easeOutSine](#easeOutSine)
- [easeInOutSine](#easeInOutSine)
- [easeInQuad](#easeInQuad)
- [easeOutQuad](#easeOutQuad)
- [easeInOutQuad](#easeInOutQuad)
- [easeInCubic](#easeInCubic)
- [easeOutCubic](#easeOutCubic)
- [easeInOutCubic](#easeInOutCubic)
- [easeInQuart](#easeInQuart)
- [easeOutQuart](#easeOutQuart)
- [easeInOutQuart](#easeInOutQuart)
- [easeInQuint](#easeInQuint)
- [easeOutQuint](#easeOutQuint)
- [easeInOutQuint](#easeInOutQuint)
- [easeInBack](#easeInBack)
- [easeOutBack](#easeOutBack)
- [easeInOutBack](#easeInOutBack)
- [easeInElastic](#easeInElastic)
- [easeOutElastic](#easeOutElastic)
- [easeInOutElastic](#easeInOutElastic)
- [easeInBounce](#easeInBounce)
- [easeOutBounce](#easeOutBounce)
- [easeInOutBounce](#easeInOutBounce)

#### linear

![linear](/exampleImg/linear.gif)

#### easeInSine

![linear](/exampleImg/easeInSine.gif)

#### easeOutSine

![linear](/exampleImg/easeOutSine.gif)

#### easeInOutSine

![linear](/exampleImg/easeInOutSine.gif)

#### easeInQuad

![linear](/exampleImg/easeInQuad.gif)

#### easeOutQuad

![linear](/exampleImg/easeOutQuad.gif)

#### easeInOutQuad

![linear](/exampleImg/easeInOutQuad.gif)

#### easeInCubic

![linear](/exampleImg/easeInCubic.gif)

#### easeOutCubic

![linear](/exampleImg/easeOutCubic.gif)

#### easeInOutCubic

![linear](/exampleImg/easeInOutCubic.gif)

#### easeInQuart

![linear](/exampleImg/easeInQuart.gif)

#### easeOutQuart

![linear](/exampleImg/easeOutQuart.gif)

#### easeInOutQuart

![linear](/exampleImg/easeInOutQuart.gif)

#### easeInQuint

![linear](/exampleImg/easeInQuint.gif)

#### easeOutQuint

![linear](/exampleImg/easeOutQuint.gif)

#### easeInOutQuint

![linear](/exampleImg/easeInOutQuint.gif)

#### easeInBack

![linear](/exampleImg/easeInBack.gif)

#### easeOutBack

![linear](/exampleImg/easeOutBack.gif)

#### easeInOutBack

![linear](/exampleImg/easeInOutBack.gif)

#### easeInElastic

![linear](/exampleImg/easeInElastic.gif)

#### easeOutElastic

![linear](/exampleImg/easeOutElastic.gif)

#### easeInOutElastic

![linear](/exampleImg/easeInOutElastic.gif)

#### easeInBounce

![linear](/exampleImg/easeInBounce.gif)

#### easeOutBounce

![linear](/exampleImg/easeOutBounce.gif)

#### easeInOutBounce

![linear](/exampleImg/easeInOutBounce.gif)

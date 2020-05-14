[ENGLISH](./README_EN.md)

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

### Transition 是什么?

- 它是一个基于**贝塞尔曲线**的动效插件。
- 它提供常用的**缓动曲线**。
- 支持**自定义**缓动曲线。

### 动画是如何产生的?

- 获取一帧动画数据
- 根据动画数据渲染图像
- 重复...

我们可以使用三组数据去描述一段动画（**动画起始状态**、**动画结束状态**、**缓动曲线**），根据这三组数据我们可以计算出动画过程中每一帧动画的状态。这就是**_Transition_**所提供的功能，根据每一帧动画的状态，我们不断的进行重绘，动画就产生了。

### npm 安装

```shell
$ npm install @jiaminghi/transition
```

### 使用

```javascript
import { transition, injectNewCurve } from '@jiaminghi/transition'

// do something
```

### 快速体验

```html
<!--调试版-->
<script src="https://unpkg.com/@jiaminghi/transition/dist/index.js"></script>
<!--压缩版-->
<script src="https://unpkg.com/@jiaminghi/transition/dist/index.min.js"></script>
<script>
  const { transition, extendCurves, createAnimator } = window.transition
  // do something
</script>
```

详细文档及示例请移步[HomePage](http://transition.jiaminghi.com).

- [注解](#注解)
- [示例](#示例)
- [扩展新曲线](#扩展新曲线)
- [缓动曲线表](#缓动曲线表)

---

<h3 align="center">注解</h3>

```typescript
/**
 * @description 基于缓动曲线及起止状态获取若干帧动画状态
 * @param {EaseCurve} easeCurve 缓动曲线名或数据
 * @param {T} startState        动画起始状态
 * @param {T} endState          动画结束状态
 * @param {Number} frameNum     动画过渡帧数
 * @param {Boolean} deep        是否启用递归模式
 * @return {T[]} 过渡帧数据
 */
type transition = <T>(
  easeCurve: EaseCurve,
  startState: T,
  endState: T,
  frameNum = 30,
  deep = false
) => T[]
```

<h3 align="center">示例</h3>

**Transition** 支持三种数据类型以描述动画状态.

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

启用递归模式以计算`Array`或`Object`中的深层数据.

```typescript
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

- 非数值的属性或元素不参与计算过程.
- 起始状态与结束状态的数据类型（包括属性及元素的数量）必须保持一致.

<h3 align="center">扩展新曲线</h3>

如果你想扩展新的缓动曲线，你可以使用`Transition`提供的`extendCurves`方法去扩展。

```javascript
import { extendCurves } from '@jiaminghi/transition'

const curveName = 'linear'

// 可以使用绘制工具获得
const bezierCurve = [[[0, 1]], [[1, 0]]]

extendCurves(curveName, bezierCurve)
```

[缓动曲线绘制工具](http://transition.jiaminghi.com/draw/)

<h3 align="center">缓动曲线表</h3>

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

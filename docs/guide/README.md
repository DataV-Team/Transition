---
sidebarDepth: 3
---

# 介绍

**Transition**是一个动效插件，用于在**JS**环境下的动效状态计算。

我们可以使用**动画起始状态**、**动画结束状态**、**过渡动效**、**动画时长(帧数)** 这四个参数去精确描述一段动画，**Transition**可以根据上述参数计算出动画每一帧的状态，这样按序绘制出每一帧，动画就产生了。

**Transition**内置了常用的基础动效[(曲线表)](/curveTable/)，它们是基于 _tween.js_ 封装的。与 *tween.js*不同的是**Transition**还支持自定义动效，扩展基础动效曲线[(绘制动效曲线)](/draw/)。

## 实现

三次方贝塞尔曲线由四个点构成 **_P_<sub>0</sub>、_P_<sub>1</sub>、_P_<sub>2</sub>、_P_<sub>3</sub>**。**_P_<sub>0</sub>** 与 **_P_<sub>3</sub>** 分别为曲线起始点与结束点，**_P_<sub>1</sub>** 与 **_P_<sub>2</sub>** 分别为曲线的两个控制点，但曲线通常不会经过这两个点，曲线公式如下：

- 三次方贝塞尔曲线

**B(_t_) = P<sub>0</sub>(1 - _t_)<sup>3</sup> + 3P<sub>1</sub>_t_(1 - t)<sup>2</sup> + 3P<sub>2</sub>_t_<sup>2</sup>(1 - t) + P<sub>3</sub>_t_<sup>3</sup>**

由公式可知，我们可以获取范围内任意时刻曲线上一点的点坐标 **(_t_: [0 - 1])** 。将曲线起始点与终止点抽象成动画开始与结束，范围内任意时刻的点即对应该时刻动画过渡所属帧的状态位置。

## 安装

- npm 安装

```sh
npm install @jiaminghi/transition
```

- yarn 安装

```sh
yarn add @jiaminghi/transition
```

## 使用

```javascript
import { transition, extendCurves, createAnimator } from '@jiaminghi/transition'

// do something
```

## 快速体验

```html
<!--调试版-->
<script src="https://unpkg.com/@jiaminghi/transition/dist/index.js"></script>
<!--压缩版-->
<script src="https://unpkg.com/@jiaminghi/transition/dist/index.min.js"></script>
<script>
  const { transition, extendCurves, createAnimator } = window.Transition

  // do something
</script>
```

## API

**Transition**内置了 3 个 API：

- *transition*是用于计算动画过渡帧状态

- *extendCurves*扩展内置缓动曲线，便于复用

- *createAnimator*简单的动画器支持

## transition

```typescript
/**
 * @description 根据动效曲线、起始状态、结束状态、动画帧数获取动画每一帧的状态
 * 递归模式下将计算状态的深层属性
 * @param {EaseCurve} easeCurve 动效曲线或曲线数据
 * @param {Any} startState      动画起始状态
 * @param {Any} endState        动画结束状态
 * @param {Number} frameNum     动画帧数
 * @param {Boolean} deep        是否启用递归模式
 * @return {Array} 每一帧的动画的状态数据
 */
type transition = <T>(
  easeCurve: EaseCurve,
  startState: T,
  endState: T,
  frameNum = 30,
  deep = false
) => T[]
```

### number

```typescript
import { transition } from '@jiaminghi/transition'

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

### array

```typescript
import { transition } from '@jiaminghi/transition'

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

### object

```typescript
import { transition } from '@jiaminghi/transition'

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

### deep

```typescript
import { transition } from '@jiaminghi/transition'

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

## entendCurves

```typescript
/**
 * @description 扩展动效曲线
 * 可以将自定义的动效曲线扩展至基础动效曲线
 * @param {string} curveName      曲线名
 * @param {TransitionCurve} curve 曲线数据
 * @return {boolean} 扩展结果
 */
type extendCurves = (curveName: string, transitionCurve: TransitionCurve) => boolean
```

## createAnimator

```typescript
/**
 * @description 绘制器
 * 根据传入的帧状态和帧索引绘制当前帧
 * @param {any} frameState    单帧动画状态
 * @param {number} frameIndex 当前帧索引
 * @return {false} 如果返回false 将结束动画
 */
type Render<T> = (frameState: T, frameIndex: number) => false

/**
 * @description 接受一个绘制器返回一个动画器
 * 传入动画状态队列将自动调用绘制器进行动画绘制
 * @param {Render} render 绘制器
 * @return {Function} 动画器
 */
type createAnimator = <T>(render: Render<T>) => (state: T[]) => Promise<void>

// 示例 渲染一个方块的位移动画
const square = document.querySelector('#square')

// 定义起止状态
type SquareState = { left: number; width: number }
const startState: SquareState = { left: 0, width: 10 }
const endState: SquareState = { left: 300, width: 30 }
// 定义缓动曲线
const easeCurve = 'easeOutBounce'
// 动画持续60帧
const frameNum = 60

const renderCircle = ({ left, width }: SquareState) => {
  square.style.left = `${left}px`
  square.style.width = `${width}px`
}

const animator = createAnimator(renderCircle)
const state = transition(easeCurve, startState, endState, frameNum)

// 开始动画
animator(state).then(_ => {
  // 动画结束后的callback
})
```

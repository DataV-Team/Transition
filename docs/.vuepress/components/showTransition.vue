<template>
  <div class="show-transition" @click="playAnimation">
    <canvas ref="show-transition" />
  </div>
</template>

<script>
import canvasMixin from '../mixins/canvasMixin.js'
import CRender from '@jiaminghi/c-render'

export default {
  name: 'ShowTransition',
  mixins: [canvasMixin],
  props: ['data'],
  data() {
    return {
      render: null,

      rectPercent: [0.7, 0.5],

      rectWH: [0, 0],

      rectStartPoint: [],

      startPointPos: [0, 0],
      endPointPos: [0, 0],

      curveLength: 0,

      // render graph
      bezierCurve: null,
      point: null,

      curveColor: '#ee6d66',
      pointColor: '#9ce5f4',

      animationFrame: 60,
    }
  },
  methods: {
    init() {
      const { initRender, initRect, initBezierCurve } = this

      initRender()

      initRect()

      initBezierCurve()

      const { initPoint, playAnimation } = this

      initPoint()

      playAnimation()
    },
    initRender() {
      const { $refs } = this

      const canvas = $refs['show-transition']

      this.render = new CRender(canvas)
    },
    initRect() {
      const {
        render,
        rectPercent: [pw, ph],
        data,
      } = this

      const {
        area: [w, h],
      } = render

      const [rw, rh] = [w * pw, h * ph]

      this.rectWH = [rw, rh]

      const [x, y] = [(w - rw) / 2, (h - rh) / 2]

      this.rectStartPoint = [x, y]

      render.add({
        name: 'rect',
        animationCurve: data,
        shape: {
          x,
          y,
          w: rw,
          h: rh,
        },
        style: {
          stroke: '#46bd87',
          fill: 'rgba(0,0,0,0)',
          lineWidth: 1,
        },
      })
    },
    initBezierCurve() {
      const { data, axisChange, render, curveColor, animationFrame } = this

      const axisChangedPoints = data.map(curve =>
        curve.map(point => (point ? axisChange(point) : null))
      )

      const bezierCurve = axisChangedPoints.reduce(
        (curve, [endPoint, ctlPoint2], i) => {
          if (i === 0) return curve

          const lastSeg = axisChangedPoints[i - 1]
          const startPoint = lastSeg[0]
          let ctlPoint1 = lastSeg[2]

          if (!ctlPoint1) ctlPoint1 = [...startPoint]
          if (!ctlPoint2) ctlPoint2 = [...endPoint]

          curve.push([ctlPoint1, ctlPoint2, endPoint])

          return curve
        },
        [axisChangedPoints[0][0]]
      )

      const curveLength = (this.curveLength = render.bezierCurve.getBezierCurveLength(bezierCurve))

      this.bezierCurve = render.add({
        name: 'bezierCurve',
        animationCurve: data,
        animationFrame,
        shape: {
          points: bezierCurve,
        },
        style: {
          lineWidth: 2,
          stroke: curveColor,
          lineDash: [0, curveLength],
          lineJoin: 'round',
        },
      })
    },
    axisChange([x, y]) {
      const {
        rectStartPoint: [ox, oy],
        rectWH: [w, h],
      } = this

      return [x * w + ox, y * h + oy]
    },
    initPoint() {
      const {
        render,
        rectWH: [rw, rh],
        data,
        pointColor,
        animationFrame,
      } = this

      const {
        area: [w, h],
      } = render

      const y = h / 2

      const startX = (w - rw) / 2
      const endX = startX + rw

      this.startPointPos = [startX, y]
      this.endPointPos = [endX, y]

      this.point = render.add({
        name: 'circle',
        animationCurve: data,
        animationFrame,
        shape: {
          rx: startX,
          ry: y,
          r: 7,
        },
        style: {
          fill: pointColor,
        },
      })
    },
    playAnimation() {
      const { bezierCurve, point } = this
      const { curveLength, startPointPos, endPointPos } = this

      bezierCurve.animationEnd()
      point.animationEnd()

      bezierCurve.attr('style', {
        lineDash: [0, curveLength],
      })

      point.attr('shape', {
        rx: startPointPos[0],
        ry: startPointPos[1],
      })

      bezierCurve.animation('style', {
        lineDash: [curveLength, 0],
      })

      point.animation('shape', {
        rx: endPointPos[0],
        ry: endPointPos[1],
      })
    },
  },
  mounted() {
    const { init } = this

    init()
  },
}
</script>

<style lang="less">
.show-transition {
  position: relative;
  height: 300px;
  cursor: pointer;

  canvas {
    width: 100%;
    height: 100%;
  }
}
</style>

<template>
  <div id="demonstration">
    <div class="play-btn" @click="reDraw">{{ en ? 'Re Preview' : '重新预览' }}</div>
    <div class="canvas-container">
      <canvas ref="canvas" />
    </div>
    <div class="animation-config">
      <div class="config-item">
        <div class="title">{{ en ? 'Frame Num' : '帧数' }}</div>
        <progresser :progress="animationFrameNumProgress" @change="setAnimationFrameNum" />
        <div class="value">{{ animationFrameNum }}</div>
      </div>
      <div class="config-item">
        <div class="title">{{ en ? 'Dot start radius' : '球点起始半径' }}</div>
        <progresser :progress="circleBeginRadiusProgress" @change="setCircleBeginRadius" />
        <div class="value">{{ circleBeginRadius }}</div>
      </div>
      <div class="config-item">
        <div class="title">{{ en ? 'Dot end radius' : '球点结束半径' }}</div>
        <progresser :progress="circleEndRadiusProgress" @change="setCircleEndRadius" />
        <div class="value">{{ circleEndRadius }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import canvasMixin from '../mixins/canvasMixin.js'

import transition from '../../../es/index.js'

export default {
  name: 'Demonstration',
  mixins: [canvasMixin],
  props: ['data', 'en'],
  data() {
    return {
      animationLength: 0.7,

      animationAreaOriginPos: [0, 0],

      circleColor: '#46bd87',
      areaLineColor: '#ee66aa',

      circleRadius: 6,

      // ctl
      animationFrameNumProgress: 0.1,
      animationFrameNum: 0,

      circleBeginRadiusProgress: 0.5,
      circleEndRadiusProgress: 0.5,

      circleBeginRadius: 0,
      circleEndRadius: 0,

      // data
      circleBeginState: [],
      circleEndState: [],

      animationFrameData: [],
      animationHandler: '',
    }
  },
  watch: {
    data() {
      const { stopAnimation, draw } = this

      stopAnimation()

      draw()
    },
  },
  methods: {
    async init() {
      const { initCanvas, calcAnimationAreaOriginPos, initProgresser } = this

      await initCanvas('canvas')

      calcAnimationAreaOriginPos()

      initProgresser()

      const { calcCircleBEState, draw } = this

      calcCircleBEState()

      draw()
    },
    calcAnimationAreaOriginPos() {
      const { canvasWH, animationLength } = this

      const x = (canvasWH[0] * (1 - animationLength)) / 2

      this.animationAreaOriginPos = [x, 0]
    },
    initProgresser() {
      const { setAnimationFrameNum, setCircleBeginRadius, setCircleEndRadius } = this

      const { animationFrameNumProgress, circleBeginRadiusProgress, circleEndRadiusProgress } = this
      setAnimationFrameNum(animationFrameNumProgress)

      setCircleBeginRadius(circleBeginRadiusProgress)

      setCircleEndRadius(circleEndRadiusProgress)
    },
    setAnimationFrameNum(v) {
      this.animationFrameNumProgress = v

      this.animationFrameNum = parseInt(30 + 60 * v)
    },
    setCircleBeginRadius(v) {
      this.circleBeginRadiusProgress = v

      this.circleBeginRadius = parseInt(3 + 12 * v)
    },
    setCircleEndRadius(v) {
      this.circleEndRadiusProgress = v

      this.circleEndRadius = parseInt(3 + 12 * v)
    },
    calcCircleBEState() {
      const {
        animationAreaOriginPos: [bx],
        canvasWH: [w],
        centerPos: [, y],
      } = this

      const { animationLength, circleBeginRadius, circleEndRadius } = this

      this.circleBeginState = [bx, y, circleBeginRadius]
      this.circleEndState = [bx + w * animationLength, y, circleEndRadius]
    },
    draw() {
      const { calcAnimationFrameData, drawAnimation } = this

      calcAnimationFrameData()

      drawAnimation()
    },
    calcAnimationFrameData() {
      const { data, circleBeginState, circleEndState, animationFrameNum } = this

      this.animationFrameData = transition(
        data,
        circleBeginState,
        circleEndState,
        animationFrameNum
      )
    },
    drawAnimation() {
      const { animationFrameData, drawAnimation } = this

      if (!animationFrameData) return

      const currentCircleOriginPos = animationFrameData.shift()

      if (!currentCircleOriginPos) return

      const { clearCanvas, drawGrid, drawCircle } = this

      clearCanvas()

      drawGrid()

      drawCircle(currentCircleOriginPos)

      this.animationHandler = requestAnimationFrame(drawAnimation)
    },
    drawGrid() {
      const {
        ctx,
        animationLength,
        animationAreaOriginPos: [x, y],
        canvasWH: [w, h],
        areaLineColor,
      } = this

      ctx.strokeStyle = areaLineColor

      ctx.beginPath()

      ctx.moveTo(x, y)
      ctx.lineTo(x, h)

      ctx.moveTo(x + animationLength * w, 0)
      ctx.lineTo(x + animationLength * w, h)

      ctx.closePath()

      ctx.stroke()
    },
    drawCircle(pos) {
      const { ctx, circleColor } = this

      ctx.beginPath()

      ctx.fillStyle = circleColor

      ctx.arc(...pos, 0, Math.PI * 2)

      ctx.closePath()

      ctx.fill()
    },
    stopAnimation() {
      const { animationHandler } = this

      if (!animationHandler) return

      cancelAnimationFrame(animationHandler)
    },
    reDraw() {
      const { stopAnimation, calcCircleBEState, draw } = this

      stopAnimation()

      calcCircleBEState()

      draw()
    },
  },
  mounted() {
    const { init } = this

    init()
  },
}
</script>

<style lang="less">
.demonstration {
  .play-btn {
    margin-bottom: 10px;
    width: 100%;
    height: 35px;
    line-height: 35px;
    cursor: pointer;
    background-color: #46bd87;
    color: #fff;
    text-align: center;

    &:active {
      color: #46bd87;
    }
  }

  .canvas-container {
    box-shadow: 0 0 3px #46bd87;
    height: 150px;
  }

  canvas {
    width: 100%;
    height: 100%;
  }

  .animation-config {
    margin-top: 10px;
    font-size: 14px;

    .config-item {
      width: 100%;
      padding: 5px 0px;
      display: flex;
      align-items: center;
    }

    .title {
      width: 105px;
      text-align: right;
      padding-right: 10px;
      font-weight: bold;
    }

    .value {
      width: 50px;
      text-align: center;
      font-weight: bold;
      color: #46bd87;
    }
  }
}
</style>

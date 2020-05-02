<template>
  <div id="draw">
    <div class="action-container">
      <div class="point-position">
        <div>X:<input type="text" :value="xPos" placeholder="xPos" readonly /></div>
        <div>Y:<input type="text" :value="yPos" placeholder="yPos" readonly /></div>
      </div>

      <div class="action">
        <div class="delete-point" @click="deletePoint">{{ en ? 'Delete Point' : '删除该点' }}</div>
        <div class="redraw" @click="reDraw">{{ en ? 'Re Draw' : '重新绘制' }}</div>
      </div>
    </div>

    <div class="linedata" v-html="lineDataTag" />

    <click-to-copy :info="lineData" />

    <div class="canvas-container">
      <canvas
        ref="canvas"
        @mousedown="mouseDonwHandler"
        @mousemove="mouseMoveHandler"
        @mouseup="mouseUpHandler"
      />
    </div>
  </div>
</template>

<script>
import canvasMixin from '../mixins/canvasMixin.js'

export default {
  name: 'Draw',
  mixins: [canvasMixin],
  props: {
    en: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      // config
      mainColor: '#46bd87',
      cPMLColor: '#ffe793',
      bePointColor: ['#30e8bd', '#ee66aa'],
      mcPointColor: ['#30c9e8', '#ee6dee'],
      mcPointRadius: [5, 4],
      drawAreaWH: [0, 0],

      actionArea: [0.7, 0.5],

      // data
      xPos: 0,
      yPos: 0,

      moveAction: false,

      drawAreaOriginPos: [0, 0],

      bezierCurve: [],

      lineData: '',
      lineDataTag: '',
      changedAxisLineData: [],

      // for event
      clickPos: [0, 0],
      hitPoint: false,
      appendCP: false,
    }
  },
  watch: {
    /**
     * @description        Set the coordinates of the hit point
     * @param {Number}     index index of bezier curve
     * @return {Undefined} no return
     */
    hitPoint(index) {
      const { bezierCurve, changeAxis } = this

      if (!index) return false

      const point = changeAxis(bezierCurve[index[0]][index[1]])

      this.xPos = point[0]
      this.yPos = point[1]
    },
  },
  methods: {
    async init() {
      const { initCanvas, calcDrawAreaConfig, initDrawAreaWH } = this

      await initCanvas('canvas')

      initDrawAreaWH()

      calcDrawAreaConfig()

      const { initBezierCurveData, draw } = this

      initBezierCurveData()

      draw()
    },
    initDrawAreaWH() {
      const {
        actionArea: [wp, hp],
        canvasWH: [w, h],
      } = this

      this.drawAreaWH = [wp * w, hp * h]
    },
    calcDrawAreaConfig() {
      const { canvasWH, drawAreaWH, drawAreaOriginPos } = this

      drawAreaOriginPos[0] = (canvasWH[0] - drawAreaWH[0]) / 2
      drawAreaOriginPos[1] = (canvasWH[1] - drawAreaWH[1]) / 2
    },
    initBezierCurveData() {
      this.bezierCurve = []

      const { bezierCurve, drawAreaWH, drawAreaOriginPos } = this

      bezierCurve.push(
        [[drawAreaOriginPos[0], drawAreaOriginPos[1] + drawAreaWH[1]]],
        [[drawAreaOriginPos[0] + drawAreaWH[0], drawAreaOriginPos[1]]]
      )
    },
    draw() {
      const { clearCanvas, drawGrid, drawPoints } = this

      clearCanvas()

      drawGrid()

      drawPoints()

      const { drawBezierCurveLine, drawCPMLine, calcLineData } = this

      drawBezierCurveLine()

      drawCPMLine()

      calcLineData()

      const { emitEvent } = this

      emitEvent()
    },
    drawGrid() {
      const { ctx, drawAreaOriginPos, drawAreaWH, mainColor } = this

      ctx.strokeStyle = mainColor

      ctx.strokeRect(...drawAreaOriginPos, ...drawAreaWH)
    },
    drawPoints() {
      const { drawItemPoints, bezierCurve } = this

      bezierCurve.forEach((item, i) => drawItemPoints(item, i))
    },
    drawItemPoints(points, index) {
      const { ctx, bezierCurve, bePointColor, mcPointColor, mcPointRadius } = this

      const lastIndex = bezierCurve.length - 1

      points.forEach((point, i) => {
        if (index === 0 && i === 1) return
        if (index === lastIndex && i === 2) return
        if (!point) return

        let radius = 0

        if (i === 0) {
          ctx.fillStyle = mcPointColor[0]

          index === 0 && (ctx.fillStyle = bePointColor[0])
          index === lastIndex && (ctx.fillStyle = bePointColor[1])

          radius = mcPointRadius[0]
        } else {
          ctx.fillStyle = mcPointColor[1]

          radius = mcPointRadius[1]
        }

        ctx.beginPath()

        ctx.arc(...point, radius, 0, Math.PI * 2)

        ctx.fill()
      })
    },
    drawBezierCurveLine() {
      const { ctx, bezierCurve, mainColor } = this

      const lastIndex = bezierCurve.length - 1

      ctx.beginPath()

      bezierCurve.forEach((item, i) => {
        if (i === lastIndex) return

        if (i === 0) ctx.moveTo(...item[0])

        const destination = bezierCurve[i + 1]

        const cP1 = item[2] || item[0]
        const cp2 = destination[1] || destination[0]

        const des = destination[0]

        ctx.bezierCurveTo(...cP1, ...cp2, ...des)
      })

      ctx.strokeStyle = mainColor

      ctx.stroke()
    },
    drawCPMLine() {
      const { ctx, cPMLColor, bezierCurve } = this

      ctx.strokeStyle = cPMLColor

      bezierCurve.forEach(item => {
        const mainPoint = item[0]

        item.forEach((point, i) => {
          if (i === 0 || !point) return

          ctx.beginPath()

          ctx.moveTo(...mainPoint)
          ctx.lineTo(...point)

          ctx.stroke()
        })
      })
    },
    mouseDonwHandler({ offsetX, offsetY }) {
      const { checkClickIsInDrawArea, checkClickResult, bezierCurve, draw } = this

      const isInDrawArea = checkClickIsInDrawArea([offsetX, offsetY])
      const clickResult = checkClickResult([offsetX, offsetY])

      const lastIndex = bezierCurve.length - 1

      isInDrawArea && !clickResult && bezierCurve.splice(lastIndex, 0, [[offsetX, offsetY]])

      this.appendCP = isInDrawArea && !clickResult

      this.hitPoint = clickResult

      this.moveAction = true

      draw()
    },
    mouseMoveHandler({ offsetX, offsetY }) {
      const { moveAction, appendCP, hitPoint } = this

      if (!moveAction || !(appendCP || hitPoint)) return

      this.clickPos = [offsetX, offsetY]

      const { doDrag, draw } = this

      doDrag()

      draw()
    },
    doDrag() {
      const { appendCP, hitPoint } = this

      const { moveNewCP, movePoint } = this

      if (appendCP) moveNewCP()

      if (hitPoint) movePoint()
    },
    moveNewCP(index = false) {
      const { bezierCurve, appendCP, clickPos, getNewBeginPoint } = this

      const lastIndex = bezierCurve.length - 2

      let moveIndex = index
      moveIndex === false && (moveIndex = lastIndex)

      const mainPoint = bezierCurve[moveIndex][0]

      const ePoint = clickPos
      const bPoint = getNewBeginPoint(clickPos, mainPoint)

      bezierCurve[moveIndex][1] = bPoint
      bezierCurve[moveIndex][2] = ePoint
    },
    movePoint() {
      const { hitPoint, bezierCurve, moveNewCP, clickPos, changeAxis } = this

      const lastIndex = bezierCurve.length - 1

      if (hitPoint[0] === 0 || hitPoint[0] === lastIndex) return

      const position = clickPos

      if (hitPoint[1] === 0) {
        const lastMainPointPos = bezierCurve[hitPoint[0] - 1][0]

        if (position[0] <= lastMainPointPos[0]) position[0] = lastMainPointPos[0] + 2
      }

      bezierCurve[hitPoint[0]][hitPoint[1]] = position

      const changedPoint = changeAxis(position)

      this.xPos = changedPoint[0]
      this.yPos = changedPoint[1]
    },
    getNewBeginPoint([x, y], [mx, my]) {
      const minusX = x - mx
      const minusY = y - my

      return [mx - minusX, my - minusY]
    },
    mouseUpHandler() {
      this.moveAction = false
    },
    checkClickIsInDrawArea([x, y]) {
      const { drawAreaOriginPos, drawAreaWH } = this

      const minX = drawAreaOriginPos[0]
      const minY = drawAreaOriginPos[1]

      const maxX = drawAreaOriginPos[0] + drawAreaWH[0]
      const maxY = drawAreaOriginPos[1] + drawAreaWH[1]

      if (x > maxX || x < minX) return false
      if (y > maxY || y < minY) return false

      return true
    },
    checkClickResult(click) {
      const { bezierCurve, checkIsClickItemPoint } = this

      let pointIndex = false

      const itemIndex = bezierCurve.findIndex(
        (item, i) => (pointIndex = checkIsClickItemPoint(item, i, click)) !== false
      )

      if (itemIndex === -1) return false

      return [itemIndex, pointIndex]
    },
    checkIsClickItemPoint(item, index, click) {
      const { checkIsClickPoint } = this

      const pointIndex = item.findIndex(
        (point, i) => checkIsClickPoint(point, index, i, click) !== false
      )

      return pointIndex === -1 ? false : pointIndex
    },
    checkIsClickPoint(point, index, i, click) {
      const { bezierCurve, checkClickIsInCircle, mcPointRadius } = this

      const lastIndex = bezierCurve.length - 1

      if (index === 0 && i === 1) return false
      if (index === lastIndex && i === 2) return false

      const result = checkClickIsInCircle(click, point, mcPointRadius[i > 0 ? 1 : 0])

      return result ? i : false
    },
    checkClickIsInCircle(click, oPos, radius) {
      const { abs, sqrt } = Math

      const absX = abs(click[0] - oPos[0])
      const absY = abs(click[1] - oPos[1])

      const dis = sqrt(absX * absX + absY * absY)

      return dis < radius
    },
    calcLineData() {
      const { calcLineDataString, calcLineDataStringTag, changeAxis, bezierCurve } = this

      const points = bezierCurve.map(item => item.map(p => (p ? changeAxis(p) : '')))

      this.changedAxisLineData = points

      calcLineDataString(points)

      calcLineDataStringTag(points)
    },
    calcLineDataString(points) {
      let lineDataString = '['

      points.forEach((item, i) => {
        i === 0 && (lineDataString += '[')
        i !== 0 && (lineDataString += ',[')

        item.forEach((point, j) => {
          if (j !== 0) lineDataString += ', '

          if (point) {
            lineDataString += `[${point[0]}, ${point[1]}]`
          } else {
            lineDataString += `['']`
          }
        })

        lineDataString += ']'
      })

      lineDataString += ']'

      this.lineData = lineDataString
    },
    calcLineDataStringTag(points) {
      let lineDataString = '[ '

      points.forEach((item, i) => {
        i === 0 && (lineDataString += '[ ')
        i !== 0 && (lineDataString += ', [ ')

        item.forEach((point, j) => {
          if (j !== 0) lineDataString += ', '

          if (point) {
            lineDataString += `[ <span>${point[0]}</span>, <span>${point[1]}</span> ]`
          } else {
            lineDataString += `[ <span>''</span> ]`
          }
        })

        lineDataString += ' ]'
      })

      lineDataString += ' ]'

      this.lineDataTag = lineDataString
    },
    emitEvent() {
      const { changedAxisLineData } = this

      this.$emit('input', changedAxisLineData)
    },
    changeAxis([x, y]) {
      const {
        drawAreaOriginPos: [ox, oy],
        drawAreaWH: [w, h],
      } = this

      return [((x - ox) / w).toFixed(3), ((y - oy) / h).toFixed(3)]
    },
    axisChange([x, y]) {
      const {
        drawAreaOriginPos: [ox, oy],
        drawAreaWH: [w, h],
      } = this

      return [x * w + ox, y * h + oy]
    },
    deletePoint() {
      const { hitPoint, bezierCurve, draw } = this

      if (!hitPoint) return

      const hitPointString = hitPoint.join('')

      const lastIndex = bezierCurve.length - 1

      if (hitPoint[0] === 0 || hitPoint[0] === lastIndex) return

      if (hitPoint[1] === 0) bezierCurve.splice(hitPoint[0], 1)

      if (hitPoint[1] !== 0) bezierCurve[hitPoint[0]][hitPoint[1]] = ''

      draw()
    },
    reDraw() {
      const { initBezierCurveData, draw } = this

      initBezierCurveData()

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
#draw {
  position: relative;

  .canvas-container {
    height: 500px;
    box-shadow: 0 0 3px #46bd87;
    margin-top: 10px;

    canvas {
      width: 100%;
      height: 100%;
    }
  }

  .point-position {
    width: 300px;
    margin-left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    input {
      outline: none;
      border: 1px solid #cfd4db;
      height: 30px;
      width: 80px;
      margin-left: 10px;
      text-indent: 5px;
      font-size: 16px;
      color: #2c3e50;

      &:focus {
        border-color: #46bd87;
      }

      &::-webkit-input-placeholder {
        color: #999;
      }
    }
  }

  .action {
    display: flex;
    margin-top: 10px;
    text-align: center;
    margin-bottom: 10px;
    color: #fff;
    justify-content: space-between;

    .delete-point,
    .redraw {
      height: 35px;
      line-height: 35px;
      cursor: pointer;
      width: calc(~'50% - 5px');
    }

    .delete-point {
      background-color: #ee6d66;

      &:active {
        color: #ee6d66;
      }
    }

    .redraw {
      background-color: #46bd87;

      &:active {
        color: #46bd87;
      }
    }
  }

  .linedata {
    padding: 15px;
    background-color: #282c34;
    border-radius: 5px;
    margin-bottom: 10px;
    color: #fff;
    font-size: 14px;

    span {
      color: #f08d49;
    }
  }
}
</style>

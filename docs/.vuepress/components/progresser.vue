<template>
  <div class="progress" :ref="pgsRef" @click="turnProgress">
    <div class="enhance-click-area"></div>
    <div class="current-progress" :style="`width: ${progress * 100}%;`" />
    <div
      :class="`${btnClass || ''} change-progress-btn`"
      :style="`left: ${progress * 100}%;`"
      @click.stop
      @mousedown="changeProgressStart"
    />
  </div>
</template>

<script>
export default {
  name: 'Progress',
  data() {
    return {
      // progresser container ref
      pgsRef: `progresser-${new Date().getTime()}`,
      // progresser dom
      progresser: '',
      // progresser width
      allWidth: 0,
      // last drag x pos
      lastDragXPos: false,
    }
  },
  props: ['progress', 'btnClass'],
  methods: {
    /**
     * @description        init
     * @return {undefined} no retrun
     */
    init() {
      const { pgsRef, $refs } = this

      this.progresser = $refs[pgsRef]

      this.allWidth = this.progresser.clientWidth
    },
    /**
     * @description        change progress start
     * @return {undefined} no return
     */
    changeProgressStart({ pageX }) {
      this.lastDragXPos = pageX

      const { changeProgress, changeProgressEnd } = this

      document.addEventListener('mousemove', changeProgress)

      document.addEventListener('mouseup', changeProgressEnd)
    },
    /**
     * @description             change progress
     * @return     {undefined}  no return
     */
    changeProgress({ pageX }) {
      if (!pageX) return

      const { lastDragXPos, allWidth, progress, emitChangeEvent } = this

      const addValue = (pageX - lastDragXPos) / allWidth

      let currentProgress = progress + addValue

      currentProgress > 1 && (currentProgress = 1)
      currentProgress < 0 && (currentProgress = 0)

      this.lastDragXPos = pageX

      emitChangeEvent(currentProgress)
    },
    /**
     * @description             change progress end
     * @return     {undefined}  no return
     */
    changeProgressEnd() {
      this.lastDragXPos = false

      const { changeProgress, changeProgressEnd } = this

      document.removeEventListener('mousemove', changeProgress)

      document.removeEventListener('mouseup', changeProgressEnd)
    },
    /**
     * @description             turn progress
     * @return     {undefined}  no return
     */
    turnProgress({ offsetX }) {
      const { allWidth, emitChangeEvent } = this

      const progress = offsetX / allWidth

      emitChangeEvent(progress)
    },
    /**
     * @description             emit change event
     * @return     {undefined}  no return
     */
    emitChangeEvent(value) {
      this.$emit('change', value)
    },
  },
  mounted() {
    const { init } = this

    init()
  },
}
</script>

<style lang="less">
.progress {
  position: relative;
  width: 100%;
  height: 3px;
  transition: all 0.3s;
  background-color: #6ed4d3;

  .enhance-click-area {
    position: absolute;
    top: -5px;
    width: 100%;
    height: 13px;
    cursor: pointer;
  }

  .current-progress {
    position: absolute;
    width: 300px;
    height: 100%;
    top: 0px;
    left: 0px;
    background-color: #46bd87;
    // background: linear-gradient(to right, #6ed4d3, #46bd87, #4bb7e4);
    // background: linear-gradient(to right, #6ed4d3, #f5738f, #4bb7e4);
  }

  .change-progress-btn {
    position: absolute;
    box-sizing: border-box;
    height: 11px;
    width: 11px;
    top: -4px;
    left: 300px;
    border-radius: 50%;
    background-color: #6ed4d3;
    box-shadow: 0 0 3px #ee6d66;
    // border: 3px solid #46bd87;
    cursor: pointer;
    transform: translate(-50%);
  }
}
</style>

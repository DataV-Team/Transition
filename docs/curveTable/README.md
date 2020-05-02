# 曲线表

插件配置了一些基础的动效曲线，你可以在这里查阅他们，点击即可重复播放

## linear

<show-transition :data="curves.get('linear')" />

## easeInSine

<show-transition :data="curves.get('easeInSine')" />

## easeOutSine

<show-transition :data="curves.get('easeOutSine')" />

## easeInOutSine

<show-transition :data="curves.get('easeInOutSine')" />

## easeInQuad

<show-transition :data="curves.get('easeInQuad')" />

## easeOutQuad

<show-transition :data="curves.get('easeOutQuad')" />

## easeInOutQuad

<show-transition :data="curves.get('easeInOutQuad')" />

## easeInCubic

<show-transition :data="curves.get('easeInCubic')" />

## easeOutCubic

<show-transition :data="curves.get('easeOutCubic')" />

## easeInOutCubic

<show-transition :data="curves.get('easeInOutCubic')" />

## easeInQuart

<show-transition :data="curves.get('easeInQuart')" />

## easeOutQuart

<show-transition :data="curves.get('easeOutQuart')" />

## easeInOutQuart

<show-transition :data="curves.get('easeInOutQuart')" />

## easeInQuint

<show-transition :data="curves.get('easeInQuint')" />

## easeOutQuint

<show-transition :data="curves.get('easeOutQuint')" />

## easeInOutQuint

<show-transition :data="curves.get('easeInOutQuint')" />

## easeInBack

<show-transition :data="curves.get('easeInBack')" />

## easeOutBack

<show-transition :data="curves.get('easeOutBack')" />

## easeInOutBack

<show-transition :data="curves.get('easeInOutBack')" />

## easeInElastic

<show-transition :data="curves.get('easeInElastic')" />

## easeOutElastic

<show-transition :data="curves.get('easeOutElastic')" />

## easeInOutElastic

<show-transition :data="curves.get('easeInOutElastic')" />

## easeInBounce

<show-transition :data="curves.get('easeInBounce')" />

## easeOutBounce

<show-transition :data="curves.get('easeOutBounce')" />

## easeInOutBounce

<show-transition :data="curves.get('easeInOutBounce')" />

<script>
import curves from '../.vuepress/curves/index.js'

export default {
  data () {
    return {
      curves
    }
  }
}

</script>

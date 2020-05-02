# 说明

你可以使用下边的绘制工具进行缓动曲线绘制，它的使用十分简单。工具中有**红**、**绿**两个初始点，绿色代表动效**起点**，红色代表动效**终点**。你可以通过点击绘制工具内部矩形空白区域，添加新的绘制点，缓动曲线自动生成

## 绘制操作

- 点击添加新绘制点的同时进行拖拽，可添加该点控制点

- 拖拽已有绘制点或控制点，可更改其位置

- 点击**删除该点**按钮可以删除点

- 点击**重绘**即可清空画布回到初始状态

- **重新预览**中可**实时**预览曲线动效

::: tip TIP
**起始点**和**终止点**不可删除
:::

## 绘制工具

<draw class="draw-component" v-model="bezierCurveData" />

## 动效预览

<demonstration class="demonstration" :data="bezierCurveData" />

## 提示

::: tip TIP
避免贝塞尔曲线 **时间(_t_)** 计算异常，单段曲线**终止点**必须位于**起始点**之后，绘制工具已做限制
:::

::: warning
两点间曲线不是全部有效的。下列示例中，两点间蓝色区域曲线是有效的，红色区域上部的曲线是无效的，应当避免单段曲线凸出两点**X**轴范围

![error demo](/demo.png)
:::

<script>
export default {
  data () {
    return {
      bezierCurveData: []
    }
  }
}
</script>

<style lang="less">
.draw-component {
  margin-top: 20px;
}

.demonstration {
  margin-top: 20px;
}
</style>

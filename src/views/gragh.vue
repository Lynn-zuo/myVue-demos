<template>
  <div class="graph">
    <h1>{{ msg }}</h1>
    <div id="echart1" style="width:100%; height:300px;"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'Echarts入门'
    }
  },
  mounted () { // 渲染完成后执行
    this.init()
  },
  methods: {
    init () {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById('echart1'))
      // 指定图表的配置项和数据
      var option = {
        title: {
          text: 'Echarts入门实例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      }
      // 使用刚指定的配置项和数据显示图表
      myChart.setOption(option)
    }
  }
}
</script>
<style lang="scss" scoped>
.graph{
  background: lightyellow;
}
</style>

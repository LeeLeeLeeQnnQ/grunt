<template>
  <div class="report">
    <div class="scrollBox" ref="scrollBox">
      <div class="report_chart">
        <div id="myChart" class="myChart"></div>
      </div>
      <div class="report_chart">
        <div id="myPie" class="myChart"></div>
      </div>
    </div>
    <Tabbar :selectedLabelDefault='tabbarName' class="tabbar" ref="tabbar"></Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar'
import { getScorllBoxHeight } from "@/js/util.js";
export default {
  name: 'report',
  components: {
    Tabbar
  },
  data () {
    return {
      tabbarName:'报表',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    this.$nextTick(() => {
      getScorllBoxHeight(this.$refs.scrollBox,this.$refs.tabbar.$el.offsetHeight);
    })
    this.drawLine();
    this.drawPie();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            title: { text: '柱状图' },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
        // window.addEventListener("resize", function () {
        //     setTimeout(function () {
        //         myChart.resize();
        //     }, 500)
        // });
    },
    drawPie(){
      // 基于准备好的dom，初始化echarts实例
        let myPie = this.$echarts.init(document.getElementById('myPie'))
        // 绘制图表

        let option = {
            title: { text: '环形图' },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            series: [
              {
                  name:'来源',
                  type:'pie',
                  radius: ['50%', '70%'],
                  avoidLabelOverlap: false,
                  label: {
                      normal: {
                          show: false,
                          position: 'center'
                      },
                      emphasis: {
                          show: true,
                          textStyle: {
                              fontSize: '30',
                              fontWeight: 'bold'
                          }
                      }
                  },
                  labelLine: {
                      normal: {
                          show: false
                      }
                  },
                  data:[
                      {value:335, name:'直接访问'},
                      {value:310, name:'邮件营销'},
                      {value:234, name:'联盟广告'},
                      {value:135, name:'视频广告'},
                      {value:1548, name:'搜索引擎'}
                  ]
              }
          ] 
        };
        myPie.setOption(option);
    }
  }
}
</script>
<style scoped lang="less">
  .report{
    background-color:#eee;
  }
  .report_chart{
    padding: 0 0 0.5rem 0;
    box-sizing:border-box;
  }
  .myChart{
    width: 100%;
    height: 10rem;
    background-color:#fff;
  }
</style>

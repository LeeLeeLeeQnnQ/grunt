<template>
  <cube-tab-bar
    class="tabbar"
    v-model="labelDefault"
    @click="clickHandler">
    <cube-tab class="tabbar-icon" v-for="(item, index) in tabs" :label="item.label" :key="item.label">
      <!-- name为icon的插槽 -->
      <i slot="icon" :class="item.icon"></i>
      <!-- 默认插槽 -->
      <span>{{item.label}}</span>
    </cube-tab>
  </cube-tab-bar>
</template>
<script>
export default {
  props: {
    selectedLabelDefault: {
      type: String
    },
  },
  data () {
    return {
      tabs: [
          {
            label: '首页',
            icon: 'cubeic-home',
            url:'home'
          },
          {
            label: '搜索',
            icon: 'cubeic-search',
            url:'search'
          },
          {
            label: '报表',
            icon: 'cubeic-aim',
            url:'report'
          },
          {
            label: '我的',
            icon: 'cubeic-person',
            url:'person'
          }
        ]
    }
  },
  computed:{
    labelDefault: {
      get () {
          return this.selectedLabelDefault
      },
      set (val) {
 
      }
    }
  },
  methods: {
    clickHandler (label) {
      this.tabs.forEach((item)=>{
        if(item.label == label){
          this.$router.push({
            name: item.url
          })
        }
      })
    },
  },
  mounted(){

  },
}
</script>
<style scoped lang="less">
  .tabbar{
    font-size: 0.5rem;
    &-icon{
      display: flex;
      flex-direction: column;
      span{
        font-size: 0.4rem;
        margin-top: 5px;
      }
    }
  }
</style>
<template>
  <div>
    
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String
    },
    url:{
      type: String
    }
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
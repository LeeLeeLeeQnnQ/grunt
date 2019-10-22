<template>
  <div id="app" class="main">
    <router-view/>
<!--     <keep-alive :exclude="excludeList">
      <router-view/>
    </keep-alive> -->
  </div>
</template>
<script>
export default {
  name: 'app',
  components: {
  },
  data () {
    return {
      excludeList:['home','search','report','person'],
    }
  },
  mounted(){
    
  },
  methods: {
  
  },
  watch:{
    
  },
}
</script>
<!-- 公用style -->
<style lang="less">
  .scrollBox{
    overflow:auto;
  }
</style>

<style lang="less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
    height: 100%;
  }
</style>

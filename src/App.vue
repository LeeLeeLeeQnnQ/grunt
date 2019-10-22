<template>
  <div id="app" class="main">
    <keep-alive :exclude="excludeList">
      <router-view/>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: 'app',
  components: {
  },
  data () {
    return {
      excludeList:[],
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
  #slide{
    width: 100%;
    a{
      display: flex;
      width: 100%;
      height: 6rem;
      overflow: hidden;
    }
    img{
      width: 100%;
    }
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

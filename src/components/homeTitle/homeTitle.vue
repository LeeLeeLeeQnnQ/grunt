<template>
  <div class="title">
    <h3>{{data.title}}</h3>
    <div @click="clickHandler">
      <span>更多</span>
      <span>>></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'homeTitle',
  props: {
    data: {
      url:{
        type: String
      },
      title:{
        type: String
      }
    },
  },
  data () {
    return {
      
    }
  },
  computed:{
    
  },
  methods: {
    clickHandler () {
      this.$router.push({
        name: data.url
      })
    },
  },
  mounted(){

  },
}
</script>
<style scoped lang="less">
  .title{
    display:flex;
    justify-content: space-between;
    padding:0.15rem;
    font-size: 0.5rem;
    margin: 0.1rem;
    color: orange;
  }
</style>
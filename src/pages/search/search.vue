<template>
  <div class="sreach">
    <div class="scrollBox" ref="scrollBox">
      搜索
    </div>
    <Tabbar :selectedLabelDefault='tabbarName' class="tabbar" ref="tabbar"></Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar'
import { getScorllBoxHeight } from "@/js/util.js";
export default {
  name: 'sreach',
  components: {
    Tabbar
  },
  data () {
    return {
      tabbarName:'搜索',
    }
  },
  mounted(){
    this.$nextTick(() => {
      getScorllBoxHeight(this.$refs.scrollBox,this.$refs.tabbar.$el.offsetHeight);
    })
  },
  methods: {
    
  }
}
</script>
<style lang="less">
  
</style>

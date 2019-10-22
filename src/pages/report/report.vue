<template>
  <div class="report">
    <div class="scrollBox" ref="scrollBox">
      报表
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

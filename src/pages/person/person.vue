<template>
  <div class="person">
    <div class="scrollBox" ref="scrollBox">
      我的
    </div>
    <Tabbar :selectedLabelDefault='tabbarName' class="tabbar" ref="tabbar">
    </Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar'
import { getScorllBoxHeight } from "@/js/util.js";
export default {
  name: 'person',
  components: {
    Tabbar
  },
  data () {
    return {
      tabbarName:'我的',
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

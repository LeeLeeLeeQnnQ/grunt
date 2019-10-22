<template>
  <div class="home">
    <div class="scrollBox" ref="scrollBox">
      <div>
        <cube-slide id="slide"  :showDots='showDots' :data="items"/>
      </div> 
    </div>
    <Tabbar :selectedLabelDefault='tabbarName' class="tabbar" ref="tabbar"></Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar'
import { getScorllBoxHeight } from "@/js/util.js";
export default {
  name: 'home',
  components: {
    Tabbar
  },
  data () {
    return {
      showDots:false,
      tabbarName:'首页',
      items: [
        {
          url: '',
          image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571734444663&di=3539095ba53f76a3b08b4cd6415df086&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201307%2F04%2F20130704173824_ZLmii.jpeg'
        },
        {
          url: 'http://www.baidu.com/',
          image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571734446204&di=5bacd1eed6d01b0ed704033cbd4e3524&imgtype=0&src=http%3A%2F%2Fk.zol-img.com.cn%2Fdcbbs%2F21405%2Fa21404358_s.jpg'
        }
      ]
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
  .tabbar{

  }
</style>

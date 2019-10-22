<template>
  <div class="sreach">
    <div class="scrollBox" ref="scrollBox">
      <ul class="item_content">
        <li 
          class="item_content-item"
          v-for="item in list"
          @click="clickHandler(item.code)">
          <p>{{item.name}}</p>
          <span>〉</span>
        </li>
      </ul>
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
      list:[
        {
          name:'刘贺佳',
          code:'110226198201230109'
        },
        {
          name:'胡娜',
          code:'110226198710312647'
        },
      ]
    }
  },
  mounted(){
    this.$nextTick(() => {
      getScorllBoxHeight(this.$refs.scrollBox,this.$refs.tabbar.$el.offsetHeight);
    })
  },
  methods: {
    clickHandler (code) {
      const route = {
        name: 'showInfo',
        query: {
          code
        }
      }
      this.$router.push(route)
    },
  }
}
</script>
<style scoped lang="less">
  .sreach{
    // background-color:#eee;
  }
  .item_content{
    font-size: 0.5rem;
    &-item{
      display:flex;
      justify-content: space-between;
      align-items:center;
      padding: 0 0.3rem;
      height: 1.2rem;
      border-bottom:1px solid #FAFAFA;
    }
    span{
      color: #0080FF;
    }
  }
</style>

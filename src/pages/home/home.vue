<template>
  <div class="home">
    <div class="scrollBox" ref="scrollBox">
      <div>
        <cube-slide id="slide"  :showDots='showDots' :data="items"/>
      </div>
      <div>
        <HomeTitle :data='notice_more'></HomeTitle>
        <ul class="item_content">
          <li class="item_content-item" v-for="item in notice_content">
            <p>{{item.content}}</p>
            <span>{{item.date}}</span>
          </li>
        </ul>
      </div>
      <div>
        <HomeTitle :data='news_more'></HomeTitle>
        <ul class="item_content">
          <li
            class="item_content-item"
            v-for="item in news_content"
            @click="clickHandler(item.url)">
            <p>{{item.content}}</p>
            <span>{{item.date}}</span>
          </li>
        </ul>
      </div>
      <div>
        <HomeTitle :data='grunt_more'></HomeTitle>
        <ul class="item_content">
          <li class="item_content-item" v-for="item in grunt_content">
            <p>{{item.content}}</p>
            <span>{{item.date}}</span>
          </li>
        </ul>
      </div>
    </div>
    <Tabbar :selectedLabelDefault='tabbarName' class="tabbar" ref="tabbar"></Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar'
import HomeTitle from '@/components/HomeTitle'
import { getScorllBoxHeight } from "@/js/util.js";
export default {
  name: 'home',
  components: {
    Tabbar,
    HomeTitle,
  },
  data () {
    return {
      showDots:false,
      tabbarName:'首页',
      notice_more:{
        title:"通知",
        url:""
      },
      notice_content:[
        {
          content:'你有一个通知',
          date:'10-15',
          url:'https://www.baidu.com'
        },
        {
          content:'你有一个通知',
          date:'10-19',
          url:'https://www.baidu.com'
        },
      ],
      news_more:{
        title:"新闻",
        url:""
      },
      news_content:[
        {
          content:'一个新闻',
          date:'10-15',
          url:'https://www.baidu.com'
        },
        {
          content:'你有一个新闻',
          date:'10-19',
          url:'https://www.baidu.com'
        },
      ],
      grunt_more:{
        title:"政策性补贴",
        url:""
      },
      grunt_content:[
        {
          content:'一个补贴',
          date:'10-15',
          url:'https://www.baidu.com'
        },
        {
          content:'一个补贴',
          date:'10-19',
          url:'https://www.baidu.com'
        },
        {
          content:'一个补贴',
          date:'10-15',
          url:'https://www.baidu.com'
        },
        {
          content:'一个补贴',
          date:'10-19',
          url:'https://www.baidu.com'
        },
        {
          content:'一个补贴',
          date:'10-15',
          url:'https://www.baidu.com'
        },
        {
          content:'一个补贴',
          date:'10-19',
          url:'https://www.baidu.com'
        },
        {
          content:'一个补贴',
          date:'10-15',
          url:'https://www.baidu.com'
        },
        {
          content:'一个补贴',
          date:'10-19',
          url:'https://www.baidu.com'
        },{
          content:'一个补贴',
          date:'10-15',
          url:'https://www.baidu.com'
        },
        {
          content:'一个补贴',
          date:'10-19',
          url:'https://www.baidu.com'
        },
      ],
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
    clickHandler (url) {
      this.showToast('点击'+url)
      console.log(this.$config)
    },
  }
}
</script>
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
<style  scoped lang="less">
  .item_content{
    font-size: 0.4rem;
    padding: 0.3rem;
    box-sizing: border-box;
    background-color: #eee;
    width: 100%;
    &-item{
      height: 0.8rem;
      display:flex;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>

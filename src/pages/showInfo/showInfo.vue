<template>
  <div class="showInfo">
    <div class="scrollBox" ref="scrollBox">
      <h3 class="showInfo_h3">{{info.name}}</h3>
      <ul class="showInfo_h3_ul">
        <li>
          <p>身份证号：</p>
          <span>{{info.code}}</span>
        </li>
        <li>
          <p>乡镇（街道）：</p>
          <span>{{info.city}}</span>
        </li>
        <li>
          <p>村（社区）：</p>
          <span>{{info.loction}}</span>
        </li>
        <li>
          <p>支付方式：</p>
          <span>{{info.pay}}</span>
        </li>
        <li>
          <p>开户行：</p>
          <span>{{info.bank}}</span>
        </li>
        <li>
          <p>银行账号：</p>
          <span>{{info.bank_code}}</span>
        </li>
        <li>
          <p>小计：</p>
          <span>{{info.total}}</span>
        </li>
        <li>
          <p>工资：</p>
          <span>{{info.gz}}</span>
        </li>
        <li>
          <p>保险：</p>
          <span>{{info.bx}}</span>
        </li>
        <li>
          <p>公积金：</p>
          <span>{{info.gjj}}</span>
        </li>
        <li>
          <p>指标文号 （区级）：</p>
          <span>{{info.zw}}</span>
        </li>
        <li>
          <p>项目名称：</p>
          <span>{{info.xm}}</span>
        </li>
        <li>
          <p>人员类别：</p>
          <span>{{info.lb}}</span>
        </li>
        <li>
          <p>备注：</p>
          <span>{{info.mark}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getScorllBoxHeight } from "@/js/util.js";
export default {
  name: 'showInfo',
  components: {
    
  },
  data () {
    return {
      info:{
        name:'刘娜',
        code:'110228198511161543',
        city:'南独乐河镇',
        loction:'望马台村',
        pay:'打卡',
        bank:'北京农商银行',
        bank_code:'6210676802014818273',
        total:'96771.4',
        gz:'51343.2',
        bx:'25052.2',
        gjj:'20376.0',
        zw:'平财社指【2018】第3号',
        xm:'社区工作者工资',
        lb:'',
        mark:'社区工作者',
      }
    }
  },
  mounted(){
    this.$nextTick(() => {
      getScorllBoxHeight(this.$refs.scrollBox,0);
    })
  },
  methods: {
    
  }
}
</script>
<style scoped lang="less">
  .showInfo_h3{
    font-size: 0.8rem;
    color: #0080FF;
    align-items:center;
    padding: 0.3rem;
    margin-top: 0.3rem;
  }
  .showInfo_h3_ul{
    padding: 0.4rem;
    li{
      height: 1rem;
      font-size: 0.40rem;
      display:flex;
      p{
        width:45%;
        color:#666666;
        text-align: left;
      }
      span{
        width: 55%;
        text-align: left;
      }
    }
  }
</style>

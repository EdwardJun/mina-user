<template>
  <div class="pc-page" >
    <div class="banner">
      <img class="bg-img" src="/static/img/pc_banner_bg.jpg" alt="" @click="doClickToast()">
      <div class="header" @click="doClickToast()">
        <img class="user-img" src="http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg" alt="">
        <img class="user-set" src="/static/img/set_icon.png" alt="">
      </div>
      <div class="info">
        <div class="name">刘刘海</div>
        <div class="phone" v-if="userPhone !=''" v-text="userPhone"></div>
        <a class="phone-text" v-else @click="isBindPhone()">前往绑定手机</a>
      </div>
      <div class="header-menu" @click="doClickToast()">
        <ul>
          <li>
            <img src="/static/img/pc_collect.png" alt="">
            <p>我的收藏</p>
          </li>
          <li>
            <img src="/static/img/yhj_icon.png" alt="">
            <p>优惠券</p>
          </li>
          <li>
            <img src="/static/img/vipCard_icon.png" alt="">
            <p>会员卡</p>
          </li>
          <li>
            <img src="/static/img/jf_icon.png" alt="">
            <p>积分</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="order-wrap" @click="doClickToast()">
      <p class="order-title">我的订单</p>
      <div class="order-menu">
        <ul>
          <li>
            <img src="/static/img/thsc_icon.png" alt="">
            <p>特惠商城</p>
          </li>
          <li>
            <img src="/static/img/xsqg_icon.png" alt="">
            <p>限时抢购</p>
          </li>
          <li>
            <img src="/static/img/yy_icon.png" alt="">
            <p>预约</p>
          </li>
          <li>
            <img src="/static/img/dzj_icon.png" alt="">
            <p>点钟劵</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="menu-wrap" @click="doClickToast()">
      <menu-item :info="hmd_info" :url="hmd_imgUrl"></menu-item>
      <menu-item :info="md_info" :url="md_imgUrl"></menu-item>
      <menu-item :info="cj_info" :url="cj_imgUrl"></menu-item>
      <menu-item :info="pj_info" :url="pj_imgUrl" :isBorderBottomHide="isBorderBottomHide"></menu-item>
    </div>
    <div class="suggestion-wrap" @click="doClickToast()">
      <menu-item :info="ts_info" :url="ts_imgUrl" :isBorderBottomHide="isBorderBottomHide"></menu-item>
    </div>
    <div class="exit-wrap" @click="doClickToast()">
      <menu-item :info="tc_info" :url="tc_imgUrl" :isBorderBottomHide="isBorderBottomHide"></menu-item>
    </div>
  </div>
</template>

<script>
  import menuItem from '@/components/menuItem'
  import Modo from 'modo-ui'
  const Api = Modo.Api
  export default {
    data () {
      return {
        hmd_imgUrl: '/static/img/stwmd_icon.png',
        hmd_info: '谁替我买单',
        md_imgUrl: '/static/img/mdjl_icon.png',
        md_info: '买单记录',
        cj_imgUrl: '/static/img/cjjj_icon.png',
        cj_info: '抽奖记录',
        pj_imgUrl: '/static/img/pjjj_icon.png',
        pj_info: '评价记录',
        ts_imgUrl: '/static/img/tsjy_icon.png',
        ts_info: '投诉建议',
        tc_imgUrl: '/static/img/tcdl_icon.png',
        tc_info: '退出登录',
        isBorderBottomHide: true,
        userPhone: ''
      }
    },
    components: {
      menuItem
    },
    created () {
      this.doClickToast()
    },
    methods: {
      doClickToast () {
        Api.showToast('更多信息敬请期待')
      },
      isBindPhone () {
        Api.showModal('是否授权使用微信绑定的手机号',function (isConfirm) {
          if(!isConfirm){
            Api.navigateTo('/pages/login/main')
          }
        },'',true,'否','','是','')
      }
    }
  }
</script>

<style lang="scss">
  .pc-page {
    .banner {
      position: relative;
      width: 100%;
      height: 403px;
      .bg-img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 403px;
        z-index: -1;
      }
      .header {
        position: relative;
        top: 20px;
        width: 100%;
        text-align: center;
        .user-img {
          margin: 0 auto;
          width: 126px;
          height: 125px;
          border-radius: 50%;
          border: 2px solid #eee2ce;
        }
        .user-set {
          position: absolute;
          top: 89px;
          width: 36px;
          height: 36px;
          margin-left: 10px;
        }
      }
      .info {
        width: 100%;
        text-align: center;
        margin-top: 14px;
        font-size: 30px;
        color: #ffffff;
        .name {
          margin-bottom: 10px;
        }
        .phone {
          margin-top: 10px;
        }
        .phone-text {
          display: inline-block;
          margin: 0 auto;
          width: 200px;
          height: 50px;
          line-height: 50px;
          background-color: #ff8c86;
          border-radius: 10px;
          color: #ffffff;
        }
      }
      .header-menu {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 142px;
        background: rgba(0,0,0,0.4);
        ul {
          display: flex;
          li {
            padding-top: 30px;
            box-sizing: border-box;
            flex-direction: column;
            flex: 1;
            text-align: center;
            height: 142px;
            img {
              width: 43px;
              height: 42px;
            }
            p {
              font-size: 25px;
              color: #ffffff;
              margin-top: 10px;
            }
          }
        }
      }
    }
    .order-wrap {
      width: 100%;
      height: 195px; //暂定
      margin: 20px 0;
      padding: 20px 0 0 0;
      box-sizing: border-box;
      background-color: #ffffff;
      .order-title {
        font-size: 29px;
        color: #616161;
        margin-left: 25px;
      }
      .order-menu {
        margin-top: 32px;
        width: 100%;
        ul {
          width: 100%;
          display: flex;
          li {
            flex: 1;
            text-align: center;
            img {
              width: 36px;
              height: 36px;
            }
            p {
              font-size: 25px;
              color: #616161;
              margin-top: 10px;
            }
          }
        }
      }
    }
    .menu-wrap {
      width: 100%;
      height: auto;
      border-top: 1px solid #e0e0e0;
      border-bottom: 1px solid #e0e0e0;
      padding: 0 0 0 25px;
      box-sizing: border-box;
      background-color: #ffffff;
      .borderBottomHide {
        border-bottom: 0;
      }
    }
    .suggestion-wrap {
      width: 100%;
      height: auto;
      border-top: 1px solid #e0e0e0;
      padding: 0 0 0 25px;
      box-sizing: border-box;
      background-color: #ffffff;
      margin-top: 20px;
      .borderBottomHide {
        border-bottom: 0;
      }
    }
    .exit-wrap {
      width: 100%;
      height: auto;
      border-top: 1px solid #e0e0e0;
      padding: 0 0 0 25px;
      box-sizing: border-box;
      background-color: #ffffff;
      margin: 20px 0;
      .borderBottomHide {
        border-bottom: 0;
      }
    }
  }
</style>

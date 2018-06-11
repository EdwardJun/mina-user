<template>
  <div class="home-page" @click="doClickToast()">
    <div class="banner-bg">
      <swiper @change="swiperChange" class="quickReplyBlock" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" :indicator-color="indicatorColor" :indicator-active-color="indicatorActiveColor">
        <block v-for="(item,swiperIndex) in imgUrls" :key="swiperIndex">
          <swiper-item>
            <image :src="item" class="slide-image"/>
          </swiper-item>
        </block>
      </swiper>
      <div class="dots">
        <block v-for="(item,dotsIndex) in imgUrls.length" :key="dotsIndex">
          <view class="dot" :class="dotsIndex==swiperCurrent? 'active': ''"></view>
        </block>
      </div>
      <div class="banner-top">
        <img src="/static/img/smile_icon.png" alt="" class="tradeMark">
        <span class="tradeMark-title">皇朝休闲会所</span>
        <img src="/static/img/arrow_right.png" alt="" class="arrow-right">
        <div class="fr banner-top-right">
          <img src="/static/img/collect_icon.png" alt="" class="collect">
          <span class="collect-span">收藏</span>
        </div>
      </div>
      <div class="banner-bottom">
        <div class="fr">
          <img class="map" src="/static/img/map_icon.png" alt="">
          <span class="dist-span">600m</span>
          <span class="ver-line"></span>
          <img class="phone" src="/static/img/phone.png" alt="">
        </div>
      </div>
    </div>
    <view class="scroll-box">
      <div class="scroll-title">
        <span class="title-desc">热门技师</span>
        <span class="all">全部<img src="/static/img/arrow_right_red.png" alt=""></span>
      </div>
      <scroll-view class="scroll-view" scroll-x style="width: auto;overflow:hidden;">
        <div class="item-tech">
          <div class="item-tech-list"  v-for="(techItem,techIndex) in teches" :key="techIndex">
            <img class="tech-pic" :src="techItem.pic" alt="">
            <img class="tech-mes" src="/static/img/mes_icon.jpg" alt="">
            <p class="tech-name">{{techItem.name}}</p>
            <div class="tech-number">{{techItem.num}}</div>
          </div>
        </div>
      </scroll-view>
    </view>
    <div class="recommen">
      <div class="recommen-item">
        <div class="recommen-item-title">
          <span class="title-desc">推荐项目</span>
          <span class="all">全部<img src="/static/img/arrow_right_red.png" alt=""></span>
        </div>
        <div class="recommen-con">
          <div class="recommen-border">
            <img class="recommen-img" src="/static/img/test2.jpg" alt="">
            <div class="recommen-shade">面部spa</div>
            <div class="recommen-footer">
              <span class="recommen-footer-left"><span class="yuan">￥</span>698</span>
              <span class="recommen-footer-right">120分钟</span>
            </div>
          </div>
          <div class="recommen-border">
            <img class="recommen-img" src="/static/img/test2.jpg" alt="">
            <div class="recommen-shade">面部spa</div>
            <div class="recommen-footer">
              <span class="recommen-footer-left"><span class="yuan">￥</span>698</span>
              <span class="recommen-footer-right">120分钟</span>
            </div>
          </div>
        </div>
      </div>
      <div class="recommen-item">
        <div class="recommen-item-title">
          <span class="title-desc">推荐项目</span>
          <span class="all">全部<img src="/static/img/arrow_right_red.png" alt=""></span>
        </div>
        <div class="recommen-con">
          <div class="recommen-border">
            <img class="recommen-img" src="/static/img/test2.jpg" alt="">
            <div class="recommen-shade">面部spa</div>
            <div class="recommen-footer">
              <span class="recommen-footer-left"><span class="yuan">￥</span>698</span>
              <span class="recommen-footer-right">120分钟</span>
            </div>
          </div>
          <div class="recommen-border">
            <img class="recommen-img" src="/static/img/test2.jpg" alt="">
            <div class="recommen-shade">面部spa</div>
            <div class="recommen-footer">
              <span class="recommen-footer-left"><span class="yuan">￥</span>698</span>
              <span class="recommen-footer-right">120分钟</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Modo from 'modo-ui'
  const Api = Modo.Api
  export default {
    data () {
      return {
        imgUrls: [
          'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
          'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ],
        teches: [
          {pic:'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          name: '李沙粒',
          num: 'A0088' 
          },
          {pic:'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          name: '李沙粒',
          num: 'A0088' 
          },
          {pic:'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          name: '李沙粒',
          num: 'A0088' 
          },
          {pic:'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          name: '李沙粒',
          num: 'A0088' 
          },
          {pic:'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          name: '李沙粒',
          num: 'A0088' 
          }
        ],
        autoplay: true,
        interval: 5000,
        duration: 1000,
        swiperCurrent: 0,
        lastSwiper: 0 //记录上一次指示点下标，用于判断左右滑动
      }
    },
    created () {
      this.doClickToast()
    },
    methods: {
      swiperChange(e) {
        /* 
         * current:为循环图片下标
         * swiperCurrent:为指示点下标
         * 执行第一次时是下一张图片的下标;current为0时，指示点下标也归0
         */
        let current = e.mp.detail.current
        if(current > this.lastSwiper){
          this.swiperCurrent++
        }else if(current < this.lastSwiper){
          this.swiperCurrent--
        }else if(current == 0){
          this.swiperCurrent = 0
        }
        this.lastSwiper = current
        this.swiperCurrent = current
      },
      doClickToast () {
        Api.showToast('更多信息敬请期待')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~asset/css/_value";

  $banner-height: 371px;
  $scroll-height: 378px;
  $scroll-title-height: 35px;
  .home-page {
    .banner-bg {
      position: relative;
      top: 0;
      width: 100%;
      height: $banner-height;
      .quickReplyBlock {
        background-color: #FFFFFF;
        height: $banner-height;
        .slide-image {
          width: 100%;
          height: $banner-height;
        }
      }
      .dots {
        position: absolute;  
        left: 22px;
        bottom: 25px;  
        display: flex;
        justify-content: center;
        .dot {
          margin: 0 8rpx;  
          width: 14rpx;  
          height: 14rpx;  
          background: gray;  
          border-radius: 8rpx;  
          transition: all .6s; 
        }
        .dot.active {
          background: white; 
        }
      }
      .banner-top {
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 999;
        height: 100px;
        line-height: 100px;
        margin-top: 10px;
        .tradeMark {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          margin-left: 22px;
          vertical-align: middle;
        }
        .tradeMark-title {
          margin-left: 22px;
          font-size: 35px;
          color: #FFFFFF;
        }
        .arrow-right {
          margin-left: 47px;
          width: 12px;
          height: 20px;
        }
        .collect {
          margin-right: 19px;
          width: 26px;
          height: 24px;
        }
        .collect-span {
          margin-right: 26px;
          color: #FFFFFF;
        }
        .banner-top-right {
          height: 100px;
          line-height: 100px;
        }
      }
      .banner-bottom {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 71px;
        line-height: 71px;
        float: right;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1));
        opacity: 0.3;
        .map {
          width: 24px;
          height: 29px;
          vertical-align: middle;
        }
        .dist-span {
          margin-left: 15px;
          font-size: 30px;
          color: #FFFFFF;
        }
        .ver-line {
          width: 0;
          height: 45px;
          margin: 0 32px;
          border: 0;
          border-left: 4px solid #ccc;
        }
        .phone {
          width: 26px;
          height: 33px;
          margin-right: 32px;
          vertical-align: middle;
        }
      }
    }
    .scroll-box {
      width: 100%;
      height: $scroll-height;
      overflow: hidden;
      background: #fff;
      white-space: nowrap;
      .scroll-title {
        width: 100%;
        height: $scroll-title-height;
        margin-top: 15px;
        display: flex;
        .title-desc {
          display: inline-block;
          flex: 1;
          color: #333333;
          font-size: 33px;
        }
        .title-desc:before {
          content: " ";
          display: inline-block;
          width: 0;
          height: 38px;
          border: 0;
          border-left: 5px solid #f66;
          margin: 0 20px;
          vertical-align: text-bottom;
        }
        .all {
          width: 150px;
          flex: 0 0 150;
          color: #ff8c85;
          img {
            width: 13px;
            height: 21px;
            margin: 0 39px 0 16px;
          }
        }
      }
      .scroll-view {
        height: 343px;
        .item-tech {
          margin: 47px 0 0 40px;
          height: 343px;
          .item-tech-list {
            position: relative;
            width: 153px;
            height: 343px;
            margin-right: 55px;
            display: inline-block;
            text-align: center;
            .tech-pic {
              width: 147px;
              height: 147px;
              border-radius: 50%;
            }
            .tech-mes {
              position: absolute;
              top: 15px;
              right: -13px;
              width: 52px;
              height: 35px;
            }
            .tech-name {
              font-size: 31px;
              color: #212121;
            }
            .tech-number {
              margin: 0 auto;
              margin-top: 10px;
              width: 116px;
              height: 41px;
              line-height: 41px;
              border: 1px solid #616161;
              border-radius: 30px;
              font-size: 25px;
              color: #616161;
            }
          }
        }
      }
      
    }
    .recommen {
      width: 100%;
      height: auto;
      background-color: #FFFFFF;
      margin-top: 30px;
      padding: 30px 0 80px 0;
      .recommen-item {
        margin-top: 50px;
        .recommen-item-title {
          width: 100%;
          height: $scroll-title-height;
          display: flex;
          .title-desc {
            display: inline-block;
            flex: 1;
            color: #333333;
            font-size: 33px;
          }
          .title-desc:before {
            content: " ";
            display: inline-block;
            width: 0;
            height: 38px;
            border: 0;
            border-left: 5px solid #f66;
            margin: 0 20px;
            vertical-align: text-bottom;
          }
          .all {
            width: 150px;
            flex: 0 0 150;
            color: #ff8c85;
            img {
              width: 13px;
              height: 21px;
              margin: 0 39px 0 16px;
            }
          }
        }
        .recommen-con {
          padding: 36px 0 0 38px;
          display: flex;
          .recommen-border {
            flex: 1;
            flex: 0 0 323px;
            position: relative;
            width: 323px;
            height: 406px;
            box-shadow: 4px  6px 10px rgb(182, 180, 180);
            margin-right: 30px;
              .recommen-img {
                width: 323px;
                height: 321px;
              }
              .recommen-shade {
                box-sizing: border-box;
                position: absolute;
                bottom: 85px;
                padding-left: 15px;
                width: 100%;
                height: 57px;
                line-height: 57px;
                font-size: 31px;
                color: #FFFFFF;
                background-color: #616161;
                opacity: 0.7;
                filter:alpha(opacity=70);
              }
            .recommen-footer {
              position: absolute;
              top: 321px;
              width: 100%;
              height: 85px;
              line-height: 85px;
              display: flex;
              align-items: baseline;
              .recommen-footer-left {
                flex: 1;
                margin-left: 14px;
                font-size: 37px;
                color: #ff8c85;
                .yuan {
                  font-size: 23px;
                }
              }
              .recommen-footer-right {
                flex: 1;
                text-align: right;
                margin-right: 10px;
                font-size: 23px;
                color: #616161;
              }
            }
          }
        }
      }
      .recommen-item:first-of-type {
        margin-top: 0;
      }
    }
  }
</style>

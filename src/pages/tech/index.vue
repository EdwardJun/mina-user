<template>
  <div class="tech-page" @click="doClickToast()">
    <div class="nav">
      <ul class="nav-ul">
        <li class="">
          <img class="nav-radio" src="/static/img/radio_icon.png" alt="">
          只显示闲
        </li>
        <li>
          <img class="nav-sort" src="/static/img/sort_icon.png" alt="">
          评论最多
        </li>
        <li>
          <img class="nav-filter" src="/static/img/filter_icon.png" alt="">
          筛选项目
        </li>
        <li class="search-li">
          <img class="nav-search" src="/static/img/search_icon.png" alt="">
        </li>
      </ul>
    </div>
    <div class="tech-con">
      <a class="item-a" href="" v-for="(item,itemIndex) in techList" :key="itemIndex">
        <div class="lside">
          <div class="img-div">
            <img class="tech-img" :src="item.img" alt="">
            <img class="tech-status-img" :src="item.techStatusImg" alt="">
          </div>
        </div>
        <div class="tech-item-mes">
          <div class="desc-one">
            <div class="tech-name" v-text="item.name"></div>
            <div class="tech-num" v-text="item.num"></div>
          </div>
          <div class="desc-two">
              <span class="start-span">
                <img src="/static/img/start_icon.png" alt="">{{item.startScore}}
              </span>
              <span class="praise-span">
                <img src="/static/img/praise_icon.png" alt="">{{item.praiseNun}}
              </span>
              <span class="mark-span" v-for="(markItem,markIndex) in item.markList" :key="markIndex" v-text="markItem"></span>
              <img class="desc-more-img" src="/static/img/arrow_right_gray.png" alt="">
          </div>
          <div class="desc-three" v-text="item.desc"></div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  import Modo from 'modo-ui'
  const Api = Modo.Api

  export default {
    data () {
      return {
        techList: [
          {img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          techStatusImg: '/static/img/xian_icon.png',
          name: '张得好',
          num: 'A0012',
          startScore: 4.5,
          praiseNun: 321,
          markList: ['#美白','#力道足','#甜美'],
          desc: '12年从业经验，擅长最专业的泰式按摩'
          },
          {img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          techStatusImg: '/static/img/xian_icon.png',
          name: '张得好',
          num: 'A0012',
          startScore: 4.5,
          praiseNun: 321,
          markList: ['#美白','#力道足','#甜美'],
          desc: '12年从业经验，擅长最专业的泰式按摩'
          },
          {img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          techStatusImg: '/static/img/xian_icon.png',
          name: '张得好',
          num: 'A0012',
          startScore: 4.5,
          praiseNun: 321,
          markList: ['#美白','#力道足','#甜美'],
          desc: '12年从业经验，擅长最专业的泰式按摩'
          },
          {img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          techStatusImg: '/static/img/xian_icon.png',
          name: '张得好',
          num: 'A0012',
          startScore: 4.5,
          praiseNun: 321,
          markList: ['#美白','#力道足','#甜美'],
          desc: '12年从业经验，擅长最专业的泰式按摩'
          }
        ]
      }
    },
    created () {
      this.doClickToast()
    },
    methods: {
      doClickToast () {
          Api.showToast('更多信息敬请期待')
        }
    }
  }
</script>

<style lang="scss" scoped>
  .tech-page {
    .nav {
      .nav-ul {
        display: flex;
        align-items: center;
        width: 100%;
        height: 90px;
        line-height: 90px;
        border-bottom: 1px solid #dfd9d9;
        li {
          flex: 1;
          text-align: center;
          font-size: 29px;
          color: #616161;
          height: 65px;
          line-height: 65px;
          .nav-radio {
            width: 24px;
            height: 24px;
            margin-right: 13px;
          }
          .nav-sort {
            width: 26px;
            height: 20px;
            margin-right: 13px;
          }
          .nav-filter {
            width: 19px;
            height: 23px;
            margin-right: 13px;
          }
          .nav-search {
            width: 29px;
            height: 29px;
          }
        }
        li:not(.search-li) {
          border-right: 1px solid #dfd9d9;
        }
        li.search-li {
          flex: 0 0 90px;
          width: 90px;
          img {
            margin-top: 18px;
          }
        }
      }
    }
    .tech-con {
      width: 100%;
      height: auto;
      padding-left: 25px;
      box-sizing: border-box;
      .item-a {
        display: flex;
        margin-top: 23px;
        .lside {
          width: 185px;
          flex: 0 0 185px;
          .img-div {
            position: relative;
            .tech-img {
              width: 125px;
              height: 126px;
              border-radius: 50%;
            }
            .tech-status-img {
              position: relative;
              right: 30px;
              width: 30px;
              height: 30px;
            }
          }
        }
        .tech-item-mes {
          flex: 1;
          border-bottom: 1px solid #dfd9d9;
          .desc-one {
            display: flex;
            align-items: center;
            align-content: center;
            width: 100%;
            height: 35px;
            line-height: 35px;
            margin-top: 5px;
            .tech-name {
              display: inline-block;
              font-size: 33px;
              color: #4d4d4d;
              margin-right: 17px;
              vertical-align: middle;
            }
            .tech-num {
              align-self: center;
              display: inline-block;
              min-width: 90px;
              height: 30px;
              line-height: 1.5;
              border: 1px solid #999999;
              border-radius: 50px;
              font-size: 22px;
              color: #999999;
              text-align: center;
            }
          }
          .desc-two {
            position: relative;
            height: 35px;
            line-height: 35px;
            margin-top: 8px;
            .start-span {
              font-size: 22px;
              color: #ff8909;
              height: 38px;
              line-height: 38px;
              min-width: 70px;
              background-color: #ffe4c6;
              border-radius: 5px;
              img {
                width: 24px;
                height: 23px;
                vertical-align: middle;
                margin-top: -2px;
              }
            }
            .praise-span {
              min-width: 80px;
              height: 38px;
              line-height: 38px;
              margin: 0 14px 0 15px;
              font-size: 22px;
              color: #ff6666;
              background-color: #ffe0e5;
              border-radius: 5px;
              img {
                width: 24px;
                height: 23px;
                vertical-align: middle;
                margin-top: -2px;
              }
            }
            .mark-span {
              font-size: 22px;
              color: #ff5d8f;
              margin-right: 14px;
            }
            .desc-more-img {
              position: absolute;
              top: 10px;
              right: 50px;
              width: 14px;
              height: 25px;              
            }
          }
          .desc-three {
            width: 70%;
            font-size: 27px;
            color: #999999;
            margin: 8px 0 20px 0;
            text-overflow:ellipsis;
            white-space:nowrap;
            overflow:hidden; 
          }
        }
      }
    }
  }
</style>

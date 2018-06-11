<template>
  <div class="project-page">
    <div class="nav">
      <scroll-view class="nav-scroll" scroll-x style="width: auto;overflow:hidden;">
        <div v-for="(nav,index) in navList" :key="index" class="nav-item">
          <a :class="{active: index==navIndex}" @click="changeActive(index)" v-text="nav"></a>
        </div>
      </scroll-view>
    </div>
    <scroll-view scroll-y class="project-con" :style="{height: scrollHeight + 'px'}" :scroll-into-view="proIndex" scroll-with-animation="true" enable-back-to-top="false">
      <div class="project-item" id="am">
        <div class="project-item-title">
          <span class="title-desc">各式按摩</span>
        </div>
        <div class="project-con">
          <div class="project-border">
            <img class="project-img" src="/static/img/test2.jpg" alt="">
            <div class="project-shade">面部spa</div>
            <div class="project-footer">
              <div class="normal">
                <span class="normal-yuan">698</span>
                /<span class="normal-time">120</span>分钟
              </div>
              <div class="addT">
                <span class="addT-button">加钟</span>
                ￥<span class="addT-yuan">88</span>
                /<span class="addT-time">30</span>分钟
              </div>
            </div>
          </div>
          <div class="project-border">
            <img class="project-img" src="/static/img/test2.jpg" alt="">
            <div class="project-shade">面部spa</div>
            <div class="project-footer">
              <div class="normal">
                <span class="normal-yuan">698</span>
                /<span class="normal-time">120</span>分钟
              </div>
              <div class="addT">
                <span class="addT-button">加钟</span>
                ￥<span class="addT-yuan">88</span>
                /<span class="addT-time">30</span>分钟
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="project-item" id="zy">
        <div class="project-item-title">
          <span class="title-desc">大堂足浴</span>
        </div>
        <div class="project-con">
          <div class="project-border">
            <img class="project-img" src="/static/img/test2.jpg" alt="">
            <div class="project-shade">面部spa</div>
            <div class="project-footer">
              <div class="normal">
                <span class="normal-yuan">698</span>
                /<span class="normal-time">120</span>分钟
              </div>
              <div class="addT">
                <span class="addT-button">加钟</span>
                ￥<span class="addT-yuan">88</span>
                /<span class="addT-time">30</span>分钟
              </div>
            </div>
          </div>
          <div class="project-border">
            <img class="project-img" src="/static/img/test2.jpg" alt="">
            <div class="project-shade">面部spa</div>
            <div class="project-footer">
              <div class="normal">
                <span class="normal-yuan">698</span>
                /<span class="normal-time">120</span>分钟
              </div>
              <div class="addT">
                <span class="addT-button">加钟</span>
                ￥<span class="addT-yuan">88</span>
                /<span class="addT-time">30</span>分钟
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="project-item" id="spa">
        <div class="project-item-title">
          <span class="title-desc">SPA</span>
        </div>
        <div class="project-con">
          <div class="project-border">
            <img class="project-img" src="/static/img/test2.jpg" alt="">
            <div class="project-shade">面部spa</div>
            <div class="project-footer">
              <div class="normal">
                <span class="normal-yuan">698</span>
                /<span class="normal-time">120</span>分钟
              </div>
              <div class="addT">
                <span class="addT-button">加钟</span>
                ￥<span class="addT-yuan">88</span>
                /<span class="addT-time">30</span>分钟
              </div>
            </div>
          </div>
          <div class="project-border">
            <img class="project-img" src="/static/img/test2.jpg" alt="">
            <div class="project-shade">面部spa</div>
            <div class="project-footer">
              <div class="normal">
                <span class="normal-yuan">698</span>
                /<span class="normal-time">120</span>分钟
              </div>
              <div class="addT">
                <span class="addT-button">加钟</span>
                ￥<span class="addT-yuan">88</span>
                /<span class="addT-time">30</span>分钟
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="project-item" id="js">
        <div class="project-item-title">
          <span class="title-desc">酒水</span>
        </div>
        <div class="project-con">
          <div class="project-border">
            <img class="project-img" src="/static/img/test2.jpg" alt="">
            <div class="project-shade">面部spa</div>
            <div class="project-footer">
              <div class="normal">
                <span class="normal-yuan">698</span>
                /<span class="normal-time">120</span>分钟
              </div>
              <div class="addT">
                <span class="addT-button">加钟</span>
                ￥<span class="addT-yuan">88</span>
                /<span class="addT-time">30</span>分钟
              </div>
            </div>
          </div>
          <div class="project-border">
            <img class="project-img" src="/static/img/test2.jpg" alt="">
            <div class="project-shade">面部spa</div>
            <div class="project-footer">
              <div class="normal">
                <span class="normal-yuan">698</span>
                /<span class="normal-time">120</span>分钟
              </div>
              <div class="addT">
                <span class="addT-button">加钟</span>
                ￥<span class="addT-yuan">88</span>
                /<span class="addT-time">30</span>分钟
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="project-item" id="ls">
        <div class="project-item-title">
          <span class="title-desc">零食</span>
        </div>
        <div class="project-con">
          <div class="project-border">
            <img class="project-img" src="/static/img/test2.jpg" alt="">
            <div class="project-shade">面部spa</div>
            <div class="project-footer">
              <div class="normal">
                <span class="normal-yuan">698</span>
                /<span class="normal-time">120</span>分钟
              </div>
              <div class="addT">
                <span class="addT-button">加钟</span>
                ￥<span class="addT-yuan">88</span>
                /<span class="addT-time">30</span>分钟
              </div>
            </div>
          </div>
          <div class="project-border">
            <img class="project-img" src="/static/img/test2.jpg" alt="">
            <div class="project-shade">面部spa</div>
            <div class="project-footer">
              <div class="normal">
                <span class="normal-yuan">698</span>
                /<span class="normal-time">120</span>分钟
              </div>
              <div class="addT">
                <span class="addT-button">加钟</span>
                ￥<span class="addT-yuan">88</span>
                /<span class="addT-time">30</span>分钟
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="project-item" id="vip1">
        <div class="project-item-title">
          <span class="title-desc">VIP1</span>
        </div>
        <div class="project-con">
          <div class="project-border">
            <img class="project-img" src="/static/img/test2.jpg" alt="">
            <div class="project-shade">面部spa</div>
            <div class="project-footer">
              <div class="normal">
                <span class="normal-yuan">698</span>
                /<span class="normal-time">120</span>分钟
              </div>
              <div class="addT">
                <span class="addT-button">加钟</span>
                ￥<span class="addT-yuan">88</span>
                /<span class="addT-time">30</span>分钟
              </div>
            </div>
          </div>
          <div class="project-border">
            <img class="project-img" src="/static/img/test2.jpg" alt="">
            <div class="project-shade">面部spa</div>
            <div class="project-footer">
              <div class="normal">
                <span class="normal-yuan">698</span>
                /<span class="normal-time">120</span>分钟
              </div>
              <div class="addT">
                <span class="addT-button">加钟</span>
                ￥<span class="addT-yuan">88</span>
                /<span class="addT-time">30</span>分钟
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="project-item" id="vip2">
        <div class="project-item-title">
          <span class="title-desc">VIP2</span>
        </div>
        <div class="project-con">
          <div class="project-border">
            <img class="project-img" src="/static/img/test2.jpg" alt="">
            <div class="project-shade">面部spa</div>
            <div class="project-footer">
              <div class="normal">
                <span class="normal-yuan">698</span>
                /<span class="normal-time">120</span>分钟
              </div>
              <div class="addT">
                <span class="addT-button">加钟</span>
                ￥<span class="addT-yuan">88</span>
                /<span class="addT-time">30</span>分钟
              </div>
            </div>
          </div>
          <div class="project-border">
            <img class="project-img" src="/static/img/test2.jpg" alt="">
            <div class="project-shade">面部spa</div>
            <div class="project-footer">
              <div class="normal">
                <span class="normal-yuan">698</span>
                /<span class="normal-time">120</span>分钟
              </div>
              <div class="addT">
                <span class="addT-button">加钟</span>
                ￥<span class="addT-yuan">88</span>
                /<span class="addT-time">30</span>分钟
              </div>
            </div>
          </div>
        </div>
      </div>
    </scroll-view>
  </div>
</template>

<script>
  import Modo from 'modo-ui'
  const Api = Modo.Api
  export default {
    data () {
      return {
        navList: ['各式按摩','大堂足浴','SPA','酒水','零食','VIP1','VIP2'],
        navIndex: 0, //nav active状态的下标
        scrollHeight: 600,
        proIndex: ''
      }
    },
    mounted() {
      this.initListHeight()
    },
    methods: {
      changeActive(index) {
        let dom = ''
        this.navIndex = index
        switch(index) {
          case 0: dom = 'am';
            break;
          case 1: dom = 'zy';
            break;
          case 2: dom = 'spa';
            break;
          case 3: dom = 'js';
            break;
          case 4: dom = 'ls';
            break;
          case 5: dom = 'vip1';
            break;
          default: dom = 'vip2';
        }
        this.proIndex = dom
      },
      // 动态设置list的高度
      initListHeight() {
        let that = this
        let viewHeight = wx.getSystemInfoSync().windowHeight
        that.scrollHeight = viewHeight -40
      },
    }
  }
</script>

<style lang="scss">
  @import "~asset/css/_global";
  $rec-border-h: 460px;
  $rec-img-h: 325px;
  @function recShade ($rec-border-h, $rec-img-h) {
    @return $rec-border-h - $rec-img-h;
  }
  
  .project-page {
    .nav {
      width: auto;
      height: 80px;
      .nav-scroll {
        height: 100%;
        overflow: hidden;
        white-space: nowrap;
        .nav-item {
          display: inline-block;
          padding: 0 25px;
          height: 80px;
          line-height: 80px;
          box-sizing: border-box;
          text-align: center;
          a {
            position: relative;
            font-size: 28px;
            color: #000000;
            &.active {
              color: #ff6b69;
              &.active::after {
                position: absolute;
                left: 50%;
                bottom: 0;
                content: " ";
                display: inline-block;
                width: 30px;
                border: 5px solid #ff6b69;;
                margin: 0 0 0 -15px;
              }
            }
          }
        }
      }
    }
    .project-con {
      .project-item {
        margin-top: 55px;
        &:first-child {
          margin-top: 50px;
        }
        &:last-child {
          margin-bottom: 110px;
        }
        .project-item-title {
          width: 100%;
          height: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          .title-desc {
            display: inline-block;
            flex: 1;
            color: #333333;
            font-size: 33px;
            text-align: center;
          }
          .title-desc:before, .title-desc:after{
            content: " ";
            display: inline-block;
            width: 46px;
            border: 1px solid #333333;
            box-sizing: border-box;
            -webkit-transform-origin: 0 0;
            transform-origin: 0 0;
            -webkit-transform: scaleY(0.5);
            transform: scaleY(0.5);
            margin: 0 26px;
            vertical-align: middle;
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
        .project-con {
          padding: 50px 0 0 25px;
          display: flex;
          .project-border {
            flex: 0 0 335px;
            position: relative;
            width: 335px;
            height: $rec-border-h;
            box-shadow: 4px  6px 1px rgb(182, 180, 180);
            margin-right: 30px;
              .project-img {
                width: 335px;
                height: $rec-img-h;
              }
              .project-shade {
                box-sizing: border-box;
                position: absolute;
                bottom: recShade($rec-border-h,$rec-img-h);
                padding-left: 22px;
                width: 100%;
                height: 60px;
                line-height: 60px;
                font-size: 32px;
                color: #FFFFFF;
                background-color: #000000;
                opacity: 0.5;
                filter:alpha(opacity=50);
              }
            .project-footer {
              position: absolute;
              top: $rec-img-h;
              width: 100%;
              height: recShade($rec-border-h,$rec-img-h);
              padding: 30px 0 0 22px;
              .normal {
                font-size: 24px;
                color: #666666;
                .normal-yuan {
                  font-size: 38px;
                  color: #ff6666;
                  &::before {
                    content: "￥";
                    font-size: 24px;
                    color: #ff6666;
                  }
                }
              }
              .addT {
                margin: 5px 0 0 0;
                font-size: 24px;
                color: #666666;
                .addT-button {
                  display: inline-block;
                  width: 68px;
                  height: 30px;
                  line-height: 1.5;
                  border-radius: 50px;
                  background-color: #ffd163;
                  color: #624a2c;
                  font-size: 22px;
                  text-align: center;
                }
              }
            }
          }
        }
      }
    }
  }
</style>

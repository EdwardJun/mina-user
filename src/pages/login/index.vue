<template>
    <div class="login-page">
        <div class="login-com-icon">
            <img src="/static/img/logo02.png" alt="">
        </div>
        <div class="login-bd">
            <div class="login-cell border-bottom">
                <div class="login-cell__hd">
                    <img class="login-cell__icon" src="/static/img/login_icon_phone.png" alt=""/>
                </div>
                <div class="login-cell__bd">
                    <span class="number-prefix">+86</span>
                    <input class="login-cell__bd_input" type="number" maxlength="11" v-model="username"
                           @focus="nameFocus = true" @blur="nameFocus = false" @confirm="login"
                           placeholder-style="font-size: 36rpx; color: #b3b3b3;" placeholder="请输入手机号"/>
                </div>
            </div>
            <div class="login-cell border-bottom">
                <div class="login-cell__hd">
                    <img class="login-cell__icon" src="/static/img/login_icon_password.png" alt=""/>
                </div>
                <div class="login-cell__bd">
                    <input class="login-cell__bd_input" type="password" maxlength="11" v-model="password"
                           @focus="pwdFocus = true" @blur="pwdFocus = false" @confirm="login"
                           placeholder-style="font-size: 36rpx; color: #b3b3b3;" placeholder="请输入验证码"/>
                    <!--<a class="login-cell_a">获取验证码</a>-->
                    <count-down @run="sendAjax" ref="child"></count-down>
                </div>
            </div>
        </div>
        <div class="login-ft">
            <button type="primary" class="btn-primary" hover-class="btn-primary-hover" @click="login">登录</button>
        </div>
    </div>
</template>

<script>
    import Modo from 'modo-ui'
    import CountDown from '@/components/CountDown'
    import eventHub from '@/utils/hub'
    const Utils = Modo.Utils
    const Api = Modo.Api

    export default {
        data () {
            return {
                username: this.$store.state.phone,
                userInfo: {name: 'Lynn'}
            }
        },
        components: {
            CountDown
        },
        created () {
            // 调用应用实例的方法获取全局数据
            //this.getUserInfo()
        },
        methods: {
            check() {
                if (this.username.length === 0) {
                    // this.nameFocus = true
                    Api.showToast('手机号不能为空')
                    return false
                } else if (!Utils.isPhone(this.username)) {
                    // this.nameFocus = true
                    Api.showToast('请输入正确的手机号码')
                    return false
                }
                // else if (this.password.length < 6) {
                //     // this.pwdFocus = true
                //     Api.showToast('密码不少于6位')
                //     return false
                // }
                return true
            },
            getUserInfo () {
                // 调用登录接口
                wx.login({
                    success: () => {
                        wx.getUserInfo({
                            success: (res) => {
                                this.userInfo = res.userInfo
                            }
                        })
                    }
                })
            },
            clickHandle (msg, ev) {
                console.log('clickHandle:', msg, ev)
            },
            login () {
            },
            // 打开首页
            switchToIndex() {
                this.password = ''
                Api.switchTab('/pages/index/main')
            },
            sendAjax () {
                if (!this.check()) {
                    return
                }
                this.$refs.child.start() // 根据$refs钩子，调用子组件方法
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "~asset/css/_value";
    @import "~asset/css/button";

    $bg-width: 750px;
    $bg-height: 270px;
    $logo-width: 261px;
    $logo-height: 270px;
    @function getWrap($bg, $logo) {
        @return (($bg - $logo) / 2);
    }

    .login-page {
        height: 100%;
        position: fixed;
        width: 100%;
        background-color: $white;
        .login-com-icon {
            position: relative;
            width: 100%;
            height: $logo-height;
            margin: 172px 0;
            img {
                position: absolute;
                left: getWrap($bg-width, $logo-width);
                top: getWrap($bg-height, $logo-height);
                width: $logo-width;
                height: $logo-height;
            }
        }
        .login-bd {
            margin: 70px 52px 50px;
            .login-cell {
                display: flex;
                align-items: center;
                margin-bottom: 50px;
                padding-bottom: 10px;
                .login-cell__hd {
                    display: flex;
                    align-items: center;
                    .login-cell__icon {
                        width: 42px;
                        height: 42px;
                        margin-right: 20px;
                    }
                }
                .login-cell__bd {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    .number-prefix {
                        font-size: 36px;
                        color: #666;
                        margin-right: 20px;
                    }
                    .login-cell__bd_input {
                        width: 100%;
                        color: $black;
                        font-size: 36px;
                    }
                    .login-cell_a {
                        width: 60%;
                        text-align: right;
                        color: $login-primary;
                        font-size: 32px;
                    }
                }
            }
        }
        .login-ft {
            margin: 99px 40px 0;
        }
    }

    .login-cell__placeholder {
        font-size: 32px;
        color: #b3b3b3
    }
</style>

<!--60秒倒计时-->
<template>
  <div class="countdown">
    <span class="active" v-if="timer === 0" v-text="defaultText" @click="run"></span>
    <span v-else class="wait">{{waitText}} ({{timer}})s</span>
  </div>
</template>
<style>
</style>
<script>
export default {
    props: {
        time: {
            type: Number,
            default: 60
        },
        defaultText: {
            type: String,
            default: '获取验证码'
        },
        waitText: {
            type: String,
            default: '重新获取'
        }
    },
    data () {
        return {
            timer: 0
        }
    },
    watch: {},
    methods: {
        run () {
            this.$emit('run')
        },
        start () {
            this.timer = this.time
            this.startTimer()
        },
        startTimer () {
            this.timer--
            if (this.timer > 0) {
                setTimeout(this.startTimer.bind(this), 1000)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "~asset/css/_value";
    .countdown {
        text-align: right;
        color: $login-primary;
        font-size: 32px;
        width: 60%;
        &.disable-click {
            cursor: not-allowed;
        }
    }
</style>
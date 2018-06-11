import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
    config: {
        navigationBarTitleText: "小摩豆会所",
        navigationBarBackgroundColor: "#fff",
        navigationBarTextStyle:"black"
    }
}
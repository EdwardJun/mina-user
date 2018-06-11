import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
    config: {
        /*navigationBarTitleText: "小摩豆会所111",
        navigationBarBackgroundColor: "#fff",
        navigationBarTextStyle:"black"*/
        /*window: {
            navigationBarTitleText: "小摩豆会所111",
            navigationBarBackgroundColor: "#fff",
            navigationBarTextStyle:"black"
        }*/
        /**
         * pages: [
            'pages/login/main',
            'pages/logs/main',
            'pages/index/main',
            '^pages/newIndex/main'
        ],
        window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#ff8c8d',
            navigationBarTitleText: '小摩豆会所',
            navigationBarTextStyle: '#fff'
        },
         */
    }
}
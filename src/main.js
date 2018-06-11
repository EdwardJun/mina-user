import Vue from 'vue'
import App from './App'
import Modo from 'modo-ui'
import './asset/css/common.scss'
import ModoConfig from './utils/config'
import store from './store/index'
import Fly from 'flyio/dist/npm/wx'

Vue.config.productionTip = false
App.mpType = 'app'

Modo.init('host', 'baseUrl', 'appType', 'userType')
Vue.prototype.$Modo = Modo

Vue.prototype.$store = store
Vue.prototype.$http = new Fly
// 添加拦截器
Vue.prototype.$http.interceptors.request.use((config,promise)=>{
    //给所有请求添加自定义header
    config.headers["X-Tag"] = "flyio mina-tech";
    config.headers["content-type"] = "application/x-www-form-urlencoded";
    return config;
})
// 添加请求基地址
Vue.prototype.$http.config.baseURL = ModoConfig.host + ModoConfig.baseUrl

const app = new Vue(App)
app.$mount()

export default {
    // 这个字段走 app.json
    config: {
        // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
        pages: [
            'pages/index/main',
            'pages/login/main',
            'pages/new/main',
            'pages/tech/main',
            '^pages/project/main',
            'pages/mine/main'
            //'pages/logs/main',
            //'pages/personalCenter/main'
        ],
        window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: "#fff",
            navigationBarTitleText: '小摩豆会所',
            navigationBarTextStyle:"black"
        },
        tabBar: {
            "color": "#777777",
            "selectedColor": "#ff8c85",
            "list": [{
              "pagePath": "pages/index/main",
              "text": "首页",
              "iconPath": "/static/img/tabBar_home.png",
              "selectedIconPath": "/static/img/tabBar_home_selected.png"
            },{
                "pagePath": "pages/new/main",
                "text": "消息",
                "iconPath": "/static/img/tabBar_new.png",
                "selectedIconPath": "/static/img/tabBar_new_selected.png"
            },{
              "pagePath": "pages/tech/main",
              "text": "技师",
              "iconPath": "/static/img/tabBar_tech.png",
              "selectedIconPath": "/static/img/tabBar_tech_selected.png"
            },{
                "pagePath": "pages/project/main",
                "text": "项目",
                "iconPath": "/static/img/tabBar_project.png",
                "selectedIconPath": "/static/img/tabBar_project_selected.png"
            },{
              //"pagePath": "pages/personalCenter/main",
              "pagePath": "pages/mine/main",
              "text": "我的",
              "iconPath": "/static/img/tabBar_mine.png",
              "selectedIconPath": "/static/img/tabBar_mine_selected.png"
            }]
          },
        networkTimeout: {
            request: 10000,
            connectSocket: 10000,
            downloadFile: 10000,
            uploadFile: 10000
        },
        debug: true
    }
}

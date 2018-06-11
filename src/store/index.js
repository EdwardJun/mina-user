// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
import Modo from 'modo-ui'

const Api = Modo.Api

// import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        systemInfo: wx.getSystemInfoSync(),
        /*loginInfo: {
            IMPlatform: "tencent",
            avatarUrl: null,
            chainId: null,
            chainName: null,
            clubId: "918401766939172864",
            clubName: "树叶",
            emchatId: "24a89ca4d9e18cc95406826e5366c0f0",
            emchatPassword: "eJxlkEFPgzAYhu-8CsJ1xrRAS2uyAzBQEA6bOxAvhLQFG1yHBR3M*N*dzEQSz8-zfm**99MwTdPaZ0*3FWPHdzWUw9QJy7wzLWDd-MGuk7yshtLR-B8UYye1KKt6EHqGnudhAJaK5EINspa-gu1WhLLK5VRAwhhFLsDExgI5GDNQL5M9b8u5fQ5C93IXOxB6S0U2M8yjbZjEQCN6r-I26NWkRFgokGYR72xanKeVf6anPdcJ3PTNypd*kAe74lQ-oHaMMxpDsnuND*EmaWCablvePxMnehsfXzj21*tF5SAP15EgsgF1bIDIgn4I3cujur4KIIIXB-wMYnwZ3*QrYoc_",
            inviteCode: "vwe4ly",
            loginName: "13137558109",
            name: "百事可乐",
            phoneNum: "13137558109",
            roles: "floor_staff",
            status: 200,
            token: "81d42b94bfa8f316ecc44ac53e7b38d855a4c8ca",
            userId: "748081899301244928",
        }*/
        loginInfo: Api.getStorageSync('loginInfo') || {},
        /*userInfo: {
             "clubInviteCode": "568160", //会所邀请码
             "clubPosition": "深圳市福田区",//会所位置
             "validSeconds": 602906961,
             "imageUrl": "http://192.168.1.105:8489/s/group00/M00/01/4F/oIYBAFoc2fyAafN9AACvEFgMa4E375.png?st=5r75zOJJla9L8WZ-HmO5Dg&e=1525775859",
             "status": "free",//技师状态
             "qrCodeUrl": "https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=gQH37zwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAyQVdIeHdxLWtkQjExWmFCbnhxMW0AAgQqXMxaAwQgiQsA",
             "clubImageUrl": "http://192.168.1.103:8489/s/group00/M00/01/58/oIYBAFpmowGAK46BAAVFcYFK2Po652.png?st=qO0h-oYqa8v03h7VqoR_2w&e=1525776207",
             "avatar": "164634",
             "innerProvider": null,
             "id": "768364493666258944",
             "serialNo": "12345", //技师编号
             "phoneNum": "13166666666",
             "clubId": "601679316694081536",
             "description": "程序员的自白", //描述信息
             "creditAmount": 12, //积分数
             "shareUrl": "http://test.xiaomodo.com/spa-manager/spa/#/601679316694081536/technicianDetail?id=768364493666258944&techInviteCode=jhgbwl&isNeedFollow=true",//个人名片二维码
             "inviteCode": "jhgbwl", //技师邀请码
             "userName": "安卓开",
             "clubName": "刘哥会所"
         }*/
        userInfo: Api.getStorageSync('userInfo') || {},
        token: Api.getStorageSync('token') || '',
        phone: Api.getStorageSync('phone') || ''
    },
    mutations: {
        login(state, data) {
            const obj = state
            obj.loginInfo = data
            obj.token = data.token
            obj.phone = data.phoneNum
            Api.setStorageSync('loginInfo', obj.loginInfo)
            Api.setStorageSync('token', obj.token)
            Api.setStorageSync('phone', obj.phone)
        },
        logout(state) {
            const obj = state
            obj.loginInfo = {}
            obj.token = ''
            obj.phone = ''
            Api.removeStorageSync('loginInfo')
            Api.removeStorageSync('userInfo')
            Api.removeStorageSync('token')
        },
        setUserInfo(state, data) {
            const obj = state
            obj.userInfo = data
            Api.setStorageSync('userInfo', obj.userInfo)
        }
    },
    actions: {

    },
    // plugins: [
    //     createPersistedState({
    //         storage: {
    //             getItem: key => Api.getStorageSync(key),
    //             setItem: (key, value) => Api.setStorageSync(key, value),
    //             removeItem: key => {
    //                 console.log("Api.clearStorage()!! key: ", key)
    //             }
    //         }
    //     })
    // ]
})

export default store

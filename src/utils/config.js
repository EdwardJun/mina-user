/**
 * 系统配置
 * Created by LooooG on 2018/04/09.
 */

export default {
    debug: true, // 是否打开调试模式
    testEnv: true,  // 是否测试环境
    isIMLogOn: false, // 是否打开IM Log系统
    // host: 'http://spa.93wifi.com',
    // host: 'http://192.168.1.105:9880',
    host: 'https://mp.xiaomodo.com',
    // host: 'https://test.xiaomodo.com',
    baseUrl: '/spa-manager/api',
    appType: 'wx_app',
    usertype: "user",
    url: {
        /*技师相关*/
        URL_LOGIN: '/v2/user/login', // 登录接口
        // URL_LOGIN: '/v1/tech/login', // 登录接口
        URL_CURRENT: '/v2/tech/current', // 个人信息接口
        TECH_EDITINFO: '/v1/profile/tech/editInfo', // 技师资料
        TECH_DELALBUM: '/v1/profile/tech/album/delete', // 技师相册删除
        TECH_PROFILE_INFO_SAVE: '/v1/profile/tech', // 保存个人资料
        HELLO_TEMPLATE_LIST: '/v2/tech/hello/template/list', // 获取打招呼模板列表
        HELLO_TEMPLATE_SAVE: '/v2/tech/hello/template', // 保存打招呼模板
        HELLO_TEMPLATE_IMG_UPLOAD: '/v2/tech/hello/template/image', // 打招呼图片
        TECH_HELLO_TEMPLATE: '/v2/tech/hello/template', // 获取技师当前的打招呼设置
        TECH_AVATAR_UPLOAD: '/v1/profile/tech/avatar/base64/upload', // 上传技师头像
        TECH_ALBUM_UPLOAD: '/v1/profile/tech/album/base64/upload', // 上传技师相册
        TECH_CALENDAR: '/v1/profile/tech/calendar', // 获取上班时间初始数据
        TECH_CALENDAR_UPDATE: '/v1/profile/tech/calendar/update', // 更新上班时间
        TECH_QUICK_REPLY: 'v2/chat/setting/fastReply', //快捷回复列表
        /*IM相关*/
        JOURNAL_LIST: '/v1/techshare/journalListDetail',    // 电子期刊列表
        COUPON_LIST: '/v1/profile/redpack/list',    // 优惠券列表
        CHAT_USERINFO: '/v2/chat/userInfo/{id}', // 用户信息
        SENSITIVE_FILTER: '/v2/chat/sensitive/filter', // 敏感词过滤
        MARK_FRIEND: '/v1/emchat/markchattouser', // 维持好友关系，同时上传聊天记录
        COS_SIGNATURE: '/v2/qcloud/signature', // 获取签名
        /*联系人相关*/
        CONTACT_FILTER: '/v2/manager/user/tag/all/list', // 联系人--筛选
        CONTACT_ALL: '/v2/tech/customer/user/all/list', // 联系人--全部客户
        CONTACT_MY_CUSTOMER: '/v2/tech/customer/user/register/list', // 联系人--我的拓客
        CONTACT_MY_RECENT: '/v2/tech/customer/user/recent/list', // 联系人--最近访客
        SAY_HI: '/v2/tech/hello/{id}', // 联系人--打招呼
        COMMENT_LIST: '/v2/comment/list', // 客户评论
        IMPRESSION_LIST: '/v2/club/impression/list', // 备注信息--标签列表
        REMARK_SAVE: '/v2/tech/customer/edit', // 备注信息--保存
        /*消费相关*/
        CUSTOMER_INFO: '/v2/tech/customer/detail', // 消费信息--用户信息
        HELLO_STATUS: '/v2/tech/hello/{id}/status', // 消费信息--近期是否打过招呼
        SHOP_LIST: '/v2/tech/customer/shop/list', // 消费信息--到店列表
        CONSUME_LIST: '/v2/tech/customer/consume/list', // 消费信息--到店列表
        REWARD_LIST: '/v2/tech/customer/reward/list', // 消费信息--打赏列表
        // 附近的人
        NEARBY_LIST: '/v2/tech/club/nearby/user/list', // 附近的人--列表
        SURPLUS_HI: '/v2/tech/hello/number/left', // 附近的人--剩余打招呼次数
        LATEST_REPLY: '/v2/tech/hello/list/reply/new', // 附近的人--最新回复列表
        SAY_HI_LIST: '/v2/tech/hello/list', // 附近的人--打招呼列表

        // 用户端
        URL_VERIFY_CODE: '/api/v1/verifyCode', // 获取
    }
}

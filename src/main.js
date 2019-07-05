import Vue from 'vue';
import App from './App.vue';
import FullPage from 'vue-fullpage.js';
require('vue2-animate/dist/vue2-animate.min.css');
require('normalize.css/normalize.css');
Vue.use(FullPage);
Vue.config.productionTip = false;

import 'vue2-toast/lib/toast.css';
import Toast from 'vue2-toast';

Vue.use(Toast, {
    defaultType: 'center',
    duration: 2500,
    wordWrap: false,
    width: 'auto'
});

new Vue({
    render: h => h(App)
}).$mount('#app');

// 微信js-sdk分享调用，页面加载调用
const wx_bridge = {
    async getJssdk(location, count) {
        let res = await axios.get(
            // 更改接口地址
            `https://projects.godruoyi.com/estbon/jssdk?target_url=${encodeURIComponent(
                window.location.href
            )}`
        );
        res = res.data;
        console.log(res);
        if (res.code == 0) {
            let configData = Object.assign(
                {},
                {
                    debug: false,
                    jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline']
                },
                res.data
            );
            wx.config(configData);
            this.initWxShare(location, count);
        } else {
            console.log(res.message);
        }
    },
    initWxShare(location, count) {
        wx.ready(function() {
            wx.onMenuShareTimeline({
                title: '蜜水表白，WFC帮你说爱', // 分享标题
                link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl:
                    'https://images.godruoyi.com/estbon/imgs/share-icon.jpg', // 分享图标
                success: function() {}
                // 用户点击了分享后执行的回调函数
            });
            wx.onMenuShareAppMessage({
                title: '蜜水表白，WFC帮你说爱', // 分享标题
                desc: '海尔消夏节，邀您见证家的高光时刻', // 分享描述
                link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl:
                    'https://images.godruoyi.com/estbon/imgs/share-icon.jpg', // 分享图标
                type: '', // 分享类型,music、video或link，不填默认为link
                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                success: function() {
                    // 用户点击了分享后执行的回调函数
                }
            });
        });
    }
};

export default wx_bridge;

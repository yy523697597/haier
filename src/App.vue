<template>
  <div id="app">
    <loading @on-load-done="loadingDone" v-show="!show"></loading>
    <v-audio :source="music" :autoPlay="true" v-show="show"></v-audio>
    <transition name="fade">
      <full-page ref="fullpage" :options="options" id="fullpage" v-show="show">
        <!-- <page-one @jz="moveSectionDown" :show="show"></page-one>
        <page-two :show="p2show" @home-click="moveTo"></page-two>
        <page-three @move-to="star" :show="p3show"></page-three>
        <page-four @move-to="star" :show="p4show"></page-four>
        <page-five @move-to="star" :show="p5show"></page-five>
        <page-six @move-to="star" :show="p6show"></page-six>
        <page-seven @move-to="star" :show="p7show"></page-seven>
        <page-eight @move-to="star" :show="p8show"></page-eight>
        <page-nine @move-to="star" :show="p9show"></page-nine>
        <page-ten @move-to="star" :show="p10show"></page-ten>
        <page-eleven @move-to="moveTo" :city="city"></page-eleven>-->
        <page-twelve
          :location="location"
          :currentAvatar="currentAvatar"
          :rankNum="rankNum"
          :name="name"
          @move-to="moveTo"
        ></page-twelve>

        <page-threen
          :location="location"
          :rankNum="rankNum"
          :name="name"
          :currentAvatar="currentAvatar"
          :show="p13show"
        ></page-threen>
      </full-page>
    </transition>
  </div>
</template>

<script>
import Loading from "./components/loading";
import PageOne from "./components/p1";
import PageTwo from "./components/p2";
import PageThree from "./components/p3";
import PageFour from "./components/p4";
import PageFive from "./components/p5";
import PageSix from "./components/p6";
import PageSeven from "./components/p7";
import PageEight from "./components/p8";
import PageNine from "./components/p9";
import PageTen from "./components/p10";
import PageEleven from "./components/p11";
import PageTwelve from "./components/p12";
import PageThreen from "./components/p13";
import BaseAvatar from "./assets/p12/tx.png";
import VAudio from "./components/v-audio.vue";
import axios from "axios";
import wx from "weixin-js-sdk";
import { log } from "util";

export default {
  name: "app",
  data() {
    return {
      music:
        "https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/haier.mp3",
      options: {
        scrollingSpeed: 0,
        afterLoad: this.afterLoad
      },
      show: false,
      p2show: false,
      p3show: false,
      p4show: false,
      p5show: false,
      p6show: false,
      p7show: false,
      p8show: false,
      p9show: false,
      p10show: false,
      p13show: false,
      location: "永川",
      locations: [
        "江津",
        "万州",
        "永川",
        "奉节",
        "达州",
        "开州",
        "泸州",
        "宜宾"
      ],
      lpy: [
        "jiangjin",
        "wanzhou",
        "yongchuan",
        "fengjie",
        "dazhou",
        "kaizhou",
        "luzhou",
        "yibin"
      ],
      city: null,
      currentAvatar: BaseAvatar,
      rankNum: 1,
      name: "小鱼儿"
    };
  },
  methods: {
    afterLoad(origin, destination, direction) {
      this.$nextTick(() => {
        this.fullpage.api.setAllowScrolling(false);
      });
      switch (destination.index) {
        case 1:
          this.p2show = true;
          break;
        case 2:
          this.p3show = true;
          break;
        case 3:
          this.p4show = true;
          break;
        case 4:
          this.p5show = true;
          break;
        case 5:
          this.p6show = true;
          break;
        case 6:
          this.p7show = true;
          break;
        case 7:
          this.p8show = true;
          break;
        case 8:
          this.p9show = true;
          break;
        case 9:
          this.p10show = true;
          break;
        case 12:
          this.p13show = true;
          break;
      }
    },
    moveTo(index) {
      console.log(index);
      if (index > 2 && index < 11) {
        this.location = this.locations[index - 3];
        this.city = this.lpy[index - 3];
      }
      if (index == 12) {
        this.initWxShare();
      }
      this.api.moveTo(index);
    },
    async star(index) {
      console.log(this.city);
      let res = await axios.post("https://projects.godruoyi.com/haier/star", {
        city: this.city
      });

      res = res.data;
      console.log("star", res);
      if (res.code == 0) {
        this.moveTo(index);
      }
    },
    moveSectionDown() {
      this.api.moveSectionDown();
    },
    loadingDone() {
      this.show = true;
    },
    // 获取微信分享配置
    async getJssdk() {
      let res = await axios.get(
        `https://projects.godruoyi.com/haier/jssdk?target_url=${encodeURIComponent(
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
            jsApiList: ["onMenuShareAppMessage", "onMenuShareTimeline"]
          },
          res.data
        );
        wx.config(configData);
        // this.initWxShare();
      } else {
        console.log(res.message);
      }
    },
    // 初始化微信配置
    initWxShare() {
      const that = this;
      wx.ready(function() {
        wx.onMenuShareTimeline({
          title: "海尔消夏节，邀您点赞家的高光时刻", // 分享标题
          link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl:
            "https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/share.png", // 分享图标
          success: function() {}
          // 用户点击了分享后执行的回调函数
        });
        wx.onMenuShareAppMessage({
          title: `我的家在${that.location}，我是第${that.rankNum}个为ta点赞的人`, // 分享标题
          desc: "海尔消夏节，邀您点赞家的高光时刻", // 分享描述
          link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl:
            "https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/share.png", // 分享图标
          type: "", // 分享类型,music、video或link，不填默认为link
          dataUrl: "", // 如果type是music或video，则要提供数据链接，默认为空
          success: function() {
            // 用户点击了分享后执行的回调函数
          }
        });
      });
    },
    // 获取用户信息，头像和排名
    async getUserInfor() {
      try {
        let res = await axios.get(
          "https://projects.godruoyi.com/haier/userinfo"
        );
        res = res.data;
        console.log("info", res);
        if (res.code == 0) {
          if (res.data._avatar) {
            this.currentAvatar = "data:image/png;base64," + res.data._avatar;
          }
          if (res.data.nickname) {
            this.name = res.data.nickname;
          }
        } else {
          console.log(res.message);
        }
      } catch (err) {
        console.log(err);
      }
    }
  },
  created() {
    this.getJssdk();
    this.getUserInfor();
  },
  computed: {
    fullpage() {
      return this.$refs.fullpage;
    },
    api() {
      return this.$refs.fullpage.api;
    }
  },

  components: {
    Loading,
    PageOne,
    PageTwo,
    PageThree,
    PageFour,
    PageFive,
    PageSix,
    PageSeven,
    PageEight,
    PageNine,
    PageTen,
    PageEleven,
    PageTwelve,
    PageThreen,
    VAudio
  }
};
</script>
<style lang="less">
@-webkit-keyframes tada {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  10%,
  20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }
  30%,
  50%,
  70%,
  90% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }
  40%,
  60%,
  80% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }
  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
.section {
  position: relative;
  background-size: cover;
  overflow: hidden;
  img {
    display: block;
  }
  .btn {
    width: 390px;
    height: 150px;
    position: absolute;
    top: 80%;
    left: 0;
    right: 0;
    margin: auto;
    animation: tada 1s 3s;
    background-size: cover;
    background-image: url(https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p3/wj.png);
  }
}
</style>

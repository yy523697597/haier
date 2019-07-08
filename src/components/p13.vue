<template>
  <transition name="fade">
    <div class="section container">
      <div class="mask" @click.self="closePic"></div>
      <div class="p13" :class="showPic?'sx':''" id="share-container">
        <div class="content">
          <img :src="bg" class="bg" />
          <img src="../assets/p1/logo.png" class="top" />
          <img :src="pic" alt class="title" />
          <div class="location">
            <img src="../assets/p13/l.png" alt class="l" />
            <span>{{location}}</span>
          </div>
        </div>
        <div class="user">
          <img :src="currentAvatar" alt class="tx" />
          <p class="user-name">{{name}}</p>
          <img src="../assets/p13/zt.png" class="dz" />
          <p class="count">
            我是第
            <span>{{rankNum}}</span> 个为
            <span>{{location}}</span> 点赞的人
          </p>
          <p class="zh">{{wish}}</p>
          <div class="code">
            <img src="../assets/p13/q.png" class="code" />
            <span>扫码为家点赞</span>
          </div>
        </div>
        <img :src="buildImage" class="share-img" v-show="showPic" />
      </div>
      <p class="tips" v-show="showPic">长按图片可以保存，点击空白处关闭界面</p>
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
import { log } from "util";
import { setTimeout } from "timers";
import html2canvas from "html2canvas";
import jj from "../assets/p13/jj.png";
import wz from "../assets/p13/wz.png";
import yc from "../assets/p13/yc.png";
import fj from "../assets/p13/fj.png";
import dz from "../assets/p13/dz.png";
import kz from "../assets/p13/kz.png";
import lz from "../assets/p13/lz.png";
import yb from "../assets/p13/yb.png";

import jjs from "../assets/p13/jjs.png";
import wzs from "../assets/p13/wzs.png";
import ycs from "../assets/p13/ycs.png";
import fjs from "../assets/p13/fjs.png";
import dzs from "../assets/p13/dzs.png";
import kzs from "../assets/p13/kzs.png";
import lzs from "../assets/p13/lzs.png";
import ybs from "../assets/p13/ybs.png";

export default {
  props: {
    name: String,
    location: String,
    rankNum: [String, Number],
    currentAvatar: String,
    show: Boolean,
    wish: String
  },
  watch: {
    show(val) {
      if (val) {
        this.buildNewImage();
      }
    }
  },
  data() {
    return {
      locations: {
        江津: jj,
        万州: wz,
        永川: yc,
        奉节: fj,
        达州: dz,
        开州: kz,
        泸州: lz,
        宜宾: yb
      },
      locationPics: {
        江津: jjs,
        万州: wzs,
        永川: ycs,
        奉节: fjs,
        达州: dzs,
        开州: kzs,
        泸州: lzs,
        宜宾: ybs
      },
      showPic: true,
      buildImage: null
    };
  },
  computed: {
    bg() {
      return this.locations[this.location];
    },
    pic() {
      return this.locationPics[this.location];
    }
  },
  methods: {
    closePic() {
      this.showPic = false;
    },
    buildNewImage() {
      this.shareFlag = true;
      // 生成图片
      if (!this.buildImage) {
        console.log("build");
        let that = this;
        html2canvas(document.querySelector("#share-container")).then(canvas => {
          that.buildImage = canvas.toDataURL("image/png", 1);
          console.log(that.buildImage);
        });
      }
    }
  },
  components: {},
  created() {}
};
</script>

<style  lang="less" scoped>
.share-img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 100%;
  opacity: 0;
}
.container {
  position: relative;
}
.tips {
  color: #fff;
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: 3vw;
}
.sx {
  transform: scale(0.9);
}
.mask {
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
.p13 {
  transition: all 1s;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  .content {
    position: relative;
    width: 100%;
    height: 77%;
    background-size: cover;
    .bg {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
    }
    .top {
      width: 668px;
      height: 98px;
      position: absolute;
      top: 4%;
      left: 0;
      right: 0;
      margin: auto;
    }
    .title {
      height: 50%;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      margin: auto;
    }
    .location {
      position: absolute;
      right: 6%;
      bottom: 3%;
      color: #fff;
      display: flex;
      font-size: 3vw;
      align-items: center;
      img {
        width: 24px;
        height: 32px;
        margin-right: 10px;
      }
    }
  }
  .user {
    height: 23%;
    background: #fff;
    position: relative;
    padding-top: 20px;
    .dz {
      width: 238px;
      height: 92px;
      margin-left: 54px;
      margin-top: -8px;
    }
    .code {
      text-align: center;
      width: 150px;
      height: 190px;
      color: #444;
      position: absolute;
      right: 6vw;
      top: 6vw;
      img {
        width: 140px;
        height: 140px;
        position: absolute;
        top: 0;
        left: 0;
      }
      span {
        position: absolute;
        left: 0;
        bottom: 0;
        font-size: 3vw;
      }
    }
    .tx {
      position: absolute;
      width: 166px;
      height: 166px;
      border: 2px solid #fff;
      border-radius: 50%;
      left: 6%;
      top: -95px;
    }
    .user-name {
      font-size: 5vw;
      margin-left: 29%;
      margin-top: 0;
    }
    .count {
      font-weight: bold;
      margin-top: 10px;
    }
    .zh {
      margin-top: -30px;
      line-height: 1.5;
      width: 480px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    p {
      margin-left: 54px;
      font-size: 4vw;
      span {
        color: #d90909;
      }
    }
  }
}
</style>

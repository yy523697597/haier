<template>
  <transition name="fade">
    <div class="section container">
      <div class="mask" @click.self="closePic"></div>
      <div class="p13" :class="showPic?'sx':''" id="share-container">
        <div class="content">
          <img :src="bg" class="bg" />
          <img src="../assets/p1/logo.png" class="top" />
          <img src="../assets/p1/dz.png" class="dz" />
          <div class="location">
            <img src="../assets/p13/l.png" alt class="l" />
            <span>{{location}}</span>
          </div>
        </div>
        <div class="user">
          <img :src="currentAvatar" alt class="tx" />
          <p class="user-name">{{name}}</p>
          <p class="count">
            我是第
            <span>{{rankNum}}</span> 个为
            <span>{{location}}</span> 点赞的人
          </p>
          <p class="zh">
            它很燃、很酷、很美！
            <br />我为ta自豪！
          </p>
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

export default {
  props: {
    name: String,
    location: String,
    rankNum: [String, Number],
    currentAvatar: String,
    show: Boolean
  },
  watch: {
    show(val) {
      if (val) {
        console.log(234);

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
      showPic: true,
      buildImage: null
    };
  },
  computed: {
    bg() {
      return this.locations[this.location];
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
        setTimeout(() => {
          html2canvas(document.querySelector("#share-container"), {
            useCORS: true,
            allowTaint: true
          }).then(canvas => {
            that.buildImage = canvas.toDataURL("image/png", 1);
            console.log(that.buildImage);
          });
        }, 1000);
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
    .dz {
      width: 352px;
      height: 139px;
      position: absolute;
      left: 6%;
      bottom: 13.7%;
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
      margin-top: 6vw;
    }
    .zh {
      margin-top: -2.4vw;
      line-height: 1.5;
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

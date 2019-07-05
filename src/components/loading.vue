<template>
  <div class="loading-container">
    <!-- <vue-loading type="spin" color="#d9544e" :size="{ width: '50px', height: '50px' }"></vue-loading>
    -->
    <div class="loader">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
    <!-- <p>拼命加载中...</p> -->
    <p>{{percent}}</p>
  </div>
</template>

<script>
import { VueLoading } from "vue-loading-template";

export default {
  name: "loading",
  data() {
    return {
      count: 0,
      percent: "",
      imgs: [
        "https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p1/bg.png",
        "https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p1/db.png",
        "https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p1/dz.png",
        "https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p1/jz.png",
        "https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p1/logo.png",

        "https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p2/bg.png",
        "https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p2/fx.png",
        "https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p2/xj.png",

        "https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p3/bg.png",
        "https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p3/aq.png",
        "https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p3/wj.png",

        "https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p4/bg.png",
        "https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p4/btn.png",
        "https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p4/xys.png",

        "https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p5/bg.png",
        "https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p5/zh.png",

        "https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p6/bg.png",
        "https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p6/tk.png",

        "https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p7/bg.png",
        "https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p7/gf.png",

        "https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p8/bg.png",
        "https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p8/jm.png",

        "https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p9/bg.png",
        "https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p9/c.png",

        "https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p10/bg.png",
        "https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p10/gz.png",

        "https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p11/bg.png",
        "https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p11/j.png",
        "https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p11/tj.png",
        "https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p11/zt.png",

        "https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p12/bg.png",
        "https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p12/sp.png",
        "https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p12/tx.png",

        "https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p13/dz.png",
        "https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p13/fj.png",
        "https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p13/jj.png",
        "https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p13/kz.png",
        "https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p13/l.png",
        "https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p13/lz.png",
        "https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p13/q.png",
        "https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p13/wz.png",
        "https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p13/yb.png",
        "https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p13/yc.png"
      ]
    };
  },
  components: {
    VueLoading
  },
  mounted: function() {
    this.preload();
  },
  methods: {
    preload: function() {
      for (let img of this.imgs) {
        let image = new Image();
        image.src = img;
        image.onload = () => {
          this.count++;
          // 计算图片加载的百分数，绑定到percent变量
          let percentNum = Math.floor((this.count / this.imgs.length) * 100);
          this.percent = `${percentNum}%`;
        };
      }
    }
  },
  watch: {
    count: function(val) {
      if (val === this.imgs.length - 1) {
        // 图片加载完成后隐藏
        this.$emit("on-load-done");
      }
    }
  }
};
</script>
<style scoped>
.loading-container {
  height: 180px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  text-align: center;
}
@keyframes slide {
  0% {
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}
.dot:nth-child(1) {
  animation-delay: 0.1s;
  background: #32aacc;
}
.dot {
  width: 24px;
  height: 24px;
  background: #3ac;
  border-radius: 100%;
  display: inline-block;
  animation: slide 1s infinite;
}
.dot:nth-child(2) {
  animation-delay: 0.2s;
  background: #64aacc;
}
.dot:nth-child(3) {
  animation-delay: 0.3s;
  background: #96aacc;
}
.dot:nth-child(4) {
  animation-delay: 0.4s;
  background: #c8aacc;
}
.dot:nth-child(5) {
  animation-delay: 0.5s;
  background: #faaacc;
}
</style>
<template>
  <transition name="fade">
    <div class="section p12">
      <img
        src="https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p1/dz.png"
        class="zt"
      />
      <img :src=" currentAvatar" class="tx" />
      <h1>{{name}}</h1>
      <p class="detail">
        您是第
        <span>{{rankNum}}</span>&nbsp;位为
        <span>{{location}}</span>&nbsp;点赞的人
      </p>
      <p>快快邀请小伙伴们一起</p>
      <p>见证家的高光时刻</p>
      <div class="sp" @click="moveTo"></div>
      <p class="fx">
        分享专属海报，集赞58个
        <br />截图给海尔重庆公众号（haier-chognqing）
        <br />将获得品牌神秘礼品
      </p>
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
export default {
  props: {
    location: String,
    currentAvatar: String,
    rankNum: [Number, String],
    name: String
  },
  data() {
    return {};
  },
  methods: {
    moveTo() {
      this.$emit("move-to", 13);
    }
  },
  created() {}
};
</script>

<style  lang="less" scoped>
.p12 {
  background-image: url(https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p12/bg.png);
  .zt {
    width: 380px;
    height: 150px;
    margin: 11% auto 0;
  }
  .tx {
    border: 2px solid #fff;
    border-radius: 50%;
    width: 166px;
    height: 166px;
    display: block;
    margin: 6% auto 0;
  }
  h1 {
    text-align: center;
    font-size: 5vw;
    margin-top: 4%;
  }
  p {
    text-align: center;
    font-size: 4vw;
    color: #444444;
    line-height: 0.6;
    letter-spacing: 0px;
    // width: 490px;
  }
  .detail {
    font-size: 5vw;
    margin-top: 5%;
    span {
      color: #d90909;
    }
  }
  .sp {
    background-image: url(https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p12/sp.png);
    background-size: cover;
    width: 476px;
    height: 150px;
    margin: 25% auto 3%;
  }
  .fx {
    color: #ffffff;
    font-size: 4vw;
    line-height: 1.5;
  }
}
</style>

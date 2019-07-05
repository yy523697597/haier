<template>
  <transition name="fade">
    <div class="section p8">
      <div class="tke" v-show="show"></div>
      <div class="btn" @click="moveTo" v-show="show"></div>
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
export default {
  props: {
    show: Boolean
  },
  data() {
    return {};
  },
  methods: {
    moveTo() {
      this.$emit("move-to", 11);
    }
  },
  components: {},
  created() {}
};
</script>

<style  lang="less" scoped>
@keyframes ls6 {
  0% {
    height: 0;
  }
  100% {
    height: 75.46667vw;
  }
}
.p8 {
  background-image: url(https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p8/bg.png);
  .tke {
    width: 263px;
    height: 566px;
    margin: 14% auto 0;
    background-image: url(https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p8/jm.png);
    background-size: 100%;
    overflow: hidden;
    background-repeat: no-repeat;
    animation: ls6 3s linear;
  }
}
</style>

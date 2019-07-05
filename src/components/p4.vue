<template>
  <transition name="fade">
    <div class="section p4">
      <div class="xys" v-show="show"></div>
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
@keyframes ls2 {
  0% {
    height: 0;
  }
  100% {
    height: 71.46667vw;
  }
}
.p4 {
  background-image: url(https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p4/bg.png);
  .xys {
    width: 226px;
    height: 536px;
    background-image: url(https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p4/xys.png);
    background-size: cover;
    background-repeat: no-repeat;

    margin: 46% auto 0;
    // margin: 25% auto 0;
    animation: ls2 3s linear;
  }
}
</style>

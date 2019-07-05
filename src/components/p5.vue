<template>
  <transition name="fade">
    <div class="section p5">
      <div class="zh" v-show="show"></div>
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
@keyframes ls3 {
  0% {
    height: 0;
  }
  100% {
    height: 96vw;
  }
}
.p5 {
  background-image: url(https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p5/bg.png);
  .zh {
    width: 240px;
    height: 720px;
    margin: 15% auto 0;
    background-image: url(https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p5/zh.png);
    background-size: 100%;
    background-repeat: no-repeat;

    overflow: hidden;
    animation: ls3 3s linear;
  }
}
</style>

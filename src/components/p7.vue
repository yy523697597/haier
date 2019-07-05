<template>
  <transition name="fade">
    <div class="section p7">
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
@keyframes ls5 {
  0% {
    height: 0;
  }
  100% {
    height: 76.6vw;
  }
}
.p7 {
  background-image: url(https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p7/bg.png);
  .tke {
    width: 270px;
    height: 574px;
    margin: 18% auto 0;
    background-image: url(https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p7/gf.png);
    background-repeat: no-repeat;
    background-size: 100%;
    overflow: hidden;
    animation: ls5 3s linear;
  }
}
</style>

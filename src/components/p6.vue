<template>
  <transition name="fade">
    <div class="section p6">
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
@keyframes ls4 {
  0% {
    height: 0;
  }
  100% {
    height: 76.8vw;
  }
}
.p6 {
  background-image: url(https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p6/bg.png);
  .tke {
    width: 278px;
    height: 576px;
    margin: 25% auto 0;
    background-image: url(https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p6/tk.png);
    background-size: 100%;
    background-repeat: no-repeat;

    overflow: hidden;
    animation: ls4 3s linear;
  }
}
</style>

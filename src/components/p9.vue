<template>
  <transition name="fade">
    <div class="section p9">
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
    height: 64.4vw;
  }
}
.p9 {
  background-image: url(https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p9/bg.png);
  .tke {
    width: 248px;
    height: 483px;
    margin: 19% auto 0;
    background-image: url(https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p9/c.png);
    background-size: 100%;
    background-repeat: no-repeat;

    overflow: hidden;
    animation: ls6 3s linear;
  }
}
</style>

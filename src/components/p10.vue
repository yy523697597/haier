<template>
  <transition name="fade">
    <div class="section p10">
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
@keyframes ls7 {
  0% {
    height: 0;
  }
  100% {
    height: 87.46667vw;
  }
}
.p10 {
  background-image: url(https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p10/bg.png);
  .tke {
    width: 254px;
    height: 656px;
    margin: 22% auto 0;
    background-image: url(https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p10/gz.png);
    background-size: 100%;
    background-repeat: no-repeat;

    overflow: hidden;
    animation: ls7 3s linear;
  }
}
</style>

<template>
  <transition name="fade">
    <div class="section p3">
      <div class="aq" v-show="show"></div>
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
@keyframes ls1 {
  0% {
    height: 0;
  }
  100% {
    height: 76.53333vw;
  }
}
.p3 {
  background-image: url(../assets/p3/bg.png);
  .aq {
    width: 218px;
    height: 574px;
    margin: 22% auto 0;
    background-image: url(../assets/p3/aq.png);
    background-repeat: no-repeat;

    background-size: 100%;
    overflow: hidden;
    animation: ls1 3s linear;
  }
}
</style>

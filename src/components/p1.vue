<template>
  <div class="section p1">
    <transition name="slideDown">
      <img
        src="https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p1/logo.png"
        class="top"
        v-show="show"
      />
    </transition>
    <transition name="zoom">
      <img
        src="https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p1/dz.png"
        class="dz"
        v-show="show"
      />
    </transition>

    <transition name="zoom">
      <img
        v-show="show"
        src="https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p1/jz.png"
        class="jz"
        @click="jz"
      />
    </transition>
    <transition name="slideUp">
      <div class="db" v-show="show">
        <span>中国 · 重庆海尔</span>
      </div>
    </transition>
  </div>
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
    jz() {
      this.$emit("jz");
    }
  },
  components: {},
  created() {}
};
</script>

<style  lang="less" scoped>
.p1 {
  background-image: url(https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p1/bg.png);
  .top {
    width: 668px;
    height: 98px;
    margin: 4% auto 0;
  }
  .dz {
    width: 536px;
    height: 214px;
    margin: 11% auto 0;
    animation-delay: 1s;
  }
  .jz {
    width: 390px;
    height: 149px;
    margin: 47% auto 0;
    animation-delay: 2s;
  }
  .db {
    width: 750px;
    height: 220px;
    background-image: url(https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p1/db.png);
    background-size: cover;
    line-height: 360px;
    font-size: 3vw;
    color: #fff;
    text-align: center;
    position: absolute;
    left: 0;
    bottom: 0;
    animation-delay: 3s;
  }
}
</style>

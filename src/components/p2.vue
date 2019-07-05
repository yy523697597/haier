<template>
  <transition name="fade">
    <div class="section p2">
      <transition name="slideDown">
        <img
          src="https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p2/fx.png"
          class="fx"
          v-show="show"
        />
      </transition>
      <transition name="zoom">
        <div class="xj" v-show="show">
          <div class="jj" @click="moveTo(3)"></div>
          <div class="wz" @click="moveTo(4)"></div>
          <div class="yc" @click="moveTo(5)"></div>
          <div class="fj" @click="moveTo(6)"></div>
          <div class="dz" @click="moveTo(7)"></div>
          <div class="kz" @click="moveTo(8)"></div>
          <div class="lz" @click="moveTo(9)"></div>
          <div class="yb" @click="moveTo(10)"></div>
        </div>
      </transition>
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
    moveTo(index) {
      this.$emit("home-click", index);
    }
  },
  components: {},
  created() {}
};
</script>

<style  lang="less">
// @keyframes ls8 {
//   0% {
//     height: 0;
//   }
//   100% {
//     height: 130.66667vw;
//   }
// }
.p2 {
  background-image: url(https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p2/bg.png);

  .fx {
    width: 330px;
    height: 150px;
    margin: 6% auto 0;
  }
  .xj {
    background-image: url(https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p2/xj.png);
    background-size: cover;
    width: 638px;
    height: 980px;
    margin: 5% auto 0;
    position: relative;
    animation-delay: 1s;
    div {
      width: 120px;
      height: 120px;
      position: absolute;
    }
    .jj {
      left: 40px;
      top: 40px;
    }
    .wz {
      right: 0;
      top: 0;
    }
    .yc {
      left: 160px;
      top: 220px;
    }
    .dz {
      left: 0;
      top: 350px;
    }
    .fj {
      right: 36px;
      top: 280px;
    }
    .kz {
      top: 520px;
      right: 160px;
    }
    .lz {
      bottom: 160px;
      left: 20px;
    }
    .yb {
      bottom: 150px;
      right: 0;
    }
    // position: absolute;
    // bottom: 0;
    // left: 0;
    // right: 0;
    // margin: auto;
  }
}
</style>

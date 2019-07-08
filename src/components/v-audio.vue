<template>
  <transition name="slideRight">
    <div class="bgm" @click="togglePlay" ref="bgmBtn">
      <audio preload="auto" loop ref="bgm" :autoplay="autoPlay">
        <source :src="source" type="audio/mpeg" />
      </audio>
    </div>
  </transition>
</template>
<script>
export default {
  name: "audio-item",
  props: {
    source: {
      type: String,
      default: ""
    },
    autoPlay: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    if (this.autoPlay) {
      this.readyMusic();
      this.$refs.bgm.addEventListener("canplay", () => {
        this.readyMusic();
      });
    }
  },
  methods: {
    // 微信端自动播放音频
    readyMusic() {
      let that = this;
      function audioAutoPlay() {
        var audio = that.$refs.bgm;
        audio.play();
        // audio.pause();
        document.addEventListener(
          "WeixinJSBridgeReady",
          function() {
            audio.play();
            // audio.pause();
          },
          false
        );
        that.$refs.bgmBtn.className += " play";
      }
      audioAutoPlay();
      setTimeout(() => {
        console.log("暂停", this.$refs.bgm.paused);
        if (this.$refs.bgm.paused) {
          that.$refs.bgmBtn.className = "bgm";
        }
      }, 50);
    },
    togglePlay() {
      var audio = this.$refs.bgm;
      if (audio.paused) {
        audio.play();
        this.$refs.bgmBtn.className += " play";
      } else {
        audio.pause();
        this.$refs.bgmBtn.className = "bgm";
      }
    }
  }
};
</script>

<style lang="less" scoped>
.bgm {
  position: fixed;
  right: 30px;
  top: 140px;
  width: 60px;
  height: 60px;
  background: url("http://subao.dayuw.cn/addons/mcjx2/assets/imgs/music_icon2.png")
    no-repeat 0 0;
  background-size: 100% 100%;
  z-index: 100;
  &.play {
    background: url("http://subao.dayuw.cn/addons/mcjx2/assets/imgs/music_icon.png")
      no-repeat 0 0;
    background-size: 100% 100%;
    animation: rotateCircle 10s infinite linear 0s;
  }
}
@keyframes rotateCircle {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>

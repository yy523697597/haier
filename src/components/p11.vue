<template>
  <transition name="fade">
    <div class="section p11" ref="page">
      <img
        src="https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p11/j.png"
        alt
        class="j"
      />
      <img
        src="https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p1/dz.png"
        alt
        class="zt"
      />
      <input type="text" placeholder="请输入你对家的祝福" class="sr" v-model="wish" @blur="inputBlur" />
      <div class="tj" @click="submit"></div>
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
import axios from "axios";
import { log } from "util";

export default {
  props: {
    city: String
  },
  data() {
    return {
      wish: null
    };
  },
  methods: {
    inputBlur() {
      //ios 兼容，input失去焦点后界面上移不恢复的问题
      setTimeout(() => {
        let scrollHeight =
          document.documentElement.scrollTop || document.body.scrollTop || 0;
        window.scrollTo(0, Math.max(scrollHeight - 1, 0));
        this.$refs.page.scrollIntoView();
      }, 100);
    },
    async submit() {
      if (this.wish) {
        let wish = this.wish.trim();
        if (wish.length > 0) {
          ``;
          let res = await axios.post(
            "https://projects.godruoyi.com/haier/submit",
            {
              city: this.city,
              username: this.wish
            }
          );

          res = res.data;
          console.log("submit", res);
          if (res.code == 0) {
            this.$parent.$parent.rankNum = res.data.total;
            this.$parent.$parent.wish = this.wish;
            this.$emit("move-to", 12);
          }
        } else {
          this.$toast.center("请输入您的祝福~");
        }
      } else {
        this.$toast.center("请输入您的祝福~");
      }
    }
  },
  components: {},
  created() {}
};
</script>

<style  lang="less" scoped>
.p11 {
  background-image: url(https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p11/bg.png);
  .j {
    width: 456px;
    height: 428px;
    margin: 8% auto 0;
  }
  .zt {
    width: 366px;
    height: 146px;
    margin: 8% auto 0;
  }
  .sr {
    padding-left: 1em;
    box-sizing: border-box;
    width: 660px;
    margin: 8% auto 0;
    display: block;
    height: 100px;
    background-color: #ffffff;
    border-radius: 15px;
    opacity: 0.75;
  }
  .tj {
    background-image: url(https://gblog-images-1254032478.cos.ap-chengdu.myqcloud.com/haier/assets/p11/tj.png);
    background-size: cover;
    width: 156px;
    height: 230px;
    margin: 8% auto;
  }
}
</style>

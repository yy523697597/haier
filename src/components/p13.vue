<template>
  <transition name="fade">
    <div class="section p13">
      <div class="content">
        <img src="../assets/p1/logo.png" class="top" />
        <img src="../assets/p1/dz.png" class="dz" />
        <div class="location">
          <img src="../assets/p13/l.png" alt class="l" />
          <span>{{location}}</span>
        </div>
      </div>
      <div class="user">
        <img src="../assets/p12/tx.png" alt class="tx" />
        <p class="user-name">{{name}}</p>
        <p class="count">
          我是第
          <span>{{rankNum}}</span> 个为
          <span>{{location}}</span> 点赞的人
        </p>
        <p class="zh">
          它很燃、很酷、很美！
          <br />我为ta自豪！
        </p>
        <div class="code">
          <img src="../assets/p13/q.png" class="code" />
          <span>扫码为家点赞</span>
        </div>
      </div>
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
export default {
  props: {
    name: String,
    location: String,
    rankNum: [String, Number]
  },
  data() {
    return {};
  },
  methods: {},
  components: {},
  created() {}
};
</script>

<style  lang="less" scoped>
.p13 {
  .content {
    position: relative;
    width: 100%;
    height: 77%;
    background-image: url(../assets/p13/kz.png);
    background-size: cover;
    .top {
      width: 668px;
      height: 98px;
      position: absolute;
      top: 4%;
      left: 0;
      right: 0;
      margin: auto;
    }
    .dz {
      width: 352px;
      height: 139px;
      position: absolute;
      left: 6%;
      bottom: 13.7%;
    }
    .location {
      position: absolute;
      right: 6%;
      bottom: 3%;
      color: #fff;
      display: flex;
      font-size: 3vw;
      align-items: center;
      img {
        width: 24px;
        height: 32px;
        margin-right: 10px;
      }
    }
  }
  .user {
    height: 33%;
    background: #fff;
    position: relative;
    .code {
      text-align: center;
      width: 150px;
      height: 190px;
      color: #444;
      position: absolute;
      right: 6vw;
      top: 6vw;
      img {
        width: 140px;
        height: 140px;
        position: absolute;
        top: 0;
        left: 0;
      }
      span {
        position: absolute;
        left: 0;
        bottom: 0;
        font-size: 3vw;
      }
    }
    .tx {
      position: absolute;
      width: 166px;
      height: 166px;
      border: 2px solid #fff;
      border-radius: 50%;
      left: 6%;
      top: -95px;
    }
    .user-name {
      font-size: 5vw;
      margin-left: 29%;
    }
    .count {
      font-weight: bold;
      margin-top: 6vw;
    }
    .zh {
      margin-top: -2.4vw;
      line-height: 1.5;
    }
    p {
      margin-left: 54px;
      font-size: 4vw;
      span {
        color: #d90909;
      }
    }
  }
}
</style>

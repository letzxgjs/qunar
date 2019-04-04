<template>
  <div class="header">
    <div class="header-left">
      <i class="iconfont">&#xe61e;</i>
    </div>
    <div class="header-search">
      <div class="input">
        <i class="iconfont">&#xe615;</i>输入城市/景点/游玩主题
      </div>
    </div>
    <div class="header-right" @click="goToCity">
      {{ city }}
      <i class="iconfont">&#xe64a;</i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    city: String
  },
  methods: {
    goToCity() {
      this.$router.push({ name: 'city' })
    }
  }
}
</script>

<style lang='stylus' scoped>
// @import '../../../assets/styles/variables.styl';
@import '~@style/variables.styl';

.header {
  height: $headerHeight;
  line-height: $headerHeight;
  display: flex;
  color: #fff;
  background-color: $bgColor;

  .header-left {
    width: 0.64rem;
    text-align: center;
    font-size: 0.46rem;

    i {
      font-size: 20px;
    }
  }

  .header-search {
    flex: 1;
    margin: 0 0.1rem;

    .input {
      width: 100%;
      height: 0.56rem;
      line-height: 0.56rem;
      padding: 0 0.2rem;
      margin: 0.16rem 0;
      box-sizing: border-box;
      background-color: #fff;
      border-radius: 0.06rem;
      color: #ccc;
    }
  }

  .header-right {
    width: 1.24rem;
    text-align: center;
    // flex: auto;
  }
}
</style>

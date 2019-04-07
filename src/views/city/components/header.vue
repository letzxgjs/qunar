<template>
  <div class="head">
    城市选择
    <div class="city-back" @click="goHome">
      <i class="iconfont icon-back">&#xe61e;</i>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '~@style/variables.styl';

.head {
  height: $headerHeight;
  line-height: $headerHeight;
  font-size: 0.32rem;
  color: #fff;
  background-color: $bgColor;
  text-align: center;
  position: relative;

  .city-back {
    width: 0.64rem;
    height: $headerHeight;
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;

    .icon-back {
      font-size: 0.4rem;
    }
  }
}
</style>

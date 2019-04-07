<template>
  <div>
    <div class="header-abs" v-show="showAbs" @click="goHome">
      <i class="iconfont header-abs-back">&#xe61e;</i>
    </div>
    <div class="header-fixed" v-show="!showAbs" :style="fixedStyle">
      <div class="head">
        景点详情
        <div class="city-back" @click="goHome">
          <i class="iconfont">&#xe61e;</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAbs: true,
      fixedStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    goHome() {
      this.$router.push('/')
    },
    scrollHead() {
      console.log(123)
      let scrollY = document.documentElement.scrollTop
      if (scrollY > 60) {
        this.showAbs = false
        this.fixedStyle.opacity = scrollY > 160 ? 1 : (scrollY - 60) / 80
      } else {
        this.showAbs = true
      }
    }
  },
  activated() {
    window.addEventListener('scroll', this.scrollHead)
  },
  deactivated() {
    window.removeEventListener('scroll', this.scrollHead)
  }
}
</script>

<style lang='stylus' scoped>
@import '~@style/variables.styl';

.header-abs {
  position: absolute;
  top: 0.16rem;
  left: 0.16rem;
  width: 0.8rem;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  border-radius: 0.8rem;
  background-color: rgba(0, 0, 0, 0.8);

  .header-abs-back {
    color: #fff;
    font-size: 0.4rem;
  }
}

.header-fixed {
  position: fixed;
  z-index: 33;
  top: 0;
  left: 0;
  right: 0;

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
    }
  }
}
</style>

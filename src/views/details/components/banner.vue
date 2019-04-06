<template>
  <div>
    <div class="banner" @click="showGallarySwitch">
      <img
        class="banner-img"
        src="http://img1.qunarzz.com/sight/p0/201408/14/bc6bb9a732c8832cc302641c8527a040.jpg_600x330_93bf6a40.jpg"
      >
      <div class="banner-info">
        <div class="banner-number">
          <i class="iconfont">&#xe6dd;</i> 9
        </div>
        <div class="banner-title">杭州乐园(AAAA景区)</div>
      </div>
    </div>
    <banner-gallary :imgs="imgs" v-if="showGallary" @click.native="showGallarySwitch"></banner-gallary>
  </div>
</template>

<script>
import BannerGallary from '@gallary/gallary.vue'
export default {
  data() {
    return {
      showGallary: false,
      imgs: [
        'http://img1.qunarzz.com/sight/p0/1810/14/14d9f4b3b0f66f3ba3.water.jpg_r_800x800_f0f4fba8.jpg',
        'http://img1.qunarzz.com/sight/p0/201408/14/bc6bb9a732c8832cc302641c8527a040.jpg_r_800x800_f9bd2f7f.jpg'
      ]
    }
  },
  methods: {
    showGallarySwitch() {
      this.showGallary = !this.showGallary
    }
  },
  components: {
    BannerGallary
  }
}
</script>

<style lang='stylus' scoped>
.banner {
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  position: relative;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    font-size: 0.36rem;
    color: #fff;
    padding-bottom: 0.36rem;
    padding-left: 0.2rem;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));

    .banner-number {
      display: inline-block;
      height: 0.4rem;
      line-height: 0.4rem;
      padding: 0 0.4rem;
      margin-bottom: 0.16rem;
      border-radius: 0.4rem;
      font-size: 0.24rem;
      text-align: center;
      background-color: rgba(44, 44, 44, 0.7);
    }

    .banner-title {
    }
  }
}
</style>

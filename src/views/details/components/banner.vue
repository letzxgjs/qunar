<template>
  <div>
    <div class="banner" @click="showGallarySwitch">
      <img class="banner-img" :src="bannerImg">
      <div class="banner-info">
        <div class="banner-number">
          <i class="iconfont">&#xe6dd;</i>
          {{imgs.length}}
        </div>
        <div class="banner-title">{{sightName}}</div>
      </div>
    </div>
    <animation-fade>
      <banner-gallary :imgs="imgs" v-if="showGallary" @click.native="showGallarySwitch"></banner-gallary>
    </animation-fade>
  </div>
</template>

<script>
import BannerGallary from '@common/gallary/gallary.vue'
import AnimationFade from '@common/animation/fade.vue'
export default {
  data() {
    return {
      showGallary: false
    }
  },
  props: {
    bannerImg: String,
    imgs: Array,
    sightName: String
  },
  methods: {
    showGallarySwitch() {
      this.showGallary = !this.showGallary
    }
  },
  components: {
    BannerGallary,
    AnimationFade
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

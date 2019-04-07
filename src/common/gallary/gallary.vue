<template>
  <div class="gallary">
    <div class="wrapper">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(img, index) in imgs" :key="index">
          <!-- <swiper-slide> -->
          <img class="gallary-img" :src="img">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        observeParents: true,
        observer: true
      },
      swiperList: []
    }
  },
  props: {
    imgs: Array
  }
}
</script>

<style lang='stylus' scoped>
.wrapper >>> .swiper-container {
  overflow: inherit;
}

.gallary {
  position: absolute;
  z-index: 33;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  background-color: #000;

  .wrapper {
    height: 0;
    width: 100%;
    // overflow: hidden;
    padding-bottom: 100%;

    .gallary-img {
      width: 100%;
    }

    .swiper-pagination {
      color: #fff;
      // position: absolute;
      bottom: -1rem;
      // z-index: 99;
    }
  }
}
</style>

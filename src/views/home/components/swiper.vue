<template>
  <div class="swiper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <!-- <swiper-slide v-for="slide in swiperSlides" :key="slide.id"> -->
      <swiper-slide v-for="slide in swiperList" :key="slide.id">
        <img :src="slide.imgUrl">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'carrousel',
  data() {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  props: {
    swiperList: Array
  }
}
</script>

<style lang='stylus' scoped>
.swiper >>> .swiper-pagination-bullet-active {
  background-color: #fff;
}

.swiper {
  // height: 0.2667vw;
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 31.25%;

  img {
    width: 100%;
  }
}
</style>

<template>
  <div class="swiper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="slide in swiperSlides" :key="slide.id">
        <img :src="slide.src">
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
      },
      swiperSlides: [
        {
          id: 1,
          src:
            'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/6b6fd3d9e40b749ac1d189ce80ebb3cc.jpg_750x200_9616e2e7.jpg'
        },
        {
          id: 2,
          src:
            'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/26c9b54e3e02d3724f614883d77a62c6.jpg_750x200_57aa8efa.jpg'
        },
        {
          id: 3,
          src:
            'http://img1.qunarzz.com/piao/fusion/1711/b5/4b2278b83092cb02.jpg_750x200_9a01c2af.jpg'
        }
      ]
    }
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
  padding-bottom: 26.67%;

  img {
    width: 100%;
  }
}
</style>

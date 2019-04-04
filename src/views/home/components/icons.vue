<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide class="swiper-wrapper" v-for="(page, index) in pages" :key="index">
        <div class="quar" v-for="(icon, index) in page" :key="index">
          <div class="icon">
            <img :src="icon.imgUrl" :alt="icon.desc">
          </div>
          <div class="title">{{ icon.desc }}</div>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  props: {
    icons: Array
  },
  computed: {
    pages() {
      return this.icons.length < 8
        ? [this.icons]
        : [this.icons.slice(0, 8), this.icons.slice(8)]
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '~@style/mixins.styl';

.wrapper {
  .swiper-wrapper {
    height: 3.7rem;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;

    .quar {
      width: 25%;
      height: 1.5rem;
      padding-top: 0.1rem;
      display: flex;
      flex-direction: column;

      .icon {
        margin: auto;
        width: 1.1rem;
        height: 1.1rem;

        img {
          width: 100%;
        }
      }

      .title {
        text-align: center;
        ellipsis();
      }
    }
  }
}
</style>

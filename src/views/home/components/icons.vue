<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide class="swiper-wrapper" v-for="(page, index) in pages" :key="index">
        <div class="quar" v-for="(icon, index) in page" :key="index">
          <div class="icon">
            <img :src="icon.src" :alt="icon.title">
          </div>
          <div class="title">{{ icon.title }}</div>
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
      icons: [
        {
          title: '景点门票',
          src:
            'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
        },
        {
          title: '一日游',
          src:
            'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png'
        },
        {
          title: '杭州必游',
          src:
            'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png'
        },
        {
          title: '踏青赏花',
          src: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png'
        },
        {
          title: '印象西湖',
          src:
            'http://img1.qunarzz.com/piao/fusion/1803/17/99402a22ce4af302.png'
        },
        {
          title: '千岛湖',
          src:
            'http://img1.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png'
        },
        {
          title: '杭州野生',
          src:
            'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png'
        },
        {
          title: '西溪湿地',
          src:
            'http://img1.qunarzz.com/piao/fusion/1803/b8/c5dcdb58deec2402.png'
        },
        {
          title: '杭州宋城',
          src:
            'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png'
        },
        {
          title: '杭州乐园',
          src:
            'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png'
        }
      ],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
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

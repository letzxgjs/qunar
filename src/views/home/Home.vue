<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperList="swiper"></home-swiper>
    <home-icons :icons="icons8"></home-icons>
    <home-recommend :recommendList="rec"></home-recommend>
    <home-weekend :weekendList="end"></home-weekend>
  </div>
</template>

<script>
import axios from 'axios'
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/icons'
import HomeRecommend from './components/recommend'
import HomeWeekend from './components/weekend'
export default {
  data() {
    return {
      swiper: [],
      end: [],
      icons8: [],
      rec: []
    }
  },
  methods: {
    getHomePageData() {
      axios.get('api/index.json').then(this.getHomeDataSucc)
    },
    getHomeDataSucc(res) {
      if (res.data.ret === true) {
        let data = res.data.data
        this.swiper = data.swiperList
        this.end = data.weekendList
        this.rec = data.recommendList
        this.icons8 = data.iconList
      }
    }
  },
  mounted() {
    this.getHomePageData()
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
}
</script>

<style lang='stylus' scoped>
</style>

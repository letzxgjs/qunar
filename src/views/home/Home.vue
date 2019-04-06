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
import { mapState } from 'vuex'
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/icons'
import HomeRecommend from './components/recommend'
import HomeWeekend from './components/weekend'
export default {
  data() {
    return {
      lastCity: '',
      swiper: [],
      end: [],
      icons8: [],
      rec: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomePageData() {
      axios.get('api/index.json?city=' + this.city).then(this.getHomeDataSucc)
    },
    getHomeDataSucc(res) {
      res = res.data
      if (res.ret === true) {
        let data = res.data
        this.swiper = data.swiperList
        this.end = data.weekendList
        this.rec = data.recommendList
        this.icons8 = data.iconList
      }
    }
  },
  mounted() {
    this.getHomePageData()
    this.lastCity = this.city
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  activated() {
    if (this.lastCity != this.city) {
      this.getHomePageData()
      this.lastCity = this.city
    }
  }
}
</script>

<style lang='stylus' scoped></style>

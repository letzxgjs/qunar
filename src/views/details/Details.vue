<template>
  <div class="detail-wrap">
    <detail-banner :imgs="imgs" :sightName="sightName" :bannerImg="bannerImg"></detail-banner>
    <detail-header></detail-header>
    <detail-list :tickets="tickets"></detail-list>
    <!-- <detail-headers></detail-headers> -->
  </div>
</template>

<script>
import axios from 'axios'
import DetailBanner from './components/banner.vue'
import DetailHeader from './components/header.vue'
import DetailList from './components/list.vue'
// import DetailHeaders from './components/header.1.vue'
export default {
  name: 'Details',
  data() {
    return {
      tickets: [],
      bannerImg: '',
      imgs: [],
      sightName: ''
    }
  },
  methods: {
    getDetailInfo() {
      axios
        .get('/api/detail.json', {
          params: {
            id: this.$route.params.id
          }
        })
        .then(this.handleDetailInfo)
    },
    handleDetailInfo(res) {
      res = res.data
      if (res.ret == true && res.data) {
        let data = res.data
        this.tickets = data.categoryList
        this.bannerImg = data.bannerImg
        this.imgs = data.gallaryImgs
        this.sightName = data.sightName
      }
    }
  },
  mounted() {
    this.getDetailInfo()
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  }
}
</script>

<style lang='stylus' scoped>
.detail-wrap {
  height: 2000px;
  // width: 100%;
}
</style>

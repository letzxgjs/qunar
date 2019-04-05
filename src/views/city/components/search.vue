<template>
  <div>
    <div class="city-search">
      <input type="text" class="search-input" placeholder="输入城市名称/拼音" v-model="keyword">
    </div>
    <div class="results" v-show="keyword" ref="wrapper">
      <ul>
        <li class="item border-bottom" v-for="city in results" :key="city.id">{{city.name}}</li>
        <li class="item border-bottom" v-show="!results.length">没有匹配的城市</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  data() {
    return {
      keyword: '',
      results: []
    }
  },
  props: {
    cities: Object
  },
  watch: {
    keyword() {
      if (this.keyword.trim()) {
        let result = []
        for (let key in this.cities) {
          this.cities[key].forEach(city => {
            if (~city.spell.indexOf(this.keyword)) {
              result.push(city)
            }
          })
        }
        this.results = result
      }
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang='stylus' scoped>
@import '~@style/variables.styl';

.city-search {
  height: 0.72rem;
  line-height: 0.72rem;
  background-color: $bgColor;
  padding: 0 0.1rem;

  .search-input {
    box-sizing: border-box;
    height: 0.52rem;
    line-height: 0.52rem;
    padding-left: 0.1rem;
    width: 100%;
    color: #666;
    text-align: center;
    border-radius: 0.06rem;
  }
}

.results {
  width: 100%;
  min-height: 100%;
  position: absolute;
  top: 1.58rem;
  left: 0;
  background-color: #ee0;
  z-index: 22;

  .item {
    line-height: 0.76rem;
    padding-left: 0.2rem;
  }
}
</style>

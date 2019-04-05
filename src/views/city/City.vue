<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :hot="hotCities" :cities="cities" :letter="letter"></city-list>
    <city-alphabet
      :cities="cities"
      @letter-click="handleLetterClick($event)"
      @change="handleLetterClick($event)"
    ></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/header'
import CitySearch from './components/search'
import CityList from './components/list'
import CityAlphabet from './components/alphabet'
export default {
  data() {
    return {
      letter: 'A',
      hotCities: [],
      cities: {}
    }
  },
  methods: {
    getCities() {
      axios.get('/api/city.json').then(this.getCitiesData)
    },
    getCitiesData(res) {
      res = res.data
      if (res.ret === true) {
        let data = res.data
        this.hotCities = data.hotCities
        this.cities = data.cities
      }
    },
    handleLetterClick(event) {
      this.letter = event
    }
    // touchLetter(event) {}
  },
  mounted() {
    this.getCities()
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  }
}
</script>

<style lang='stylus' scoped></style>

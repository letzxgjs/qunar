<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="city in hot" :key="city.id">
            <div class="button" @click="clickCity(city.name)">{{ city.name }}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(value, key) in cities" :key="key">
        <div class="title border-topbottom" :ref="key">{{ key }}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="city of value"
            :key="city.id"
            @click="clickCity(city.name)"
          >{{ city.name }}</div>
        </div>
      </div>
    </div>
    <div class="search-results" v-if="searchInput">
      <div class="item-list">
        <div
          class="item border-bottom"
          v-for="city of results"
          :key="city.id"
          @click="clickCity(city.name)"
        >{{ city.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  data() {
    return {
      results: []
    }
  },
  props: {
    hot: Array,
    cities: Object,
    letter: String,
    searchInput: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    clickCity(city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    letter() {
      const element = this.$refs[this.letter][0]
      this.scroll.scrollToElement(element)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new Bscroll(this.$refs.wrapper)
    })
  }
}
</script>

<style lang="stylus" scoped>
@import '~@style/variables.styl';

.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:before {
    border-color: #ccc;
  }
}

.list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;

  .title {
    line-height: 0.54rem;
    background: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
  }

  .button-list {
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;

    .button-wrapper {
      float: left;
      width: 33.33%;

      .button {
        margin: 0.1rem;
        padding: 0.1rem 0;
        text-align: center;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
      }
    }
  }

  .item-list {
    .item {
      line-height: 0.76rem;
      padding-left: 0.2rem;
    }
  }
}
</style>

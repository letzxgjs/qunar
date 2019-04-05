<template>
  <ul class="list">
    <li
      class="item"
      v-for="item in letters"
      :key="item"
      :ref="item"
      @click="clickLetter"
      @touchstart="xtouchstart"
      @touchmove="xtouchmove"
      @touchend="xtouchend"
    >{{item}}</li>
  </ul>
</template>

<script>
//import { clearTimeout } from 'timers'
export default {
  data() {
    return {
      touching: false,
      startY: 0,
      timer: null
    }
  },
  props: {
    cities: Object
  },
  computed: {
    letters() {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  updated() {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    clickLetter(e) {
      this.$emit('letter-click', e.target.innerHTML)
    },
    xtouchstart() {
      this.touching = true
    },
    xtouchmove(e) {
      if (this.touching) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    xtouchend() {
      this.touching = true
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@style/variables.styl';

.list {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 0.4rem;
  top: 1.58rem;
  right: 0;
  bottom: 0;

  .item {
    height: 0.4rem;
    text-align: center;
    color: $bgColor;
  }
}
</style>

<template>
  <ul class="list">
    <li class="item" v-for="(item, key) in cities" :key="key" @click='clickLetter>{{key}}</li>
    </ul>
</template>

<script>
export default {
  props: {
    cities: Object
  }, 
  methods: {
    clickLetter(e){
      console.log(e.target.innerHTML)
      this.$emit('letterCilck', e.target.innerHTML)
    }
  }
}
</script>

<style lang='stylus' scoped>
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

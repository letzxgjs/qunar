<template>
  <div>
    <div class="list" v-for="(item, index) in tickets" :key="index">
      <div class="ticket border-bottom">
        <span class="mp-ticketype-ticket"></span>
        {{item.title}}
      </div>
      <detail-ticket v-if="item.children" :tickets="item.children"></detail-ticket>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail-ticket',
  props: {
    tickets: Array
  }
}
</script>

<style lang='stylus' scoped>
.list {
  padding: 0 0.2rem;

  .ticket {
    overflow: hidden;
    position: relative;
    z-index: 4;
    margin-bottom: -0.02rem;
    padding: 0 0.2rem;
    height: 0.88rem;
    background: #fff;
    color: #333;
    font-size: 0.32rem;
    line-height: 0.88rem;
    text-indent: 0.4rem;

    .mp-ticketype-ticket {
      display: inline-block;
      position: absolute;
      width: 0.36rem;
      height: 0.36rem;
      top: 0.26rem;
      left: 0.2rem;
      background: url('//s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -0.45rem no-repeat;
      margin-right: 0.1rem;
      background-size: 0.4rem 3rem;
    }
  }
}
</style>

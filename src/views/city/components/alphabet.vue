<template>
  <ul class="list">
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
  </ul>
</template>

<script>
export default {}
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
    height: 0.36rem;
    text-align: center;
    color: $bgColor;
  }
}
</style>

<template>
  <div class="city-search">
    <input type="text" class="search-input" placeholder="输入城市名称/拼音">
  </div>
</template>

<script>
export default {}
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
</style>

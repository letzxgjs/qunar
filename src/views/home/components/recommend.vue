<template>
  <div class="wrap">
    <div class="wrap-head">热门推荐</div>
    <div
      class="recommend border-bottom"
      v-for="recommend in recommendList"
      :key="recommend.id"
      @click="seeDetail(recommend.id)"
    >
      <img class="recommend-img" :src="recommend.imgUrl">
      <div class="recommend-details">
        <p class="title">{{ recommend.title }}</p>
        <p class="desc">{{ recommend.desc }}</p>
        <button class="btn">查看详情</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    recommendList: Array
  },
  methods: {
    seeDetail(id) {
      this.$router.push({ name: 'details', params: { id } })
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '~@style/mixins.styl';

.wrap {
  background-color: #eee;
  padding-top: 0.1rem;

  .wrap-head {
    line-height: 0.8rem;
    margin-top: 0.2rem;
    text-indent: 0.2rem;
    background-color: #fff;
  }

  .recommend {
    background-color: #fff;
    display: flex;
    height: 1.9rem;

    .recommend-img {
      width: 1.7rem;
      height: 1.7rem;
      margin: 0.1rem;
    }

    .recommend-details {
      flex: 1;
      min-width: 0;
      padding: 0.1rem;

      .title {
        line-height: 0.54rem;
        font-size: 0.32rem;
        ellipsis();
      }

      .desc {
        line-height: 0.4rem;
        color: #ccc;
        ellipsis();
      }

      .btn {
        line-height: 0.44rem;
        margin-top: 0.2rem;
        padding: 0 0.16rem;
        background-color: #ff9300;
        border-radius: 0.06rem;
        color: #fff;
      }
    }
  }
}
</style>

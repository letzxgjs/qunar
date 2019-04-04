<template>
  <div class="wrap">
    <div class="wrap-head">热门推荐</div>
    <div class="recommend border-bottom" v-for="recommend in recommendes" :key="recommend.id">
      <img class="recommend-img" :src="recommend.src">
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
    return {
      recommendes: [
        {
          id: '001',
          src:
            'http://img1.qunarzz.com/sight/p0/1903/e0/e0e0c6ca274ad49aa3.img.jpg_200x200_0f072efb.jpg',
          title: '西溪国家湿地公园',
          desc: '美人心计美若仙境人杰地灵西溪国家湿地公园·周家村'
        },
        {
          id: '002',
          src:
            'http://img1.qunarzz.com/sight/p0/1603/ef/ef59eec58fbf55d90.water.jpg_200x200_4733b471.jpg',
          title: '浙江大峡谷',
          desc: '惊险刺激惊心动魄'
        },
        {
          id: '003',
          src:
            'http://img1.qunarzz.com/sight/p0/1901/8c/8c1d317bc954ce06a3.water.jpg_200x200_94fd133d.jpg',
          title: '宋城千古情',
          desc: '世界三大名秀之一, 杭州宋城之魂'
        }
      ]
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

<template>
  <div class="wrap">
    <div class="wrap-head">周末去哪儿</div>
    <div class="recommend border-bottom" v-for="recommend in recommendes" :key="recommend.id">
      <div class="img-wrap">
        <img class="recommend-img" :src="recommend.src">
      </div>
      <div class="recommend-details">
        <p class="title">{{ recommend.title }}</p>
        <p class="desc">{{ recommend.desc }}</p>
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
            'http://img1.qunarzz.com/sight/source/1811/52/b6776b49d27025.jpg_r_640x214_35ae205c.jpg',
          title: '西溪国家湿地公园',
          desc: '美人心计美若仙境人杰地灵西溪国家湿地公园·周家村'
        },
        {
          id: '002',
          src:
            'http://img1.qunarzz.com/sight/source/1811/52/b6776b49d27025.jpg_r_640x214_35ae205c.jpg',
          title: '浙江大峡谷',
          desc: '惊险刺激惊心动魄'
        },
        {
          id: '003',
          src:
            'http://img1.qunarzz.com/sight/source/1811/52/b6776b49d27025.jpg_r_640x214_35ae205c.jpg',
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

    // display: flex;
    // height: 1.9rem;
    .img-wrap {
      overflow: hidden;
      height: 0;
      padding-bottom: 33.9%;
    }

    .recommend-img {
      width: 100%;
      margin: 0.1rem;
    }

    .recommend-details {
      // flex: 1;
      // min-width: 0;
      padding: 0.2rem;

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
    }
  }
}
</style>

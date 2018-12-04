<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
      <!--<div class="swiper-button-next" slot="button-next"></div>-->
      <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
    </swiper>
  </div>

</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [ {
        id: '001',
        imgUrl: 'http://dimg04.c-ctrip.com/images/700m0y000000m60y3000A_750_150_25.jpg'
      }, {
        id: '002',
        imgUrl: 'http://dimg04.c-ctrip.com/images/700l0y000000lvexk72B5_750_150_25.jpg'
      } ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  /* 不受scope限制，只要class wrapper下面含有 swiper-pagination swiper-pagination-bullets 的背景颜色全部都为白色*/
  .wrapper >>> .swiper-pagination-bullet-active
    background :#fff
  /* 让图片占据一定的空间,宽高比*/
  .wrapper
    overflow: hidden
    width:100%
    height:0
    padding-bottom:27%
  .swiper-img
    width:100%
    height:2rem
</style>

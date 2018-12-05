<template>
   <div class="icons">
     <swiper>
        <swiper-slide v-for="(page, index) of pages" :key="index">
          <div class="icon" v-for = "item  of page" :key="item.id">
            <div class="icon-img">
              <img class="icon-img-content" :src="item.imgUrl"/>
            </div>
            <p class="icon-desc">{{item.desc}}</p>
          </div>
        </swiper-slide>
     </swiper>
   </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [{
        id: '0001',
        imgUrl: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t28027/219/1072414507/8983/8bf129c/5c05ffd8N36aaee1a.png',
        desc: '景点门票'
      }, {
        id: '0002',
        imgUrl: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t22228/270/207441984/11564/88140ab7/5b03fae3N67f78fe3.png',
        desc: '拼购'
      }, {
        id: '0003',
        imgUrl: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t16990/157/2001547525/17770/a7b93378/5ae01befN2494769f.png',
        desc: '京东到家'
      }, {
        id: '0004',
        imgUrl: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/8385/17/3537/17895/5bd6ca67E09d23550/32d965fe9a9087a2.png',
        desc: '京东时尚'
      }, {
        id: '0005',
        imgUrl: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t28027/219/1072414507/8983/8bf129c/5c05ffd8N36aaee1a.png',
        desc: '景点门票jingd 223131313'
      }, {
        id: '0006',
        imgUrl: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t22228/270/207441984/11564/88140ab7/5b03fae3N67f78fe3.png',
        desc: '拼购'
      }, {
        id: '0007',
        imgUrl: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t16990/157/2001547525/17770/a7b93378/5ae01befN2494769f.png',
        desc: '京东到家'
      }, {
        id: '0008',
        imgUrl: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/8385/17/3537/17895/5bd6ca67E09d23550/32d965fe9a9087a2.png',
        desc: '京东时尚'
      }, {
        id: '0009',
        imgUrl: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/8385/17/3537/17895/5bd6ca67E09d23550/32d965fe9a9087a2.png',
        desc: '京东时尚'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  @import "~styles/varibles.styl"
  .icons >>> .swiper-container
    height:0
    padding-bottom: 50%
  .icon
    position: relative
    overflow: hidden
    float: left
    width: 25%
    height: 0
    padding-bottom: 25%
    .icon-img
      position: absolute
      left: 0
      top: 0
      right: 0
      bottom: 0.44rem
      padding: .1rem
      .icon-img-content
        height: 100%
        display: block
        margin: 0 auto
    .icon-desc
      position: absolute
      left: 0
      right: 0
      bottom: 0
      height: .44rem
      line-height: .44rem
      text-align: center
      color: $darkTextColor
      ellipsis()
</style>

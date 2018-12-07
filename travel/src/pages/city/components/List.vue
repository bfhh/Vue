<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list" >
          <div class="button-wrapper" v-for="item of hot" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list" >
          <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id">
            {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hot: Array
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .borer-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    left: 0
    top: 1.58rem
    bottom: 0
    right: 0
    .title
        line-height: .54rem
        padding-left: .2rem
        color: #666
        font-size: .26rem
        background: #eee
      .button-list
        padding: .1rem .4rem .1rem .1rem
        overflow: hidden
        .button-wrapper
          float: left
          width: 33%
          .button
            margin: .1rem
            padding: .1rem
            border: .02rem solid #ccc
            text-align: center
            border-radius: .06rem
      .item-list
        .item
          line-height: .76rem
          padding-left: .2rem
</style>

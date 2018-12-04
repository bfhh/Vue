<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入美女/景点/游玩主题</div>
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader'
}
</script>
<!--scope保证当前的组建的class样式只对当前组件有效，对其他组件不会产生于影响-->
<style lang="stylus" scoped>
  /* js里面的@当做是src目录
     在css中引入要加入~@才代表src目录
  */
  /* @import "../../../assets/styles/varibles.styl" */
  @import "~styles/varibles.styl"
  .header
    display :flex
    line-height : .86rem
    background: $bgColor
    color:#fff
    .header-left
      width:.64rem
      float:left
      .back-icon
        text-align :center
        font-size:.4rem
    .header-input
      flex:1
      height:.64rem
      line-height:.64rem
      margin-top: .12rem
      margin-left .2rem
      padding-left .2rem
      background :#fff
      border-radius:.1rem
      color:#ccc
    .header-right
      width:1.24rem
      float:right
      text-align:center
      .arrow-icon
        font-size :.28rem
</style>

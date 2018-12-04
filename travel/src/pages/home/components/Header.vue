<template>
  <div class="header">
    <div class="header-left">返回</div>
    <div class="header-input">输入美女/景点/游玩主题</div>
    <div class="header-right">城市</div>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader'
}
</script>
<!--scope保证当前的组建的class样式只对当前组件有效，对其他组件不会产生于影响-->
<style lang="stylus" scoped>
  .header
    display :flex
    line-height : .86rem
    background: #00bcd4
    color:#fff
    .header-left
      width:.64rem
      float:left
    .header-input
      flex:1
      height:.64rem
      line-height:.64rem
      margin-top: .12rem
      margin-left .2rem
      background :#fff
      border-radius:.1rem
      color:#ccc
    .header-right
      width:1.24rem
      float:right
      text-align:center

</style>

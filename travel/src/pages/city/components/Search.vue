<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名字或拼音">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    height: .72rem
    background: $bgColor
    padding: 0 .1rem
    .search-input
      box-sizing: border-box
      height: 0.62rem
      width: 100%
      line-height: 0.62rem
      text-align: center
      border-radius: .06rem
      padding: 0 .2rem
      color: #666
</style>

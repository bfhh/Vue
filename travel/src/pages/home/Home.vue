<template>
  <div >
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
export default {
  name: 'Home',
  /* 将局部组件应用到Home组件中  */
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
}
</script>
<style scoped>
</style>

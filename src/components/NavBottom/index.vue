<template>
  <div class="nav-bottom flex">
    <div class="nav-bg"></div>
    <router-link class="home" to="/home">
      <div class="icon"></div>
      <span>首页</span>
    </router-link>
    <router-link class="follow" to="/follow">
      <div class="icon"></div>
      <span>关注</span>
    </router-link>
    <router-link class="map" to="/map">
      <div class="icon"></div>
      <span>雷达探店</span>
    </router-link>
    <router-link class="message" to="/message">
      <div class="icon"></div>
      <span>消息</span>
    </router-link>
    <router-link class="mine" to="/mine">
      <div class="icon"></div>
      <span>我的</span>
    </router-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>

<template>
  <div class="index-page">
    <div class="index-content">
      <router-view></router-view>
    </div>
    <nav-bottom></nav-bottom>
  </div>
</template>

<script>
import NavBottom from '@/components/NavBottom'

export default {
  name: 'Index',
  components: {
    'nav-bottom': NavBottom
  }
}
</script>

<style lang="scss" scoped>
.index-page {
  .index-content {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 112px;
    left: 0;
    overflow-y: scroll;
    overflow-x: hidden;
    background: rgba(245, 246, 250, 1);
  }
}
</style>

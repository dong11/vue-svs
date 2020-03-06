<template>
  <div class="home">
    <title-bar></title-bar>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" :head-height="80">
      <div class="home-content">
        <div class="top-bg"></div>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import TitleBar from './TitleBar'
export default {
  components: {
    'title-bar': TitleBar
  },
  data () {
    return {
      isLoading: false
    }
  },
  methods: {
    onRefresh () {
      setTimeout(() => {
        this.$toast('提示文案')
        this.isLoading = false
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.van-pull-refresh {
  &,
  &__track {
    margin-top: 90px;
  }

  .home-content {
    position: relative;
    height: 100%;
    height: calc(100vh - 90px - 112px);

    .top-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 256px;
      background: url("../../../assets/images/bg-home-top.png");
      background-size: 100% 100%;
    }
  }
}
</style>

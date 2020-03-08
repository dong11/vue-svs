<template>
  <div class="home">
    <title-bar></title-bar>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" :head-height="80">
      <div class="home-content">
        <div class="top-bg"></div>
        <div class="top-box flex align-items-center">
          <span class="ic-scan"></span>
          <span class="ic-camera"></span>
          <div class="search-box">想要什么搜一下</div>
        </div>
        <banner></banner>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import Banner from '@/components/Banner'
import TitleBar from './TitleBar'
export default {
  components: {
    'title-bar': TitleBar,
    'banner': Banner
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

    .top-box {
      position: relative;
      padding: 16px 30px;
      padding-bottom: 30px;

      .ic-scan {
        width: 56px;
        height: 56px;
        background: url("../../../assets/images/ic-scan.png");
        background-size: 100% 100%;
      }

      .ic-camera {
        width: 56px;
        height: 56px;
        background: url("../../../assets/images/ic-camera.png");
        background-size: 100% 100%;
        margin-left: 16px;
      }

      .search-box {
        width: 542px;
        height: 60px;
        background: rgba(255, 255, 255, 1);
        border-radius: 36px;
        margin-left: 20px;
        text-align: center;
        line-height: 60px;
        font-size: 26px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(171, 175, 186, 1);
      }
    }
  }
}
</style>

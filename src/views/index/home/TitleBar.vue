<template>
  <div class="title-bar flex align-items-center justify-content-flex-start">
    <div class="ic-address"></div>
    <span class="title">大学路街区</span>
    <div class="ic-arrow-down"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.title-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  padding: 0 30px;
  background: linear-gradient(
    270deg,
    rgba(254, 67, 100, 1) 0%,
    rgba(254, 109, 109, 1) 100%
  );

  .ic-address {
    width: 32px;
    height: 40px;
  }

  .title {
    height: 50px;
    font-size: 36px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: rgba(255, 255, 255, 1);
    line-height: 50px;
    margin-left: 10px;
  }
}
</style>

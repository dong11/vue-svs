<template>
  <van-swipe class="banner-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="(item, index) in banners" :key="index">
      <img class="shadow" :src="item.image_url" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  data () {
    return {
      banners: [
        {
          image_url:
            'https://oss-test-svs.qinjiajia.cn/images/product/0/phpnaE6Dn-c884bdf3.jpg'
        },
        {
          image_url:
            'https://oss-svs.qinjiajia.cn/images/product/0/phpliTqoh-2f8efbca.png'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.banner-swipe {
  img {
    width: 690px;
    height: 172px;
    overflow: hidden;
    border-radius: 16px;
    &.shadow {
      box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.15);
    }
  }
}
</style>

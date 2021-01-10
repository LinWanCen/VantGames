<template>
  <div id="app">
    <van-nav-bar
        v-if="this.$router.currentRoute.name !== 'Menu'"
        :title="this.$router.currentRoute.meta.title"
        left-text="主页 🏠"
        right-text="🔄 重来"
        @click-left="Home"
        @click-right="Refresh"
    />
    <router-view
        v-wechat-title="$route.meta.title"
        img-set="/logo.png"
    >
    </router-view>
  </div>
</template>

<script>
  export default {
    methods: {
      Home() {
        this.$router.replace('/');
      },
      Refresh() {
        this.$router.replace('/Refresh');
      },
    },
  };
</script>

<style>
  * {
    text-align: center;
  }
  .van-cell-group__title {
    font-size: 20px;
    font-weight: bold;
  }
  .van-cell__title {
    font-size: 20px;
    font-weight: bold;
  }
  .game_formula {
    margin-top: 20px;
    font-size: 40px;
    font-weight:bold;
  }
</style>
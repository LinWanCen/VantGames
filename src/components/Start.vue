<template>
  <div>
    <van-popup
        duration="0" :closeable="true" @close="Home" close-icon-position="bottom"
        v-model="show" position="top" :style="{ height: '100%' }">
      <div class="game_formula" style="font-size: 400px">
        {{n}}
      </div>
      <van-count-down :time="time" format="" @change="change"/>
    </van-popup>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: true,
        n: 4,
        time: 3 * 1000,
      };
    },
    methods: {
      change() {
        this.n--;
        if (this.n === 0) {
          this.show = false;
        }
      },
      Home() {
        if (this.n !== 0) {
          this.$router.replace('/');
        }
      },
    },
  };
</script>
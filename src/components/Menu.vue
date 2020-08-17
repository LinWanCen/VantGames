<template>
  <div>
    <h1 style="text-align: center;">林万程的脑训练</h1>
    <h1 style="text-align: center;">Brain Train</h1>
    <van-grid>
      <van-grid-item :text="'+-× 25 Mental Arithmetic 心算'" to="/MentalArithmetic?n=25"/>
      <van-grid-item :text="'+-× 100 Mental Arithmetic 心算'" to="/MentalArithmetic?n=100"/>
    </van-grid>
  </div>
</template>

<script>
  export default {
    methods: {
      onClickLeft() {
        this.$router.back();
      },
    },
  };
</script>
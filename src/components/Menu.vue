<template>
  <div class="Menu">

    <van-cell center title="林万程的脑训练" label="Brain Train"/>

    <van-divider :style="{ borderColor: '#1989fa' }"/>

    <van-cell title="记忆" label="Memory" :to="'/MemoryMenu'"/>
    <van-cell title="心算" label="Mental Arithmetic" :to="'/MentalArithmeticMenu'"/>

  </div>
</template>
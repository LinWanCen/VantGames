<template>
  <div>
    <van-row class="game_formula">
      <div v-if="question !== undefined">
        <van-col span="1"></van-col>
        <van-col span="4">{{question.m}}</van-col>
        <van-col span="2">{{question.f}}</van-col>
        <van-col span="4">{{question.n}}</van-col>
        <van-col span="2">=</van-col>
        <van-col span="5">{{answer === undefined ? question.ma : answer}}</van-col>
        <van-col span="2"></van-col>
        <van-col span="4"></van-col>
      </div>
      <div v-else style="color: white">
        .
      </div>
    </van-row>
  </div>
</template>

<script>
  export default {
    props: {
      question: Object,
      answer: String,
    },
  };
</script>

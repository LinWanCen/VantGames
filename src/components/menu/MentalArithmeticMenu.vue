<template>
  <div class="Menu">

    <van-cell-group title="选项 Options">

      <van-cell center title="题数" label="Number of Questions" value="">
        <van-row>
          <van-col span="4"><span @click="n = 5">5</span></van-col>
          <van-col span="4"><span @click="n = 10">10</span></van-col>
          <van-col span="4"><span @click="n = 25">25</span></van-col>
          <van-col span="4"><span @click="n = 50">50</span></van-col>
          <van-col span="4"><span @click="n = 50">60</span></van-col>
          <van-col span="4"><span @click="n = 100">100</span></van-col>
        </van-row>
        <van-stepper v-model="n" :min="1" :step="5"/>
      </van-cell>

      <van-cell center title="数字A范围" label="Number Range of A" value="">
        <van-row>
          <van-col span="2" v-for="i in 10" :key="i" >
            <span @click="clickRange('a1', 'a2', i - 1)">{{ i - 1 }}</span>
          </van-col>
          <van-col span="4">
            <span @click="a1 = 0; a2 = 9">0~9</span>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="12">
            <van-stepper v-model="a1" :min="0" :max="a2" :button-size="buttonSize"/>
          </van-col>
          <van-col span="12">
            <van-stepper v-model="a2" :min="a1" :button-size="buttonSize"/>
          </van-col>
        </van-row>
      </van-cell>

      <van-cell center title="数字B范围" label="Number Range of B" value="">
        <van-row>
          <van-col span="2" v-for="i in 10" :key="i" >
            <span @click="clickRange('b1', 'b2', i - 1)">{{ i - 1 }}</span>
          </van-col>
          <van-col span="4">
            <span @click="b1 = 0; b2 = 9">0~9</span>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="12">
            <van-stepper v-model="b1" :min="0" :max="b2" :button-size="buttonSize"/>
          </van-col>
          <van-col span="12">
            <van-stepper v-model="b2" :min="b1" :button-size="buttonSize"/>
          </van-col>
        </van-row>
      </van-cell>

      <van-cell center title="运算范围" label="Operation Range" value="">
        <van-row>
          <van-col span="3"><span @click="f1 = 0; f2 = 1"> +- </span></van-col>
          <van-col span="4"><span @click="f1 = 2; f2 = 3"> ×÷ </span></van-col>
          <van-col span="4"><span @click="f1 = 0; f2 = 2"> +-× </span></van-col>
          <van-col span="5"><span @click="f1 = 0; f2 = 3"> +-×÷ </span></van-col>
          <van-col span="4"><span @click="a1 = 2; a2 = 2; b1 = 2; b2 = 20;f1 = 4; f2 = 4"> 2^ </span></van-col>
          <van-col span="4"><span @click="a1 = 2; a2 = 20; b1 = 2; b2 = 2;f1 = 4; f2 = 4"> ^2 </span></van-col>
        </van-row>
        <van-row>
          <van-col span="12">
            <van-stepper v-model="f1" :min="0" :max="f2" :button-size="buttonSize"/>
          </van-col>
          <van-col span="12">
            <van-stepper v-model="f2" :min="f1" :max="4" :button-size="buttonSize"/>
          </van-col>
        </van-row>
      </van-cell>

    </van-cell-group>

    <van-divider :style="{ borderColor: '#1989fa' }"/>

    <van-cell-group title="开始 Start">

      <van-cell title="心算" label="Mental Arithmetic" :to="'/MentalArithmetic' +
     '?n=' + n +
     '&a1=' + a1 +
     '&a2=' + a2 +
     '&b1=' + b1 +
     '&b2=' + b2 +
     '&f1=' + f1 +
     '&f2=' + f2"/>

    </van-cell-group>

  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonSize: '20px',
      a1: 0,
      a2: 9,
      b1: 0,
      b2: 9,
      f1: 0,
      f2: 2,
      n: 25,
    }
  },
  methods: {
    clickRange(name1, name2, i) {
      if (this[name1] === i && this[name2] === i) {
        this[name1] = 0;
        this[name2] = 9;
      } else {
        this[name1] = i;
        this[name2] = i;
      }
    },
  },
};
</script>
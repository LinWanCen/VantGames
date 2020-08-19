<template>
  <div>
    <Start></Start>
    <MentalArithmeticLine :question="questions[currentIndex - 2]"></MentalArithmeticLine>
    <MentalArithmeticLine :question="questions[currentIndex - 1]"></MentalArithmeticLine>
    <MentalArithmeticLine :question="questions[currentIndex]" :answer="currentInput"></MentalArithmeticLine>
    <MentalArithmeticLine :question="questions[currentIndex + 1]" :answer="''"></MentalArithmeticLine>
    <van-number-keyboard
        extra-key=" "
        :delete-button-text="'🗑️'"
        :hide-on-click-outside="false"
        :show="true"
        :v-model="currentInput"
        @input="onInput"
        @delete="onDelete"
    />
    <van-popup safe-area-inset-bottom
               duration="0" :close-on-click-overlay="false" :closeable="true" @closed="Refresh"
               v-model="showScore" position="bottom" :style="{ height: '35%' }">
      <pre class="game_formula" style="font-size: 30px;">{{score}}</pre>
      <pre class="game_formula" style="margin-top: 0;font-size: 20px;">{{scoreEn}}</pre>
    </van-popup>
  </div>
</template>

<script>
  const Start = () => import('@/components/Start.vue')
  const MentalArithmeticLine = () => import('@/components/games/MentalArithmeticLine.vue')

  import {timeFormatCn, timeFormatEn} from "@/util/timeFormat"

  import MtaH5 from 'mta-h5-analysis';

  export default {
    components: {
      Start,
      MentalArithmeticLine,
    },
    data() {
      return {
        startTime: new Date().getTime(),
        showScore: false,
        score: '',
        scoreEn: '',
        questions: [],
        currentIndex: 0,
        currentInput: '_',
        n: this.$route.query.n === undefined ? 25 : parseInt(this.$route.query.n),
      };
    },
    created() {
      for (let i = 0; i < this.n; i++) {
        let m = Math.floor(Math.random() * 10);
        let n = Math.floor(Math.random() * 10);
        let f = Math.floor(Math.random() * 3);
        switch (f) {
          case 0:
            this.questions.push({m: m, f: '+', n: n, a: m + n, ma: ''});
            break;
          case 1:
            this.questions.push({m: m, f: '×', n: n, a: m * n, ma: ''});
            break;
          case 2:
            this.questions.push({m: m + n, f: '-', n: n, a: m, ma: ''});
            break;
        }
      }
    },
    mounted() {
      let _this = this;
      document.onkeydown = function (e) {
        let key = e.key;
        if (key >= 0 && key <= 9) {
          _this.onInput(key);
        } else {
          _this.onDelete();
        }
      };
    },
    methods: {
      onInput(value) {
        if (this.currentInput === '_' || this.currentInput.length === 2) {
          this.currentInput = '' + value;
        } else {
          this.currentInput = '' + this.currentInput + value;
        }
        let currentQuestion = this.questions[this.currentIndex];
        if (currentQuestion.a === 1 * this.currentInput) {
          currentQuestion.ma = this.currentInput;
          this.currentIndex++;
          if (this.currentIndex === this.n) {
            // 减去倒计时的 3 秒
            let time = new Date().getTime() - this.startTime - 3000;
            let timeCn = timeFormatCn(time);
            this.score = this.n + ' 道计算题\n耗时 ' + timeCn;
            this.scoreEn = this.n + ' calculation questions\ntakes ' + timeFormatEn(time);
            this.showScore = true;
            MtaH5.clickStat('MentalArithmeticScore', {
              'n': this.n,
              'time': time,
              'timecn': timeCn,
            })
            return;
          }
          this.currentInput = '_';
        }
      },
      onDelete() {
        this.currentInput = '_';
      },
      Refresh() {
        this.$router.replace('/Refresh');
      },
    },
  };
</script>
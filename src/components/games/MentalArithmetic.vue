<template>
  <div>

    <!-- 算式 -->
    <MentalArithmeticLine :question="questions[currentIndex - 2]"></MentalArithmeticLine>
    <MentalArithmeticLine :question="questions[currentIndex - 1]"></MentalArithmeticLine>
    <MentalArithmeticLine :question="questions[currentIndex]" :style="answerStyle" :answer="currentInput"></MentalArithmeticLine>
    <MentalArithmeticLine :question="questions[currentIndex + 1]" :answer="''"></MentalArithmeticLine>

    <!-- 键盘式按键 -->
    <van-number-keyboard extra-key=" "
                         :hide-on-click-outside="false" :show="true" :v-model="currentInput"
                         @input="onInput" @delete="onDelete"/>

    <!-- 结果-->
    <van-popup safe-area-inset-bottom
               duration="0" :close-on-click-overlay="false" :closeable="true" @closed="Refresh"
               v-model="showScore" position="bottom">
      <pre class="game_formula" style="font-size: 30px;">{{ score }}</pre>
      <pre class="game_formula" style="margin-top: 0;font-size: 20px;">{{ scoreEn }}</pre>
    </van-popup>

    <!-- 倒计时 -->
    <Start></Start>

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
        answerStyle: '',
        n: this.intParam("n", 25),
        a1: this.intParam("a1", 0),
        a2: this.intParam("a2", 10),
        b1: this.intParam("b1", 0),
        b2: this.intParam("b2", 10),
        f1: this.intParam("f1", 0),
        f2: this.intParam("f2", 3),
      };
    },

    created() {
      let aLen = this.a2 - this.a1 + 1;
      let bLen = this.b2 - this.b1 + 1;
      let fLen = this.f2 - this.f1 + 1;
      for (let i = 0; i < this.n; i++) {
        let a = this.a1 + Math.floor(Math.random() * aLen);
        let b = this.b1 + Math.floor(Math.random() * bLen);
        let f = this.f1 + Math.floor(Math.random() * fLen);
        // 指定数时能有交换
        if (f !== 4 && Math.floor(Math.random() * 2) === 1) {
          let t = a;
          a = b;
          b = t;
        }
        switch (f) {
          case 0:
            this.questions.push({m: a, f: '+', n: b, a: a + b, ma: ''});
            break;
          case 1:
            this.questions.push({m: a + b, f: '-', n: b, a: a, ma: ''});
            break;
          case 2:
            this.questions.push({m: a, f: '×', n: b, a: a * b, ma: ''});
            break;
          case 3:
            this.questions.push({m: a * b, f: '÷', n: b, a: a, ma: ''});
            break;
          case 4:
            this.questions.push({m: a, f: '^', n: b, a: Math.pow(a, b), ma: ''});
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
        if (this.currentInput === '_') {
          this.currentInput = '' + value;
        } else {
          this.currentInput = '' + this.currentInput + value;
        }
        let currentQuestion = this.questions[this.currentIndex];

        // 有错及时红色提示打断
        if (currentQuestion.a.toString().substr(0, this.currentInput.length) !== this.currentInput) {
          this.answerStyle = 'color: #f25022';
        } else {
          this.answerStyle = '';
        }

        // 与正确答案不一致 return
        if (currentQuestion.a !== 1 * this.currentInput) {
          return;
        }

        // 把当前式的答案写入历史
        currentQuestion.ma = this.currentInput;

        this.currentIndex++;
        // 还未答完 return
        if (this.currentIndex !== this.n) {
          this.currentInput = '_';
          return;
        }

        // 减去倒计时的 3 秒
        let time = new Date().getTime() - this.startTime - 3000;
        let timeCn = timeFormatCn(time);

        let operator = ''
        for (let f = this.f1; f <= this.f2; f++) {
          switch (f) {
            case 0:
              operator += '+';
              break;
            case 1:
              operator += '-';
              break;
            case 2:
              operator += '×';
              break;
            case 3:
              operator += '÷';
              break;
            case 4:
              operator += '^';
              break;
          }
        }
        this.score = this.n + ' 道计算题\n耗时 ' + timeCn;
        this.scoreEn = this.a1 + ' ~ ' + this.a2 + ' ' + operator + ' ' + this.b1 + ' ~ ' + this.b2 +
            '\n\n' + this.n + ' calculation questions\ntakes ' + timeFormatEn(time);
        this.showScore = true;
        MtaH5.clickStat('MentalArithmeticScore', {
          'n': this.n,
          'time': time,
          'timecn': timeCn,
          'a1': this.a1,
          'a2': this.a2,
          'b1': this.b1,
          'b2': this.b2,
          'f1': this.f1,
          'f2': this.f2,
          'operator': operator,
        })
      },

      onDelete() {
        this.currentInput = this.currentInput.substr(0, this.currentInput.length - 1)
        let currentQuestion = this.questions[this.currentIndex];
        if (currentQuestion.a.toString().substr(0, this.currentInput.length) !== this.currentInput) {
          this.answerStyle = 'color: #f25022';
        } else {
          this.answerStyle = '';
        }
        if (this.currentInput.length === 0) {
          this.currentInput = '_';
        }
      },

      Refresh() {
        this.$router.replace('/Refresh');
      },
    },
  };
</script>
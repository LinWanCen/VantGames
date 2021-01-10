<template>
  <div class="Memory">

    <!-- 开始答题按钮（放在倒计时前面避免先出现） -->
    <van-popup safe-area-inset-bottom
               v-model="showButton" :overlay="false" duration="0" position="bottom">
      <van-button @click="speakAll()">🔊</van-button>
      <van-divider/>
      <van-button type="primary" @click="startToAnswer">记住了</van-button>
      <van-divider/>
    </van-popup>

    <!-- 倒计时 -->
    <Start></Start>

    <!-- 行式 -->
    <van-cell center v-if="line">
      <van-divider/>
      <span v-for="i in displayArr.length" :key="i" @click="jump(i - 1)" class="Memory_font"
            :style="styleArr[i - 1]">{{ displayArr[i - 1] }}</span>
    </van-cell>
    <!-- 矩阵式 -->
    <div v-else>
      <van-grid :column-num="col" :gutter="8" :clickable="true">
        <van-grid-item v-for="i in displayArr.length" :key="i" @click="jump(i - 1)">
          <span class="Memory_font" :style="styleArr[i - 1]">{{ displayArr[i - 1] }}</span>
        </van-grid-item>
      </van-grid>
    </div>

    <!-- 按键 -->
    <van-popup safe-area-inset-bottom
               v-model="showKey" :overlay="false" duration="0" position="bottom">
      <van-grid :column-num="col" :gutter="8" :clickable="true">
        <van-grid-item v-for="i in keyArr.length" :key="i" :text="'' + keyArr[i - 1]" @click="fill(keyArr[i - 1])"/>
      </van-grid>
      <van-divider/>
    </van-popup>

    <!-- 键盘式按键 -->
    <van-number-keyboard extra-key=" " delete-button-text="  "
                         :hide-on-click-outside="false" :show="showKeyboard" @input="fill"/>

    <!-- 结果-->
    <van-popup safe-area-inset-bottom
               duration="0" :close-on-click-overlay="false" :closeable="true" @closed="Refresh"
               v-model="showScore" position="bottom">
      <pre class="game_formula" style="font-size: 30px;">{{ score }}</pre>
      <pre class="game_formula" style="margin-top: 0;font-size: 20px;">{{ scoreEn }}</pre>
    </van-popup>

  </div>
</template>

<script>
const Start = () => import('@/components/Start.vue')

import {timeFormatCn, timeFormatEn} from "@/util/timeFormat"
import {speak} from "@/util/speak"

import MtaH5 from 'mta-h5-analysis';

export default {
  components: {
    Start,
  },
  data() {
    return {
      displayArr: [],
      answerArr: [],
      styleArr: [],
      answerArrStr: '',
      keyArr: [],
      rightCount: 0,
      wrongCount: 0,
      selectIndex: 0,
      startTime: new Date().getTime(),
      midTime: new Date().getTime(),
      showButton: true,
      showKey: false,
      showScore: false,
      score: '',
      scoreEn: '',
      // 默认 true
      hideFound: this.$route.query.hideFound === undefined || this.$route.query.hideFound === "true",
      line: this.$route.query.line === "true",
      repeat: this.$route.query.repeat === "true",
      keyboard: this.$route.query.keyboard === "true",
      showKeyboard: false,
      symbol: this.$route.query.symbol === undefined ? "0".codePointAt(0) : this.$route.query.symbol.codePointAt(0),
      row: this.intParam("row", 5),
      col: this.intParam("col", 5),
      n: 0,
      keyLen: 0,
    };
  },

  created() {
    if (this.$route.query.keyLen === undefined) {
      // 如果取值范围没设置则用行列积
      this.n = this.row * this.col;
      this.keyLen = this.n;
    } else {
      this.keyLen = parseInt(String(this.$route.query.keyLen))
      // 不能重复时避免行列积大于取值范围
      if (!this.repeat) {
        if (this.keyLen < this.col) {
          this.col = this.keyLen
        }
        if (this.keyLen < (this.col * this.row)) {
          this.row = Math.floor(this.keyLen / this.col)
        }
      }
      this.n = this.row * this.col;
    }

    let numFlag = this.symbol === "0".codePointAt(0);
    let a1 = numFlag ? this.intParam(this.$route.query.symbol, 0) : 0;
    let set = {};
    let num = 0;
    let end = this.n - a1;
    for (let i = 0; i < end; i++) {
      do {
        num = a1 + Math.ceil(Math.random() * this.keyLen);
      } while (set[num])
      if (!this.repeat) {
        set[num] = 1;
      }
      if (!numFlag) {
        num = String.fromCodePoint(this.symbol + num - 1);
      }
      this.$set(this.keyArr, i, num);
      this.$set(this.displayArr, i, num);
      this.$set(this.answerArr, i, num);
      this.answerArrStr += ' ' + num;
    }
    if (numFlag) {
      this.keyArr.sort((a, b) => a - b);
    } else {
      this.keyArr.sort();
    }
  },

  mounted() {
    let _this = this;
    document.onkeydown = function (e) {
      let key = e.key;
      _this.fill(key);
      console.log(key);
    };
  },

  methods: {
    speakAll() {
      speak(this.answerArrStr)
    },

    startToAnswer() {
      this.showButton = false;
      if (this.keyboard) {
        this.showKeyboard = true;
      } else {
        this.showKey = true;
      }
      this.$set(this.displayArr, 0, "_");
      for (let i = 1; i < this.n; i++) {
        // '&ensp;': '\u2002', '&emsp;': '\u2003', '&nbsp;': '\u00a0'
        this.$set(this.displayArr, i, "\u2002");
      }
      this.midTime = new Date().getTime()
    },

    jump(selectIndex) {
      if (this.displayArr[selectIndex] !== "\u2002") {
        speak(this.displayArr[selectIndex])
        return
      }
      if (this.displayArr[this.selectIndex] === "_") {
        this.$set(this.displayArr, this.selectIndex, "\u2002");
      }
      this.$set(this.displayArr, selectIndex, "_");
      this.selectIndex = selectIndex;
    },

    fill(answer) {
      if (this.displayArr[this.selectIndex] !== "_") {
        console.log("不会出现的情况")
        return;
      }
      if (answer === "\u2002") {
        return;
      }
      if (this.answerArr[this.selectIndex] === answer) {
        this.rightCount++;
      } else {
        this.styleArr[this.selectIndex] = 'color: #f25022'
        this.wrongCount++;
      }
      this.$set(this.displayArr, this.selectIndex, this.answerArr[this.selectIndex]);
      if (this.hideFound) {
        for (let i = 0; i < this.keyLen; i++) {
          if (this.answerArr[this.selectIndex] === this.keyArr[i]) {
            this.keyArr[i] = "\u2002";
            break;
          }
        }
      }
      // 还未答完 return
      if ((this.rightCount + this.wrongCount) !== this.n) {
        do {
          this.selectIndex++;
          if (this.displayArr[this.selectIndex] === undefined) {
            this.selectIndex = 0;
          }
        } while (this.displayArr[this.selectIndex] !== "\u2002");
        this.jump(this.selectIndex);
        return;
      }

      // 减去倒计时的 3 秒
      let memoryTime = this.midTime - this.startTime - 3000;
      let answerTime = new Date().getTime() - this.midTime;
      let memoryTimeCn = timeFormatCn(memoryTime);
      let answerTimeCn = timeFormatCn(answerTime);
      this.score = this.n + ' 记住 ' + this.rightCount + ' 个' +
          '\n记忆时长 ' + memoryTimeCn +
          '\n填写时长 ' + answerTimeCn;
      this.scoreEn = this.n + ' remember ' + this.rightCount +
          '\nmemory time: ' + timeFormatEn(memoryTime) +
          '\nanswer time: ' + timeFormatEn(answerTime);
      this.showScore = true;
      MtaH5.clickStat('MemoryScore', {
        'rightcount': this.rightCount,
        'n': this.n,
        'symbol': String.fromCodePoint(this.symbol),
        'memorytime': memoryTime,
        'answertime': answerTime,
        'memorytimecn': memoryTimeCn,
        'answertimecn': answerTimeCn,
      })
    },

    Refresh() {
      this.$router.replace('/Refresh');
    },
  },
};
</script>

<style lang="css" scoped>
.Memory >>> .van-grid-item__text {
  font-size: 30px;
  font-weight: bold;
}

.Memory_font {
  font-size: 30px;
  font-weight: bold;
}

.Memory >>> .van-grid-item__content {
  padding: 0;
}
</style>
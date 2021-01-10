<template>
  <div class="Menu">

    <van-cell-group title="选项 Options">

      <van-cell center title="隐藏找到的" label="Hide Found" value="">
        <van-switch v-model="hideFound"/>
      </van-cell>

      <van-cell center title="键盘" label="Keyboard" value="">
        <van-switch v-model="keyboard" @input="switchKeyboard"/>
      </van-cell>

      <van-cell center title="行式" label="Line" value="">
        <van-switch v-model="line" @input="switchLine"/>
      </van-cell>

      <van-cell center title="重复" label="Repeat" value="">
        <van-switch v-model="repeat"/>
      </van-cell>

      <van-cell center title="行列数" label="Row and Column" value="">
        <van-row>
          <van-col span="12">
            <van-stepper v-model="row" :min="1" :button-size="bottonSize"/>
          </van-col>
          <van-col span="12">
            <van-stepper v-model="col" :min="1" :button-size="bottonSize"/>
          </van-col>
        </van-row>
      </van-cell>

      <van-cell center title="数字范围" label="Number Range" value="">
        <van-row>
          <van-col span="12">
            <van-stepper v-model="a1" :min="0" :max="a2" :button-size="bottonSize"/>
          </van-col>
          <van-col span="12">
            <van-stepper v-model="a2" :min="a1" :max="keyboard ? 9: undefined" :button-size="bottonSize"/>
          </van-col>
        </van-row>
      </van-cell>

      <van-cell center title="根据行列数计算数字范围" label="Calculate Number Range by rows and columns" @click="range()"/>

    </van-cell-group>

    <van-divider :style="{ borderColor: '#1989fa' }"/>

    <van-cell-group title="开始 Start">

      <!-- 用 0 开始标记是数字 -->
      <van-cell @click="memory('0' + a1,a2 - a1)" title="数字记忆" label="Number Memory"/>

      <van-cell @click="memory('a', 26)" title="小写字母记忆" label="Lower Case Letters Memory"/>
      <van-cell @click="memory('A', 26)" title="大写字母记忆" label="Upper Case Letters Memory"/>

      <!-- https://www.unicode.org/charts/charindex.html#J-->
      <van-cell @click="memory('ぁ', 86)" title="平假名记忆" label="Japanese Hiragana Memory"/>
      <van-cell @click="memory('ァ', 95)" title="片假名记忆" label="Japanese Katakana Memory"/>

      <!-- https://www.emojiall.com/ -->
      <!-- https://www.qqxiuzi.cn/zh/emoji.html -->
      <van-cell @click="memory('🐭', 17)" title="动物表情记忆" label="Animal Emoji Memory"/>
      <van-cell @click="memory('🎠', 52)" title="约会表情记忆" label="Dating Event Emoji Memory"/>

    </van-cell-group>

  </div>
</template>

<script>
export default {
  data() {
    return {
      bottonSize: '20px',
      hideFound: true,
      line: false,
      repeat: false,
      keyboard: false,
      a1: 0,
      a2: 25,
      row: 5,
      col: 5,
    }
  },

  methods: {

    memory(symbol, keyLen) {
      this.$router.replace('/Memory' +
          '?row=' + this.row +
          '&col=' + this.col +
          '&symbol=' + symbol +
          '&keyLen=' + keyLen +
          '&hideFound=' + this.hideFound +
          '&line=' + this.line +
          '&repeat=' + this.repeat +
          '&keyboard=' + this.keyboard);
    },

    switchKeyboard(checked) {
      if (checked) {
        this.repeat = true;
      } else {
        this.range()
        this.repeat = false;
      }
      this.keyboard = checked;
    },

    switchLine(checked) {
      if (checked) {
        this.a1 = 0;
        this.a2 = 9;
        this.row = 4;
        this.repeat = true;
      } else {
        this.row = 5;
        this.range()
        this.repeat = false;
      }
      this.line = checked;
    },

    range() {
      this.a2 = this.a1 + this.row * this.col;
    },
  },
};
</script>
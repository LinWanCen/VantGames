/**
 * 百度语音合成 TTS(Text To Speech)
 */
export function speak(s) {
  new Audio(
      'http://tts.baidu.com/text2audio' +
      '?lan=zh' +
      '&ie=UTF-8' +
      '&spd=8' + // 1~9
      '&text=' + s
  ).play().catch(e => {
    console.log('speak:"' + s + '" error:' + e)
  })
}
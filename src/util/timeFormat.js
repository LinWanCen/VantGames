/**
 * 只有秒时显示秒，有分时显示分，最多显示时分秒
 */
export function timeFormatCn(time) {
  return timeFormat(time, ' 时 ', ' 分 ', ' 秒')
}
export function timeFormatEn(time) {
  return timeFormat(time, ' hour ', ' minute ', ' second')
}
export function timeFormat(time, h, m, s) {
  let result;
  let hours = Math.floor(time / (3600 * 1000));
  let leave2 = time % (3600 * 1000);
  let minutes = Math.floor(leave2 / (60 * 1000));
  let leave3 = leave2 % (60 * 1000);
  let seconds = Math.round(leave3 / 1000);
  result = seconds + s;
  if (minutes > 0) {
    result = minutes + m + result;
  }
  if (hours > 0) {
    result = hours + h + result;
  }
  return result;
}
import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.use(require('vue-wechat-title'))

import {Grid, GridItem, NavBar, Popup, CountDown, Col, Row, Field, NumberKeyboard} from 'vant';

Vue.use(Grid);
Vue.use(GridItem);
Vue.use(NavBar);
Vue.use(Popup);
Vue.use(CountDown);
Vue.use(Field);
Vue.use(Col);
Vue.use(Row);
Vue.use(NumberKeyboard);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

import MtaH5 from 'mta-h5-analysis';

MtaH5.init({
  "sid":'500727406', //必填，统计用的appid
  "cid":'500727498', //如果开启自定义事件，此项目为必填，否则不填
  "autoReport":1,//是否开启自动上报(1:init完成则上报一次,0:使用pgv方法才上报)
  "senseHash":1, //hash锚点是否进入url统计
  "senseQuery":1, //url参数是否进入url统计
  "performanceMonitor":1,//是否开启性能监控
  "ignoreParams":[] //开启url参数上报时，可忽略部分参数拼接上报
});

router.afterEach((to) => {
  if (to.name !== 'Refresh') {
    MtaH5.pgv();
  }
})
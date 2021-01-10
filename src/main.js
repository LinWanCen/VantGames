import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.use(require('vue-wechat-title'))

// 按照文档的顺序，同一个组件引入的放在同一行
import {
  Button,
  Cell, CellGroup,
  Col, Row,
  Popup,
  NumberKeyboard,
  Stepper,
  Switch,
  CountDown,
  Divider,
  Grid, GridItem,
  NavBar,
} from 'vant';

Vue.use(Button);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Col);
Vue.use(Row);
Vue.use(Popup);
Vue.use(NumberKeyboard);
Vue.use(Stepper);
Vue.use(Switch);
Vue.use(CountDown);
Vue.use(Divider);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(NavBar);

Vue.config.productionTip = false

Vue.prototype.intParam = function (name, defaultValue) {
  if(this.$route.query[name] === undefined) {
    return defaultValue
  }
  return parseInt(String(this.$route.query[name]))
}

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
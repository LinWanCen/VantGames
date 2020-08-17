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
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import "ant-design-vue/dist/antd.less";
// import "ant-design-vue/lib/button/style";

import { Button } from "ant-design-vue";
Vue.use(Button);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

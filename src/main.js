import Vue from "vue";
import App from "./App.vue";
import store from "./store";

import '../src/assets/css/style.styl'

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");

import Vue from "vue";
import App from "./App.vue";
import FullPage from "vue-fullpage.js";
require("vue2-animate/dist/vue2-animate.min.css");
require("normalize.css/normalize.css");
Vue.use(FullPage);
Vue.config.productionTip = false;

import "vue2-toast/lib/toast.css";
import Toast from "vue2-toast";

Vue.use(Toast, {
  defaultType: "center",
  duration: 2500,
  wordWrap: false,
  width: "auto"
});

new Vue({
  render: h => h(App)
}).$mount("#app");

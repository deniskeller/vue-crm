import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dateFilter from "@/filters/date.filter";
import currencyFilter from "@/filters/currency.filter";
import localizeFilter from "@/filters/localize.filter";
import tooltipDirective from "@/directives/tooltip.directive";
import Vuelidate from "vuelidate";
import messagePlugin from "@/utils/message.plugin";
import titlePlugin from "@/utils/title.plugin";
import Loader from '@/components/nav/Loader';
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min.js";
import Paginate from 'vuejs-paginate';
import VueMeta from 'vue-meta';

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;

Vue.filter("date", dateFilter);
Vue.filter("currency", currencyFilter);
Vue.filter('localize', localizeFilter);
Vue.directive('tooltip', tooltipDirective);
Vue.use(Vuelidate);
Vue.use(messagePlugin);
Vue.use(titlePlugin);
Vue.use(VueMeta);
Vue.component('Loader', Loader);
Vue.component('Paginate', Paginate);

firebase.initializeApp({
  apiKey: "AIzaSyBPlQLzXAlrbWr3DRy68FUsBxkVSQbECPA",
  authDomain: "vuetest-crm.firebaseapp.com",
  databaseURL: "https://vuetest-crm.firebaseio.com",
  projectId: "vuetest-crm",
  storageBucket: "vuetest-crm.appspot.com",
  messagingSenderId: "1044041498646",
  appId: "1:1044041498646:web:89441c33b835657c9cb537"
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
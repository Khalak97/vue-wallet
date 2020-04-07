import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from './filters/date.filter'
import messagePlugin from './utils/massage.plugin'

import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

firebase.initializeApp({
  apiKey: "AIzaSyBSQmng1RAWdEEfkUOOcOWyzNIxOU8mrq8",
  authDomain: "vue-wallet-1ef90.firebaseapp.com",
  databaseURL: "https://vue-wallet-1ef90.firebaseio.com",
  projectId: "vue-wallet-1ef90",
  storageBucket: "vue-wallet-1ef90.appspot.com",
  messagingSenderId: "1094092436450",
  appId: "1:1094092436450:web:5de778d6b0abde0875bfbb"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
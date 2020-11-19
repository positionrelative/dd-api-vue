import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'
import store from './store'
import MonsterListComponent from "@/components/MonsterListComponent";
import MonsterDetailsComponent from "@/components/MonsterDetailsComponent";

Vue.use(VueRouter)
Vue.use(Vuex)

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: 'home', component: MonsterListComponent },
    { path: '/monster/:id', name: 'details', component: MonsterDetailsComponent },
  ]
})


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

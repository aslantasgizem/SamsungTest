import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Anasayfa from './Anasayfa.vue'
import Urunler from './Urunler.vue'
import Mobil from './Mobil.vue'
import Detay1 from './Detay1.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {path: '/', component: Anasayfa},
  {path: '/Urunler', component: Urunler},
  {path: '/Mobil', component: Mobil},
  {path: '/Detay1', component: Detay1}
]

const router = new VueRouter ({
  routes,
  mode:'history'
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')






import Vue from 'vue'
import App from './App'
import VueCarbon from 'vue-carbon'
import routerMap from './router'
import VueRouter from 'vue-router'
import 'vue-carbon/dist/vue-carbon.css'
Vue.use(VueCarbon)
Vue.use(VueRouter)
let router = new VueRouter({})
routerMap(router)

router.start(App, 'app')

///* eslint-disable no-new */
//new Vue({
//  el: 'body',
//  components: { App }
//})

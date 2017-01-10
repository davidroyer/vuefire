import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueFire from 'vuefire'
import {store} from './AppStore.js'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.css'
Vue.use(MuseUI)
Vue.use(VueFire)
Vue.use(ElementUI)
Vue.use(VueRouter)
// Vue.use(VueMaterial)
// import auth from './auth'

const state = store.state

import Admin from './components/Admin.vue'
import Dashboard from './components/Dashboard.vue'
import Login from './components/Login.vue'
import Logout from './components/Logout.vue'

function requireAuth (to, from, next) {
  if (!state.authorized) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    // next()
    next({
      path: '/admin',
      query: { redirect: to.fullPath }
    })
  }
}
// console.log(state.authorized);
// function requireAuth () {
//   if (!state.authorized) {
//     console.log('From Main: NOT Authorized ');
//   } else {
//     console.log('From Main: IS Authorized ');
//   }
// }

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    // { path: '/', component: Login  },
    { path: '/admin', component: Admin },
    { path: '/dashboard', component: Dashboard},
    // { path: '/dashboard', component: Dashboard},
    { path: '/login', component: Login },
    { path: '/logout', component: Logout },
    // { path: '/logout',
    //   beforeEnter (to, from, next) {
    //     auth.logout()
    //     next('/')
    //   }
    // }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // replace the content of <div id="app"></div> with App
  render: h => h(App),

  data: {
    sharedStore: store
  }
})

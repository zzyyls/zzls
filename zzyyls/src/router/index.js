import Vue from 'vue'
import Router from 'vue-router'

import App from '~/App.vue'
import Home from '~/components/home.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/Home',
    component: Home,
  }
]

export default new Router({
    mode: 'hash',
    routes,
    scrollBehavior(to, from, savedPosition) {
        return false
    }
})
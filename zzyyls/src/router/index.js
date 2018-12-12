import Vue from 'vue'
import Router from 'vue-router'

import App from '~/App.vue'
import Home from '~/components/home.vue'
import Doctor1 from '~/components/doctor1.vue'
import Doctor2 from '~/components/doctor2.vue'
import Doctor3 from '~/components/doctor3.vue'
import Doctor4 from '~/components/doctor4.vue'
import Doctor5 from '~/components/doctor5.vue'
import Drug from '~/components/drug.vue'
import Drug1 from '~/components/drug1.vue'
import Dogistics from '~/components/logistics.vue'


Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/Home',
    component: Home,
    children: [
      {
          path: '/Home/',
          redirect: '0'
      },
      {
        path: '0',
        component: Doctor1
      },
      {
          path: '1',
          component: Doctor2
      },
      {
          path: '2',
          component: Doctor3
      },
      {
        path: '3',
        component: Doctor4
      },
      {
        path: '4',
        component: Doctor5
      },
      {
        path: '5',
        component: Drug
      },
      {
        path: '6',
        component: Drug1
      },
      {
        path: '7',
        component: Dogistics
      },
    ]
  }
]

export default new Router({
    mode: 'hash',
    routes,
    scrollBehavior(to, from, savedPosition) {
        return false
    }
})
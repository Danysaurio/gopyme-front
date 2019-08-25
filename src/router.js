import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import about from './views/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/pymeinit',
      name: 'pymeinit',
      component: ()=>import('./views/PymeInit.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: ()=>import('./views/loggin.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/user',
      name: 'user',
      component: ()=>import('./views/User.vue')
    }

  ]
})

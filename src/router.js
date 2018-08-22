import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Verify from './views/Verify.vue'
import Login from './views/Login.vue'
import Recommend from './views/Recommend.vue'
import Message from './views/Message.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/verify',
      name: 'verify',
      component: Verify
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    },
    {
      path: '/message',
      name: 'message',
      component: Message
    }
  ]
})

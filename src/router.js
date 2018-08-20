import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Verify from './views/Verify.vue'
import Recommend from './views/Recommend.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
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
    }
  ]
})

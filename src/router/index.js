import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import start from '@/pages/start'
import game from '@/pages/game'
import result from '@/pages/result'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'start',
      component: start
    },
    {
      path: '/start',
      name: 'start',
      component: start
    },
    {
      path: '/game',
      name: 'game',
      component: game
    },
    {
      path: '/result',
      name: 'result',
      component: result
    },
  ]
})

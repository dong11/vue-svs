import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Home from '@/views/index/home'
import Follow from '@/views/index/follow'
import Mine from '@/views/index/mine'
import Message from '@/views/index/message'
import MapPage from '@/views/index/map'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      redirect: '/home',
      children: [
        {path: 'home', component: Home},
        {path: 'follow', component: Follow},
        {path: 'map', component: MapPage},
        {path: 'message', component: Message},
        {path: 'mine', component: Mine}
      ]
    }
  ]
})

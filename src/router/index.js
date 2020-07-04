import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/Layout'
import registered from '@/views/Registered'
import login from '@/views/Login'
import todos from '@/views/Todos'
import counter from '@/views/counter'
import test from '@/views/test'
import news from '@/views/test/components/News'
import messages from '@/views/test/components/Messages'
import MessagesDetail from '@/views/test/components/MessagesDetail'

import home from '@/views/home'
import gragh from '@/views/gragh'
import table from '@/views/table'
import message from '@/views/message'
import music from '@/views/Music'
import config from '@/views/config'
import carousel from '@/views/carousel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: '/home',
          component: home
        },
        {
          path: '/Todos',
          component: todos
        },
        {
          path: '/message',
          name: 'message',
          component: message
        },
        {
          path: '/music',
          name: 'music',
          component: music
        },
        {
          path: '/test',
          component: test,
          redirect: '/test/components/News',
          children: [
            {
              path: '/test/components/News',
              name: 'news',
              component: news
            },
            {
              path: '/test/components/Messages',
              name: 'messages',
              component: messages,
              children: [
                {
                  path: '/test/components/Messages/MessagesDetail/:id',
                  component: MessagesDetail
                }
              ]
            }
          ]
        },
        {
          path: '/gragh',
          name: 'gragh',
          component: gragh
        },
        {
          path: '/table',
          name: 'table',
          component: table
        },
        {
          path: '/counter',
          name: 'counter',
          component: counter
        },
        {
          path: '/carousel',
          name: 'carousel',
          component: carousel
        },
        {
          path: '/config',
          name: 'config',
          component: config
        }
      ]
    },
    {
      path: '/registered',
      name: 'registered',
      component: registered
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})

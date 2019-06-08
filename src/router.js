import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'


// admin routes
import dashboard from '@/components/admin/dashboard.vue'
import tutors from '@/components/admin/tutors.vue'
import store from '@/components/admin/store.vue'
import tutorrequest from '@/components/admin/tutorrequest.vue'
import becometutor from '@/components/admin/becometutor.vue'
import comment from '@/components/admin/comment.vue'
import help from '@/components/admin/help.vue'


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
      path: '/getatutor',
      name: 'getatutor',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/getatutor.vue')
    },
    {
      path: '/requestemail',
      name: 'requestemail',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/getatutor/requestemail.vue')
    },
    {
      path: '/becomeatutor',
      name: 'becomeatutor',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/becomeatutor.vue')
    },
    {
      path: '/allsubjects',
      name: 'all-subjects',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/allsubjects.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/admin.vue'),
      redirect: '/admin/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: dashboard
      },
      {
        path: 'tutors',
        name: 'tutors',
        component: tutors
      },
      {
        path: 'store',
        name: 'store',
        component: store
      },
      {
        path: 'tutorrequest',
        name: 'tutorrequest',
        component: tutorrequest
      },
      {
        path: 'becometutor',
        name: 'becometutor',
        component: becometutor
      },
      {
        path: 'comment',
        name: 'comment',
        component: comment
      },
      {
        path: 'help',
        name: 'help',
        component: help
      },
    ]
    }
  ]

})

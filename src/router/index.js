import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import Reads from '../views/Reads.vue'
import NotFound from '../components/Pages/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  // {
  //   path: '/reads/:id',
  //   name: 'Reads',
  //   component: Reads,
  //   props: true,
  //   meta: {
  //     title: 'Reads'
  //   }
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/political',
    name: 'Political',
    // route level code-splitting
    // this generates a separate chunk (political.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "political" */ '../views/Political.vue')
  },
  {
    path: '/economie',
    name: 'Economie',
    // route level code-splitting
    // this generates a separate chunk (economie.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "economie" */ '../views/Economie.vue')
  },
  {
    path: '/article',
    name: 'Article',
    // route level code-splitting
    // this generates a separate chunk (article.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "article" */ '../views/Article.vue')
  },
  {
    path: '/sport',
    name: 'Sport',
    // route level code-splitting
    // this generates a separate chunk (sport.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "sport" */ '../views/Sport.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (contact.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  {
    path: '/reads/:id',
    name: 'Reads',
    // route level code-splitting
    // this generates a separate chunk (reads.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "reads" */ '../views/Reads.vue'),
    props: true,
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes
});


export default router


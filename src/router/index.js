import Vue from 'vue';
import VueRouter from 'vue-router';
import About from '../views/About.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'About',
    component: About,
  },
  {
    path: '/work',
    name: 'Work',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Work.vue'),
  },
  { // 追加
    path: '/private',
    name: 'Private', // 追加
    component: () => import(/* webpackChunkName: "work" */ '../views/Private.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;

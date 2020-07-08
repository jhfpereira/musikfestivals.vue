import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Maiwoche from '../views/Maiwoche.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/maiwoche',
    name: 'Maiwoche',
    component: Maiwoche,
  },
  {
    path: '/open-air-festivals',
    name: 'OpenAirFestivals',
    // route level code-splitting
    // this generates a separate chunk (open-air-festivals.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "open-air-festivals" */ '../views/OpenAirFestivals.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

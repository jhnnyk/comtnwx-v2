import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'HomePage', component: App },
  { path: '/:slug', name: 'MtnPage', component: App },
];

const router = new VueRouter({
  routes,
  mode: 'history',
  base: process.env.BASE_URL,
});

export default router;

// 4. ルーターの設定
// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import SignUp from '../components/SignUp.vue';

const routes = [


  { path: '/SignUp', name: 'SignUp', component: SignUp }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;



import { createRouter, createWebHistory } from 'vue-router';
import RouterModule from './modules';
import RouterCommon from './common';

const router = createRouter({
  history: createWebHistory(),
  routes: [...RouterModule, ...RouterCommon],
});

export default router;

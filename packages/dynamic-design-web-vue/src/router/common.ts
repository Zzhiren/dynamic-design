import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/404',
    name: '404',
    meta: {
      title: '404',
    },
    component: () => import('@/views/Error/404.vue'),
  },
  {
    path: '/500',
    name: '500',
    meta: {
      title: '500',
    },
    component: () => import('@/views/Error/500.vue'),
  },
  {
    path: '/403',
    name: '403',
    meta: {
      title: '403',
    },
    component: () => import('@/views/Error/403.vue'),
  },
];

export default routes;

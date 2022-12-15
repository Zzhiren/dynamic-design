import { RouteRecordRaw } from 'vue-router';
import AppMain from '@/layout/AppMain/index.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/poster',
    name: 'poster',
    redirect: '/poster/h5',
    meta: {
      title: '海报设计',
      icon: '',
    },
    component: AppMain,
    children: [
      {
        path: 'h5',
        name: 'h5',
        meta: {
          title: 'H5海报',
          icon: '',
        },
        component: () => import('@/views/Poster/H5/index.vue'),
      },
    ],
  },
];

export default routes;

import { defineConfig } from 'umi'

export default defineConfig({
  hash: true,
  history: {
    type: 'hash',
  },
  routes: [
    {
      path: '/',
      redirect: '/m'
    },
    { 
      path: '/m',
      component: '@/layouts/index',
      routes: [
        { path: 'home', component: '@/pages/Home/index', exact: true },
        {
          path: '*',
          redirect: '/404'
        },
      ],
    },
    {
      path: '/404',
      component: '@/pages/404/index',
    },
    {
      path: '*',
      redirect: '/404'
    },
  ],
});

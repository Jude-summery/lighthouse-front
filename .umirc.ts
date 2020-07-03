import { defineConfig } from 'umi'

export default defineConfig({
  hash: true,
  history: {
    type: 'hash',
  },
  dva: {},
  routes: [
    {
      path: '/',
      redirect: '/m/home'
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
      path: '/login',
      component: '@/pages/Login/index',
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
  proxy: {
    '/api': {
      'target': 'http://localhost:3000/',
      'changeOrigin': true,
      'pathRewrite': { '^/api' : '/api' },
    },
  },
});

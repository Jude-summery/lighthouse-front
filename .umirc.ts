import { defineConfig } from 'umi'

export default defineConfig({
  hash: true,
  history: {
    type: 'hash',
  },
  routes: [
    { path: '/', component: '@/layouts/index'}
    { path: '/', component: '@/pages/index' },
  ],
});

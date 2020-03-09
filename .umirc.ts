import { defineConfig } from 'umi'

export default defineConfig({
  hash: true,
  history: {
    type: 'hash',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
});

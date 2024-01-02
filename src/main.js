import { createApp } from 'vue'
import { createVfm } from 'vue-final-modal'
import App from './App.vue'
import VueGtag from 'vue-gtag';

import('@/assets/main.css');

const vfm = createVfm()

createApp(App).use(VueGtag, {
  config: { id: import.meta.env.VITE_GA_ID }
}).mount("#app");
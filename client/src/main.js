import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import { createHead } from '@vueuse/head'
const head = createHead()

const app = createApp(App)
    .use(store)
    .use(head)
    .use(router).mount("#app")



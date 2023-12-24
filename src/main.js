import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import SakuraRenderer from 'sakura-renderer'

createApp(App).use(SakuraRenderer).use(store).use(router).mount('#app')

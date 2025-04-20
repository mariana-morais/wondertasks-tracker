import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@fortawesome/fontawesome-free/css/all.css'

import './assets/css/main.css'
import './assets/css/font-family.css'

const app = createApp(App)

app.use(router)
app.mount('#app')

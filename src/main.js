import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import ApiPlugins from './plugins/api.js'

App.use(ApiPlugins, {
    baseURL: 'https://donations.edu.netlor.fr/',
    apiKey: 'e>I70.*Sv,aZ'
});

createApp(App).mount('#app')

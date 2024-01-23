import './assets/main.css'

import  { createApp } from 'vue'
import App from './App.vue'
import ApiPlugins from './plugins/api.js'
import Router from "./router"
import tools from "@/plugins/tools.js";

const app = createApp(App);
app.use(Router);

app.use(ApiPlugins, {
    baseURL: 'https://donations.edu.netlor.fr/',
    apiKey: 'e>I70.*Sv,aZ'
});

app.use(tools);

app.mount('#app');

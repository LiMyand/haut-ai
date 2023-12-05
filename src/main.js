import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './assets/style.scss';
import "@popperjs/core";
import "bootstrap";


const app = createApp(App)
app.mount('#app')

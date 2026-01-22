import { createApp } from 'vue'
import { inject } from "@vercel/analytics"
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
inject();
createApp(App).mount('#app')

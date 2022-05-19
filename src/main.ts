import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/styles/index.scss'
import 'element-plus/dist/index.css'
import router from "@/router";
import VueLazyLoad from 'vue3-lazyload'
const app=createApp(App)
const loadingPicture=require('@/assets/logo.png')
app.use(router)
app.use(VueLazyLoad, {
    loading: loadingPicture,
    error: '',
})
app.mount('#app')

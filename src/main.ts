import { createApp } from 'vue'
import App from './App.vue'
import Vue from 'vue';
import { Button, Select } from 'element-ui';
import './assets/styles/index.scss'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Button);
Vue.use(Select);
createApp(App).mount('#app')

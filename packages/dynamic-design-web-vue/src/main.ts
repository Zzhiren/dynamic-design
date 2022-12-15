import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import Router from './router';
import 'vfonts/Lato.css';
// 等宽字体
import 'vfonts/FiraCode.css';
import './styles/index.scss';

createApp(App).use(Router).use(createPinia()).mount('#app');

/*
 * @Author: quling
 * @Date: 2022-07-30 20:46:54
 * @LastEditors: quling
 * @LastEditTime: 2022-07-31 15:51:20
 * @Description: 
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 引入路由配置
import router from './router';

// 引入store
import { createPinia } from "pinia";

// 全量引入iview组件库
import ViewUIPlus from 'view-ui-plus'
import 'view-ui-plus/dist/styles/viewuiplus.css'

createApp(App).use(createPinia).use(ViewUIPlus).use(router).mount('#app')

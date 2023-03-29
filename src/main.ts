/*
 * @Description: 
 * @version: 
 * @Author: ChenShuShu
 * @Date: 2023-03-29 13:03:27
 * @LastEditors: ChenShuShu
 * @LastEditTime: 2023-03-29 13:13:49
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


createApp(App).use(router).use(ElementPlus).mount('#app')

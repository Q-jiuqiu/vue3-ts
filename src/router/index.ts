/*
 * @Author: quling
 * @Date: 2022-07-30 20:49:02
 * @LastEditors: quling
 * @LastEditTime: 2022-12-26 14:37:49
 * @Description: 
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import App from "@/app.vue"

const routes: Array<RouteRecordRaw> = [{
  path: "/",
  name: 'App',
  component: App
}]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
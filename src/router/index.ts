/*
 * @Author: quling
 * @Date: 2022-07-30 20:49:02
 * @LastEditors: quling
 * @LastEditTime: 2022-07-30 20:58:17
 * @Description: 
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import HelloWorld from "@/components/HelloWorld.vue"

const routes: Array<RouteRecordRaw> = [{
  path: "/",
  name: 'HelloWorld',
  component: HelloWorld
}]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
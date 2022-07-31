/*
 * @Author: quling
 * @Date: 2022-07-31 11:57:10
 * @LastEditors: quling
 * @LastEditTime: 2022-07-31 15:08:04
 * @Description: 
 */
import { defineStore } from "pinia"
const useStore = defineStore("main", {
  state: () => {
    return {
      counter: 0,
      name:"RadiomM"
    }
  },
  actions: {
    reset() {
      this.$reset()
    }
  }
})
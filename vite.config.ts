/*
 * @Author: quling
 * @Date: 2022-07-30 20:46:54
 * @LastEditors: quling
 * @LastEditTime: 2022-07-31 15:45:36
 * @Description:
 */
import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import viteEslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "src") }],
  },
});

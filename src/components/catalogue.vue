<!--
 * @Author: quling
 * @Date: 2022-07-30 17:18:39
 * @LastEditors: quling
 * @LastEditTime: 2022-07-30 18:06:59
 * @Description: 
-->
<template>
  <div class="catalogue" scoped>
    <!-- :theme="theme" -->
    <div class="catalogue-menu">
      <Menu
        mode="horizontal"
        theme="light"
        active-name="1"
      >
        <MenuItem name="1">
        <Icon type="ios-paper" />
        内容管理
        </MenuItem>
        <MenuItem name="2">
        <Icon type="ios-people" />
        用户管理
        </MenuItem>
        <Submenu name="3">
          <template #title>
            <Icon type="ios-stats" />
            统计分析
          </template>
          <MenuGroup title="使用">
            <MenuItem name="3-1">新增和启动</MenuItem>
            <MenuItem name="3-2">活跃分析</MenuItem>
            <MenuItem name="3-3">时段分析</MenuItem>
          </MenuGroup>
          <MenuGroup title="留存">
            <MenuItem name="3-4">用户留存</MenuItem>
            <MenuItem name="3-5">流失用户</MenuItem>
          </MenuGroup>
        </Submenu>
        <MenuItem name="4">
        <Icon type="ios-construct" />
        综合设置
        </MenuItem>
      </Menu>
    </div>
    <div class="catalogue-container">
      <router-view />
    </div>
  </div>

</template>

<script lang="ts" setup>
// export default {
//   setup() {
//     const theme = "light";
//     return {
//       theme,
//     };
//   },
// };
</script>

<style lang="scss">
.catalogue {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  &-container {
    flex: 1;
  }
}
</style>
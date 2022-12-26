<!-- 当 lang="ts" 存在时，所有的模板内表达式都将享受到更严格的类型检查 -->
<script setup lang="ts">
import { ref } from 'vue'

// 设置默认值方法一
export interface Props {
  msg: string
  labels?: string[]
}

withDefaults(defineProps<Props>(), {
  msg: 'hello',
  labels: () => ['one', 'two']
})

// 设置默认值方法二
// const { msg, labels = 10 } = defineProps<Props>()


const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

---
outline: deep
---

# 快速开始

本节将介绍如何在项目中使用 LYUI。

## 用法

### 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```typescript
// main.ts
import { createApp } from 'vue'
import LYUI from 'vue3-ly-ui'
import 'vue3-ly-ui/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(LYUI).mount('#app')

```

### 手动导入

Element Plus 提供了基于 ES Module 的开箱即用的 Tree Shaking 功能。

但你需要安装 unplugin-element-plus 来导入样式。 配置文档参考 docs.

> App.vue

```html
<template>
  <ly-button>我是 ElButton</ly-button>
</template>
<script>
  import { LYButton } from "vue3-ly-ui"
  export default {
    components: { LYButton }
  }
</script>
```
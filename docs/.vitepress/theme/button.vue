<template>
  <button :class="['xl-button', type ? 'xl-button--' + type : '']">
    <slot />
  </button>
</template>

<script>
export default {
  name: "XlButton",
  props: {
    type: { type: String, default: "default" }
  }
}
</script>

<style scoped>
.xl-button {
  cursor: pointer;
  border: 1px solid;
  outline: none;
  padding: 12px 20px;
  border-radius: 4px;
  color: #fff;
  font-weight: 500;
  transition: all 0.3s;
}

.xl-button:hover {
  opacity: 0.8;
}

.xl-button:active {
  opacity: 1;
}

.xl-button + .xl-button {
  margin-left: 10px;
}

.xl-button--default {
  color: #606266;
  background: #fff;
  border-color: #dcdfe6;
}

.xl-button--primary {
  background: #1890ff;
  border-color: #1890ff;
}

.xl-button--success {
  background: #52c41a;
  border-color: #52c41a;
}

.xl-button--info {
  background: #909399;
  border-color: #909399;
}

.xl-button--warning {
  background: #faad14;
  border-color: #faad14;
}

.xl-button--danger {
  background: #f5222d;
  border-color: #f5222d;
}
</style>

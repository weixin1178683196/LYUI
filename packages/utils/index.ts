import type { App } from "vue"

const CLASS_PREFIX = "u"
const GLOBAL_CONFIG_NAME = "_LyUI"
export interface LYUIOption {
  classPrefix?: string
  componentPrefix?: string
}

// 注册插件
export function installComponent(
  app: App,
  component: any,
  options?: LYUIOption
) {
  setGlobalConfig(app, options)
  app.component(component.name, component)
}

// 注入全局app属性
export function setGlobalConfig(
  app: App,
  options: LYUIOption = { classPrefix: CLASS_PREFIX }
) {
  app.config.globalProperties[GLOBAL_CONFIG_NAME] = {
    ...(app.config.globalProperties[GLOBAL_CONFIG_NAME] ?? {}),
    classPrefix: options.classPrefix
  }
}

// 拼装组件className
export const getComponentCls = (componentName: string): string =>
  `${CLASS_PREFIX}-${componentName}`

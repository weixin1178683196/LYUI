import { App } from "vue"
import { LYUIOption, installComponent } from "@ly-ui/utils"
import Tree from "./src/tree"

// 具名导出
export { Tree }

// 导出插件
export default {
  install(app: App, options?: LYUIOption) {
    installComponent(app, Tree, options)
  }
}

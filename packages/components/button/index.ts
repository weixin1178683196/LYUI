import { App } from "vue"
import { LYUIOption, installComponent } from "@ly-ui/utils"
import Button from "./src/button"

// 具名导出
export { Button }

// 导出插件
export default {
  install(app: App, options?: LYUIOption) {
    installComponent(app, Button, options)
  }
}

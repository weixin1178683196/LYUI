import { App } from "vue"
import { LYUIOption, installComponent } from "@ly-ui/utils"
import { components } from "./components"

const LYUI = {
  install(app: App, options?: LYUIOption) {
    components.forEach(component => {
      installComponent(app, component, options)
    })
  }
}

export default LYUI

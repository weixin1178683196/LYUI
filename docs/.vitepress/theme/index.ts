import DefaultTheme from "vitepress/theme"
import "./demo-block.scss"
import "@ly-ui/theme-chalk/src/index.scss"
import LYUI from "@ly-ui/components"
import { registerComponents } from "./register-components"
import type { App } from "vue"

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App<never> }) {
    registerComponents(app)
    app.use(LYUI)
  }
}

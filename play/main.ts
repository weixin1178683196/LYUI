import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import LYUI from "@ly-ui/components"
import "@ly-ui/theme-chalk/src/index.scss" 

createApp(App).use(LYUI).mount("#app")

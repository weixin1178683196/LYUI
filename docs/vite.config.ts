import { defineConfig } from "vite"
import vueJsx from "@vitejs/plugin-vue-jsx"

export default defineConfig({
  define: {
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: true
  },
  plugins: [vueJsx()]
})

import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginVue from "eslint-plugin-vue"

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: globals.browser,
      parser: tseslint.parsers.typescriptEslintParser,
      parserOptions: {
        project: "./tsconfig.json"
      }
    }
  },
  ...pluginVue.configs["flat/essential"]
]

import path from "path" //路径
import fs from "fs" //文件操作
import fsExtra from "fs-extra" //文件操作
// 引入 vite 的 build 方法，进行编译构建
import { defineConfig, build } from "vite" // 引入 vite 的 build 方法，进行编译构建
import vue from "@vitejs/plugin-vue" // 引入 vue 插件
import vueJSX from "@vitejs/plugin-vue-jsx" // 引入 jsx 插件

import { fileURLToPath } from "url"
// 基础配置
const baseConfig = defineConfig({
  publicDir: false,
  plugins: [vue(), vueJSX()]
})
const rollupOptions = defineConfig({
  // that shouldn't be bundled
  external: ["vue"],
  globals: {
    vue: "Vue"
  }
})
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const packageJsonPath = path.resolve(__dirname, "../package.json")
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"))
const version = packageJson.version

// 组件库全局入口
const compontsDir = path.resolve(__dirname, "../packages/components")
// 输出目录
const outputDir = path.resolve(__dirname, "../build")
// 生成 package.json
const createPackageJson = name => {
  const fileStr = `{
    "name": "${name ? name : "vue3-ly-ui"}",
    "version": "${version}",
    "description": "Vue3组件库，beta版本仅用来测试发布",
    "main": "${name ? "index.umd.js" : "vue3-ly-ui.umd.js"}",
    "module":"${name ? "index.mjs" : "vue3-ly-ui.mjs"}",
    "repository": {
      "type": "git",
      "url": "https://gitee.com/it-stands-to-reason/lyui.git"
    },
    "keywords": ["vue3", "组件库", "UI"],
    "author": "ly",
    "license": "ISC"
  }
  `
  // 单个组件 or 全量
  const filePath = path.resolve(
    outputDir,
    name ? `${name}/package.json` : `package.json`
  )

  fsExtra.outputFile(filePath, fileStr, "utf-8")
}

/** 单组件按需构建 */
const buildSingle = async name => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        lib: {
          entry: path.resolve(compontsDir, name),
          name: "index",
          fileName: "index",
          formats: ["es", "umd"]
        },
        rollupOptions,
        outDir: path.resolve(outputDir, name)
      }
    })
  )

  createPackageJson(name)
}

/** 全量构建 */
const buildAll = async () => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        lib: {
          entry: compontsDir,
          name: "vue3-ly-ui",
          fileName: "vue3-ly-ui",
          formats: ["es", "umd"]
        },
        rollupOptions,
        outDir: outputDir
      }
    })
  )

  createPackageJson()
}

// copy文件
// README.md
// 样式 index.css
const copyFiles = () => {
  const markdown = fs.createReadStream(path.resolve(__dirname, "../README.md"))
  const style = fs.createReadStream(
    path.resolve(__dirname, "../packages/theme-chalk/src/index.css")
  )
  markdown.pipe(
    fs.createWriteStream(path.resolve(__dirname, "../build/README.md"))
  )
  style.pipe(
    fs.createWriteStream(path.resolve(__dirname, "../build/index.css"))
  )
}

const buildLib = async () => {
  await buildAll()

  // 按需打包
  fsExtra
    .readdirSync(compontsDir)
    .filter(name => {
      // 获取组件的目录
      const componentDir = path.resolve(compontsDir, name)
      const isDir = fsExtra.lstatSync(componentDir).isDirectory()
      return isDir && fsExtra.readdirSync(componentDir).includes("index.ts")
    })
    .forEach(async name => {
      await buildSingle(name)
    })

  copyFiles()
}

buildLib()

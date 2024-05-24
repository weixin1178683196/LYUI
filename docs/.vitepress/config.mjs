import { defineConfig } from "vitepress"
import { demoBlockPlugin } from "vitepress-theme-demoblock"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LY-UI",
  description: "lyui",
  base: "/LYUI/",
  cleanUrls: true,
  head: [["link", { rel: "icon", href: "../public/favicon.ico" }]],
  themeConfig: {
    search: {
      provider: "local"
      // provider: 'algolia',
      // options: {
      //   appId: 'X51HWTCQJJ',
      //   apiKey: 'ca20f15eb8a667898b65d13f4213ae3d',
      //   indexName: 'vitepress-demo'
      // }
    },
    // editLink: {
    //   pattern:
    //     "https://github.com/themusecatcher/vue-amazing-ui/tree/master/docs/:path",
    //   text: "Suggest changes to this page"
    // },
    logo: "/logo.svg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "示例", link: "/install" }
    ],
    sidebar: [
      {
        text: "基础",
        items: [
          { text: "安装", link: "/install" },
          { text: "快速开始", link: "/start" }
        ]
      },
      {
        text: "通用",
        items: [
          { text: "按钮 Button", link: "/components/button/" },
          { text: "树形控件 Tree", link: "/components/tree/" },
          { text: "图标 Icon", link: "/components/icon/" }
        ]
      }
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/weixin1178683196" }
    ],
    footer: {
      copyright: "Copyright © 2023-present lyui"
    }
  },
  markdown: {
    config(md) {
      // 这里可以使用markdown-it插件
      md.use(demoBlockPlugin)
    }
  }
})

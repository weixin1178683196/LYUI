import{_ as F,c as g,a as b,w as s,V as o,b as n,d as a,r as h,o as y}from"./app.249b590d.js";const f={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:p,createVNode:c,createElementVNode:u,openBlock:l,createElementBlock:r}=o;function i(k,d){const m=p("ly-tree");return l(),r("div",null,[u("div",null,[c(m,{data:k.treeData},null,8,["data"])])])}const{defineComponent:t}=o,{ref:e}=o;return{render:i,...t({setup(k,{expose:d}){d();const _={treeData:e([{id:1,label:"\u7236\u8282\u70B9",children:[{id:2,label:"\u5B50\u8282\u70B91",children:[{id:3,label:"\u5B50\u8282\u70B91_1"}]}]}]),ref:e};return Object.defineProperty(_,"__isScriptSetup",{enumerable:!1,value:!0}),_}})}}()}},A=JSON.parse('{"title":"\u6811\u5F62\u63A7\u4EF6-Tree","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"}],"relativePath":"components/tree/index.md"}'),B=n("h1",{id:"\u6811\u5F62\u63A7\u4EF6-tree",tabindex:"-1"},[a("\u6811\u5F62\u63A7\u4EF6-Tree "),n("a",{class:"header-anchor",href:"#\u6811\u5F62\u63A7\u4EF6-tree","aria-hidden":"true"},"#")],-1),C=n("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[a("\u57FA\u7840\u7528\u6CD5 "),n("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#")],-1),v=n("div",null,"\u4F7F\u7528\u6837\u4F8B",-1),D=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[a("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("ly-tree")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("treeData"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("ly-tree")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"setup"),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
  `),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`
  `),n("span",{class:"token keyword"},"interface"),a(),n("span",{class:"token class-name"},"ITreeNode"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(` string
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(` number
    children`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" ITreeNode"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token comment"},"// \u8868\u793A\u6811\u5F62\u7ED3\u6784"),a(`
    `),n("span",{class:"token comment"},"/**\u64CD\u4F5C\u72B6\u6001 */"),a(`
    selected`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" boolean "),n("span",{class:"token comment"},"// \u662F\u5426\u9009\u4E2D"),a(`
    checked`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" boolean "),n("span",{class:"token comment"},"// \u662F\u5426\u52FE\u9009"),a(`
    expanded`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" boolean "),n("span",{class:"token comment"},"// \u662F\u5426\u5C55\u5F00"),a(`
    `),n("span",{class:"token comment"},"/**\u7981\u7528\u64CD\u4F5C\u5F00\u5173 */"),a(`
    disableSelect`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(` boolean
    disableChecked`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(` boolean
    disableExpanded`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(` boolean
  `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" treeData "),n("span",{class:"token operator"},"="),a(" ref"),n("span",{class:"token operator"},"<"),a("ITreeNode"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"\u7236\u8282\u70B9"'),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"\u5B50\u8282\u70B91"'),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
            `),n("span",{class:"token punctuation"},"{"),a(`
              `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"\u5B50\u8282\u70B91_1"'),a(`
            `),n("span",{class:"token punctuation"},"}"),a(`
          `),n("span",{class:"token punctuation"},"]"),a(`
        `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token punctuation"},"]"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`
  `)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1);function E(p,c,u,l,r,i){const t=h("render-demo-0"),e=h("demo");return y(),g("div",null,[B,C,b(e,{sourceCode:`  <template>
    <div>
      <ly-tree :data="treeData"></ly-tree>
    </div>
  </template>
  <script setup lang="ts">
  import { ref } from 'vue'
  interface ITreeNode {
    label: string
    id: number
    children?: ITreeNode[] // \u8868\u793A\u6811\u5F62\u7ED3\u6784
    /**\u64CD\u4F5C\u72B6\u6001 */
    selected?: boolean // \u662F\u5426\u9009\u4E2D
    checked?: boolean // \u662F\u5426\u52FE\u9009
    expanded?: boolean // \u662F\u5426\u5C55\u5F00
    /**\u7981\u7528\u64CD\u4F5C\u5F00\u5173 */
    disableSelect?: boolean
    disableChecked?: boolean
    disableExpanded?: boolean
  }
  const treeData = ref<ITreeNode[]>([
    {
      id: 1,
      label: "\u7236\u8282\u70B9",
      children: [
        {
          id: 2,
          label: "\u5B50\u8282\u70B91",
          children: [
            {
              id: 3,
              label: "\u5B50\u8282\u70B91_1"
            }
          ]
        }
      ]
    }
  ])
  <\/script>
`},{description:s(()=>[v]),highlight:s(()=>[D]),default:s(()=>[b(t)]),_:1})])}var T=F(f,[["render",E]]);export{A as __pageData,T as default};

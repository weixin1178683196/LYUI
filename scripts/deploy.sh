# /bin/bash

# 确保脚本抛出遇到的错误
set -e

# 重新打包组件库
pnpm build:component

# 打包生成静态文件
pnpm docs:build

# 进入待发布的 dist/ 目录
cd docs/.vitepress/dist

git init
git add .
git commit -m 'deploy'

# 部署到 https://.github.io/
git push -f git@github.com:weixin1178683196/LYUI.git main:github-pages

# 提交所有代码到github
cd ../../../
git add .
git commit -m 'update'
git push

---
title: Hexo常用运营操作
tags:
  - 技术
categories:
  - 技术
description: ''
toc: true
indexing: false
date: 2022-03-16 18:20:41
cover:
top_img:
---

```
hexo help  # 查看帮助
hexo version  #查看Hexo的版本
hexo algolia  # 更新search庫
hexo new "postName" #新建文章
hexo new post "title"  # 生成新文章：\source\_posts\title.md，可省略post
hexo new page "pageName" #新建页面
hexo clean #清除部署緩存
hexo n == hexo new #新建文章
hexo g == hexo generate #生成静态页面至public目录
hexo s == hexo server #开启预览访问端口（默认端口4000，'ctrl + c'关闭server）
hexo d == hexo deploy #将.deploy目录部署到GitHub
hexo d -g #生成加部署
hexo s -g #生成加预览
```

```
hexo clean & hexo d & hexo s
hexo d -g
```
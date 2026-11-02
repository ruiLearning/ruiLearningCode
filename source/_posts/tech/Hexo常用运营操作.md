---
title: Hexo常用运营操作
permalink: Hexo常用运营操作.html
tags:
  - 技术
categories:
  - tech
description: ''
toc: true
date: 2022-11-16 18:20:41
cover: /img/tech.jpg
top_img: /img/tech.jpg
---

```
toc: true 索引
indexing: false 搜索不展示，但是没生效
top_img 為 false 時，不顯示頂部圖
如果不要显示顶部图，可直接配置 disable_top_img: true 显示false

Tips:https://butterfly.js.org/posts/4aa8abbe/
```

```
# 进入_post目录
cd source/_post

# 修改文章内容，添加permalink
for file in `ls`; do link=`echo $file|sed -n 's/\.md//p'`; sed -i "" "/title.*/ a\ 
permalink: $link.html
" $file; done;

# 修改文章的创建时间为Front-matter中的时间
for file in `find . -type f`; do d=`head $file|sed -n 's/^date: //p' |sed -n 's/[- :]//pg' |sed -n 's/\([0-9]\{2\}\)$/\.\1/p'`; touch -t $d $file; done;

# 创建一个2018年1月1日的文件，用于过滤出2018年的文章
touch -t 201801010000 timestamp
# 创建2018文件夹
mkdir 2018
# 将2018年的文章移到2018文件夹下
for file in `find . -type f -newer timestamp`; do mv $file 2018 ; done

# 将timestamp创建时间修改为2017年1月1日，然后参考2018年文章归类方法，这里略

# 完成归类之后删除刚才创建的用于过滤的文件
rm timestamp

# 最后如果想再恢复文章的创建时间，再执行第三步命令
for file in `find . -type f`; do d=`head $file|sed -n 's/^date: //p' |sed -n 's/[- :]//pg' |sed -n 's/\([0-9]\{2\}\)$/\.\1/p'`; touch -t $d $file ; done;

```

```
hexo 升级
# 使用淘宝源的 cnpm 替换 npm（如果直接用 npm 执行更新命令，大概率会更新失败）
npm install -g cnpm --registry=https://registry.npm.taobao.org
# 升级 cnpm
cnpm install -g cnpm
# 清除缓存
cnpm cache clean -f

# 进入 Hexo 根目录，执行如下命令
# 更新 package.json 中的 Hexo 及各个插件版本
cnpm install -g npm-check       # 检查之前安装的插件，都有哪些是可以升级的 
cnpm install -g npm-upgrade     # 升级系统中的插件
npm-check
npm-upgrade

# 更新 Hexo 及所有插件
cnpm update

# 确认 Hexo 已经更新
cnpm update

```

```
hexo升级报错执行清理缓存 重新安装
npm cache clean --force
rm -rf node_modules
rm package-lock.json
npm install
hexo clean
hexo g
```

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
发布正式
hexo clean & hexo deploy & hexo server

⭐️⭐️⭐️⭐️⭐️⭐️最常用
hexo 三连
hexo clean & hexo server & hexo generate 


```
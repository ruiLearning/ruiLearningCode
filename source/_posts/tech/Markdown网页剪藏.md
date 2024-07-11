---
title: Markdown网页剪藏
permalink: Markdown网页剪藏.html
tags:
  - 生活
categories:
  - tech
date: '2024-07-11 13:58'
updated: '2024-07-11 14:13'
cover:
top_img:
---

**说明**  
因为 obsidian 里面是纯 md 文件，所以考虑用一个简单的方法实现网页的剪藏。

相关信息
基本上不会失去排版。插件会自动剪藏正文内容，不会剪藏菜单广告等，接近于印象笔记的效果。

## 1 需要插件

-   chrome 浏览器
-   chrome 浏览器插件 [MarkDownload - Markdown Web Clipperopen in new window](https://chrome.google.com/webstore/detail/markdownload-markdown-web/pcmpcfapbekmbjjkdalcgopdkipoggdi) 保存网页为 md 文件，支持 **Front-matter** 模板，以及丰富的语法规范
-   obsidian 插件 Local Images **商店下载**| [GitHub - aleksey-rezvov/obsidian-local-imagesopen in new window](https://github.com/aleksey-rezvov/obsidian-local-images) 用来将 markdown 中的远程图片下载到本地。

## 2 使用方法

1.  打开需要剪藏的网页，点击 MarkDownload 插件或者页面点击右键菜单，保存到 obsidian 的文件目录。
2.  打开 obsidian，打开刚刚保存的文件，Ctrl+P 命令面板搜 img，选择`Local images:Download images locally`回车。会把 md 文件的远程图片自动下载到 obsidian 本地。



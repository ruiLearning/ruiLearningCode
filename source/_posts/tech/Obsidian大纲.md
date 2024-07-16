---
title: Obsidian
permalink:  Obsidian.html
tags:
  - tech
categories:
  - tech
cover: /img/travel200.jpg
top_img: /img/travel200.jpg
date: 2024-07-11 14:37
updated: 2024-07-11 14:37
---


提醒自己，不要深入研究「工具」，去做「工具」本来要做的事。

weather: Beijing: ☀️   🌡️+36°C 🌬️↑11km/h---


## 主页搭建工具
主页主要用JS写。

- Quickadd 
- templater (tp)
- Button
- workplace plus (wp) 
- style setting 
  - 3.插件样式
    - Callout和ad块全宽显示
    - 开启Admonition特别样式支持
    - Callout 外观样式设置 Traditional
- dataview (dv)
- admonition （ad) 
- banner


## 插入按钮
1. 打开命令模版 输入：Buttons: Button Maker
   - 创建button
   - ![screenshot-20240712-144035.png](https://ruilearning-1258294777.cos.ap-beijing.myqcloud.com/202407121505283.png)

2. 得到结果
    ```button
    name 刷新主页
    type command
    action QuickAdd: 刷新主页
    color default
    ``` 
3. 打开命令模版 输入：Buttons: Insert Inline Button
   - 选择刚才的refreshHome
   - 得到`button-refreshHome`成功插入



## YAML 和 Frontmatter

YAML 作为一种用来写文件配置的语言，简洁而又强大。

在 Obsidian 中只是为了增加笔记的元数据而存在的，在 Obsidian 中需要加上 YAML 时，需要在文件的开头（是必须在文件的开头加入）输入两个三横杠 `-`，如下：
```
---
YAML 语言
---
```
接着再在下边的三横杠的下边加上一个空行，以防 Makrdown 渲染器错将下一行的内容进行渲染。而这两个三横杠包括的区域一般被称为 `Front-matter` 。

如果你从之前就很在意 Obsidain 中的笔记以及文章的元数据建立，例如，你每次一定要附上创建日期以及标签以及相应的类别等，那么在笔记中插入元数据的方式，除了方便你现在检索，也方便未来的插件操作等。

> **功能名片**
> 
> -   功能名称：Front-matter
> -   功能状态：默认功能
> -   功能依赖：官方功能，默认即支持，需要安装 0.9.16 以上版本

当前 Obsidian 包含三个原生的 key：`tags`、`aliases` 以及 `cssclass`。


### 高级用法？
- Dataview —— 根据 YAML Front matter 来生成表格
- 如果你已经按部就班设置了适合自己的 YAML Frontmatter ，那么你可以根据以下的代码块适应性修改来生成自己的 Dataview 表格：
```
​```Dataview
table Completed, Priority, Project, defer-date as "Defer Date", due-date as "Due Date", recur-length as "Recur Length", defer-date + recur-length as "Next Date"
from #tasks
where defer-date < date(now) and completed != 1
sort doDate asc
​```
```

## Template
[[ObsidianTemplate]]


```
banner1
---
cssclasses:
  - myhome
banner_x: 0.62858
banner_y: 0.38648
status: 进行中
target: 10000
banner: "40 - Obsidian/Attachments/banners/flowers.gif"
banner_icon:
---

banner2
---
banner: "https://api.dujin.org/bing/1920.php"
cssclass: fullwidth,noyaml,noscroll,myhome
obsidianUIMode: preview
---
```



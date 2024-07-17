---
title: Obsidian-QuickAdd最强教程
permalink:  Obsidian-QuickAdd最强教程.html
tags:
  - tech
categories:
  - tech
cover: /img/obsidian.png
top_img: /img/obsidian.png
date: 2024-07-11 14:37
updated: 2024-07-11 14:37
---

提醒自己，不要深入研究「工具」，去做「工具」本来要做的事。

# 简介
今天介绍 Obsidian（一款本地化笔记软件）最强的插件：QuickAdd。
插件的官方介绍是：快速地添加笔记（Notes）或内容（Content）到你的库（Vault）。
如果现在让我只能留一个第三方插件，毫无疑问，我会选择 QuickAdd。

# QuickAdd 的 4 种类型
QuickAdd is a powerful combination of four tools (called choices): templates, captures, macros, and multis.
1.  Capture：捕捉。捕捉输入内容到某个文件。
2.  Template：模板。用模板新建文件。
3.  multi：多（菜单）。用于把 QuickAdd 命令做成可选菜单的形式。
4.  Macro：宏。执行一系列命令组合。


## 📝Macro(宏)
介绍：宏将允许您将这两个组合成强大的链式工作流。
简单说下重点：
- 简化操作
- 组合使用，可以Capture、template、macro、系统命令、创建等一起使用
- 链式
- 中间一般加延迟等待，预防执行失败
- 支持User Scripts脚本

想象一下，按下一个热键，自动创建一个新的笔记，以跟踪与特定模板的国际象棋比赛，同时自动添加一个参考它在你的“比赛列表”笔记和你的日常笔记。

### 截图

{% gallery %}
![screenshot-20240717-155701.png](https://ruilearning-1258294777.cos.ap-beijing.myqcloud.com/202407171600468.png)
![screenshot-20240717-155701.png](https://ruilearning-1258294777.cos.ap-beijing.myqcloud.com/202407171600482.png)
![screenshot-20240717-155701.png](https://ruilearning-1258294777.cos.ap-beijing.myqcloud.com/202407171600489.png)
![screenshot-20240717-155701.png](https://ruilearning-1258294777.cos.ap-beijing.myqcloud.com/202407171600498.png)
![screenshot-20240717-155701.png](https://ruilearning-1258294777.cos.ap-beijing.myqcloud.com/202407171600506.png)
{% endgallery %}



## 📜 Template 模板
`⭐️⭐️⭐️⭐️常用 除了复杂的宏Macro最常用，第二就是Template模版`
介绍：快加文件，即用指定模板新建一个文件。

### 简介
简单说下重点：
- 可以指定使用的模板。
- 可以指定新文件保存的位置。
- 模板文件中支持**格式语法**。
    - 文件名称可以在这里自定义，一般我习惯在模版中定义

下面是我的模板中 yaml [[Obsidian大纲#YAML和Frontmatter]] [YAML和Frontmatter](Obsidian大纲#YAML和Frontmatter)的写法。

### 例子
#### 例子1
```
---
title: {{NAME}}
UID: {{DATE:YYYYMMDDHHmmss}}
aliases: []
tags: []
主题: {{VALUE:主题是什么？}}
date: {{DATE:YYYY-MM-DD HH:mm:ss}}
---
```

-   `{{NAME}}` 是文件名的写法
-   `{{VALUE:主题是什么？}}` 这种写法会作为一个提示输入弹窗，让我录入。
-   `{{DATE:YYYY-MM-DD HH:mm:ss}}` 在创建文件时会变成当前的年月日时分秒

#### 例子2
特殊格式语法：在模板中这样写，可以在新建时出现选择框。

```
来源: {{VALUE:微信读书,纸书,bilibili,网络}}
```

`{{VALUE:值1,值2,值3}}`，在使用快加 Template 类型的命令新建文件时，会作为一个下拉选项让你选择。

{% gallery %}
![XlzdUPJqgDyVt9W.png](https://ruilearning-1258294777.cos.ap-beijing.myqcloud.com/202407171511555.png)
{% endgallery %}


#### 例子3

{% gallery %}
![Template.png](https://ruilearning-1258294777.cos.ap-beijing.myqcloud.com/202407171515164.png)
{% endgallery %}


模版[[tp-游玩模板]]部分代码如下：
```
---
<%-*
let banner= await tp.user.getrandomImage("99-Attachment/banner")
let weather = await tp.user.getweather("")
-%>
<%-*
let  newtitle
if(tp.file.title.includes("未命名") || tp.file.title.toLowerCase().includes("untitled"))
{ title=await tp.system.prompt("请输入要创建的文件名");
newtitle=title||tp.date.now("YYYYMMDDHHmmss")
await tp.file.rename(newtitle)}
else newtitle=tp.file.title
-%>
<%-*
var cleanTitle = tp.user.getTitleSnippet(newtitle)
var title = `${cleanTitle}`;
await tp.file.rename(`${title}`);
let filetype = await tp.system.suggester(["游玩", "自驾", "其他"],["游玩", "自驾", "其他"], false, "路径放到哪里？")
if (filetype === "游玩") {
myFilePath = "/10-Live/Travel/" + `${title}`;
await tp.file.move(`${myFilePath}`);
} else if (filetype === "自驾") {
myFilePath = "/10-Live/SelfDriving/" + `${title}`;
await tp.file.move(`${myFilePath}`);
} else if (filetype === "其他") {
myFilePath = "/10-Live/Other/" + `${title}`;
await tp.file.move(`${myFilePath}`);
} else {
tp.file.cursor(1)
}
-%>

banner: <% banner %>
Banner style: Solid
cssclass: mynote,noyaml
uid: <% tp.date.now("YYYYMMDDHHmmss") %> 
title: <% tp.file.title %>
permalink:  <% tp.file.title %>.html
tags: <% `${filetype}` %>
categories:
  - live
  - travel
cover: /img/travel200.jpg
top_img: /img/travel200.jpg
date: <% tp.file.creation_date() %>
updated: <% tp.file.last_modified_date() %>
---
> [!blank] 
> [timeline{{DATE:DDD}}::timeline]
```ad-flex
(Weather::<% `${weather}` %>)```
<% tp.web.random_picture("800x500", "happy") %>
# 旅行基本信息

## 🎏目的地
<% `${title}` %>

## ⏰旅行时间
<% tp.system.prompt("预计开始时间")%> ~  <% tp.system.prompt("预计结束时间") %>

## ⏰预计游玩时间
- <% tp.system.prompt("预计游玩时间")%>

```

## 📸 Capture 捕捉 
`⭐️⭐️⭐️不常用 一般组合用`
### 简介
介绍：捕捉你输入的文本，插入到指定的文件。 捕捉，可以捕捉内容到指定文件的指定地方。
捕获允许您快速将内容添加到预定义文件中。
例如，您可以设置一个快速操作，将打开文件的链接添加到特定部分下的每日笔记中。

{% gallery %}
![Capture base](https://ruilearning-1258294777.cos.ap-beijing.myqcloud.com/202407171458499.png)
![Capture format](https://ruilearning-1258294777.cos.ap-beijing.myqcloud.com/202407171458477.png)
{% endgallery %}

### 操作步骤
下面我们就开始吧！添加一个 capture 类型的快加，打开设置。

1. 在 File Name 项，填写上你想要捕捉内容保存到的文件。
2. 指定插入到指定位置（非必要）
3. 加时间戳/任务/Admonition(ad) 等等

#### 加时间戳
1. 打开 Capture format 的开关。
2. ```举例： \n- {{DATE:YYYY-MM-DD HH:mm}} {{VALUE}}```在文本框里写格式语法。下面做一下简单的解释。
    1.  `{{DATE:YYYY-MM-DD HH:mm}}` 就是时间的写法，DATE 语法可以从官方的日记插件设置页找到：[官方日记格式Moment.js | Docs](https://momentjs.com/docs/#/displaying/format/)
    2.  `{{VALUE}}` 就是捕捉的内容。
    3.  最前面有一个 `\n`，这是换行语法，在 md 中不会原样输出，而是会自动换一样，再插入相应的内容。
    4.  `-`，是列表语法，因为我喜欢使用列表输入内容而已，没有特别的含义，如果你不想要列表，去掉上图事例中的短横杠 `-` 就可以了。

#### 加任务
1. 打开 Capture format 的开关。
2. capture format 里，写 `- [ ] {{VALUE}}`

#### 加Admonition
1. 打开 Capture format 的开关。
2. capture format 里，粘贴进那一长串 admonition 语法。

```
### 行为疗法{{DATE:YYYYMMDDHHmm}}
- 你有什么感觉？
  - {{VALUE:你有什么感觉？}}

- 现在你脑海中在想什么？
  - {{VALUE:现在你脑海中在想什么？}}

- 它真实吗？
  - {{VALUE:它真实吗？}}
  > 我在思考，不一定意味着这是事实。

```

解释：
1.  当使用 `{{VALUE:你有什么感觉？}}` 的时候，弹出的捕捉框会以 “你有什么感觉？” 作为输入提示文字。
2.  capture format 支持多个 {{VALUE}}，也就是你可以一次捕捉多个内容。


### 总结
#### Tips
1. 打开 **Insert after** 项的开关，并写上 `## Inbox`,这里是`tag`分类，以后可以结合`dataview`来使用。
2. 如果你想要每次新添加的卡片都放在列的最下面，就打开 **Insert at end of section** 项的开关。如果不打开，默认卡片会放在列的最上方。

上面只是例子，希望大致能让你明白怎么写 `capture format`。
总结一下，就是非格式语法会原样输出，格式语法会动态输出，你可以自己定需要插入什么时间格式，也可以自己加点花样，比如前面加上 emoji 之类的。

## 📁multi 多（菜单）
⭐️⭐️`不常用`
介绍：将已经做好的快加命令做成组合菜单。
相当于给命令创建了个文件夹。


# 结语
QuickAdd 无限可能，无限拓展！

## 第一参考资料
[官网GitHub QuickAdd for Obsidian](https://github.com/chhoumann/QuickAdd)

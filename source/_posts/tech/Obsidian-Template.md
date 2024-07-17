---
title: Obsidian-Template
permalink: Obsidian-Template.html
description: ''
toc: true
categories:
  - tech
date: 2022-10-17 13:35:10
tags:
cover: /img/obsidian.png
top_img: /img/obsidian.png
---
## 常用的语法变量

要用好模板，就需要了解下常用的 templater 变量（简称 tp 变量），这些 tp 变量可以理解为模板中的占位符，生成笔记的时候，这些变量就会变成对应的内容。

| 内部变量 | 参数 | 功能描述 | 代码示例 | 显示效果 |
| --- | --- | --- | --- | --- |
| `{{tp_title}}` | 无 | 取得当前文件的名称 | `{{tp_title}}` | `一文掌握Obsidian模板` |
| `{{tp_folder}}` | \- `vault_path`: 取得文本库到当前文件夹的相对路径。取值范围 `true` 或 `false`，默认为 `false`。 | 获取当前目录的名称。 | 1\. `{{tp_folder}}` 2. `{{tp_folder:vault_path=true}}` | 1\. `Obsidian` 2. `写作/技术类/Obsidian教程` |
| `{{tp_include}}` | \- `f`: 此为必填项。须指定从文档库开始到某一具体文件的相对路径，将该文件全部内容填充到当前文档中书写有 `{{tp_include:f="location"}}` 的位置。 | 将指定文件中全部内容的填入当前文档。指定文件可为另一样章，其中包含的变量也将解析替换（替换深度 `10`）。 | `{{tp_include:f="location"}}` |  |
| `{{tp_date}}` | \- `f`: 指定日期格式化字符串， (缺省格式为: `YYYY-MM-DD`)。  
\- `offset`: 设置偏移天数，例如设定为 `-7` 时可获得上周日期 (默认值为 `0`)。 | 取得今日 + 偏移天数的日期。 | `{{tp_date:f="ll", offset=7}}` |  |
| `{{tp_yesterday}}` | \- `f`: 指定日期格式化字符串， (缺省格式为: `YYYY-MM-DD`)。 | 取得昨天的日期。 | `{{tp_yesterday}}` | `2021-03-24` |
| `{{tp_tomorrow}}` | \- `f`: 指定日期格式化字符串， (缺省格式为: `YYYY-MM-DD`)。 | 取得明天的日期。 | `{{tp_tomorrow}}` | `2021-03-26` |
| `{{tp_time}}` | \- `f`: 指定时间格式化字符串， (缺省格式为: `HH:mm`)。 | 取得当前时间。 | 1\. `{{tp_time}}` 2. `{{tp_time:f="H:m:s"}}` | 1\. `08:36` 2. `8:36:9` |
| `{{tp_creation_date}}` | \- `f`: 指定日期格式化字符串， (缺省格式为: `YYYY-MM-DD HH:mm`)。 | 获取当前文档创建时的日期。 | `{{tp_creation_date}}` | `2021-03-21 13:03` |
| `{{tp_last_modif_date}}` | \- `f`: 指定日期格式化字符串， (缺省格式为: `YYYY-MM-DD HH:mm`)。 | 获取当前文档最后修改的日期。 | `{{tp_last_modif_date}}` | `2021-03-25 08:36` |
| `{{tp_title_date}}` | \- `title_f`: 指明适用于文档名称中的日期字符串格式。 (默认格式为: `YYYY-MM-DD`)。此处设置应与核心插件“日记”中指定日期格式化字符串相同。 - `f`: 指定日期格式化字符串， (缺省格式为: `YYYY-MM-DD`)。 - `offset`: 设置偏移天数，例如设定为 `-7` 时可获得上周日期 (默认值为 `0`)。 | 多用于“日记”。可获取文件名中包含的日期 + 偏移天数。 | `{{tp_title_date:title_f="YYYY-MM-DD_dddd", f="YYYY-MM-DD"}}` | `2021-03-26` |
| `{{tp_title_yesterday}}` | \- `title_f`: 指明适用于文档名称中的日期字符串格式。 (默认格式为: `YYYY-MM-DD`)。此处设置应与核心插件“日记”中指定日期格式化字符串相同。 - `f`: 指定日期格式化字符串， (缺省格式为: `YYYY-MM-DD`)。 |  |  | \- `offset`: 设置偏移天数，例如设定为 `-7` 时可获得上周日期 (默认值为 `0`)。 |
| `{{tp_title_tomorrow}}` | \- `title_f`: 指明适用于文档名称中的日期字符串格式。 (默认格式为: `YYYY-MM-DD`)。此处设置应与核心插件“日记”中指定日期格式化字符串相同。 - `f`: 指定日期格式化字符串， (缺省格式为: `YYYY-MM-DD`)。 - `offset`: 设置偏移天数，例如设定为 `-7` 时可获得上周日期 (默认值为 `0`)。 | 多用于“日记”。可获取文件名中包含的日期后一天 + 偏移天数。 | `{{tp_title_tomorrow_title:title_f=="YYYY-MM-DD_dddd, f="YYYY-MM-DD"}}` | `2021-03-27` |
| `{{tp_daily_quote}}` | 无 | 提供的 API 取得每日名言摘引。 | `{{tp_daily_quote}}` |  |
| `{{tp_random_picture}}` | \- `size`: 以如下方式设置图片尺寸 `<宽>x<高>`(默认值为: `1600x900`). |  |  |  |
| \- `query`: 输入一个关键字用于限定选定图片的范围。如需使用多个关键字，彼此之间需要以英文半角 `,` 加以间隔。此时，还有另一注意事项：需使用英文双引号 `"` 用以在两端定界。(默认值为: 没有搜索关键字) | 基于搜索关键字从 unsplash.com 获取一张随机图片。 | `{{tp_random_picture:size="800x600", query="beijing"}}` |  |  |
| `{{tp_title_picture}}` | \- `size`: 以如下方式设置图片尺寸 `<宽>x<高>`(默认值为: `1600x900`). | 基于笔记标题从 unsplash.com 获取一张随机图片。 | `{{tp_title_picture:size="800x600"}}` |  |
| `{{tp_cursor}}` | 无 | 将当前位置设定为套壳样章后游标的操作位置。 | `{{tp_cursor}}` |  |

---
<%*
let selection = window.getSelection();
let choice = await tp.system.suggester(
  [ "✏️ note", "📘 abstract", "ℹ️ info", "🔥 tip", "✅ success", 
  "❓ question", "⚠️ warning", "❌ fail", "🪲 bug", "📋 example", 
  "✍️ quote", "💡 comment", "😝 LOL" ], 
  [ 0,1,2,3,4,5,6,7,8,9,10,11,12 ]
  );
const admonitions = [ 
  ["ad-note", "重點"], ["ad-abstract", "摘要"], ["ad-info", "資訊"], ["ad-tip", "技巧"], ["ad-success", "完成"], 
  ["ad-question", "問題"], ["ad-warning", "警告"], ["ad-fail", "失敗"], ["ad-error", "錯誤"], ["ad-example", "範例"], 
  ["ad-quote", "引用"], ["ad-comment", "建議"], ["ad-LOL", "好笑"]
];

admonition = admonitions[choice][0];
title = admonitions[choice][1];

const nl = String.fromCharCode(10);

choice = "```" + admonition + nl +
  //"collapse: on" + nl +
  "title: " + title + nl + selection + nl +
  "```";
%>
<% choice %>

--- 
随机获取图片

<%*
let keywords = await tp.system.prompt("隨機圖片：輸入關鍵字(以 , 分隔)");
//keywords = keywords.replace(/ /g, "");
//console.log("keywords", keywords);
%>
<% tp.web.random_picture("1600x900", keywords) %>

---
中文decode

```js quickadd
selObj = window.getSelection();
text = selObj.toString();
//await this.quickAddApi.utility.getClipboard();
text = await decodeURIComponent(text)
this.quickAddApi.utility.setClipboard(text);
//console.log("main " + text);
return text;
```

---
天气

---
weather: <% tp.user.getWeather() %>
--- 


---


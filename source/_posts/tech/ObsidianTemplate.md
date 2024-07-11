---
title: Template
permalink: Template.html
description: ''
toc: true
categories:
  - tech
date: 2022-10-17 13:35:10
tags:
cover: /img/tech.jpg
top_img: /img/tech.jpg
---


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


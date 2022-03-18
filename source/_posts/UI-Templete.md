---
title: UI_Templete
description: ''
toc: true
date: 2022-03-18 11:07:25
tags:
- markdown
- blog
categories:
- markdown
cover: /img/791bf5e809a4185012f2cbc7e30d1739.jpeg
top_img: /img/791bf5e809a4185012f2cbc7e30d1739.jpeg
---
<!-- ====================简单属性 ====================-->
`红字浅灰色背景`
* 第一项
  > 1.1
  > 1.2
* 第二项

<!-- ====================label==================== -->
{% label 红色label red %} <!-- / blue / pink / red / purple / orange / green -->

<!-- ====================button==================== -->

button  {% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,block left blue larger %}

<!-- ====================note==================== -->
{% note blue 'fas fa-bullhorn' flat %}
note
{% endnote %}
<!-- ====================图片==================== -->

<!-- ====================图片==================== -->
<img src=" /img/791bf5e809a4185012f2cbc7e30d1739.jpeg" width="50%" height="20%" align="left">

![](https://github.com/ruiLearning/ruiLearning.github.io/blob/main/img/loading3.webp?raw=true)


<!-- ====================表格==================== -->
Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3


<!-- ====================时间轴==================== -->
{% timeline 2022,green %}
<!-- timeline 01-02 -->
這是測試頁面
<!-- endtimeline -->
{% endtimeline %}

<!-- ====================tab==================== -->

{% tabs test1 %}
<!-- tab 第一個Tab -->
**tab名字為第一個Tab**
<!-- endtab -->

<!-- tab @fab fa-apple-pay -->
**只有圖標 沒有Tab名字**
<!-- endtab -->

<!-- tab 炸彈@fas fa-bomb -->
**名字+icon**
<!-- endtab -->
{% endtabs %}

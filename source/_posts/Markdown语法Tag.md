---
title: Markdown语法Tag
description: ''
toc: true
indexing: false
date: 2022-03-18 11:07:25
tags:
    - markdown
    - blog
categories:
    - markdown
cover: /img/791bf5e809a4185012f2cbc7e30d1739.jpeg
top_img: /img/791bf5e809a4185012f2cbc7e30d1739.jpeg
---


{% tabs test4 %}
<!-- tab label/btn/toggle -->

臣亮言：{% label 先帝 %}創業未半，而{% label 中道崩殂 blue %}。今天下三分，{% label 益州疲敝 pink %}，此誠{% label 危急存亡之秋 red %}也！然侍衞之臣，不懈於內；{% label 忠志之士 purple %}，忘身於外者，蓋追先帝之殊遇，欲報之於陛下也。誠宜開張聖聽，以光先帝遺德，恢弘志士之氣；不宜妄自菲薄，引喻失義，以塞忠諫之路也。

```
{% label text color %}
text	文字
color  【可選】背景顏色，默認為 default
default /blue/pink/red/purple/orange/green

臣亮言：{% label 先帝 %}創業未半，而{% label 中道崩殂 blue %}。今天下三分，{% label 益州疲敝 pink %}，此誠{% label 危急存亡之秋 red %}也！然侍衞之臣，不懈於內；{% label 忠志之士 purple %}，忘身於外者，蓋追先帝之殊遇，欲報之於陛下也。誠宜開張聖聽，以光先帝遺德，恢弘志士之氣；不宜妄自菲薄，引喻失義，以塞忠諫之路也。
```

哪個英文字母最酷？ {% hideInline 因為西裝褲(C裝酷),查看答案,#FF7242,#fff %}
門裏站着一個人? {% hideInline 閃 %}

查看答案
{% hideBlock 查看答案 %}
傻子，怎麼可能有答案
{% endhideBlock %}
```
哪個英文字母最酷？ {% hideInline 因為西裝褲(C裝酷),查看答案,#FF7242,#fff %}
門裏站着一個人? {% hideInline 閃 %}

查看答案
{% hideBlock 查看答案 %}
傻子，怎麼可能有答案
{% endhideBlock %}
```

{% hideToggle Butterfly安裝方法 %}
在你的博客根目錄裏

git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly

如果想要安裝比較新的dev分支，可以

git clone -b dev https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly

{% endhideToggle %}
```
{% hideToggle Butterfly安裝方法 %}
在你的博客根目錄裏
git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly
如果想要安裝比較新的dev分支，可以
git clone -b dev https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly
{% endhideToggle %}
```
<!-- endtab -->

<!-- tab  timeline @fas fa-bomb -->

{% timeline 2022 %}
<!-- timeline 01-02 -->
這是測試頁面
<!-- endtimeline -->
{% endtimeline %}

{% timeline 2022,green %}
<!-- timeline 01-02 -->
這是測試頁面
<!-- endtimeline -->
{% endtimeline %}

```
{% label text color %}
color	timeline 顏色
default(留空) / blue / pink / red / purple / orange / green

{% timeline 2022 %}
<!-- timeline 01-02 -->
這是測試頁面
<!-- endtimeline -->
{% endtimeline %}

{% timeline 2022,green %}
<!-- timeline 01-02 -->
這是測試頁面
<!-- endtimeline -->
{% endtimeline %}
```

<!-- endtab -->

<!-- tab @fab fa-apple-pay -->
**只有圖標 沒有Tab名字**
<!-- endtab -->


{% endtabs %}



{% note 'fab fa-cc-visa' flat %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note blue 'fas fa-bullhorn' flat %}
2021年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' flat %}
小心開車 安全至上
{% endnote %}
{% note red 'fas fa-fan' flat%}
這是三片呢？還是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' flat %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note purple 'far fa-hand-scissors' flat %}
剪刀石頭布
{% endnote %}
{% note green 'fab fa-internet-explorer' flat %}
前端最討厭的瀏覽器
{% endnote %}
---

{% note 'fab fa-cc-visa' modern %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note blue 'fas fa-bullhorn' modern %}
2021年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' modern %}
小心開車 安全至上
{% endnote %}
{% note red 'fas fa-fan' modern%}
這是三片呢？還是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' modern %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note purple 'far fa-hand-scissors' modern %}
剪刀石頭布
{% endnote %}
{% note green 'fab fa-internet-explorer' modern %}
前端最討厭的瀏覽器
{% endnote %}

---
{% note 'fab fa-cc-visa' simple %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note blue 'fas fa-bullhorn' simple %}
2021年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' simple %}
小心開車 安全至上
{% endnote %}
{% note red 'fas fa-fan' simple%}
這是三片呢？還是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' simple %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note purple 'far fa-hand-scissors' simple %}
剪刀石頭布
{% endnote %}
{% note green 'fab fa-internet-explorer' simple %}
前端最討厭的瀏覽器
{% endnote %}

---

```
{% note 'fab fa-cc-visa' flat %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note blue 'fas fa-bullhorn' flat %}
2021年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' flat %}
小心開車 安全至上
{% endnote %}
{% note red 'fas fa-fan' flat%}
這是三片呢？還是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' flat %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note purple 'far fa-hand-scissors' flat %}
剪刀石頭布
{% endnote %}
{% note green 'fab fa-internet-explorer' flat %}
前端最討厭的瀏覽器
{% endnote %}

{% note 'fab fa-cc-visa' modern %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note blue 'fas fa-bullhorn' modern %}
2021年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' modern %}
小心開車 安全至上
{% endnote %}
{% note red 'fas fa-fan' modern%}
這是三片呢？還是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' modern %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note purple 'far fa-hand-scissors' modern %}
剪刀石頭布
{% endnote %}
{% note green 'fab fa-internet-explorer' modern %}
前端最討厭的瀏覽器
{% endnote %}


{% note 'fab fa-cc-visa' simple %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note blue 'fas fa-bullhorn' simple %}
2021年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' simple %}
小心開車 安全至上
{% endnote %}
{% note red 'fas fa-fan' simple%}
這是三片呢？還是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' simple %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note purple 'far fa-hand-scissors' simple %}
剪刀石頭布
{% endnote %}
{% note green 'fab fa-internet-explorer' simple %}
前端最討厭的瀏覽器
{% endnote %}
```
---



This is my website, click the button  {% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,block larger %}
This is my website, click the button  {% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,block center larger %}
This is my website, click the button  {% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,block right blue larger %}

<div class="btn-center">
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,blue larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,pink larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,red larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,purple larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,orange larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,green larger %}
</div>



{% codeblock %}
This is my website, click the button  {% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,block larger %}
This is my website, click the button  {% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,block center larger %}
This is my website, click the button  {% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,block right blue larger %}

<div class="btn-center">
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,blue larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,pink larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,red larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,purple larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,orange larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,green larger %}
</div>
{% endcodeblock %}


{% pullquote right %}
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
{% endpullquote %}

{% blockquote David Levithan, Wide Awake %}
Do not just seek happiness for yourself. Seek happiness for all. Through kindness. Through mercy.
{% endblockquote %}

```
{% blockquote David Levithan, Wide Awake %}
Do not just seek happiness for yourself. Seek happiness for all. Through kindness. Through mercy.
{% endblockquote %}
```

{% blockquote @DevDocs https://twitter.com/devdocs/status/356095192085962752 %}
NEW: DevDocs now comes with syntax highlighting. http://devdocs.io
{% endblockquote %}

```
{% blockquote @DevDocs https://twitter.com/devdocs/status/356095192085962752 %}
NEW: DevDocs now comes with syntax highlighting. http://devdocs.io
{% endblockquote %}
```

{% blockquote Seth Godin http://sethgodin.typepad.com/seths_blog/2009/07/welcome-to-island-marketing.html Welcome to Island Marketing %}
Every interaction is both precious and an opportunity to delight.
{% endblockquote %}

```
{% blockquote Seth Godin http://sethgodin.typepad.com/seths_blog/2009/07/welcome-to-island-marketing.html Welcome to Island Marketing %}
Every interaction is both precious and an opportunity to delight.
{% endblockquote %}
```


```

```
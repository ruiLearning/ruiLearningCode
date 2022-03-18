---
title: Markdown本地图片文件夹测试
description: ''
toc: true
date: 2022-03-17 14:27:53
tags: blog
categories:
    - markdown
cover: /img/791bf5e809a4185012f2cbc7e30d1739.jpeg
top_img: /img/791bf5e809a4185012f2cbc7e30d1739.jpeg
---

>> 图片设置代码
```
---

# 图片预览

---

##  本地文件夹图片
![](3a20ad986bce2b559f738bdb2412efd3.jpeg)

---

## 自定义大小图片
<img src="3a20ad986bce2b559f738bdb2412efd3.jpeg" width="50%" height="20%">

---

## inlineImg图片
{% inlineImg loading1.webp 260px  %}


## 普通相册模式 多张
{% gallery %}
![](https://i.loli.net/2019/12/25/Fze9jchtnyJXMHN.jpg)
![](https://i.loli.net/2019/12/25/ryLVePaqkYm4TEK.jpg)
![](https://i.loli.net/2019/12/25/gEy5Zc1Ai6VuO4N.jpg)
![](https://i.loli.net/2019/12/25/d6QHbytlSYO4FBG.jpg)
![](https://i.loli.net/2019/12/25/6nepIJ1xTgufatZ.jpg)
![](https://i.loli.net/2019/12/25/E7Jvr4eIPwUNmzq.jpg)
![](https://i.loli.net/2019/12/25/mh19anwBSWIkGlH.jpg)
![](https://i.loli.net/2019/12/25/2tu9JC8ewpBFagv.jpg)
{% endgallery %}

---

## 加强相册模式 多张 可以跳转 注释等
<div class="gallery-group-main">
{% galleryGroup '壁紙' '收藏的一些壁紙' '/Gallery/wallpaper' 1b28a8930250f2458be500fc22060504.jpeg %}
{% galleryGroup '壁紙' '收藏的一些壁紙' '/Gallery/wallpaper' 1b28a8930250f2458be500fc22060504.jpeg %}
{% galleryGroup '壁紙' '收藏的一些壁紙' '/Gallery/wallpaper' 1b28a8930250f2458be500fc22060504.jpeg %}
{% galleryGroup '壁紙' '收藏的一些壁紙' '/Gallery/wallpaper' https://i.loli.net/2019/11/10/T7Mu8Aod3egmC4Q.png %}
</div>

---

## 普通动图写法
![](loading1.webp)

```
---

# 图片预览

---

##  本地文件夹图片预览
![](3a20ad986bce2b559f738bdb2412efd3.jpeg)

---

## 自定义大小图片预览
<img src="3a20ad986bce2b559f738bdb2412efd3.jpeg" width="50%" height="20%">

---

## inlineImg图片预览
{% inlineImg loading1.webp 260px  %}

---

## 普通相册模式 多张预览预览
{% gallery %}
![](https://i.loli.net/2019/12/25/Fze9jchtnyJXMHN.jpg)
![](https://i.loli.net/2019/12/25/ryLVePaqkYm4TEK.jpg)
![](https://i.loli.net/2019/12/25/gEy5Zc1Ai6VuO4N.jpg)
![](https://i.loli.net/2019/12/25/d6QHbytlSYO4FBG.jpg)
![](https://i.loli.net/2019/12/25/6nepIJ1xTgufatZ.jpg)
![](https://i.loli.net/2019/12/25/E7Jvr4eIPwUNmzq.jpg)
![](https://i.loli.net/2019/12/25/mh19anwBSWIkGlH.jpg)
![](https://i.loli.net/2019/12/25/2tu9JC8ewpBFagv.jpg)
{% endgallery %}

---

## 加强相册模式 多张 可以跳转 注释等预览
<div class="gallery-group-main">
{% galleryGroup '壁紙' '收藏的一些壁紙' '/Gallery/wallpaper' 1b28a8930250f2458be500fc22060504.jpeg %}
{% galleryGroup '壁紙' '收藏的一些壁紙' '/Gallery/wallpaper' 1b28a8930250f2458be500fc22060504.jpeg %}
{% galleryGroup '壁紙' '收藏的一些壁紙' '/Gallery/wallpaper' 1b28a8930250f2458be500fc22060504.jpeg %}
{% galleryGroup '壁紙' '收藏的一些壁紙' '/Gallery/wallpaper' https://i.loli.net/2019/11/10/T7Mu8Aod3egmC4Q.png %}
</div>

---

## 普通动图写法预览
![](loading1.webp)

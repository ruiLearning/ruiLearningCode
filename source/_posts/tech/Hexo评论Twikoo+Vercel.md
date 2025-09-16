---
title: Hexo评论Twikoo+Vercel
permalink: Hexo评论Twikoo+Vercel.html
tags:
  - 技术
categories:
  - tech
description: ''
toc: true
date: 2025-09-16 18:20:41
cover: /img/tech.jpg
top_img: /img/tech.jpg
---

# 操作步骤
1. 发现hexo评论不管用了，说明有可能数据库被关闭了,https://cloud.mongodb.com/ 
    - 打开网址检查是否关闭。如果关闭重新打开，并且创建新的用户。
    - 然后复制链接 例子：mongodb+srv://ban:`<db_password>`@cluster0.eukfmxs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
    - ban和db_password改为新创建的用户
2. 打开 https://vercel.com/ 
   - 进入【Settings】->【Environment Variables】，添加环境变量【MONGODB_URI】时，目标字符串中的<password>是否替换成mongodb中的【数据库密码】。
     修改后,重新部署，显示
   - Vercel Domains（包含 https:// 前缀，例如 https://xxx.vercel.app）即为您的环境 id
     - 我的Domains  https://twikoo-api-eight-lyart.vercel.app/
3. 重新部署

截图如下:
{% gallery %}
![Vercel3.png](https://ruilearning-1258294777.cos.ap-beijing.myqcloud.com/20250916151246667.png)
![Vercel2.png](https://ruilearning-1258294777.cos.ap-beijing.myqcloud.com/20250916151246749.png)
![Vercel1.png](https://ruilearning-1258294777.cos.ap-beijing.myqcloud.com/20250916151246764.png)
![mongodb1.png](https://ruilearning-1258294777.cos.ap-beijing.myqcloud.com/20250916151246771.png)
![mongodb.png](https://ruilearning-1258294777.cos.ap-beijing.myqcloud.com/20250916151246785.png)

{% endgallery %}

# 描述
主要用到下边3个：
1. Twikoo官网:https://twikoo.js.org/backend.html
2. Vercel官网:https://vercel.com/
3. 数据库mongodb官网:https://cloud.mongodb.com/

# Tips

```
如果报了如下错误：
Twikoo + Vercel 部署时出现 1000 bad auth : Authentication failed
{
"code":1000,
"message":"bad auth : Authentication failed."
}
```
Vercel官网:https://vercel.com/ ` 进入【Settings】->【Environment Variables】，添加环境变量【MONGODB_URI】时，目标字符串中的<password>是否替换成了 第 3 步中的【数据库密码】。
修改后,重新部署，`
结果 显示
```
{
"code": 100,
"message": "Twikoo 云函数运行正常，请参考 https://twikoo.js.org/frontend.html 完成前端的配置",
"version": "1.6.44"
}
```
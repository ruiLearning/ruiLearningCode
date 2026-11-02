// 旧网址跳转：这几篇文章以前没设 permalink，网址跟着日期走，日期修正后网址变了。
// 在旧网址生成一个自动跳转页，别人收藏或分享过的旧链接还能打开。
'use strict';
const redirects = {
  "2025/03/22/live-travel-shandong-山东-青岛-灵山岛.html": "/灵山岛.html",
  "2025/03/22/live-travel-hubei-湖北-三峡.html": "/三峡.html",
  "2025/03/22/live-riding-生活-骑行-第一次长途骑行准备.html": "/生活-骑行-第一次长途骑行准备.html",
  "2025/03/22/live-riding-生活-骑行-北京To山东.html": "/生活-骑行-北京To山东.html"
};
hexo.extend.generator.register('old-url-redirects', () => Object.entries(redirects).map(([from, to]) => ({
  path: from,
  data: `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><title>页面已搬家</title>` +
    `<meta http-equiv="refresh" content="0; url=${to}"><link rel="canonical" href="${to}">` +
    `<script>location.replace(${JSON.stringify(to)})</script></head>` +
    `<body><p>页面已搬到 <a href="${to}">${to}</a></p></body></html>`
})));

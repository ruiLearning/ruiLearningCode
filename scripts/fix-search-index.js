// 修正本地搜索的索引 search.xml：
// 1. 设置了 permalink 的文章，网址会变成 //xxx.html（浏览器会把它当成别的网站），改回 /xxx.html
// 2. 去掉 XML 不允许的控制字符。否则浏览器解析到这里就停了，后面的文章都搜不到
'use strict';
hexo.extend.filter.register('after_generate', function () {
  const path = (hexo.config.search && hexo.config.search.path) || 'search.xml';
  const stream = hexo.route.get(path);
  if (!stream) return;
  return new Promise((resolve, reject) => {
    const chunks = [];
    stream.on('data', c => chunks.push(Buffer.isBuffer(c) ? c : Buffer.from(c)));
    stream.on('end', () => {
      const xml = Buffer.concat(chunks).toString('utf8')
        .replace(/<url>\/{2,}/g, '<url>/')
        .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F￾￿]/g, '');
      hexo.route.set(path, xml);
      resolve();
    });
    stream.on('error', reject);
  });
});

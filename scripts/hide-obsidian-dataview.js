// 博客渲染时把 Obsidian 的 Dataview 代码块换成一行提示。
// 这些查询只在 Obsidian 里能运行，放到博客上只会显示成一堆代码。原文件不受影响，在 Obsidian 里照常可用。
'use strict';
const NOTE = '> 📊 这里是 Obsidian Dataview 动态内容，只在 Obsidian 里显示。';
const BLOCK = /^([ \t]*)(`{3,}|~{3,})[ \t]*(dataviewjs|dataview)\b[^\n]*\n[\s\S]*?^\1\2[ \t]*$/gm;
hexo.extend.filter.register('before_post_render', function (data) {
  if (data.content && /dataview/.test(data.content)) {
    data.content = data.content.replace(BLOCK, (m, indent) => indent + NOTE);
  }
  return data;
}, 1); // 优先级 1：要赶在 Hexo 把代码块转成高亮 HTML 之前执行

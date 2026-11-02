// 把 Obsidian 的双链 [[...]] 转成博客里的链接，原文件不改，在 Obsidian 里照常可用。
// - [[文章标题]] / [[文件名|显示文字]]  → 指向那篇博客文章
// - [[#标题|显示文字]]                   → 跳到本文对应的小标题
// - 博客里找不到的目标（比如模板笔记）     → 只显示文字，不再显示方括号
// - ![[图片]] 这类嵌入（附件不在博客里）   → 换成一行提示
// 代码块和行内代码里的 [[...]] 不会被改动。
'use strict';
const norm = s => String(s || '').replace(/&[a-z]+;|&#\d+;/gi, ' ').replace(/[^\p{L}\p{N}]+/gu, ' ').trim().toLowerCase();
const splitOnce = (s, sep) => { const i = s.indexOf(sep); return i < 0 ? [s, ''] : [s.slice(0, i), s.slice(i + 1)]; };

function postMap() {
  const map = new Map();
  hexo.model('Post').forEach(p => {
    const url = (hexo.config.root + p.path).replace(/\/{2,}/g, '/');
    const base = String(p.source || '').split('/').pop().replace(/\.md$/i, '');
    for (const k of [p.title, base]) { const n = norm(k); if (n && !map.has(n)) map.set(n, url); }
  });
  return map;
}

hexo.extend.filter.register('after_post_render', function (data) {
  if (!data.content || data.content.indexOf('[[') === -1) return data;
  const posts = postMap();
  const headings = new Map();
  data.content.replace(/<h([1-6])[^>]*\bid="([^"]+)"[^>]*>([\s\S]*?)<\/h\1>/g, (m, lv, id, inner) => {
    const t = norm(inner.replace(/<[^>]+>/g, '')); if (t && !headings.has(t)) headings.set(t, id); return m;
  });
  const parts = data.content.split(/(<pre[\s\S]*?<\/pre>|<code[\s\S]*?<\/code>|<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<[^>]+>)/i);
  for (let i = 0; i < parts.length; i += 2) {
    parts[i] = parts[i].replace(/(!?)\[\[([^\[\]\n]*?)\]\]/g, (m, bang, inner) => {
      if (!inner.trim()) return m;
      if (bang) return '<em class="obsidian-only">（这里是 Obsidian 里的嵌入内容，博客上不显示）</em>';
      let [target, alias] = splitOnce(inner.replace(/\\\|/g, '|'), '|');
      let [page, heading] = splitOnce(target.trim(), '#');
      page = page.trim(); heading = heading.trim().replace(/^\^.*/, '');
      const label = alias.trim() || (page || heading) || target;
      let href = '';
      if (page) href = posts.get(norm(page)) || '';
      else if (heading && headings.has(norm(heading))) href = '#' + headings.get(norm(heading));
      return href ? `<a href="${href}">${label}</a>` : label;
    });
  }
  data.content = parts.join('');
  return data;
});

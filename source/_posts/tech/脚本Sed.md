---
title: Hexo常用运营操作
permalink: Hexo常用运营操作.html
tags:
  - 技术
categories:
  - tech
description: ''
toc: true
date: 2022-03-16 18:20:41
cover:
top_img:
---

```
有若干个文件夹 把所有文件夹里的.md结尾的文件里的permalink: * 替换为permalink: *.html
find /path/to/your/directories -type f -name "*.md" -exec sed -i '' 's/permalink: \([^ ]*\)/permalink: \1.html/g' {} \;

//例子 md文件中的，permalink: 旅行-模版替换为了permalink: 旅行-模版.html，代码如下
find /Users/wz/Documents/Obsidian/ruiLearningCode/source/_posts -type f -name "*.md" -exec sed -i '' 's/permalink: \([^ ]*\)/permalink: \1.html/g' {} \;

```

```
# 进入_post目录
cd source/_post

# 修改文章内容，添加permalink
for file in `ls`; do link=`echo $file|sed -n 's/\.md//p'`; sed -i "" "/title.*/ a\ 
permalink: $link
" $file; done;

# 修改文章的创建时间为Front-matter中的时间
for file in `find . -type f`; do d=`head $file|sed -n 's/^date: //p' |sed -n 's/[- :]//pg' |sed -n 's/\([0-9]\{2\}\)$/\.\1/p'`; touch -t $d $file; done;

# 创建一个2018年1月1日的文件，用于过滤出2018年的文章
touch -t 201801010000 timestamp
# 创建2018文件夹
mkdir 2018
# 将2018年的文章移到2018文件夹下
for file in `find . -type f -newer timestamp`; do mv $file 2018 ; done

# 将timestamp创建时间修改为2017年1月1日，然后参考2018年文章归类方法，这里略

# 完成归类之后删除刚才创建的用于过滤的文件
rm timestamp

# 最后如果想再恢复文章的创建时间，再执行第三步命令
for file in `find . -type f`; do d=`head $file|sed -n 's/^date: //p' |sed -n 's/[- :]//pg' |sed -n 's/\([0-9]\{2\}\)$/\.\1/p'`; touch -t $d $file ; done;

```
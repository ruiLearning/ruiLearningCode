---
title: Hexo+Mongodb+Vercel实现任务清单
permalink: Hexo+Mongodb+Vercel实现任务清单.html
tags:
  - 技术
categories:
  - tech
description: ''
toc: true
date: 2025-09-16 20:20:41
cover: /img/tech.jpg
top_img: /img/tech.jpg
---

# 操作步骤(简版)
1. 原因：发现没办法实时交互，增加实时交互功能。
    - 先建好数据库,数据库mongodb官网:https://cloud.mongodb.com/
    - 然后复制链接 例子：mongodb+srv://ban:`<db_password>`@cluster0.eukfmxs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
      - `ban和db_password`改为新创建的用户
    - 需要配置`0.0.0.0`让所有人都可以访问
2. 在Github新建项目，然后增加api
   - `结构图如`下，`/api/tasks`，需要放到api下Vercel才能识别,访问链接的例子看第三步。
   hexo-todo-api/
   ├─ api/
   │   └─ tasks.js
   ├─ package.json
   └─ README.md
   代码见Code
3. 打开 https://vercel.com/ 
   - `import`导入Github的仓库进行部署，部署成功后，访问地址例子：https://ban-api-puce.vercel.app/api/tasks
   - 确证`mongodb账号密码在Vercel已配`置，如何连接在`Hexo`中配置。
   - 需要设置项目访问MongoDB的账户密码
     - 进入【Settings】->【Environment Variables】，添加环境变量【MONGODB_URI】时，目标字符串中的<password>是否替换成mongodb中的【数据库密码】。
       修改后,重新部署。
4. 检查Hexo里的代码，配置是否正确
   - 连接数据库的db及表
     - const db = client.db(`"test" 数据库名称`);
     - const collection = db.collection(`"todo" 表名`);
   - 增删改查都是在Hexo里实现，js功能，css样式，md页面显示。


截图如下:
{% gallery %}
![screenshot-20250917-112930.png](https://ruilearning-1258294777.cos.ap-beijing.myqcloud.com/20250917115944472.png)
![screenshot-20250917-112930.png](https://ruilearning-1258294777.cos.ap-beijing.myqcloud.com/20250917115944581.png)
![screenshot-20250917-112930.png](https://ruilearning-1258294777.cos.ap-beijing.myqcloud.com/20250917115944598.png)

![Vercel3.png](https://ruilearning-1258294777.cos.ap-beijing.myqcloud.com/20250916151246667.png)

{% endgallery %}

# 代码Code
## GitHub仓库里的tasks.js
```
import { MongoClient, ObjectId } from "mongodb";

const uri = process.env.MONGODB_URI;

let client;
let clientPromise;

if (!global._mongoClientPromise) {
    client = new MongoClient(uri, { useNewUrlParser:true, useUnifiedTopology:true });
    global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export default async function handler(req, res) {
    // CORS
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    if (req.method === "OPTIONS") return res.status(200).end();

    try {
        const client = await clientPromise;
        const db = client.db("test");
        const collection = db.collection("todo");

        if (req.method === "GET") {
            // 查询全部任务
            const tasks = await collection.find({}).toArray();
            return res.status(200).json(tasks);
        }

        else if (req.method === "POST") {
            const { _id, title, checked, deleted, level, parentId, action } = req.body;

            // 真实删除
            if (action === "delete") {
                if (!_id) return res.status(400).json({ error: "Missing _id" });
                await collection.deleteOne({ _id: new ObjectId(_id) });
                return res.status(200).json({ success: true });
            }

            // 更新任务
            if (_id) {
                const filter = { _id: new ObjectId(_id) };
                const update = {};
                if (title) update.title = title;
                if (typeof checked === "boolean") update.checked = checked;
                if (typeof deleted === "boolean") update.deleted = deleted;
                await collection.updateOne(filter, { $set: update });
                return res.status(200).json({ success: true });
            }

            // 新增任务
            if (title) {
                const result = await collection.insertOne({
                    title,
                    checked: false,
                    deleted: false,
                    level: level || 0,
                    parentId: parentId || null
                });
                return res.status(200).json({ success: true, _id: result.insertedId });
            }

            return res.status(400).json({ error: "Invalid request body" });
        }

        else return res.status(405).json({ error: "Method Not Allowed" });

    } catch (err) {
        console.error("API Error:", err);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

```
## Hexo里的js+css+html
我用的主题 themes/butterfly/_config.yml，要在config.yml这里添加到头部，或者每个markdown都写一份(不推荐)。
```
- <link rel="stylesheet" href="/css/tasks.css">
- <script src="/js/tasks.js"></script>
```

task.js
```
<div id="task-container">
  <h3 style="margin-bottom:12px;">我的任务清单</h3>
  <div class="add-task-box">
    <input id="new-task-title" placeholder="输入新任务标题...">
    <button onclick="addTask()">＋</button>
  </div>
  <div id="task-list"></div>
</div>
<script src="tasks.js"></script>
```
task.js
```
const API_URL = "https://ban-api-puce.vercel.app/api/tasks";
let tasks = [];

// 加载任务
async function loadTasks() {
  try {
    const res = await fetch(API_URL);
    tasks = await res.json();
    renderTasks();
  } catch (err) {
    console.error("加载任务失败:", err);
  }
}

// 渲染任务（按根任务分类）
function renderTasks() {
  const container = document.getElementById("task-list");
  if (!container) return;

  const rootTasks = tasks.filter(t => !t.parentId);

  const activeTasks = rootTasks.filter(t => !t.checked && !t.deleted);
  const completedTasks = rootTasks.filter(t => t.checked && !t.deleted);
  const deletedTasks = rootTasks.filter(t => t.deleted);

  container.innerHTML = `
    ${activeTasks.length ? '<h3>未完成</h3>' + renderTree(activeTasks) : ''}
    ${completedTasks.length ? '<h3>已完成</h3>' + renderTree(completedTasks) : ''}
    ${deletedTasks.length ? '<h3>已删除</h3>' + renderTree(deletedTasks) : ''}
  `;
}

// 递归渲染树
function renderTree(list) {
  if (!list || !list.length) return '';

  return `
    <ul>
      ${list.map(task => `
        <li>
          <div class="task-item ${task.deleted ? 'deleted' : ''}">
            <input type="checkbox" ${task.checked ? 'checked' : ''}
                   onchange="toggleTask('${task._id}', this.checked)">
            <input class="task-title" value="${task.title}"
                   onblur="editTask('${task._id}', this.value)">
            <div class="task-actions">
              ${task.deleted
                ? `<button onclick="restoreTask('${task._id}')">↩️</button>`
                : `<button onclick="softDeleteTask('${task._id}')">🗑</button>`}
              <button onclick="realDeleteTask('${task._id}')">❌</button>
              <button onclick="showSubTaskInput('${task._id}')">➕</button>
            </div>
            <div id="subtask-input-${task._id}" style="margin-left:30px;"></div>
          </div>
          ${renderTree(tasks.filter(t => t.parentId === task._id))}
        </li>
      `).join('')}
    </ul>
  `;
}

// 更新本地缓存和 API
async function updateTaskField(id, fields) {
  const task = tasks.find(t => t._id === id);
  if (task) Object.assign(task, fields);
  renderTasks();
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ _id: id, ...fields })
  });
}

function toggleTask(id, checked) { return updateTaskField(id, { checked }); }
function editTask(id, title) { return updateTaskField(id, { title }); }
function softDeleteTask(id) { return updateTaskField(id, { deleted: true }); }
function restoreTask(id) { return updateTaskField(id, { deleted: false }); }

// 真实删除
async function realDeleteTask(id) {
  tasks = tasks.filter(t => t._id !== id);
  renderTasks();
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ _id: id, action: "delete" })
  });
}

// 新增任务
async function addTask() {
  const input = document.getElementById("new-task-title");
  const title = input.value.trim();
  if (!title) return alert("请输入任务标题");

  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, parentId: null, level: 0 })
  });
  const data = await res.json();
  tasks.push({ _id: data._id, title, checked: false, deleted: false, parentId: null, level: 0 });
  input.value = '';
  renderTasks();
}

// 新增子任务
async function addSubTask(parentId) {
  const input = document.getElementById(`new-subtask-${parentId}`);
  const title = input.value.trim();
  if (!title) return alert("请输入子任务标题");

  const parent = tasks.find(t => t._id === parentId);
  const level = parent ? parent.level + 1 : 1;

  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, parentId, level })
  });
  const data = await res.json();

  tasks.push({ _id: data._id, title, checked: false, deleted: false, parentId, level });
  input.value = '';
  renderTasks();
}

// 显示子任务输入框
function showSubTaskInput(parentId) {
  const div = document.getElementById(`subtask-input-${parentId}`);
  if (div.innerHTML.trim()) return;
  div.innerHTML = `
    <input id="new-subtask-${parentId}" placeholder="子任务标题">
    <button onclick="addSubTask('${parentId}')">新增</button>
  `;
}

document.addEventListener("DOMContentLoaded", loadTasks);
```
task.css
```

/* 大背景 */
body {
  font-family: "Helvetica Neue", Arial, sans-serif;
  background: linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%);
  min-height: 100vh;
  margin: 0;
  padding: 20px;
}

/* 容器 */
#task-container {
  max-width: 700px;
  background: rgba(255,255,255,0.95);
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
  margin: 0;      /* 去掉居中 */
  margin-left: 10px; /* 调整靠左 */
}

/* 分类标题 */
.task-category {
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 20px;
  color: #333;
  text-align: left;
}

/* 任务模块 */
.task-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  margin-bottom: 8px;
  border-radius: 12px;
  background: #f0f4f7;
  box-shadow: 0 2px 5px rgba(0,0,0,0.08);
  transition: background 0.2s, transform 0.1s;
  flex-wrap: wrap;
}

/* hover效果 */
.task-item:hover {
  background: #e0ecf5;
  transform: translateY(-1px);
}

/* 子任务缩进 */
.task-item[data-level="0"] { margin-left: 0px; }
.task-item[data-level="1"] { margin-left: 10px; }
.task-item[data-level="2"] { margin-left: 20px; }
.task-item[data-level="3"] { margin-left: 30px; }

/* 圆形勾选框 */
.task-item input[type="checkbox"] {
  width: 20px;
  height: 20px;
  margin-right: 12px;
  border-radius: 50%;
  accent-color: #007aff;
  flex-shrink: 0;
}

/* 任务标题 */
.task-title {
  flex: 1 1 60%;
  border: none;
  background: transparent;
  font-size: 16px;
  outline: none;
  margin-bottom: 4px;
  text-align: left;
}

.task-title:focus {
  background: #fffbe6;
  border-radius: 6px;
  padding: 2px 6px;
}

/* 按钮区域 */
.task-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 4px;
}

.task-actions button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
}

.task-actions button:hover {
  transform: scale(1.1);
}

/* 删除和完成样式 */
.deleted .task-title {
  text-decoration: line-through;
  color: #999;
}

.checked .task-title {
  color: #666;
}

/* 新增任务输入框 */
.add-task-box {
  display: flex;
  margin-bottom: 12px;
  flex-wrap: wrap;
  margin-left: 0; /* 靠左 */
}

.add-task-box input {
  flex: 1 1 70%;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
  outline: none;
  min-width: 150px;
}

.add-task-box input:focus {
  border-color: #007aff;
  box-shadow: 0 0 5px rgba(0, 122, 255, 0.3);
}

.add-task-box button {
  flex: 0 0 auto;
  margin-left: 8px;
  padding: 10px 14px;
  border-radius: 8px;
  border: none;
  background: #007aff;
  color: white;
  font-size: 18px;
  cursor: pointer;
}

.add-task-box button:hover {
  background: #005ecb;
}
ul {
  list-style: none; /* 去掉默认圆点 */
  padding-left: 0;
  margin-left: 0;
}
/* 手机适配 */
@media screen and (max-width: 480px) {
  #task-container {
    padding: 12px;
  }

  .task-title {
    font-size: 14px;
  }

  .add-task-box input {
    font-size: 14px;
  }

  .add-task-box button {
    font-size: 16px;
    padding: 8px 12px;
  }
}
```

# Tips 
1. 如果报错参考之前的文章[Hexo评论Twikoo+Vercel](Hexo评论Twikoo+Vercel)
2. 主要用到下边3个：
   1. Twikoo官网:https://twikoo.js.org/backend.html
   2. Vercel官网:https://vercel.com/
   3. 数据库mongodb官网:https://cloud.mongodb.com/


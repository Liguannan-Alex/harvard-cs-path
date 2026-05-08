# Harvard CS Path

一个可直接本地打开/预览的静态学习路径工具。当前版本已经从导出的构建包恢复为源码工程，核心课程信息集中在 `src/data.js`。

## 目录

- `index.html`：干净入口，已移除导出工具注入脚本。
- `src/app.js`：无框架的 Hash Router 和页面渲染逻辑。
- `src/data.js`：课程、路径、社区、FAQ、核验来源和修正记录。
- `src/styles.css`：页面样式。
- `docs/verification.md`：课程链接、年份、证书/费用边界的核验记录。
- `scripts/check-data.mjs`：数据一致性检查。
- `assets/`：旧导出构建产物，当前入口不再依赖，保留用于对照。

## 使用

```bash
npm run check
npm run dev
```

打开 `http://127.0.0.1:4173/`。

## 维护规则

新增或修改课程时，先改 `src/data.js`，每门课至少保留一个官方来源 URL，然后运行 `npm run check`。

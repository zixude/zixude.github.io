# Long-Term Minimal Blog

这个项目的目标不是依赖某个博客程序，而是把整个博客直接作为一组可长期保存、可直接浏览的静态文件来维护。

## 基本原则

- `html` 是最终展示页，也是最接近编辑单元的内容文件。
- `/app` 只放项目级公共资产，例如字体、共享样式、共享脚本、辅助脚本。
- 每个一级目录都可以视为一个子网站，可以只复用 `/app`，也可以保留自己的目录级脚本。
- 项目必须可以直接部署到 GitHub Pages、Cloudflare Pages 等静态托管，也应尽量兼容本地双击 `html` 浏览。

## 当前约定

- `app/state.js`
  - 在页面加载时补齐基础元信息。
  - 自动注入共享样式 `app/styles.css`。
  - 不负责拼装正文内容。

- `app/nav.js`
  - 渲染站点级分类导航。
  - 用于文章页或分类页底部的全站入口。

- `app/category.js`
  - 渲染分类目录页。
  - 读取页面中定义的 `window.CATEGORY_PAGE` 数据。

- `writing/writingNav.js`、`design/designNav.js`
  - 只保留目录数据。
  - 由 `app/category.js` 统一渲染。

- `essay/essayNav.js`
  - 当前仍承担 `essay` 目录页与部分文章页的目录渲染。
  - 原因是历史页面引用方式不一致，先保持兼容，后续再逐步统一。

## 内容单元

目前项目可以接受的最小单元仍然是四类：

- 篇：单个 `html`
- 落地页：例如 `index.html`
- 目录：例如 `writingNav.js`
- 规则：目录级或项目级脚本

如果一个目录不需要复杂规则，可以只保留文章页和目录数据。

## 更新目录

`writing` 和 `design` 目录的列表数据由本地脚本生成：

- macOS: `app/update_nav.command`
- Windows: `app/update_nav.bat`

脚本会扫描目录下的 `html` 文件名，并替换对应 `*Nav.js` 中 `NAV_DATA_START` 与 `NAV_DATA_END` 之间的数据块。

## 维护建议

- 优先使用标准、长期兼容的 HTML / CSS / 原生 JavaScript。
- 保持相对路径，减少目录移动时的破坏。
- 公共层只解决稳定重复的问题，不替代页面本身。
- 如果未来需要新增分类，优先沿用现有目录契约，再决定是否需要更复杂的目录级脚本。

# chinese-garden — 前端项目

中华古典园林艺术展示网站的前端项目（Vue 2 + Element UI）。

> 主项目文档见 [根目录 README](../README.md)

---

## 开发命令

```bash
npm install       # 安装依赖
npm run serve     # 启动开发服务器（localhost:8080）
npm run build     # 生产构建 → dist/
```

## 技术详情

### 路由配置

| 路径 | 组件 | 说明 |
|------|------|------|
| `/` | Home.vue | 首页（含轮播、介绍、分类 Tab） |
| `/Huangjia` | Huangjia.vue | 皇家园林 |
| `/Sijia` | Sijia.vue | 私家园林 |
| `/Simiao` | Simiao.vue | 寺庙园林 |
| `/Xq?id=N` | Xq.vue | 园林详情（N = 1~9） |

所有路由均使用 **懒加载**（`() => import(...)`），首屏仅加载 Home。

### 全局变量

在 `main.js` 中注册：

```js
Vue.prototype.tubase = '/vuetu/'  // 图片资源基础路径
```

### 自定义指令

- `v-img-lazy` — 图片懒加载，使用 IntersectionObserver，进入视口前 200px 加载

### 工具函数

位于 `src/utils/index.js`：

- `throttle(fn, wait)` — 节流
- `debounce(fn, wait)` — 防抖
- `preloadImage(src)` / `preloadImages(list)` — 图片预加载

### 样式系统

- 全局 CSS 变量定义于 `src/assets/css/quanju.css`
- 主题色系：水墨黑白灰（`--color-ink` / `--color-mist` / `--color-rice` 等）
- 使用 Google Fonts 镜像（font.font.im）加载中文字体

### 代理配置

开发环境下，`/vuetu/` 路径自动代理到本地 80 端口图片服务器（见 `vue.config.js`）。

## 依赖

- **vue** 2.6.11
- **vue-router** 3.2.0
- **vuex** 3.4.0
- **element-ui** 2.15.2
- **sass** + **sass-loader**（替代 node-sass）

## 构建产物

```bash
npm run build
# 输出：dist/
# 包含：index.html + js/ + css/
```

将 `dist/` 部署到任意 Web 服务器即可运行。

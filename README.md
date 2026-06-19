# 中华古典园林 · Chinese Classical Garden

<p align="center">
  <img src="https://img.shields.io/badge/version-2.0.0-1a1a1a?style=flat-square" alt="version 2.0.0"/>
  <img src="https://img.shields.io/badge/vue-2.6.11-4fc08d?style=flat-square&logo=vue.js" alt="Vue 2.6.11"/>
  <img src="https://img.shields.io/badge/Element%20UI-2.15.2-409eff?style=flat-square&logo=element" alt="Element UI 2.15.2"/>
  <img src="https://img.shields.io/badge/license-MIT-8a8a8a?style=flat-square" alt="MIT License"/>
</p>

一个以 **中国古典园林艺术** 为主题的品牌形象展示网站。系统介绍了皇家园林、私家园林、寺庙园林三大类别，涵盖颐和园、拙政园、寒山寺等九大著名园林。

> 水墨朦胧 · 古典韵味 · 沉浸式浏览体验

---

## 目录

- [预览](#预览)
- [版本历史](#版本历史)
- [技术栈](#技术栈)
- [项目结构](#项目结构)
- [快速开始](#快速开始)
- [页面导览](#页面导览)
- [功能特性](#功能特性)
- [部署说明](#部署说明)
- [许可证](#许可证)

---

## 预览

| 页面 | 说明 |
|------|------|
| **首页** `/` | 轮播 Banner + 园林介绍 + 分类 Tab 切换 |
| **皇家园林** `/Huangjia` | 颐和园、承德避暑山庄、北海公园 |
| **私家园林** `/Sijia` | 沧浪亭、拙政园、留园 |
| **寺庙园林** `/Simiao` | 寒山寺、武侯祠、灵隐寺 |
| **详情页** `/Xq?id=N` | 每座园林的图文详细介绍 |

## 版本历史

| 版本 | 标签 | 日期 | 说明 |
|------|------|------|------|
| **v2.0.0** | `master` | 2026-06 | 性能优化 + 水墨风格美术焕新 |
| **v1.0.0** | `v1` | - | 原始版本（暖色古典风格） |

### v2.0.0 更新内容

#### 性能优化
- **路由懒加载** — 首屏仅加载 Home 页面，其余按需分块
- **图片懒加载** — 自定义 `v-img-lazy` 指令（IntersectionObserver，提前 200px 预加载）
- **滚动事件节流** — 100ms 节流，避免高频触发
- **Webpack 代码分割** — Element UI 独立打包
- **资源代理** — 本地图片走 devServer proxy，避免跨域
- **移除未使用依赖** — 移除 `vue-baidu-map`
- **关闭生产 SourceMap** — 减小构建体积

#### 美术焕新
- **配色系统** — 全局 CSS 变量管理，水墨黑白灰冷色调
- **导航栏** — sticky 吸顶 + 滚动缩高 + 毛玻璃效果 + 墨色渐变线
- **轮播图** — Ken Burns 缓慢推近动画
- **英雄区** — 中英文大标题 + 装饰花瓣 + 渐变描边
- **卡片布局** — 印章序号 + 元信息 + 装饰横线 + 探园按钮
- **详情页** — 面包屑导航 + 图片画廊 + 缩略图
- **Footer** — 深色渐变 + SVG 波形分隔
- **全局滚动条** — 水墨风格自定义滚动条
- **过渡动画** — 路由 fade 切换 + hover 微动效

## 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| [Vue](https://vuejs.org/) | 2.6.11 | 前端框架 |
| [Vue Router](https://router.vuejs.org/) | 3.2.0 | 路由管理 |
| [Vuex](https://vuex.vuejs.org/) | 3.4.0 | 状态管理 |
| [Element UI](https://element.eleme.io/) | 2.15.2 | UI 组件库 |
| [Sass/SCSS](https://sass-lang.com/) | - | 样式预处理 |
| [Vue CLI](https://cli.vuejs.org/) | 4.5 | 构建工具 |

### 字体
- **ZCOOL XiaoWei**（站酷小薇） — Google Fonts 中文 Web 字体
- **Ma Shan Zheng**（马善政毛笔体） — 毛笔书法风格
- 后备：LiSu / STLiti / KaiTi / 微软雅黑

## 项目结构

```
vue1/
├── vuetu/                       # 图片资源（Banner / 背景 / 园林照片）
│   ├── banner/                  # 首页轮播图
│   ├── bg/                      # 背景图
│   ├── huangjia/               # 皇家园林
│   ├── sijia/                   # 私家园林
│   ├── simiao/                 # 寺庙园林
│   └── tab/                    # 分类 Tab 图
└── vueweb/                     # 主项目
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── assets/
    │   │   ├── css/
    │   │   │   ├── quanju.css    # 全局样式 + CSS 变量
    │   │   │   └── animate.css   # 动画库
    │   ├── directives/
    │   │   └── img-lazy.js       # 图片懒加载指令
    │   ├── plugins/
    │   │   └── element.js        # Element UI 按需加载
    │   ├── router/
    │   │   └── index.js          # 路由配置（懒加载）
    │   ├── store/
    │   │   └── index.js          # Vuex 状态管理
    │   ├── utils/
    │   │   └── index.js          # 工具函数（节流/防抖/预加载）
    │   ├── views/
    │   │   ├── Home.vue          # 首页
    │   │   ├── Huangjia.vue      # 皇家园林
    │   │   ├── Sijia.vue         # 私家园林
    │   │   ├── Simiao.vue        # 寺庙园林
    │   │   └── Xq.vue            # 详情页
    │   ├── App.vue               # 根组件（导航 + Footer）
    │   └── main.js               # 入口
    ├── vue.config.js             # Webpack / 代理配置
    ├── package.json
    └── README.md
```

## 快速开始

### 环境要求
- Node.js >= 12
- npm >= 6

### 安装与运行

```bash
# 1. 进入项目目录
cd vueweb

# 2. 安装依赖
npm install

# 3. 启动开发服务器（默认 http://localhost:8080）
npm run serve

# 4. 生产构建
npm run build
```

### 图片资源部署

图片资源位于 `vuetu/` 目录，需要部署到 HTTP 服务器：

```bash
# 在 vuetu 目录启动静态服务器（端口 80）
cd vuetu
npx http-server -p 80 -c-1
```

或使用 `vue.config.js` 中的 devServer proxy 自动代理（开发模式已配置）。

## 页面导览

| 页面 | 路由 | 园林 |
|------|------|------|
| 首页 | `/` | 总览 + 分类引导 |
| 皇家园林 | `/Huangjia` | 颐和园 · 避暑山庄 · 北海公园 |
| 私家园林 | `/Sijia` | 沧浪亭 · 拙政园 · 留园 |
| 寺庙园林 | `/Simiao` | 寒山寺 · 武侯祠 · 灵隐寺 |
| 详情页 | `/Xq?id=1~9` | 每座园林的完整介绍 |

## 功能特性

- 响应式设计，适配桌面和移动端
- 图片懒加载，提升首屏加载速度
- 平滑滚动动画
- 轮播图 Ken Burns 效果
- 分类 Tab 内容切换
- 园林详情图文展示
- 百度地图一键导航
- 回到顶部按钮
- 弹性布局，适配多分辨率

## 部署说明

将 `vueweb/dist/` 目录部署到 Web 服务器即可。

```bash
# 构建产物
cd vueweb
npm run build
# 输出目录：vueweb/dist/
```

如需将图片资源部署到 CDN，修改 `src/main.js` 中的 `Vue.prototype.tubase` 路径。

---

## 许可证

[MIT License](LICENSE)

Copyright © 2020-2026 **Hermitweb**. All rights reserved.

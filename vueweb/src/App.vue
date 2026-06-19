<template>
  <div id="app">
    <!-- 回到顶部 -->
    <el-backtop :visibility-height="200">
      <div class="backtop-inner">
        <i class="el-icon-s-promotion"></i>
      </div>
    </el-backtop>

    <div class="wrap">
      <!-- 顶部导航 -->
      <header class="headbox" :class="{ 'is-scrolled': isScrolled }">
        <div class="header">
          <router-link to="/" class="logo">
            <img src="@/assets/images/logo.png" alt="logo" />
            <div class="logo-text">
              <div class="logo-cn">中华园林</div>
              <div class="logo-en">CHINESE GARDEN</div>
            </div>
          </router-link>

          <nav class="nav" id="list">
            <router-link
              v-for="item in navList"
              :key="item.path"
              :to="item.path"
              :class="['nav-item', { active: $route.path === item.path }]"
            >
              <span class="nav-text">{{ item.name }}</span>
              <span class="nav-underline"></span>
            </router-link>
          </nav>

          <div class="search-box">
            <el-input
              v-model="keyword"
              placeholder="搜索园林"
              prefix-icon="el-icon-search"
              clearable
              @keyup.enter.native="handleSearch"
            />
          </div>
        </div>
      </header>

      <!-- 内容展示区 -->
      <main class="main-content">
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </main>

      <!-- 底部 -->
      <footer class="footer">
        <div class="footer-wave"></div>
        <div class="footerbox">
          <div class="footer-left">
            <div class="footer-title">中华古典园林艺术</div>
            <div class="footer-sub">愿为名园添胜景 · 一花一木见乾坤</div>
            <div class="footer-meta">
              <a href="#">关于我们</a>
              <span class="divider">|</span>
              <a href="#">网站动态</a>
              <span class="divider">|</span>
              <a href="#">联系我们</a>
            </div>
            <div class="footer-copyright">
              Copyright © 2020 园林人网 版权所有　京ICP备xxxxxxx号
            </div>
          </div>
          <div class="footer-right">
            <img src="@/assets/images/logo.png" alt="logo" />
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import { throttle } from '@/utils'

export default {
  data() {
    return {
      keyword: '',
      isScrolled: false,
      navList: [
        { path: '/', name: '首页' },
        { path: '/Huangjia', name: '皇家园林' },
        { path: '/Sijia', name: '私家园林' },
        { path: '/Simiao', name: '寺庙园林' }
      ]
    }
  },
  methods: {
    handleScroll: throttle(function () {
      this.isScrolled = window.scrollY > 20
    }, 100),
    handleSearch() {
      if (!this.keyword.trim()) return
      this.$message.info(`搜索：${this.keyword}`)
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style>
.backtop-inner {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-ink);
  color: var(--color-rice-light);
  font-size: 22px;
  border-radius: 50%;
  box-shadow: var(--shadow-md);
}

.el-backtop {
  border-radius: 50% !important;
  box-shadow: var(--shadow-md) !important;
  background: transparent !important;
}

.wrap {
  background: var(--color-bg);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* ============= Header ============= */
.headbox {
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 90px;
  background: rgba(245, 242, 237, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-line);
  transition: all 0.3s ease;
}
.headbox.is-scrolled {
  height: 70px;
  box-shadow: var(--shadow-sm);
  background: rgba(245, 242, 237, 0.98);
}
.headbox::after {
  content: "";
  display: block;
  height: 2px;
  background: linear-gradient(to right,
    transparent 0%,
    var(--color-mist) 20%,
    var(--color-ink-light) 50%,
    var(--color-mist) 80%,
    transparent 100%);
  opacity: 0.4;
}

.header {
  width: min(1200px, 92%);
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  height: 70%;
}
.logo img {
  height: 100%;
  display: block;
  transition: transform 0.4s ease;
}
.logo:hover img { transform: rotate(-8deg) scale(1.05); }
.logo-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.1;
}
.logo-cn {
  font-size: 22px;
  font-family: var(--font-zhongguo);
  color: var(--color-ink);
  letter-spacing: 0.1em;
  font-weight: 600;
}
.logo-en {
  font-size: 9px;
  color: var(--color-ink-light);
  letter-spacing: 0.2em;
  margin-top: 2px;
  font-family: Georgia, serif;
}

/* ============= Nav ============= */
.nav {
  display: flex;
  height: 100%;
  align-items: center;
  gap: 4px;
}
.nav-item {
  position: relative;
  padding: 0 18px;
  height: 100%;
  display: flex;
  align-items: center;
  color: var(--color-text);
  font-size: 18px;
  font-family: var(--font-zhongguo);
  letter-spacing: 0.15em;
  transition: color 0.3s ease;
}
.nav-item .nav-text {
  position: relative;
  z-index: 1;
}
.nav-item:hover { color: var(--color-ink); }
.nav-item.active { color: var(--color-ink); font-weight: 600; }
.nav-underline {
  position: absolute;
  left: 50%;
  bottom: 18px;
  width: 0;
  height: 2px;
  background: var(--color-ink);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}
.nav-item:hover .nav-underline,
.nav-item.active .nav-underline { width: 60%; }

/* ============= Search ============= */
.search-box {
  width: 220px;
}
.search-box .el-input__inner {
  border: 1px solid var(--color-line) !important;
  border-radius: 20px !important;
  background: rgba(255, 255, 255, 0.6) !important;
  height: 38px !important;
  font-family: var(--font-zhongguo) !important;
  transition: var(--transition) !important;
}
.search-box .el-input__inner:hover {
  border-color: var(--color-ink-light) !important;
  background: #fff !important;
}
.search-box .el-input__inner:focus {
  border-color: var(--color-ink) !important;
  box-shadow: 0 0 0 3px rgba(26, 26, 26, 0.08) !important;
}

/* ============= Main ============= */
.main-content {
  flex: 1;
  width: 100%;
}

/* ============= Footer ============= */
.footer {
  position: relative;
  background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%);
  color: #b8b4ac;
  margin-top: 80px;
  padding: 60px 0 30px;
  font-family: var(--font-zhongguo);
}
.footer-wave {
  position: absolute;
  top: -1px;
  left: 0;
  width: 100%;
  height: 50px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 50' preserveAspectRatio='none'%3E%3Cpath d='M0,30 C300,50 600,10 900,30 C1050,40 1150,25 1200,30 L1200,0 L0,0 Z' fill='%23f5f2ed'/%3E%3C/svg%3E");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.footerbox {
  width: min(1200px, 92%);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  position: relative;
  z-index: 1;
}
.footer-left {
  flex: 1;
  text-align: left;
}
.footer-title {
  font-size: 28px;
  color: #f0f0e8;
  margin-bottom: 8px;
  letter-spacing: 0.15em;
}
.footer-sub {
  font-size: 14px;
  color: #8a8680;
  margin-bottom: 18px;
  letter-spacing: 0.1em;
}
.footer-meta {
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 14px;
  margin-bottom: 14px;
}
.footer-meta a {
  color: #b8b4ac;
  transition: color 0.3s ease;
}
.footer-meta a:hover { color: #e0dcd4; }
.footer-meta .divider { color: #6a6660; }
.footer-copyright {
  font-size: 12px;
  color: #6a6660;
  letter-spacing: 0.05em;
}
.footer-right img {
  height: 90px;
  width: 90px;
  object-fit: contain;
  opacity: 0.85;
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
  transition: transform 0.5s ease;
}
.footer-right img:hover {
  transform: rotate(360deg) scale(1.05);
}

@media (max-width: 900px) {
  .header { flex-wrap: wrap; height: auto; padding: 12px 0; }
  .search-box { display: none; }
  .nav-item { padding: 0 10px; font-size: 15px; }
  .logo-en { display: none; }
}
</style>

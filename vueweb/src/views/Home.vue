<template>
  <div class="home-content">
    <!-- 轮播图 -->
    <section class="banner">
      <el-carousel :interval="5000" height="560px" arrow="always" indicator-position="outside">
        <el-carousel-item v-for="(value, index) in lunbo" :key="index">
          <div class="banner-slide">
            <img
              v-img-lazy="tubase + 'banner/' + value"
              :data-src="tubase + 'banner/' + value"
              :alt="'banner-' + (index + 1)"
            />
            <div class="banner-mask"></div>
            <div class="banner-text">
              <div class="banner-title">中华古典园林</div>
              <div class="banner-sub">世界园林之母 · 千古文人雅集</div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </section>

    <!-- 介绍区 -->
    <section class="jieshao" :style="'background-image:url(' + tubase + head_bg + ');'">
      <div class="jieshao-overlay"></div>
      <div class="jieshao-content">
        <div class="jieshao-badge">缘起</div>
        <h1 class="jieshao-title">
          <span class="title-cn">{{ jieshao.title }}</span>
          <span class="title-en">CHINESE CLASSICAL GARDEN</span>
        </h1>
        <div class="jieshao-divider">
          <span></span><span class="divider-dot"></span><span></span>
        </div>
        <div class="jieshao-text">
          <p class="lead">{{ jieshao.jian }}</p>
          <p class="content">{{ jieshao.content }}</p>
        </div>
      </div>
    </section>

    <!-- 分类区 -->
    <section class="leibie" :style="'background-image:url(' + tubase + jieshao_bg + ');'">
      <div class="leibie-overlay"></div>
      <div class="leibie-content">
        <div class="leibie-header">
          <div class="leibie-deco">❀</div>
          <h2 class="leibie-title">
            园林分类
            <span class="leibie-en">GARDEN CATEGORIES</span>
          </h2>
        </div>

        <el-tabs
          v-model="activeName"
          type="card"
          @tab-click="handleClick"
          class="leibtab"
        >
          <el-tab-pane v-for="item in categories" :key="item.name" :label="item.title" :name="item.name">
            <div class="tab-body">
              <div
                :class="['tab-text', 'animated', show ? 'fadeInLeft' : '']"
                v-html="item.content"
              ></div>
              <div v-if="item.image" class="tab-image">
                <el-carousel
                  direction="vertical"
                  :autoplay="true"
                  :interval="3500"
                  height="400px"
                >
                  <el-carousel-item
                    v-for="(img, idx) in item.image"
                    :key="idx"
                  >
                    <img
                      v-img-lazy="tubase + img"
                      :data-src="tubase + img"
                      :alt="item.title"
                    />
                  </el-carousel-item>
                </el-carousel>
                <div class="tab-image-label">{{ item.label }}</div>
              </div>
              <div v-else class="tab-image">
                <img
                  v-img-lazy="tubase + item.imageSingle"
                  :data-src="tubase + item.imageSingle"
                  :alt="item.title"
                />
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'first',
      show: false,
      lunbo: [
        'banner(1).jpg',
        'banner(2).jpg',
        'banner(3).jpg',
        'banner(4).jpg',
        'banner(5).jpg',
        'banner(6).jpg',
        'banner(7).jpg',
        'banner(8).jpg'
      ],
      head_bg: ['bg/head_bg.jpg'],
      jieshao_bg: ['bg/jieshao_bg.jpg'],
      jieshao: {
        title: '中国古典园林',
        jian: '中国古典园林是人类文明的重要遗产，被举世公认为世界园林之母。',
        content:
          '我国有四大名园，分别是苏州的拙政园、留园、北京的颐和园、承德的避暑山庄，而拙政园无意是中国私家花园的典型代表了。拙政园被称为中国园林之母，可以说，拙政园不仅是苏州的骄傲，而且是中国的骄傲，被列为了世界文化遗产。'
      },
      categories: [
        {
          name: 'first',
          title: '园林类别',
          label: '江南烟雨',
          content: `<p>我国的园林艺术，如果从殷、周时代囿的出现算起，到现在为止已有三千多年的历史，是世界园林艺术起源最早的国家之一， 在世界园林史上占有极重要的位置，并具有极其高超的艺术水平和独特的民族风格。</p><p>园林是人们为了游览娱乐的方便，用自己的双手创造风景的一种艺术。由于各民族、各地区人们对风景的不同理解和偏爱，也就出现了不同风格的园林。</p><p>现存的中国古代园林，一般可以分为皇家园林、私家园林、寺庙园林三种种基本类型。</p>`,
          imageSingle: 'tab/tab(1).jpg'
        },
        {
          name: 'second',
          title: '皇家园林',
          label: '皇家园林',
          content: `
            <p>皇家园林，在古籍里面称之为"苑"、"囿（yòu）"、"宫苑"、"园囿"、"御苑"，为中国园林的基本类型之一。</p>
            <p>中国自奴隶社会到封建社会这一阶段，连续几千年的漫长历史时期，帝王君临天下，至高无上，皇权是绝对的权威。像古代西方那样震慑一切的神权，在中国相对皇权而言始终是次要的、从属的地位。与此相适应的，一整套突出帝王至上、皇权至尊的礼法制度也必然渗透到与皇家有关的一切政治仪典、起居规则、生活环境之中，表现为所谓皇家气派。</p>
            <p>园林作为皇家生活环境的一个重要组成部分，形成了有别于其他园林类型的皇家园林。</p>
            <p>现存代表有承德的避暑山庄、北京的颐和园、北京北海公园等</p>`,
          image: ['tab/tab(2).jpg', 'tab/tab(3).jpg', 'tab/tab(4).jpg']
        },
        {
          name: 'third',
          title: '私家园林',
          label: '私家园林',
          content: `
            <p>中国古代园林，除皇家园林外，还有一类属于王公、贵族、地主、富商、士大夫等私人所有的园林，称为私家园林。</p>
            <p>古籍里称之为园、园亭、园墅、池馆、山池、山庄、别墅、别业等。规模较小，一般只有几亩至十几亩，小者仅一亩半亩而已；大多以水面为中心，四周散布建筑，构成一个个景点或几个景点；以修身养性，闲适自娱为园林主要功能；园主多是文人学士出身，能诗会画，清高风雅，淡素脱俗。私家园林集中在南京、苏州、无锡等地。</p>
            <p>现代保存下来的园林大多属于明清时代，这些园林充分表现了古代传统园林建筑的独特风格和高超的造园艺术。</p>`,
          image: ['tab/tab(5).jpg', 'tab/tab(6).jpg', 'tab/tab(7).jpg']
        },
        {
          name: 'fourth',
          title: '寺庙园林',
          label: '寺庙园林',
          content: `
            <p>寺庙园林，指佛寺、道观、历史名人纪念性祠庙的园林，为中国园林的基本类型之一。</p>
            <p>寺庙园林狭者仅方丈之地，广者则泛指整个宗教圣地，其实际范围包括寺观周围的自然环境，是寺庙建筑、宗教景物、人工山水和天然山水的综合体。一些著名的大型寺庙园林，往往历经成百上千年的持续开发，积淀着宗教史迹与名人历史故事，题刻下历代文化雅士的摩崖碑刻和楹联诗文，使寺庙园林蕴含着丰厚的历史和文化游赏价值。</p>`,
          image: ['tab/tab(8).jpg', 'tab/tab(9).jpg', 'tab/tab(10).jpg']
        }
      ]
    }
  },
  methods: {
    handleClick(tab, event) {
      this.show = true
    },
    scroll() {
      const height = window.scrollY
      if (height >= 500) this.show = true
    }
  },
  created() {
    window.addEventListener('scroll', this.scroll, { passive: true })
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scroll)
  }
}
</script>

<style>
/* ============== Banner ============== */
.banner {
  position: relative;
  overflow: hidden;
  background: #000;
}
.banner-slide {
  position: relative;
  width: 100%;
  height: 100%;
}
.banner-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transform: scale(1.05);
  animation: kenburns 12s ease-in-out infinite alternate;
}
@keyframes kenburns {
  from { transform: scale(1.05) translate(0, 0); }
  to { transform: scale(1.15) translate(-2%, -2%); }
}
.banner-mask {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.7) 100%);
}
.banner-text {
  position: absolute;
  left: 50%;
  bottom: 80px;
  transform: translateX(-50%);
  text-align: center;
  color: #fff;
  z-index: 2;
  text-shadow: 0 2px 12px rgba(0,0,0,0.6);
}
.banner-title {
  font-size: 60px;
  font-family: var(--font-zhongguo);
  letter-spacing: 0.3em;
  margin-bottom: 12px;
  animation: slideUp 1s ease;
}
.banner-sub {
  font-size: 18px;
  letter-spacing: 0.4em;
  color: #f0d99a;
  animation: slideUp 1s 0.2s ease both;
}
@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.el-carousel__arrow {
  background: rgba(0,0,0,0.4) !important;
  border: 1px solid rgba(255,255,255,0.3) !important;
}
.el-carousel__arrow:hover {
  background: var(--color-ink-medium) !important;
  border-color: var(--color-ink-medium) !important;
}
.el-carousel__indicators--outside {
  margin-top: 20px !important;
}
.el-carousel__button {
  background: var(--color-ink-light) !important;
  width: 30px !important;
  height: 4px !important;
  border-radius: 2px !important;
  opacity: 0.5;
}
.el-carousel__indicator.is-active .el-carousel__button {
  background: var(--color-ink) !important;
  opacity: 1;
  width: 50px !important;
}

/* ============== 介绍区 ============== */
.jieshao {
  position: relative;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 100px 0;
}
.jieshao-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg,
    rgba(245, 242, 237, 0.85) 0%,
    rgba(232, 228, 220, 0.92) 100%);
}
.jieshao-content {
  position: relative;
  z-index: 1;
  width: min(1100px, 92%);
  margin: 0 auto;
  text-align: center;
  font-family: var(--font-zhongguo);
}
.jieshao-badge {
  display: inline-block;
  background: var(--color-ink);
  color: var(--color-rice-light);
  font-size: 14px;
  letter-spacing: 0.4em;
  padding: 6px 20px;
  border-radius: 2px;
  margin-bottom: 30px;
}
.jieshao-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
}
.jieshao-title .title-cn {
  font-size: 56px;
  color: var(--color-ink);
  letter-spacing: 0.2em;
  font-weight: 600;
}
.jieshao-title .title-en {
  font-size: 13px;
  color: var(--color-ink-light);
  letter-spacing: 0.3em;
  font-family: Georgia, serif;
}
.jieshao-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin: 30px 0;
}
.jieshao-divider span {
  display: inline-block;
  width: 80px;
  height: 1px;
  background: var(--color-mist);
}
.jieshao-divider .divider-dot {
  width: 8px;
  height: 8px;
  background: var(--color-ink);
}
.jieshao-text {
  max-width: 800px;
  margin: 0 auto;
  text-align: justify;
  color: var(--color-text);
  font-size: 18px;
  line-height: 2;
}
.jieshao-text .lead {
  font-size: 22px;
  color: var(--color-ink);
  font-weight: 500;
  margin-bottom: 20px;
  letter-spacing: 0.08em;
  text-indent: 0;
  text-align: center;
}
.jieshao-text .content {
  text-indent: 2em;
}

/* ============== 分类区 ============== */
.leibie {
  position: relative;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 100px 0;
}
.leibie-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg,
    rgba(245, 242, 237, 0.9) 0%,
    rgba(232, 228, 220, 0.92) 100%);
}
.leibie-content {
  position: relative;
  z-index: 1;
  width: min(1200px, 92%);
  margin: 0 auto;
}
.leibie-header {
  text-align: center;
  margin-bottom: 50px;
  font-family: var(--font-zhongguo);
}
.leibie-deco {
  color: var(--color-ink);
  font-size: 24px;
  margin-bottom: 8px;
}
.leibie-title {
  font-size: 42px;
  color: var(--color-ink);
  letter-spacing: 0.2em;
  font-weight: 600;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.leibie-title .leibie-en {
  font-size: 12px;
  color: var(--color-ink-light);
  letter-spacing: 0.3em;
  font-family: Georgia, serif;
  font-weight: normal;
}

.leibtab {
  background: rgba(255, 255, 255, 0.4);
  border-radius: 8px;
  padding: 30px;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-line);
  backdrop-filter: blur(8px);
}
.tab-body {
  display: flex;
  gap: 30px;
  align-items: stretch;
  min-height: 460px;
  font-family: var(--font-zhongguo);
}
.tab-text {
  flex: 0 0 55%;
  font-size: 17px;
  line-height: 2.1;
  color: var(--color-text);
  letter-spacing: 0.05em;
  text-align: justify;
  padding: 10px;
  text-indent: 2em;
}
.tab-text p {
  margin-bottom: 14px;
}
.tab-image {
  flex: 1;
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
}
.tab-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s ease;
}
.tab-image:hover img { transform: scale(1.05); }
.tab-image-label {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(26, 26, 26, 0.7);
  color: #f5ebd6;
  padding: 8px 24px;
  font-size: 18px;
  letter-spacing: 0.3em;
  font-family: var(--font-zhongguo);
  border-radius: 2px;
  backdrop-filter: blur(4px);
  z-index: 2;
}

/* Tab 样式覆盖 */
.el-tabs__nav-wrap::after { background: var(--color-line) !important; }
.el-tabs__item {
  font-family: var(--font-zhongguo) !important;
  font-size: 20px !important;
  font-weight: 500 !important;
  height: 60px !important;
  line-height: 60px !important;
  color: var(--color-text) !important;
  letter-spacing: 0.15em !important;
  padding: 0 24px !important;
  transition: all 0.3s ease !important;
}
.el-tabs__item.is-active {
  color: var(--color-ink) !important;
  border-color: var(--color-line) !important;
  background: rgba(26, 26, 26, 0.04) !important;
}
.el-tabs__item:hover {
  color: var(--color-ink) !important;
}
.el-tabs--card > .el-tabs__header {
  border-bottom: 1px solid var(--color-line) !important;
  margin-bottom: 24px !important;
}
.el-tabs--card > .el-tabs__header .el-tabs__item {
  border: 1px solid var(--color-line) !important;
  border-radius: 4px 4px 0 0 !important;
  margin-right: 4px !important;
}
.el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
  border-bottom-color: var(--color-bg) !important;
}

@media (max-width: 768px) {
  .banner-title { font-size: 36px; letter-spacing: 0.1em; }
  .banner-sub { font-size: 13px; letter-spacing: 0.2em; }
  .jieshao-title .title-cn { font-size: 36px; }
  .jieshao-text { font-size: 15px; }
  .tab-body { flex-direction: column; min-height: auto; }
  .tab-text { flex: 1; }
}
</style>

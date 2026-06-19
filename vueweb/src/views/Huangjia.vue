<template>
  <div class="hjlist">
    <!-- 顶部 hero -->
    <section
      class="hjlist_hero"
      :style="'background-image:url(' + tubase + 'huangjia/hj_04.jpg)'"
    >
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="hero-deco">❀</div>
        <h1 class="hero-title">
          <span class="title-main">皇家园林</span>
          <span class="title-en">IMPERIAL GARDEN</span>
        </h1>
        <div class="hero-line"></div>
        <div class="hero-text" v-html="huangjia"></div>
      </div>
    </section>

    <!-- 园林列表 -->
    <section
      v-for="(item, idx) in gardens"
      :key="item.id"
      :class="['hj_section', `bg-${idx % 3}`]"
    >
      <div
        :class="['hj_card', item.reverse ? 'reverse' : '']"
        :style="{ '--delay': idx * 0.1 + 's' }"
      >
        <div
          :class="['hj_card_text', 'animated', visible[idx] ? 'fadeInLeft' : '']"
        >
          <div class="hj_card_num">No.{{ String(idx + 1).padStart(2, '0') }}</div>
          <h2 class="hj_card_title">
            <span>{{ item.title }}</span>
            <span class="hj_card_seal">{{ item.seal }}</span>
          </h2>
          <div class="hj_card_meta">
            <span><i class="el-icon-location-information"></i> {{ item.address }}</span>
            <span><i class="el-icon-time"></i> {{ item.era }}</span>
          </div>
          <div class="hj_card_divider"></div>
          <div class="hj_card_content" v-html="item.content"></div>
          <router-link :to="`/Xq?id=${item.id}`" class="hj_card_more">
            探园详览 <i class="el-icon-arrow-right"></i>
          </router-link>
        </div>
        <div
          :class="['hj_card_image', 'animated', visible[idx] ? 'fadeInRight' : '']"
        >
          <el-carousel
            height="520px"
            direction="vertical"
            :autoplay="true"
            :interval="4000"
            indicator-position="none"
          >
            <el-carousel-item
              v-for="(img, i) in item.image"
              :key="i"
            >
              <img
                v-img-lazy="tubase + img"
                :data-src="tubase + img"
                :alt="item.title"
              />
            </el-carousel-item>
          </el-carousel>
          <div class="hj_card_image_mark">御 · 园</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: [false, false, false],
      huangjia: `
        <p>皇家园林，在古籍里面称之为"苑"、"囿（yòu）"、"宫苑"、"园囿"、"御苑"，为中国园林的三种基本类型之一。</p>
        <p>中国自奴隶社会到封建社会这一阶段，连续几千年的漫长历史时期，帝王君临天下，至高无上，皇权是绝对的权威。像古代西方那样震慑一切的神权，在中国相对皇权而言始终是次要的、从属的地位。</p>
        <p>园林作为皇家生活环境的一个重要组成部分，形成了有别于其他园林类型的皇家园林。</p>
        <p>其中作为代表的有北京颐和园，承德避暑山庄，北京北海公园等。</p>
      `,
      gardens: [
        {
          id: 1,
          title: '颐和园',
          seal: '颐',
          address: '北京市海淀区',
          era: '清代乾隆年间',
          content: `颐和园，坐落在北京市海淀区新建宫门路19号，距城区十五公里。是一座巨大的皇家园林和清朝的行宫。颐和园素以人工建筑与自然山水巧妙结合的造园手法著称于世，是中国园林艺术顶峰时期的代表。与承德避暑山庄，拙政园，留园并称为中国四大名园。`,
          image: [
            'huangjia/hj_10.jpg',
            'huangjia/hj_11.jpg',
            'huangjia/hj_12.jpg',
            'huangjia/hj_13.jpg'
          ],
          reverse: false
        },
        {
          id: 2,
          title: '承德避暑山庄',
          seal: '避',
          address: '河北省承德市',
          era: '清代康熙至乾隆',
          content: `避暑山庄——中国现存最大的皇家园林。山庄正门在宫墙南端，门上镶有用汉、藏、满、回、蒙五种文字镌刻的"丽正门"匾额，门内九重院落组成了皇帝日常起居和处理政务的主要场所——正宫。避暑山庄实际已成为清政府的第二个政治中心。`,
          image: [
            'huangjia/hj_06.jpg',
            'huangjia/hj_07.jpg',
            'huangjia/hj_08.jpg',
            'huangjia/hj_09.jpg'
          ],
          reverse: true
        },
        {
          id: 3,
          title: '北海公园',
          seal: '北',
          address: '北京市西城区',
          era: '辽金元明清',
          content: `北海公园位于北京城的中心，是中国现存历史上建园最早、保存最完整、文化沉积最深厚的古典皇家园林。北海的形成和发展，历经金、元、明、清数个朝代，承载着中国近千年的历史和文化，形成了以皇家园林为代表的造园艺术风格，它是凝聚着历代园林文化艺术之大成的杰作。`,
          image: [
            'huangjia/hj_14.jpg',
            'huangjia/hj_15.jpg',
            'huangjia/hj_16.jpg',
            'huangjia/hj_17.jpg'
          ],
          reverse: false
        }
      ]
    }
  },
  methods: {
    scroll() {
      const height = window.scrollY
      if (height >= 400) this.$set(this.visible, 0, true)
      if (height >= 1000) this.$set(this.visible, 1, true)
      if (height >= 1600) this.$set(this.visible, 2, true)
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
.hjlist {
  width: 100%;
  overflow: hidden;
}

/* ========== Hero ========== */
.hjlist_hero {
  position: relative;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 120px 0 100px;
  min-height: 600px;
  display: flex;
  align-items: center;
}
.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg,
    rgba(26, 26, 26, 0.55) 0%,
    rgba(26, 26, 26, 0.82) 100%);
}
.hero-content {
  position: relative;
  z-index: 1;
  width: min(1000px, 92%);
  margin: 0 auto;
  text-align: center;
  color: #fff;
  font-family: var(--font-zhongguo);
}
.hero-deco {
  font-size: 28px;
  color: #b8b4ac;
  margin-bottom: 20px;
  letter-spacing: 0.5em;
}
.hero-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: 30px;
}
.hero-title .title-main {
  font-size: 64px;
  letter-spacing: 0.3em;
  font-weight: 600;
  text-shadow: 0 4px 16px rgba(0,0,0,0.4);
}
.hero-title .title-en {
  font-size: 14px;
  color: #d8d4cc;
  letter-spacing: 0.4em;
  font-family: Georgia, serif;
}
.hero-line {
  width: 100px;
  height: 2px;
  background: linear-gradient(to right, transparent, #b8b4ac, transparent);
  margin: 30px auto;
}
.hero-text {
  font-size: 17px;
  line-height: 2.1;
  text-align: justify;
  max-width: 760px;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.92);
  letter-spacing: 0.05em;
}
.hero-text p { text-indent: 2em; margin-bottom: 8px; }

/* ========== Sections ========== */
.hj_section {
  padding: 90px 0;
  position: relative;
}
.bg-0 { background: linear-gradient(135deg, #f5f2ed 0%, #e8e4dc 100%); }
.bg-1 { background: linear-gradient(135deg, #eae6de 0%, #ddd8ce 100%); }
.bg-2 { background: linear-gradient(135deg, #f5f2ed 0%, #e4e0d6 100%); }

.hj_card {
  width: min(1200px, 92%);
  margin: 0 auto;
  display: flex;
  align-items: stretch;
  gap: 60px;
  font-family: var(--font-zhongguo);
}
.hj_card.reverse {
  flex-direction: row-reverse;
}

.hj_card_text {
  flex: 0 0 45%;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.hj_card_num {
  font-size: 14px;
  color: var(--color-ink-light);
  letter-spacing: 0.4em;
  margin-bottom: 10px;
  font-family: Georgia, serif;
}
.hj_card_title {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 48px;
  color: var(--color-ink);
  letter-spacing: 0.15em;
  font-weight: 600;
  margin-bottom: 16px;
  font-family: var(--font-zhongguo);
}
.hj_card_seal {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: var(--color-ink);
  color: var(--color-rice-light);
  font-size: 24px;
  border-radius: 4px;
  font-weight: 400;
}
.hj_card_meta {
  display: flex;
  gap: 20px;
  font-size: 14px;
  color: var(--color-text-soft);
  margin-bottom: 16px;
  letter-spacing: 0.08em;
}
.hj_card_meta i { color: var(--color-ink); margin-right: 4px; }
.hj_card_divider {
  width: 60px;
  height: 2px;
  background: var(--color-ink);
  margin-bottom: 24px;
}
.hj_card_content {
  font-size: 16px;
  line-height: 2;
  color: var(--color-text);
  letter-spacing: 0.04em;
  text-align: justify;
  text-indent: 2em;
  margin-bottom: 28px;
}
.hj_card_more {
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 24px;
  border: 1px solid var(--color-ink);
  color: var(--color-ink);
  font-size: 15px;
  letter-spacing: 0.2em;
  border-radius: 2px;
  transition: all 0.3s ease;
  font-family: var(--font-zhongguo);
}
.hj_card_more:hover {
  background: var(--color-ink);
  color: var(--color-rice-light);
  transform: translateX(4px);
}

.hj_card_image {
  flex: 1;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  min-height: 480px;
}
.hj_card_image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 6s ease;
}
.hj_section:hover .hj_card_image img {
  transform: scale(1.1);
}
.hj_card_image_mark {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(26, 26, 26, 0.7);
  color: #d8d4cc;
  padding: 6px 14px;
  font-size: 13px;
  letter-spacing: 0.3em;
  font-family: var(--font-zhongguo);
  border-radius: 2px;
  z-index: 2;
  backdrop-filter: blur(4px);
}

@media (max-width: 900px) {
  .hero-title .title-main { font-size: 36px; }
  .hj_card { flex-direction: column; gap: 30px; }
  .hj_card.reverse { flex-direction: column; }
  .hj_card_text { padding: 10px 0; }
  .hj_card_title { font-size: 32px; }
  .hj_card_image { min-height: 300px; }
}
</style>

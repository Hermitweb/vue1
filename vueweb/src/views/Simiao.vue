<template>
  <div class="smlist">
    <!-- Hero -->
    <section
      class="smlist_hero"
      :style="'background-image:url(' + tubase + 'simiao/sm_bg.jpg)'"
    >
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="hero-deco">❀</div>
        <h1 class="hero-title">
          <span class="title-main">寺庙园林</span>
          <span class="title-en">TEMPLO GARDEN</span>
        </h1>
        <div class="hero-line"></div>
        <div class="hero-text" v-html="smTitle"></div>
      </div>
    </section>

    <!-- 园林列表 -->
    <section
      v-for="(item, idx) in gardens"
      :key="item.id"
      :class="['sm_section', `bg-${idx % 3}`]"
    >
      <div
        :class="['sm_card', item.reverse ? 'reverse' : '']"
      >
        <div
          :class="['sm_card_text', 'animated', visible[idx] ? 'fadeInLeft' : '']"
        >
          <div class="sm_card_num">No.{{ String(idx + 1).padStart(2, '0') }}</div>
          <h2 class="sm_card_title">
            <span>{{ item.title }}</span>
            <span class="sm_card_seal">{{ item.seal }}</span>
          </h2>
          <div class="sm_card_meta">
            <span><i class="el-icon-location-information"></i> {{ item.address }}</span>
            <span><i class="el-icon-time"></i> {{ item.era }}</span>
          </div>
          <div class="sm_card_divider"></div>
          <div class="sm_card_content" v-html="item.content"></div>
          <router-link :to="`/Xq?id=${item.id}`" class="sm_card_more">
            探园详览 <i class="el-icon-arrow-right"></i>
          </router-link>
        </div>
        <div
          :class="['sm_card_image', 'animated', visible[idx] ? 'fadeInRight' : '']"
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
          <div class="sm_card_image_mark">禅 · 园</div>
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
      smTitle: `
        <p>寺庙园林，指佛寺、道观、历史名人纪念性祠庙的园林，为中国园林的三种基本类型（寺庙园林、皇家园林、私家园林）之一。</p>
        <p>寺庙园林狭者仅方丈之地，广者则泛指整个宗教圣地，其实际范围包括寺观周围的自然环境，是寺庙建筑、宗教景物、人工山水和天然山水的综合体。一些著名的大型寺庙园林，往往历经成百上千年的持续开发，积淀着宗教史迹与名人历史故事，题刻下历代文化雅士的摩崖碑刻和楹联诗文，使寺庙园林蕴含着丰厚的历史和文化游赏价值。</p>
        <p>寺庙园林是中国园林的一个分支，论其数量，它比皇家园林、私家园林的总和要多几百倍；论其特色，它具有一系列不同于皇家园林和私家园林的特长。</p>
      `,
      gardens: [
        {
          id: 7,
          title: '寒山寺',
          seal: '寒',
          address: '江苏省苏州市',
          era: '南朝梁代',
          content: `<p>寒山寺位于苏州市姑苏区，始建于南朝萧梁代天监年间（公元502～519年），初名"妙利普明塔院"。寒山寺占地面积约1.3万平方米，建筑面积三千四百余平方米。</p><p>寒山寺属于禅宗中的临济宗。唐代贞观年间，当时的名僧寒山、希迁两位高僧创建寒山寺。1000多年内寒山寺先后5次遭到火毁（一说是7次），最后一次重建是清代光绪年间。历史上寒山寺曾是中国十大名寺之一，寺内古迹甚多，有张继诗的石刻碑文，寒山、拾得的石刻像，文徵明、唐寅所书碑文残片等。</p>`,
          image: [
            'simiao/sm_01.jpg',
            'simiao/sm_02.jpg',
            'simiao/sm_03.jpg',
            'simiao/sm_04.jpg'
          ],
          reverse: false
        },
        {
          id: 8,
          title: '武侯祠',
          seal: '武',
          address: '四川省成都市',
          era: '公元223年',
          content: `<p>南阳武侯祠坐落于中国历史文化名城河南省南阳市城西卧龙岗上，初建于魏晋，盛于唐宋，有1800多年历史，是刘备"三顾茅庐"发生地，诸葛亮躬耕南阳所在地，历代皇室及百姓祭祀诸葛亮的地方。</p><p>南阳卧龙岗武侯祠1963年被列为首批河南省重点文物保护单位，1996年被列为全国重点文物保护单位，2007年荣膺国家AAAA级旅游景区，2008年被列为首批国家二级博物馆。</p>`,
          image: [
            'simiao/sm_05.jpg',
            'simiao/sm_06.jpg',
            'simiao/sm_07.jpg',
            'simiao/sm_08.jpg'
          ],
          reverse: true
        },
        {
          id: 9,
          title: '灵隐寺',
          seal: '灵',
          address: '浙江省杭州市',
          era: '东晋326年',
          content: `<p>灵隐寺，中国佛教古寺，又名云林寺。灵隐寺开山祖师为西印度僧人慧理和尚。五代吴越王钱镠命请永明延寿大师重兴开拓，并赐名灵隐新寺。宋宁宗嘉定年间，灵隐寺被誉为江南禅宗"五山"之一。</p><p>灵隐寺主要以天王殿、大雄宝殿、药师殿、法堂、华严殿为中轴线，两边附以五百罗汉堂、济公殿、华严阁、大悲楼、方丈楼等建筑构成。</p>`,
          image: [
            'simiao/sm_09.jpg',
            'simiao/sm_10.jpg',
            'simiao/sm_11.jpg',
            'simiao/sm_12.jpg'
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
.smlist { width: 100%; overflow: hidden; }

/* ========== Hero ========== */
.smlist_hero {
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
.hero-deco { font-size: 28px; color: #b8b4ac; margin-bottom: 20px; letter-spacing: 0.5em; }
.hero-title { display: flex; flex-direction: column; align-items: center; gap: 12px; margin-bottom: 30px; }
.hero-title .title-main { font-size: 64px; letter-spacing: 0.3em; font-weight: 600; text-shadow: 0 4px 16px rgba(0,0,0,0.4); }
.hero-title .title-en { font-size: 14px; color: #d8d4cc; letter-spacing: 0.4em; font-family: Georgia, serif; }
.hero-line { width: 100px; height: 2px; background: linear-gradient(to right, transparent, #b8b4ac, transparent); margin: 30px auto; }
.hero-text { font-size: 17px; line-height: 2.1; text-align: justify; max-width: 760px; margin: 0 auto; color: rgba(255, 255, 255, 0.92); letter-spacing: 0.05em; }
.hero-text p { text-indent: 2em; margin-bottom: 8px; }

/* ========== Sections ========== */
.sm_section { padding: 90px 0; position: relative; }
.bg-0 { background: linear-gradient(135deg, #f5f2ed 0%, #e8e4dc 100%); }
.bg-1 { background: linear-gradient(135deg, #eae6de 0%, #ddd8ce 100%); }
.bg-2 { background: linear-gradient(135deg, #f5f2ed 0%, #e4e0d6 100%); }

.sm_card {
  width: min(1200px, 92%);
  margin: 0 auto;
  display: flex;
  align-items: stretch;
  gap: 60px;
  font-family: var(--font-zhongguo);
}
.sm_card.reverse { flex-direction: row-reverse; }

.sm_card_text {
  flex: 0 0 45%;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.sm_card_num { font-size: 14px; color: var(--color-ink-light); letter-spacing: 0.4em; margin-bottom: 10px; font-family: Georgia, serif; }
.sm_card_title {
  display: flex; align-items: center; gap: 16px;
  font-size: 48px; color: var(--color-ink); letter-spacing: 0.15em; font-weight: 600;
  margin-bottom: 16px; font-family: var(--font-zhongguo);
}
.sm_card_seal {
  display: inline-flex; align-items: center; justify-content: center;
  width: 44px; height: 44px; background: var(--color-ink); color: var(--color-rice-light);
  font-size: 24px; border-radius: 4px; font-weight: 400;
}
.sm_card_meta { display: flex; gap: 20px; font-size: 14px; color: var(--color-text-soft); margin-bottom: 16px; letter-spacing: 0.08em; }
.sm_card_meta i { color: var(--color-ink); margin-right: 4px; }
.sm_card_divider { width: 60px; height: 2px; background: var(--color-ink); margin-bottom: 24px; }
.sm_card_content {
  font-size: 16px; line-height: 2; color: var(--color-text); letter-spacing: 0.04em;
  text-align: justify; text-indent: 2em; margin-bottom: 28px;
}
.sm_card_more {
  align-self: flex-start; display: inline-flex; align-items: center; gap: 6px;
  padding: 10px 24px; border: 1px solid var(--color-ink); color: var(--color-ink);
  font-size: 15px; letter-spacing: 0.2em; border-radius: 2px;
  transition: all 0.3s ease; font-family: var(--font-zhongguo);
}
.sm_card_more:hover { background: var(--color-ink); color: var(--color-rice-light); transform: translateX(4px); }

.sm_card_image {
  flex: 1; position: relative; border-radius: 4px; overflow: hidden;
  box-shadow: 0 16px 48px rgba(58, 70, 50, 0.18); min-height: 480px;
}
.sm_card_image img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 6s ease; }
.sm_section:hover .sm_card_image img { transform: scale(1.1); }
.sm_card_image_mark {
  position: absolute; top: 20px; right: 20px;
  background: rgba(40, 55, 35, 0.7); color: #d8d4cc;
  padding: 6px 14px; font-size: 13px; letter-spacing: 0.3em;
  font-family: var(--font-zhongguo); border-radius: 2px;
  z-index: 2; backdrop-filter: blur(4px);
}

@media (max-width: 900px) {
  .hero-title .title-main { font-size: 36px; }
  .sm_card { flex-direction: column; gap: 30px; }
  .sm_card.reverse { flex-direction: column; }
  .sm_card_text { padding: 10px 0; }
  .sm_card_title { font-size: 32px; }
  .sm_card_image { min-height: 300px; }
}
</style>

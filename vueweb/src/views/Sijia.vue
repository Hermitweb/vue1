<template>
  <div class="sjlist">
    <!-- Hero -->
    <section
      class="sjlist_hero"
      :style="'background-image:url(' + tubase + 'sijia/wr_bg.jpg)'"
    >
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="hero-deco">❀</div>
        <h1 class="hero-title">
          <span class="title-main">私家园林</span>
          <span class="title-en">PRIVATE GARDEN</span>
        </h1>
        <div class="hero-line"></div>
        <div class="hero-text" v-html="sjTitle"></div>
      </div>
    </section>

    <!-- 园林列表 -->
    <section
      v-for="(item, idx) in gardens"
      :key="item.id"
      :class="['sj_section', `bg-${idx % 3}`]"
    >
      <div
        :class="['sj_card', item.reverse ? 'reverse' : '']"
      >
        <div
          :class="['sj_card_text', 'animated', visible[idx] ? 'fadeInLeft' : '']"
        >
          <div class="sj_card_num">No.{{ String(idx + 1).padStart(2, '0') }}</div>
          <h2 class="sj_card_title">
            <span>{{ item.title }}</span>
            <span class="sj_card_seal">{{ item.seal }}</span>
          </h2>
          <div class="sj_card_meta">
            <span><i class="el-icon-location-information"></i> {{ item.address }}</span>
            <span><i class="el-icon-time"></i> {{ item.era }}</span>
          </div>
          <div class="sj_card_divider"></div>
          <div class="sj_card_content" v-html="item.content"></div>
          <router-link :to="`/Xq?id=${item.id}`" class="sj_card_more">
            探园详览 <i class="el-icon-arrow-right"></i>
          </router-link>
        </div>
        <div
          :class="['sj_card_image', 'animated', visible[idx] ? 'fadeInRight' : '']"
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
          <div class="sj_card_image_mark">私 · 园</div>
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
      sjTitle: `
        <p>中国古代园林，除皇家园林外，还有一类属于王公、贵族、地主、富商、士大夫等私人所有的园林，称为私家园林。</p>
        <p>古籍里称之为园、园亭、园墅、池馆、山池、山庄、别墅、别业等。规模较小，一般只有几亩至十几亩，小者仅一亩半亩而已；大多以水面为中心，四周散布建筑，构成一个个景点或几个景点；以修身养性，闲适自娱为园林主要功能；园主多是文人学士出身，能诗会画，清高风雅，淡素脱俗。私家园林集中在南京、苏州、无锡等地。</p>
        <p>现代保存下来的园林大多属于明清时代，这些园林充分表现了古代传统园林建筑的独特风格和高超的造园艺术。</p>
      `,
      gardens: [
        {
          id: 4,
          title: '沧浪亭',
          seal: '沧',
          address: '江苏省苏州市',
          era: '北宋庆历年间',
          content: `<p>沧浪亭，位于江苏省苏州市城南，是苏州最古老的一所园林，始建于北宋庆历年间（公元1041～1048年），南宋初年（公元12世纪初）曾为名将韩世忠的住宅。沧浪亭造园艺术与众不同，未进园门便设一池绿水绕于园外。园内以山石为主景，迎面一座土山，沧浪石亭便坐落其上。</p><p>沧浪亭与狮子林、拙政园、留园一齐列为苏州宋、元、明、清四大园林，园内除沧浪亭本身外还有印心石屋、明道堂、看山楼等建筑和景观。</p>`,
          image: [
            'sijia/wr_01.jpg',
            'sijia/wr_02.jpg',
            'sijia/wr_03.jpg',
            'sijia/wr_04.jpg'
          ],
          reverse: false
        },
        {
          id: 5,
          title: '拙政园',
          seal: '拙',
          address: '江苏省苏州市',
          era: '明正德初年',
          content: `<p>拙政园，位于江苏省苏州市，始建于明正德初年（16世纪初），是江南古典园林的代表作品。</p><p>四百多年来，拙政园几度分合，或为"私人"宅园，或做"金屋"藏娇，或是"王府"治所，留下了许多诱人探寻的遗迹和典故。</p><p>拙政园与北京颐和园、承德避暑山庄、苏州留园一起被誉为中国四大名园。</p>`,
          image: [
            'sijia/hj_21.jpg',
            'sijia/hj_18.jpg',
            'sijia/hj_19.jpg',
            'sijia/hj_20.jpg'
          ],
          reverse: true
        },
        {
          id: 6,
          title: '留园',
          seal: '留',
          address: '江苏省苏州市',
          era: '明代',
          content: `<p>留园，是苏州古典园林，始建于明代。清代时称"寒碧山庄"，俗称"刘园"，后改为"留园"。以园内建筑布置精巧、奇石众多而知名，与苏州拙政园、北京颐和园、承德避暑山庄并称中国四大名园。</p><p>留园为中国大型古典私家园林，占地面积23300平方米，代表清代风格，园以建筑艺术精湛著称，厅堂宏敞华丽，庭院富有变化，太湖石以冠云峰为最，有"不出城郭而获山林之趣"。</p><p>留园是第一批全国重点文物保护单位、世界文化遗产、国家5A级旅游景区。</p>`,
          image: [
            'sijia/wr_05.jpg',
            'sijia/wr_06.jpg',
            'sijia/wr_07.jpg',
            'sijia/wr_08.jpg'
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
.sjlist { width: 100%; overflow: hidden; }

/* ========== Hero ========== */
.sjlist_hero {
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
.sj_section { padding: 90px 0; position: relative; }
.bg-0 { background: linear-gradient(135deg, #f5f2ed 0%, #e8e4dc 100%); }
.bg-1 { background: linear-gradient(135deg, #eae6de 0%, #ddd8ce 100%); }
.bg-2 { background: linear-gradient(135deg, #f5f2ed 0%, #e4e0d6 100%); }

.sj_card {
  width: min(1200px, 92%);
  margin: 0 auto;
  display: flex;
  align-items: stretch;
  gap: 60px;
  font-family: var(--font-zhongguo);
}
.sj_card.reverse { flex-direction: row-reverse; }

.sj_card_text {
  flex: 0 0 45%;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.sj_card_num { font-size: 14px; color: var(--color-ink-light); letter-spacing: 0.4em; margin-bottom: 10px; font-family: Georgia, serif; }
.sj_card_title {
  display: flex; align-items: center; gap: 16px;
  font-size: 48px; color: var(--color-ink); letter-spacing: 0.15em; font-weight: 600;
  margin-bottom: 16px; font-family: var(--font-zhongguo);
}
.sj_card_seal {
  display: inline-flex; align-items: center; justify-content: center;
  width: 44px; height: 44px; background: var(--color-ink); color: var(--color-rice-light);
  font-size: 24px; border-radius: 4px; font-weight: 400;
}
.sj_card_meta { display: flex; gap: 20px; font-size: 14px; color: var(--color-text-soft); margin-bottom: 16px; letter-spacing: 0.08em; }
.sj_card_meta i { color: var(--color-ink); margin-right: 4px; }
.sj_card_divider { width: 60px; height: 2px; background: var(--color-ink); margin-bottom: 24px; }
.sj_card_content {
  font-size: 16px; line-height: 2; color: var(--color-text); letter-spacing: 0.04em;
  text-align: justify; text-indent: 2em; margin-bottom: 28px;
}
.sj_card_more {
  align-self: flex-start; display: inline-flex; align-items: center; gap: 6px;
  padding: 10px 24px; border: 1px solid var(--color-ink); color: var(--color-ink);
  font-size: 15px; letter-spacing: 0.2em; border-radius: 2px;
  transition: all 0.3s ease; font-family: var(--font-zhongguo);
}
.sj_card_more:hover { background: var(--color-ink); color: var(--color-rice-light); transform: translateX(4px); }

.sj_card_image {
  flex: 1; position: relative; border-radius: 4px; overflow: hidden;
  box-shadow: 0 16px 48px rgba(45, 60, 75, 0.18); min-height: 480px;
}
.sj_card_image img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 6s ease; }
.sj_section:hover .sj_card_image img { transform: scale(1.1); }
.sj_card_image_mark {
  position: absolute; top: 20px; right: 20px;
  background: rgba(30, 50, 65, 0.7); color: #d8d4cc;
  padding: 6px 14px; font-size: 13px; letter-spacing: 0.3em;
  font-family: var(--font-zhongguo); border-radius: 2px;
  z-index: 2; backdrop-filter: blur(4px);
}

@media (max-width: 900px) {
  .hero-title .title-main { font-size: 36px; }
  .sj_card { flex-direction: column; gap: 30px; }
  .sj_card.reverse { flex-direction: column; }
  .sj_card_text { padding: 10px 0; }
  .sj_card_title { font-size: 32px; }
  .sj_card_image { min-height: 300px; }
}
</style>

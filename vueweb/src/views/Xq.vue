<template>
  <div class="xq_box">
    <div
      class="xq_hero"
      :style="`background-image:url(${tubase + heroImg})`"
    >
      <div class="xq_hero_overlay"></div>
      <div class="xq_hero_content">
        <div class="xq_breadcrumb">
          <router-link to="/">首页</router-link>
          <i class="el-icon-arrow-right"></i>
          <span>{{ categoryName }}</span>
          <i class="el-icon-arrow-right"></i>
          <span class="cur">{{ value.title }}</span>
        </div>
        <h1 class="xq_title">{{ value.title }}</h1>
        <div class="xq_seal">{{ value.seal || value.title[0] }}</div>
        <div class="xq_meta">
          <span><i class="el-icon-location-information"></i> {{ value.address }}</span>
          <span v-if="value.era"><i class="el-icon-time"></i> {{ value.era }}</span>
        </div>
      </div>
    </div>

    <div class="xq_content">
      <div class="xq_body">
        <!-- 图片画廊 -->
        <div class="xq_gallery">
          <el-image
            class="xq_gallery_main"
            :src="tubase + value.image[0]"
            :preview-src-list="value.image.map(i => tubase + i)"
            fit="cover"
          >
            <div slot="error" class="image-error">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
          <div class="xq_gallery_thumbs">
            <div
              v-for="(img, i) in value.image"
              :key="i"
              class="xq_thumb"
              :style="`background-image:url(${tubase + img})`"
            ></div>
          </div>
        </div>

        <!-- 文字内容 -->
        <article class="xq_article" v-html="value.content"></article>

        <!-- 操作区 -->
        <div class="xq_actions">
          <a :href="value.adress_link" target="_blank" class="xq_btn xq_btn_primary">
            <i class="el-icon-map-location"></i> 百度地图导航
          </a>
          <button class="xq_btn xq_btn_secondary" @click="goBack">
            <i class="el-icon-back"></i> 返回列表
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categoryMap: {
        1: '皇家园林', 2: '皇家园林', 3: '皇家园林',
        4: '私家园林', 5: '私家园林', 6: '私家园林',
        7: '寺庙园林', 8: '寺庙园林', 9: '寺庙园林'
      },
      data: [
        {
          id: 1,
          title: '颐和园',
          seal: '颐',
          address: '北京市海淀区新建宫门路19号',
          era: '清代乾隆年间',
          adress_link: 'https://j.map.baidu.com/8b/xOf',
          adress_img: 'huangjia/yhy.png',
          image: [
            'huangjia/hj_10.jpg',
            'huangjia/hj_11.jpg',
            'huangjia/hj_12.jpg',
            'huangjia/hj_13.jpg'
          ],
          content: `
            <p>颐和园，中国清朝时期皇家园林，前身为清漪园，坐落在北京西郊，距城区15公里，全园占地3.009平方公里，水面约占四分之三。与圆明园毗邻。</p>
            <p>它是以昆明湖、万寿山为基址，以杭州西湖为蓝本，汲取江南园林的设计手法而建成的一座大型山水园林，也是保存最完整的一座皇家行宫御苑，被誉为"皇家园林博物馆"。</p>
            <p>清朝乾隆皇帝继位以前，在北京西郊一带，建起了四座大型皇家园林。乾隆十五年（1750年），乾隆皇帝为孝敬其母崇庆皇太后动用448万两白银在这里改建为清漪园。</p>
            <p>咸丰十年（1860年），清漪园被英法联军焚毁。光绪十四年（1888年）重建，改称颐和园，作消夏游乐地。光绪二十六年（1900年），颐和园又遭"八国联军"的破坏，珍宝被劫掠一空。</p>
            <p>1961年3月4日，颐和园被公布为第一批全国重点文物保护单位，与同时公布的承德避暑山庄、拙政园、留园并称为中国四大名园，1998年11月被列入《世界遗产名录》。2007年5月8日，颐和园经国家旅游局正式批准为国家5A级旅游景区。</p>
            <p>2009年，颐和园入选中国世界纪录协会中国现存最大的皇家园林。</p>
          `
        },
        {
          id: 2,
          title: '承德避暑山庄',
          seal: '避',
          address: '河北省承德市中心北部',
          era: '清康熙至乾隆',
          adress_link: 'https://j.map.baidu.com/69/nFf',
          adress_img: 'huangjia/bssz.png',
          image: [
            'huangjia/hj_06.jpg',
            'huangjia/hj_07.jpg',
            'huangjia/hj_08.jpg',
            'huangjia/hj_09.jpg'
          ],
          content: `
            <p>承德避暑山庄又名皇家避暑行宫。</p>
            <p>承德是首批国家历史文化名城，1703年清康熙修建避暑山庄，成为清王朝的第二个政治中心。山庄以其独特的园林艺术风格在中外园林史上占有重要地位。</p>
            <p>承德避暑山庄及其周围寺庙是中国十大风景名胜、旅游胜地四十佳、国家重点风景名胜区，被联合国教科文组织批准为世界文化遗产，也是国家首批世界文化遗产。</p>
            <p>承德避暑山庄始建于1703年（康熙四十二年），经康熙、雍正、乾隆三朝，历时89年于1792年建成，占地564万平方米，是世界现存最大皇家园林。</p>
          `
        },
        {
          id: 3,
          title: '北海公园',
          seal: '北',
          address: '北京市西城区文津街1号',
          era: '辽金元明清',
          adress_link: 'https://j.map.baidu.com/51/1w',
          adress_img: 'huangjia/bhgy.png',
          image: [
            'huangjia/hj_14.jpg',
            'huangjia/hj_15.jpg',
            'huangjia/hj_16.jpg',
            'huangjia/hj_17.jpg'
          ],
          content: `
            <p>北海公园位于北京市中心区，城内景山西侧，在故宫的西北面，与中海、南海合称三海。属于中国古代皇家园林。全园以北海为中心，面积约71公顷。</p>
            <p>北海公园是中国现存最古老、最完整、最具综合性和代表性的皇家园林之一，为全国重点文物保护单位，是国家AAAA级旅游景区。</p>
            <p>北海公园以北海为中心，全园分为"北岸景区""东岸景区""琼岛景区"和"团城景区"四大区域。已成为北海标志性建筑的白塔，则位于琼岛的中心最高点。</p>
          `
        },
        {
          id: 4,
          title: '沧浪亭',
          seal: '沧',
          address: '江苏省苏州市',
          era: '北宋庆历年间',
          adress_link: 'https://j.map.baidu.com/ce/YPJ',
          adress_img: 'sijia/lct.png',
          image: [
            'sijia/wr_01.jpg',
            'sijia/wr_02.jpg',
            'sijia/wr_03.jpg',
            'sijia/wr_04.jpg'
          ],
          content: `
            <p>沧浪亭著名的苏州园林之一。沧浪亭位于苏州城南三元坊，是现存历史最为悠久的江南园林。与狮子林、拙政园、留园并称为苏州宋、元、明、清四大园林，代表着宋朝的艺术风格。沧浪亭占地面积1.08公顷，园内有一泓清水贯穿，波光倒影，景象万千。</p>
            <p>"沧浪亭"始为五代时吴越国广陵王钱元璙近戚中吴军节度使孙承祐的池馆。宋代著名诗人苏舜钦以四万贯钱买下废园，进行修筑，傍水造亭，因感于"沧浪之水清兮，可以濯吾缨；沧浪之水浊兮，可以濯吾足"，题名"沧浪亭"。</p>
          `
        },
        {
          id: 5,
          title: '拙政园',
          seal: '拙',
          address: '江苏省苏州市平江区东北街178号',
          era: '明正德初年',
          adress_link: 'https://j.map.baidu.com/54/2u',
          adress_img: 'sijia/zzy.png',
          image: [
            'sijia/hj_21.jpg',
            'sijia/hj_18.jpg',
            'sijia/hj_19.jpg',
            'sijia/hj_20.jpg'
          ],
          content: `
            <p>拙政园，位于江苏省苏州市，始建于明正德初年（16世纪初），是江南古典园林的代表作品。与北京颐和园、承德避暑山庄、苏州留园一起被誉为中国四大名园。</p>
            <p>拙政园位于苏州城东北隅（东北街178号），截至2014年，仍是苏州存在的最大的古典园林，占地78亩（约合5.2公顷）。全园以水为中心，山水萦绕，厅榭精美，花木繁茂，具有浓郁的江南汉族水乡特色。</p>
            <p>1961年3月，拙政园被列为首批全国重点文物保护单位，1991年被国家计委、旅游局、建设部列为国家级特殊游览参观点。1997年联合国教科文组织批准列入《世界遗产名录》。</p>
          `
        },
        {
          id: 6,
          title: '留园',
          seal: '留',
          address: '江苏省苏州市留园路302号',
          era: '明代',
          adress_link: 'https://j.map.baidu.com/28/4l7J',
          adress_img: 'sijia/ly.png',
          image: [
            'sijia/wr_05.jpg',
            'sijia/wr_06.jpg',
            'sijia/wr_07.jpg',
            'sijia/wr_08.jpg'
          ],
          content: `
            <p>留园是中国著名古典园林，位于江南古城苏州，以园内建筑布置精巧、奇石众多而知名。与苏州拙政园、北京颐和园、承德避暑山庄并称中国四大名园。</p>
            <p>留园位于苏州阊门外，原是明嘉靖年间太仆寺卿徐泰时的东园。园内假山为叠石名家周秉忠(时臣)所作。</p>
            <p>留园全园分为四个部分，在一个园林中能领略到山水、田园、山林、庭园四种不同景色：中部以水景见长，是全园的精华所在；东部以曲院回廊的建筑取胜；北部具农村风光；西区则是全园最高处，有野趣，以假山为奇。</p>
          `
        },
        {
          id: 7,
          title: '寒山寺',
          seal: '寒',
          address: '江苏省苏州市姑苏区寒山寺弄24号',
          era: '南朝梁代',
          adress_link: 'https://j.map.baidu.com/ff/ch',
          adress_img: 'simiao/hss.png',
          image: [
            'simiao/sm_01.jpg',
            'simiao/sm_02.jpg',
            'simiao/sm_03.jpg',
            'simiao/sm_04.jpg'
          ],
          content: `
            <p>寒山寺在苏州城西阊门外5公里外的枫桥镇，建于六朝时期的梁代天监年间（公元502-519年），距今已有1400多年。原名"妙利普明塔院"。</p>
            <p>寒山寺山门前面的石拱圈古桥是江村桥，桥堍与山门之间那垛黄墙称照壁。山门两旁两棵古樟。黄墙内古典楼阁飞檐翘角，右为枫江楼，左为霜钟楼，都源于枫桥夜泊诗。</p>
            <p>寒山寺寺院布局并不追求左右均衡，照墙和山门基本是一线相承，后边的大雄宝殿、藏经楼，并不在一条中轴线上；新建的普明塔院，则按南北向中轴线布局。</p>
            <p>寒山寺属于禅宗中的临济宗。唐代贞观年间，当时的名僧寒山、希迁两位高僧创建寒山寺。1000多年内寒山寺先后5次遭到火毁，最后一次重建是清代光绪年间。</p>
          `
        },
        {
          id: 8,
          title: '武侯祠',
          seal: '武',
          address: '四川省成都市武侯区',
          era: '公元223年',
          adress_link: 'https://j.map.baidu.com/70/M0z',
          adress_img: 'simiao/whs.png',
          image: [
            'simiao/sm_05.jpg',
            'simiao/sm_06.jpg',
            'simiao/sm_07.jpg',
            'simiao/sm_08.jpg'
          ],
          content: `
            <p>武侯祠（汉昭烈庙），全国重点文物保护单位，国家AAAA级旅游景区，国家一级博物馆。武侯祠位于四川省成都市武侯区，肇始于公元223年修建刘备惠陵时，它是中国唯一的一座君臣合祀祠庙和最负盛名的诸葛亮、刘备及蜀汉英雄纪念地，也是全国影响最大的三国遗迹博物馆。</p>
            <p>1961年国务院公布为首批全国重点文物保护单位，2008年评选为首批国家一级博物馆。成都武侯祠现占地15万平方米，由三国历史遗迹区（文物区）、西区（三国文化体验区）以及锦里民俗区（锦里）三部分组成，享有"三国圣地"的美誉。</p>
          `
        },
        {
          id: 9,
          title: '灵隐寺',
          seal: '灵',
          address: '浙江省杭州市西湖区灵隐路法云弄1号',
          era: '东晋326年',
          adress_link: 'https://j.map.baidu.com/3d/MUu',
          adress_img: 'simiao/lys.png',
          image: [
            'simiao/sm_09.jpg',
            'simiao/sm_10.jpg',
            'simiao/sm_11.jpg',
            'simiao/sm_12.jpg'
          ],
          content: `
            <p>灵隐寺位于杭州西湖灵隐山麓，处于西湖西部的飞来峰旁，离西湖不远。灵隐寺又名"云林禅寺"，始建于东晋（公元326年），到现在已有一千六百多年历史，是我国佛教禅宗十刹之一。</p>
            <p>当时印度僧人慧理来杭，看到这里山峰奇秀，以为是"仙灵所隐"，就在这里建寺，取名灵隐。后来济公在此出家，由于他游戏人间的故事家喻户晓，灵隐寺因此名闻遐迩。</p>
            <p>灵隐寺的最前面是天王殿，上悬"云林禅寺"匾额，是清代康熙的手笔。大殿正中佛龛里坐着袒胸露腹的弥勒佛像。弥勒佛后壁佛龛里，站着神态庄严、手执降魔杵的韦驮菩萨。</p>
          `
        }
      ],
      data_cont: ['']
    }
  },
  computed: {
    value() {
      return this.data_cont[0] || {}
    },
    categoryName() {
      return this.categoryMap[this.value.id] || '详情'
    },
    heroImg() {
      return this.value.image && this.value.image[0] ? this.value.image[0] : ''
    }
  },
  watch: {
    '$route.query.id': {
      immediate: false,
      handler(id) {
        if (id) this.findGarden(id)
      }
    }
  },
  created() {
    const id = this.$route.query.id
    if (id) this.findGarden(id)
    else this.data_cont = [this.data[0]]
  },
  methods: {
    findGarden(id) {
      const target = this.data.find((item) => String(item.id) === String(id))
      this.data_cont = target ? [target] : [this.data[0]]
    },
    goBack() {
      this.$router.back()
    }
  }
}
</script>

<style>
.xq_box {
  width: 100%;
  background: var(--color-bg);
  font-family: var(--font-zhongguo);
}

/* ========== Hero ========== */
.xq_hero {
  position: relative;
  background-size: cover;
  background-position: center;
  padding: 100px 0 80px;
  color: #fff;
  min-height: 460px;
  display: flex;
  align-items: center;
}
.xq_hero_overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg,
    rgba(0, 0, 0, 0.55) 0%,
    rgba(26, 26, 26, 0.8) 100%);
}
.xq_hero_content {
  position: relative;
  z-index: 1;
  width: min(1100px, 92%);
  margin: 0 auto;
  text-align: center;
}
.xq_breadcrumb {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 30px;
  letter-spacing: 0.1em;
}
.xq_breadcrumb a { color: rgba(255, 255, 255, 0.85); }
.xq_breadcrumb a:hover { color: #f0d99a; }
.xq_breadcrumb .cur { color: #f0d99a; }
.xq_breadcrumb i { font-size: 12px; opacity: 0.6; }

.xq_title {
  font-size: 60px;
  letter-spacing: 0.3em;
  font-weight: 600;
  margin-bottom: 18px;
  text-shadow: 0 4px 16px rgba(0,0,0,0.4);
}
.xq_seal {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background: var(--color-ink);
  color: var(--color-rice-light);
  font-size: 30px;
  border-radius: 4px;
  margin-bottom: 20px;
}
.xq_meta {
  display: inline-flex;
  gap: 30px;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: 0.1em;
}
.xq_meta i { color: #f0d99a; margin-right: 4px; }

/* ========== Content ========== */
.xq_content {
  padding: 60px 0;
}
.xq_body {
  width: min(1100px, 92%);
  margin: 0 auto;
  background: #fff;
  border-radius: 8px;
  padding: 50px 60px;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-line);
}
.xq_gallery {
  margin-bottom: 40px;
}
.xq_gallery_main {
  width: 100%;
  height: 480px;
  border-radius: 6px;
  overflow: hidden;
  display: block;
  margin-bottom: 12px;
  background: #e8e4dc;
}
.xq_gallery_main img {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover;
}
.image-error {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-ink-light);
  font-size: 48px;
}
.xq_gallery_thumbs {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
.xq_thumb {
  height: 90px;
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.xq_thumb:hover {
  transform: scale(1.05);
  box-shadow: var(--shadow-md);
}

.xq_article {
  font-size: 17px;
  line-height: 2.1;
  color: var(--color-text);
  letter-spacing: 0.05em;
  text-align: justify;
}
.xq_article p {
  text-indent: 2em;
  margin-bottom: 16px;
}

.xq_actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 50px;
  padding-top: 40px;
  border-top: 1px solid var(--color-line);
}
.xq_btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  font-size: 15px;
  letter-spacing: 0.2em;
  border-radius: 2px;
  cursor: pointer;
  border: 1px solid;
  transition: all 0.3s ease;
  font-family: var(--font-zhongguo);
  text-decoration: none;
}
.xq_btn_primary {
  background: var(--color-ink);
  border-color: var(--color-ink);
  color: #fff;
}
.xq_btn_primary:hover {
  background: var(--color-ink-medium);
  border-color: var(--color-ink-medium);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}
.xq_btn_secondary {
  background: transparent;
  border-color: var(--color-ink-light);
  color: var(--color-ink-light);
}
.xq_btn_secondary:hover {
  background: var(--color-ink-light);
  color: #fff;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .xq_hero { min-height: 360px; padding: 80px 0 60px; }
  .xq_title { font-size: 36px; letter-spacing: 0.1em; }
  .xq_meta { flex-direction: column; gap: 8px; }
  .xq_body { padding: 30px 20px; }
  .xq_gallery_main { height: 280px; }
  .xq_actions { flex-direction: column; }
  .xq_btn { justify-content: center; }
}
</style>

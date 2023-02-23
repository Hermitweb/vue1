<template>
  <div class="home-content">
    <div class="lunbotu">
      <el-carousel :interval="4000" type="card" height="500px">
        <el-carousel-item v-for="(value, index) in lunbo" :key="index">
          <img :src="tubase + 'banner/' + value" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div
      class="jieshao"
      :style="'background-image:url(' + tubase + head_bg + ');'"
    >
      <div class="jieshao-content">
        <h1 class="animated bounceInDown">{{ jieshao.title }}</h1>
        <div class="jieshao-content-wen animated bounceInUp">
          <p>{{ jieshao.jian }}</p>
          <p>{{ jieshao.content }}</p>
        </div>
      </div>
    </div>
    <div
      class="leibie"
      :style="'background-image:url(' + tubase + jieshao_bg + ');'"
    >
      <div class="leibie-content">
        <el-tabs
          v-model="activeName"
          type="card"
          @tab-click="handleClick"
          class="leibtab"
        >
          <el-tab-pane :label="leibie1.title" name="first">
            <div v-html="leibie1.content" :class="['animated', show?'fadeInLeft':'' ]"></div>
            <div></div>
            <!-- <img :src="tubase+leibie1.image" alt=""> -->
          </el-tab-pane>
          <el-tab-pane :label="leibie2.title" name="second">
            <div v-html="leibie2.content" class="animated fadeInLeft"></div>
            <div class="leibielunbo animated fadeInUp">
              <el-carousel direction="vertical" :autoplay="true">
                <el-carousel-item
                  v-for="(item, index) in leibie2.image"
                  :key="index"
                >
                  <img :src="tubase + item" alt="" />
                </el-carousel-item>
              </el-carousel>
              <div class="leibielunbo-wen">皇家园林</div>
            </div>
          </el-tab-pane>
          <el-tab-pane :label="leibie3.title" name="third">
            <div v-html="leibie3.content" class="animated fadeInLeft"></div>
            <div class="leibielunbo animated fadeInUp">
              <el-carousel direction="vertical" :autoplay="true">
                <el-carousel-item
                  v-for="(item, index) in leibie3.image"
                  :key="index"
                >
                  <img :src="tubase + item" alt="" />
                </el-carousel-item>
              </el-carousel>
              <div class="leibielunbo-wen">私家园林</div>
            </div>
          </el-tab-pane>
          <el-tab-pane :label="leibie4.title" name="fourth">
            <div v-html="leibie4.content" class="animated fadeInLeft"></div>
            <div class="leibielunbo animated fadeInUp">
              <el-carousel direction="vertical" :autoplay="true">
                <el-carousel-item
                  v-for="(item, index) in leibie4.image"
                  :key="index"
                >
                  <img :src="tubase + item" alt="" />
                </el-carousel-item>
              </el-carousel>
              <div class="leibielunbo-wen">寺庙园林</div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      show:false,
      lunbo: [
        "banner(1).jpg",
        "banner(2).jpg",
        "banner(3).jpg",
        "banner(4).jpg",
        "banner(5).jpg",
        "banner(6).jpg",
        "banner(7).jpg",
        "banner(8).jpg",
      ],
      head_bg: ["bg/head_bg.jpg"],
      jieshao_bg: ["bg/jieshao_bg.jpg"],
      jieshao: {
        title: "中国古典园林",
        jian: "中国古典园林是人类文明的重要遗产，被举世公认为世界园林之母。",
        content: `
          我国有四大名园，分别是苏州的拙政园、留园、北京的颐和园、承德的避暑山庄，而拙政园无意是中国私家花园的典型代表了。
          拙政园被称为中国园林之母，可以说，拙政园不仅是苏州的骄傲，而且是中国的骄傲，被列为了世界文化遗产。
        `,
      },
      leibie1: {
        title: "园林类别",
        content: `<p>我国的园林艺术，如果从殷、周时代囿的出现算起，到现在为止已有三千多年的历史，是世界园林艺术起源最早的国家之一，
        在世界园林史上占有极重要的位置，并具有极其高超的艺术水平和独特的民族风格。</p><p>园林是人们为了游览娱乐的方便，用自己的双手创造风景的一种艺术。
        由于各民族、各地区人们对风景的不同理解和偏爱，也就出现了不同风格的园林。</p><p>现存的中国古代园林，一般可以分为皇家园林、私家园林、寺庙园林三种种基本类型。</p>`,
        image: "tab/tab(1).jpg",
      },
      leibie2: {
        title: "皇家园林",
        content: `
        <p>皇家园林，在古籍里面称之为“苑”、“囿（yòu）”、“宫苑”、“园囿”、“御苑”，为中国园林的基本类型之一。</p>
        <p>中国自奴隶社会到封建社会这一阶段，连续几千年的漫长历史时期，帝王君临天下，至高无上，皇权是绝对的权威。
        像古代西方那样震慑一切的神权，在中国相对皇权而言始终是次要的、从属的地位。与此相适应的，一整套突出帝王至上、
        皇权至尊的礼法制度也必然渗透到与皇家有关的一切政治仪典、起居规则、生活环境之中，表现为所谓皇家气派。</p>
        <p>园林作为皇家生活环境的一个重要组成部分，形成了有别于其他园林类型的皇家园林。</p>
        <p>现存代表有承德的避暑山庄、北京的颐和园、北京北海公园等</p>
        `,
        image: ["tab/tab(2).jpg", "tab/tab(3).jpg", "tab/tab(4).jpg"],
      },
      leibie3: {
        title: "私家园林",
        content: `
        <p>中国古代园林，除皇家园林外，还有一类属于王公、贵族、地主、富商、士大夫等私人所有的园林，称为私家园林。</p>
        <p>古籍里称之为园、园亭、园墅、池馆、山池、山庄、别墅、别业等。规模较小，一般只有几亩至十几亩，小者仅一亩半亩而已；
        大多以水面为中心，四周散布建筑，构成一个个景点或几个景点；以修身养性，闲适自娱为园林主要功能；
        园主多是文人学士出身，能诗会画，清高风雅，淡素脱俗。私家园林集中在南京、苏州、无锡等地。</p>
        <p>现代保存下来的园林大多属于明清时代，这些园林充分表现了古代传统园林建筑的独特风格和高超的造园艺术。</p>`,
        image: ["tab/tab(5).jpg", "tab/tab(6).jpg", "tab/tab(7).jpg"],
      },
      leibie4: {
        title: "寺庙园林",
        content: `
        <p>寺庙园林，指佛寺、道观、历史名人纪念性祠庙的园林，为中国园林的基本类型之一。</p>
        <p>寺庙园林狭者仅方丈之地，广者则泛指整个宗教圣地，其实际范围包括寺观周围的自然环境，是寺庙建筑、宗教景物、人工山水和天然山水的综合体。一些著名的大型寺庙园林，
        往往历经成百上千年的持续开发，积淀着宗教史迹与名人历史故事，题刻下历代文化雅士的摩崖碑刻和楹联诗文，使寺庙园林蕴含着丰厚的历史和文化游赏价值。</p>
        `,
        image: ["tab/tab(8).jpg", "tab/tab(9).jpg", "tab/tab(10).jpg"],
      }
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    scroll() {
      var height = document.documentElement.scrollTop;
      console.log(height);
      if (height >= 500) {
        this.show = true;
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.scroll);
  },
};
</script>

<style>
/* 轮播图 */
.el-carousel__item img {
  width: 100%;
  height: 100%;
  display: block;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #99a9bf;
}
.leibielunbo {
  width: 100%;
  background: rgb(255, 255, 255, 0.3);
  padding: 15px;
}
.leibielunbo img {
  width: 100%;
  height: 100%;
  display: block;
}
.leibielunbo-wen {
  text-align: center;
  font-family: "隶书";
  font-size: 100px;
  color: #11005c;
  margin-top: 20px;
  -webkit-text-stroke: 0.5px rgb(238, 255, 0);
}

/* jieshao */
.jieshao {
  background-size: cover;
  height: 600px;
  width: 100%;
}

.jieshao .jieshao-content {
  width: 1170px;
  margin: 0 auto;
}
.jieshao .jieshao-content h1 {
  text-align: center;
  font-size: 85px;
  font-family: "隶书";
}
.jieshao-content-wen {
  font-size: 45px;
  font-family: "隶书";
}

/* leibie */
.leibie {
  width: 100%;
  height: 1000px;
  background-size: cover;
}
.leibie-content {
  width: 1170px;
  margin: 0 auto;
}
.leibtab .el-tab-pane:first-child {
  display: flex;
  flex-direction: row;
  font-size: 35px;
  text-indent: 2em;
  color: #11005c;
  -webkit-text-stroke: 0.1px rgb(0, 0, 255);
  font-family: "隶书";
}
.leibtab .el-tab-pane {
  display: flex;
  flex-direction: row;
  font-size: 25px;
  text-indent: 2em;
  color: #11005c;
  -webkit-text-stroke: 0.1px rgb(0, 0, 255);
  font-family: "隶书";
}
.leibtab .el-tab-pane > div:first-child {
  flex-basis: 60%;
}
.leibtab .el-tab-pane > div:last-child {
  flex-basis: 40%;
  padding: 20px;
}
.el-tabs__item {
  font-family: "隶书" !important;
  font-size: 25px !important;
  font-weight: bold !important;
  height: 60px !important;
  line-height: 60px !important;
}
.el-tabs__item.is-active {
  color: #ff0000 !important;
}
.el-tabs__item:hover {
  color: #ff0000 !important;
  cursor: pointer;
}
</style>
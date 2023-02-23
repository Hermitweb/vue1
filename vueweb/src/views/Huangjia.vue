<template>
  <div class="hjlist">
    
    <div
      class="hjlist_onebox"
      :style="'background-image:url(' + tubase + 'huangjia/hj_04.jpg)'"
    >
      <div class="contanier hjlist_one">
        <div :class="['hj_title', 'animated', 'fadeInLeftBig']">
          中华园林艺术
        </div>

        <div class="yuan">之</div>
        <div class="hj_title animated fadeInRightBig">皇家园林</div>
        <div v-html="huangjia" class="hj_cont animated fadeInUpBig"></div>
      </div>
    </div>
    <!-- hjlist_twobox -->
    <div class="hjlist_twobox">
      <div class="hjlist_two">
        <div
          :class="['hjlist_two_left', 'animated', show ? 'fadeInLeftBig' : '']"
        >
          <router-link :to="'/Xq?id='+1">
            <h2>{{ hj_one.title }}</h2>
            <div v-html="hj_one.content"></div>
          </router-link>
        </div>
        <div
          :class="['hjlist_two_right', 'animated', show ? 'fadeInUpBig' : '']"
        >
          <el-carousel height="540px" direction="vertical" :autoplay="true">
            <el-carousel-item
              v-for="(item, index) in hj_one.image"
              :key="index"
            >
              <img :src="tubase + item" alt="" />
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
    <!-- hjlist_twobox -->
    <div class="hjlist_twobox">
      <div class="hjlist_two">
        <div
          :class="['hjlist_two_right', 'animated', show2 ? 'fadeInUpBig' : '']"
        >
          <el-carousel height="540px" direction="vertical" :autoplay="true">
            <el-carousel-item
              v-for="(item, index) in hj_two.image"
              :key="index"
            >
              <img :src="tubase + item" alt="" />
            </el-carousel-item>
          </el-carousel>
        </div>
        <div
          :class="[
            'hjlist_two_left',
            'animated',
            show2 ? 'fadeInRightBig' : '',
          ]"
        >
          <router-link :to="'/Xq?id='+2">
            <h2>{{ hj_two.title }}</h2>
            <div v-html="hj_two.content"></div>
          </router-link>
        </div>
      </div>
    </div>
    <!-- hjlist_twobox -->
    <div class="hjlist_twobox">
      <div class="hjlist_two">
        <div
          :class="['hjlist_two_left', 'animated', show3 ? 'fadeInLeftBig' : '']"
        >
          <router-link :to="'/Xq?id='+3">
            <h2>{{ hj_three.title }}</h2>
            <div v-html="hj_three.content"></div>
          </router-link>
        </div>
        <div
          :class="['hjlist_two_right', 'animated', show3 ? 'fadeInUpBig' : '']"
        >
          <el-carousel height="540px" direction="vertical" :autoplay="true">
            <el-carousel-item
              v-for="(item, index) in hj_three.image"
              :key="index"
            >
              <img :src="tubase + item" alt="" />
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      show2: false,
      show3: false,
      show4: false,
      huangjia: `
      <p>皇家园林，在古籍里面称之为“苑”、“囿（yòu）”、“宫苑”、“园囿”、“御苑”，为中国园林的三种基本类型之一。</p>
      <p>中国自奴隶社会到封建社会这一阶段，连续几千年的漫长历史时期，帝王君临天下，至高无上，皇权是绝对的权威。
      像古代西方那样震慑一切的神权，在中国相对皇权而言始终是次要的、从属的地位。与此相适应的，一整套突出帝王至上、
      皇权至尊的礼法制度也必然渗透到与皇家有关的一切政治仪典、起居规则、生活环境之中，表现为所谓皇家气派。</p>
      <p>园林作为皇家生活环境的一个重要组成部分，形成了有别于其他园林类型的皇家园林。</p>
      <p>其中作为代表的有北京颐和园，承德避暑山庄，北京北海公园等。</p>
      `,
      hj_one: {
       
        title: "颐和园",
        content: `颐和园,坐落在北京市海淀区新建宫门路19号,距城区十五公里.是一座巨大的皇家园林和清朝的行宫.颐和园素以人工建筑与自然山水巧妙结合的造园手法著称于世,是中国园林艺术顶峰时期的代表.与承德避暑山庄,拙政园,留园并称为中国四大名园.`,
        image: [
          "huangjia/hj_10.jpg",
          "huangjia/hj_11.jpg",
          "huangjia/hj_12.jpg",
          "huangjia/hj_13.jpg",
        ],
      },
      hj_two: {
        
        title: "承德避暑山庄",
        content: `避暑山庄——中国现存最大的皇家园林。
                  山庄正门在宫墙南端，门上镶有用汉、藏、满、回、蒙五种文字镌刻的“丽正门”匾额，门内九重院落组成了皇帝日常起居和处理政务的主要场所——正宫。避暑山庄实际已成为清政府的第二个政治中心。`,
        image: [
          "huangjia/hj_06.jpg",
          "huangjia/hj_07.jpg",
          "huangjia/hj_08.jpg",
          "huangjia/hj_09.jpg",
        ],
      },
      hj_three: {
        
        title: "北海公园",
        content: `北海公园位于北京城的中心，是中国现存历史上建园最早、保存最完整、文化沉积最深厚的古典皇家园林。北海的形成和发展，历经金、元、明、清数个朝代，承载着中国近千年的历史和文化，形成了以皇家园林为代表的造园艺术风格，它是凝聚着历代园林文化艺术之大成的杰作。`,
        image: [
          "huangjia/hj_14.jpg",
          "huangjia/hj_15.jpg",
          "huangjia/hj_16.jpg",
          "huangjia/hj_17.jpg",
        ],
      }
    };
  },
  methods: {
    scroll() {
      var height = document.documentElement.scrollTop;
      console.log(height);
      if (height >= 350) {
        this.show = true;
      }
      if (height >= 900) {
        this.show2 = true;
      }
      if (height >= 1400) {
        this.show3 = true;
      }
      
    },
  },
  created() {
    window.addEventListener("scroll", this.scroll);
  },
};
</script>

<style>
.hjlist {
  width: 100%;
  overflow: hidden;
}
/* .hjlist_one */
.yuan {
  width: 50px;
  height: 50px;
  font-size: 30px;
  color: #fff;
  margin: 0 auto;
  line-height: 50px;
  background: rgb(255, 0, 0, 0.5);
  text-align: center;
  border-radius: 50%;
}
.contanier {
  width: 1170px;
  margin: 0 auto;
}

.hjlist_onebox {
  width: 100%;
  height: auto;
  background-size: cover;
}
.hjlist_one {
  padding-bottom: 150px;
  background: rgb(255, 255, 255, 0.4);
  text-align: center;
  font-family: "隶书";
  padding-bottom: 100px;
}
.hjlist_one .hj_title {
  font-size: 80px;
}
.hjlist_one .hj_cont {
  font-size: 36px;
  text-align: start;
  text-indent: 2em;
}

/* hjlist_two */
.hjlist_twobox {
  width: 100%;
  height: 600px;
  background: #ada596;
}
.hjlist_two {
  width: 1170px;
  margin: 0 auto;
  height: auto;
  font-family: "隶书";
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}
.hjlist_two .hjlist_two_left {
  padding: 30px;
  flex-basis: 40%;
}.hjlist_two .hjlist_two_left a{
  color:black;
}
.hjlist_two .hjlist_two_left h2 {
  font-size: 36px;
}
.hjlist_two .hjlist_two_left div {
  font-size: 25px;
}
.hjlist_two .hjlist_two_right {
  background: rgb(255, 255, 255, 0.5);
  padding: 30px;
  flex-basis: 60%;
}
.hjlist_two .hjlist_two_right img{
  width: 100%;
  display: block;
}
</style>
 
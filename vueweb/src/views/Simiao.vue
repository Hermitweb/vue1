<template>
  <div class="simiao_box">
    <div
      class="hjlist_onebox"
      :style="'background-image:url(' + tubase + 'simiao/sm_bg.jpg)'"
    >
      <div class="contanier hjlist_one">
        <div :class="['hj_title', 'animated', 'slideInLeft']">中华园林艺术</div>

        <div class="yuan">之</div>
        <div class="hj_title animated slideInRight">寺庙园林</div>
        <div v-html="sm_title" class="hj_cont animated fadeInUpBig"></div>
      </div>
    </div>
    <!-- sm_list_onebox 1-->
    <div class="sm_list_onebox">
      <div class="sm_list_one">
        <div :class="['smlist_left', 'animated', show1 ? 'fadeInLeftBig' : '']">
          <router-link :to="'/Xq?id='+7">
            <h2>{{ sm_list1.title }}</h2>
            <div v-html="sm_list1.content"></div>
          </router-link>
        </div>
        <div :class="['smlist_right', 'animated', show1 ? 'fadeInUpBig' : '']">
          <el-carousel height="540px" direction="vertical" :autoplay="true">
            <el-carousel-item
              v-for="(item, index) in sm_list1.image"
              :key="index"
            >
              <img :src="tubase + item" alt="" />
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
    <!-- sm_list_onebox 2-->
    <div class="sm_list_onebox">
      <div class="sm_list_one">
        <div :class="['smlist_right', 'animated', show2 ? 'fadeInUpBig' : '']">
          <el-carousel height="540px" direction="vertical" :autoplay="true">
            <el-carousel-item
              v-for="(item, index) in sm_list2.image"
              :key="index"
            >
              <img :src="tubase + item" alt="" />
            </el-carousel-item>
          </el-carousel>
        </div>
        <div :class="['smlist_left', 'animated', show2 ? 'fadeInLeftBig' : '']">
          <router-link :to="'/Xq?id='+8">
            <h2>{{ sm_list2.title }}</h2>
            <div v-html="sm_list2.content"></div>
          </router-link>
        </div>
      </div>
    </div>
    <!-- sm_list_onebox 3-->
    <div class="sm_list_onebox">
      <div class="sm_list_one">
        <div :class="['smlist_left', 'animated', show3 ? 'fadeInLeftBig' : '']">
          <router-link :to="'/Xq?id='+9">
            <h2>{{ sm_list3.title }}</h2>
            <div v-html="sm_list3.content"></div>
          </router-link>
        </div>
        <div :class="['smlist_right', 'animated', show3 ? 'fadeInUpBig' : '']">
          <el-carousel height="540px" direction="vertical" :autoplay="true">
            <el-carousel-item
              v-for="(item, index) in sm_list3.image"
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
      sm_title: `<p>寺庙园林，指佛寺、道观、历史名人纪念性祠庙的园林，为中国园林的三种基本类型（寺庙园林、皇家园林、私家园林）之一。</p>
      <p>寺庙园林狭者仅方丈之地，广者则泛指整个宗教圣地，其实际范围包括寺观周围的自然环境，是寺庙建筑、宗教景物、人工山水和天然山水的综合体。
      一些著名的大型寺庙园林，往往历经成百上千年的持续开发，积淀着宗教史迹与名人历史故事，题刻下历代文化雅士的摩崖碑刻和楹联诗文，使寺庙园林蕴含着丰厚的历史和文化游赏价值。</p>
      <p>寺庙园林是中国园林的一个分支，论其数量，它比皇家园林、私家园林的总和要多几百倍；论其特色，它具有一系列不同于皇家园林和私家园林的特长；
      论其选址，它突破了皇家园林和私家园林在分布上的局限，可以广布在自然环境优越的名山胜地。</p>
      `,
      sm_list1: {
       
        title: "寒山寺",
        content: `
        <p>寒山寺位于苏州市姑苏区，始建于南朝萧梁代天监年间（公元502～519年），初名“妙利普明塔院”。寒山寺占地面积约1.3万平方米，建筑面积三千四百余平方米。</p>
        <p>寒山寺属于禅宗中的临济宗。唐代贞观年间，当时的名僧寒山、希迁两位高僧创建寒山寺。
        1000多年内寒山寺先后5次遭到火毁（一说是7次），最后一次重建是清代光绪年间。
        历史上寒山寺曾是中国十大名寺之一，寺内古迹甚多，有张继诗的石刻碑文，寒山、拾得的石刻像，文徵明、唐寅所书碑文残片等。</p>
        `,
        image: [
          "simiao/sm_01.jpg",
          "simiao/sm_02.jpg",
          "simiao/sm_03.jpg",
          "simiao/sm_04.jpg",
        ],
      },
      sm_list2: {
       
        title: "武侯祠",
        content: `
        <p>南阳武侯祠坐落于中国历史文化名城河南省南阳市城西卧龙岗上，初建于魏晋，盛于唐宋，有1800多年历史，
        是刘备“三顾茅庐“发生地，诸葛亮躬耕南阳所在地，历代皇室及百姓祭祀诸葛亮的地方。</P>
        <P>南阳卧龙岗武侯祠1963年被列为首批河南省重点文物保护单位，1996年被列为全国重点文物保护单位，2007年荣膺国家AAAA级旅游景区，2008年被列为首批国家二级博物馆。</p>
        `,
        image: [
          "simiao/sm_05.jpg",
          "simiao/sm_06.jpg",
          "simiao/sm_07.jpg",
          "simiao/sm_08.jpg",
        ],
      },
      sm_list3: {
        
        title: "灵隐寺",
        content: `
        <p>灵隐寺，中国佛教古寺，又名云林寺。</p>
        <p>灵隐寺开山祖师为西印度僧人慧理和尚。五代吴越王钱镠命请永明延寿大师重兴开拓，并赐名灵隐新寺。宋宁宗嘉定年间，灵隐寺被誉为江南禅宗“五山”之一。
        清顺治年间，禅宗巨匠具德和尚住持灵隐，筹资重建，仅建殿堂时间就前后历十八年之久，其规模之宏伟跃居“东南之冠”。清康熙二十八年（1689年），康熙帝南巡时，赐名 “云林禅寺”。</p>
        <p>灵隐寺主要以天王殿、大雄宝殿、药师殿、法堂、华严殿为中轴线，两边附以五百罗汉堂、济公殿、华严阁、大悲楼、方丈楼等建筑构成。现任方丈是光泉法师。</p>
        
        `,
        image: [
          "simiao/sm_09.jpg",
          "simiao/sm_10.jpg",
          "simiao/sm_11.jpg",
          "simiao/sm_12.jpg",
        ],
      },
      show1: false,
      show2: false,
      show3: false,
    };
  },
  methods: {
    scroll() {
      var height = document.documentElement.scrollTop;
      console.log(height);
      if (height >= 200) {
        this.show1 = true;
      }
      if (height >= 750) {
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
.hjlist_onebox {
  width: 100%;
  height: auto;
  background-size: cover;
}
.sm_list_onebox {
  width: 100%;
  background: #f3fae9;
}
.sm_list_one {
  width: 1170px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: "隶书";
}
.sm_list_one .smlist_left {
  padding: 0px 15px;
  flex-basis: 40%;
}
.sm_list_one .smlist_left a {
  color: black;
}
.sm_list_one .smlist_left div:nth-child(1) {
  font-size: 36px;
}
.sm_list_one .smlist_left div:nth-child(2) {
  font-size: 25px;
}
.sm_list_one .smlist_right {
  background: rgb(255, 255, 255, 0.4);
  padding: 30px;
  flex-basis: 60%;
}
</style>
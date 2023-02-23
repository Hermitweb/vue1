<template>
  <div class="wenren_box">
    <div
      class="hjlist_onebox"
      :style="'background-image:url(' + tubase + 'sijia/wr_bg.jpg)'"
    >
      <div class="contanier hjlist_one">
        <div :class="['hj_title', 'animated', 'slideInLeft']">中华园林艺术</div>

        <div class="yuan">之</div>
        <div class="hj_title animated slideInRight">私家园林</div>
        <div v-html="Sj_title" class="hj_cont animated fadeInUpBig"></div>
      </div>
    </div>
    <!-- wr_list_onebox -->
    <div class="wr_list_onebox">
      <div class="wr_list_one">
        <div :class="['wrlist_left', 'animated', show1 ? 'fadeInLeftBig' : '']">
          <router-link :to="'/Xq?id='+4">
            <h2>{{ Sj_list1.title }}</h2>
            <div v-html="Sj_list1.content"></div>
          </router-link>
        </div>
        <div :class="['wrlist_right', 'animated', show1 ? 'fadeInUpBig' : '']">
          <el-carousel height="540px" direction="vertical" :autoplay="true">
            <el-carousel-item
              v-for="(item, index) in Sj_list1.image"
              :key="index"
            >
              <img :src="tubase + item" alt="" />
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
    <!-- wr_list_onebox -->
    <div class="wr_list_onebox">
      <div class="wr_list_one">
        <div :class="['wrlist_right', 'animated', show2 ? 'fadeInUpBig' : '']">
          <el-carousel height="540px" direction="vertical" :autoplay="true">
            <el-carousel-item
              v-for="(item, index) in Sj_list2.image"
              :key="index"
            >
              <img :src="tubase + item" alt="" />
            </el-carousel-item>
          </el-carousel>
        </div>
        <div
          :class="['wrlist_left', 'animated', show2 ? 'fadeInRightBig' : '']"
        >
          <router-link :to="'/Xq?id='+5">
            <h2>{{ Sj_list2.title }}</h2>
            <div v-html="Sj_list2.content"></div>
          </router-link>
        </div>
      </div>
    </div>
    <!-- wr_list_onebox -->
    <div class="wr_list_onebox">
      <div class="wr_list_one">
        <div :class="['wrlist_left', 'animated', show3 ? 'fadeInLeftBig' : '']">
          <router-link :to="'/Xq?id='+6">
            <h2>{{ Sj_list3.title }}</h2>
            <div v-html="Sj_list3.content"></div>
          </router-link>
        </div>
        <div :class="['wrlist_right', 'animated', show3 ? 'fadeInUpBig' : '']">
          <el-carousel height="540px" direction="vertical" :autoplay="true">
            <el-carousel-item
              v-for="(item, index) in Sj_list3.image"
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
      Sj_title: `<p>中国古代园林，除皇家园林外，还有一类属于王公、贵族、地主、富商、士大夫等私人所有的园林，称为私家园林。</p>
      <p>古籍里称之为园、园亭、园墅、池馆、山池、山庄、别墅、别业等。规模较小，一般只有几亩至十几亩，小者仅一亩半亩而已；
      大多以水面为中心，四周散布建筑，构成一个个景点或几个景点；以修身养性，闲适自娱为园林主要功能；园主多是文人学士出身，能诗会画，清高风雅，淡素脱俗。
      私家园林集中在南京、苏州、无锡等地。</p>
      <P>现代保存下来的园林大多属于明清时代，这些园林充分表现了古代传统园林建筑的独特风格和高超的造园艺术。</P>`,
      Sj_list1: {
      
        title: "沧浪亭",
        content: `
        <p>沧浪亭，位于江苏省苏州市城南，是苏州最古老的一所园林，始建于北宋庆历年间（公元1041～1048年），南宋初年（公元12世纪初）曾为名将韩世忠的住宅。
        沧浪亭造园艺术与众不同，未进园门便设一池绿水绕于园外。园内以山石为主景，迎面一座土山，沧浪石亭便坐落其上。山下凿有水池，山水之间以一条曲折的复廊相连。
        假山东南部的明道堂是园林的主建筑，此外还有五百名贤祠、看山楼、翠玲珑馆、仰止亭和御碑亭等建筑与之衬映。</p>
        <p>沧浪亭与狮子林、拙政园、留园一齐列为苏州宋、元、明、清四大园林，园内除沧浪亭本身外还有印心石屋、明道堂、看山楼等建筑和景观。</p>
        `,
        image: [
          "sijia/wr_01.jpg",
          "sijia/wr_02.jpg",
          "sijia/wr_03.jpg",
          "sijia/wr_04.jpg",
        ],
      },

      Sj_list2: {
       
        title: "拙政园",
        content: `
        <p>拙政园，位于江苏省苏州市，始建于明正德初年（16世纪初），是江南古典园林的代表作品。</p>
        <p>四百多年来，拙政园几度分合，或为“私人”宅园，或做“金屋”藏娇，或是“王府”治所，留下了许多诱人探寻的遗迹和典故。 </p>
        <p>拙政园与北京颐和园、承德避暑山庄、苏州留园一起被誉为中国四大名园。</p>
        `,
        image: [
          "sijia/hj_21.jpg",
          "sijia/hj_18.jpg",
          "sijia/hj_19.jpg",
          "sijia/hj_20.jpg",
        ],
      },
      Sj_list3: {
       
        title: "留园",
        content: `
        <p>留园，是苏州古典园林，始建于明代。清代时称“寒碧山庄”，俗称“刘园”，后改为“留园”。以园内建筑布置精巧、奇石众多而知名，与苏州拙政园、北京颐和园、承德避暑山庄并称中国四大名园。</p>
        <p>留园为中国大型古典私家园林，占地面积23300平方米，代表清代风格，园以建筑艺术精湛著称，厅堂宏敞华丽，庭院富有变化，太湖石以冠云峰为最，有“不出城郭而获山林之趣”。
        
        </p>
        <p>留园是第一批全国重点文物保护单位、世界文化遗产、国家5A级旅游景区。</p>
        `,
        // 其建筑空间处理精湛，造园家运用各种艺术手法，构成了有节奏有韵律的园林空间体系，成为世界闻名的建筑空间艺术处理的范例。现园分四部分，东部以建筑为主，中部为山水花园，西部是土石相间的大假山，北部则是田园风光。
        image: [
          "sijia/wr_05.jpg",
          "sijia/wr_06.jpg",
          "sijia/wr_07.jpg",
          "sijia/wr_08.jpg",
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
.wr_list_onebox {
  width: 100%;
  background: #b9c9e0;
}
.wr_list_one {
  width: 1170px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: "隶书";
}
.wr_list_one .wrlist_left {
  padding: 0px 15px;
  flex-basis: 40%;
}
.wr_list_one .wrlist_left a {
  color: black;
}
.wr_list_one .wrlist_left div:nth-child(1) {
  font-size: 36px;
}
.wr_list_one .wrlist_left div:nth-child(2) {
  font-size: 25px;
}
.wr_list_one .wrlist_right {
  background: rgb(255, 255, 255, 0.4);
  padding: 30px;
  flex-basis: 60%;
}
</style>
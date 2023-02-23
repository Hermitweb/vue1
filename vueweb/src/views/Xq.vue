<template>
  <div class="xq_box">
    <div class="xq_content" v-for="(value, index) in data_cont" :key="index">
      <div class="top">
        <div class="top_left">
          <div>
            <h1>{{ value.title }}</h1>
            <div>
              <i class="el-icon-map-location"></i><br />{{ value.address }}
            </div>
          </div>
          <div class="adress_img">
            <a :href="value.adress_link" target = "_blank">
              <img :src="tubase + value.adress_img" alt="" />
              <h3>百度地图</h3>
            </a>
          </div>
        </div>
        <div class="top_right">
          <el-image
            style="width: 350px; height: 350px"
            :src="value.image[0]"
            :preview-src-list="value.image"
          >
          </el-image>
        </div>
      </div>
      <div class="bottom"><div v-html="value.content"></div></div>
    </div>
  </div>
</template>

<script>
export default {
  //{{$route.query.id}}
  data() {
    return {
      data: [
        {
          id: 1,
          title: "颐和园",
          address: "北京市海淀区新建宫门路19号",
          adress_link: "https://j.map.baidu.com/8b/xOf",
          adress_img: "huangjia/yhy.png",
          image: [
            "http://localhost/vuetu/huangjia/hj_10.jpg",
            "http://localhost/vuetu/huangjia/hj_11.jpg",
            "http://localhost/vuetu/huangjia/hj_12.jpg",
            "http://localhost/vuetu/huangjia/hj_13.jpg",
          ],
          content: `
          <p>颐和园，中国清朝时期皇家园林，前身为清漪园，坐落在北京西郊，距城区15公里，全园占地3.009平方公里(其中颐和园世界文化遗产区面积是2.97平方公里)，水面约占四分之三。与圆明园毗邻。
          <p>它是以昆明湖、万寿山为基址，以杭州西湖为蓝本，汲取江南园林的设计手法而建成的一座大型山水园林，也是保存最完整的一座皇家行宫御苑，被誉为“皇家园林博物馆”。</p>
          清朝乾隆皇帝继位以前，在北京西郊一带，建起了四座大型皇家园林。乾隆十五年（1750年），乾隆皇帝为孝敬其母崇庆皇太后动用448万两白银在这里改建为清漪园，形成了从现清华园到香山长达二十公里的皇家园林区。
          咸丰十年（1860年），清漪园被英法联军焚毁。光绪十四年（1888年）重建，改称颐和园，作消夏游乐地。光绪二十六年（1900年），颐和园又遭“八国联军”的破坏，珍宝被劫掠一空。
          清朝灭亡后，颐和园在军阀混战和国民党统治时期，又遭破坏。</p>
          <p>1961年3月4日，颐和园被公布为第一批全国重点文物保护单位，与同时公布的承德避暑山庄、拙政园、留园并称为中国四大名园，1998年11月被列入《世界遗产名录》。
          2007年5月8日，颐和园经国家旅游局正式批准为国家5A级旅游景区。</p> 
          <p>2009年，颐和园入选中国世界纪录协会中国现存最大的皇家园林。</p>
          `,
        },
        {
          id: 2,
          title: "承德避暑山庄",
          address: "河北省承德市中心北部，武烈河西岸一带狭长的谷地上。",
          adress_link: "https://j.map.baidu.com/69/nFf",
          adress_img: "huangjia/bssz.png",
          image: [
            "http://localhost/vuetu/huangjia/hj_06.jpg",
            "http://localhost/vuetu/huangjia/hj_07.jpg",
            "http://localhost/vuetu/huangjia/hj_08.jpg",
            "http://localhost/vuetu/huangjia/hj_09.jpg",
          ],
          content: `
          <p>承德避暑山庄又名皇家避暑行宫。</p>
          <p>承德是首批国家历史文化名城,1703年清康熙修建避暑山庄,成为清王朝的第二个政治中心;1723年设热河厅;1733年雍正取“承受先祖德泽”之义;赐字“皇承天德”释义先皇秉承天地化育万物的恩德;并设承德直隶州,始称“承德”;民国和解放初期为原热河省省会;1955年,热河省建制撤销,承德划归河北省,为省辖市。</p>
          <p>承德的避暑山庄及其周围寺庙是中国十大风景名胜、旅游胜地四十佳、国家重点风景名胜区,被联合国教科文组织批准为世界文化遗产,也是国家首批世界文化遗产。</p>
          <p>承德避暑山庄,又名“承德离宫”或“热河行宫”“皇家避暑行宫”,是世界文化遗产、国家AAAAA级旅游景区、全国重点文物保护单位、中国四大名园之一。山庄位于河北省承德市中心北部,武烈河西岸一带狭长的谷地上,是清代皇帝夏天避暑和处理政务的场所。</p>
          <p>承德避暑山庄始建于1703年(康熙四十二年),经康熙、雍正、乾隆三朝,历时89年于1792年建成,占地564万平方米,是世界现存最大皇家园林。1961年被国务院公布为全国重点文物保护单位。避暑山庄按中国地理形貌选址设计,以西北山区、东南湖区、北部平原区之地形地貌构成中国版图的缩影。</p>
          `,
        },
        {
          id: 3,
          title: "北海公园",
          address: "北京市西城区文津街1号。",
          adress_link: "https://j.map.baidu.com/51/1w",
          adress_img: "huangjia/bhgy.png",
          image: [
            "http://localhost/vuetu/huangjia/hj_14.jpg",
            "http://localhost/vuetu/huangjia/hj_15.jpg",
            "http://localhost/vuetu/huangjia/hj_16.jpg",
            "http://localhost/vuetu/huangjia/hj_17.jpg",
          ],
          content: `
          <p>北海公园(Beihai Park)，位于北京市中心区，城内景山西侧，在故宫的西北面，与中海、南海合称三海。属于中国古代皇家园林。全园以北海为中心，面积约71公顷，水面占583市亩，陆地占480市亩。这里原是辽、金、元建离宫，明、清辟为帝王御苑，是中国现存最古老、最完整、最具综合性和代表性的皇家园林之一，1925年开放为公园。是中国保留下来的最悠久最完整的皇家园林，为全国重点文物保护单位，是国家AAAA级旅游景区。</p>
          <p>北海公园是中国现存最古老、最完整、最具综合性和代表性的皇家园林之一。</p>
          <p>北海公园以北海为中心，全园分为“北岸景区”“东岸景区”“琼岛景区”和“团城景区”四大区域。北岸区位于公园西北角，主要由快雪堂、五龙亭和小西天、静心斋、阐福寺和西天梵境等一系列宗教建筑构成，其中大家耳熟能详的“九龙壁”也位于此区域内。东岸区位于公园东北角，主要由先蚕坛、画舫斋、濠濮间组成。琼岛景区位于北海南部，以永安寺为中心，周围建有长廊、漪澜堂、悦心殿、阅古楼等建筑，已成为北海标志性建筑的白塔，则位于琼岛的中心最高点，颇有主宰全园的气势。团城位于北海公园最南端，主体建筑为承光殿，店内供奉有一尊1.5米高的大玉佛，通体镶嵌宝石，光彩夺目，游览时必不可错过。团城四周筑墙，自成一体，堪称：城中之城。团城北端有永安桥与琼华岛相连。</p>
          `,
        },
        {
          id: 4,
          title: "沧浪亭",
          address: "北京市西城区文津街1号。",
          adress_link: "https://j.map.baidu.com/ce/YPJ",
          adress_img: "sijia/lct.png",
          image: [
            "http://localhost/vuetu/sijia/wr_01.jpg",
            "http://localhost/vuetu/sijia/wr_02.jpg",
            "http://localhost/vuetu/sijia/wr_03.jpg",
            "http://localhost/vuetu/sijia/wr_04.jpg",
          ],
          content: `
          <p>沧浪亭著名的苏州园林之一。</p>
          <p>沧浪亭位于苏州城南三元坊，是现存历史最为悠久的江南园林。与狮子林、拙政园、留园并称为苏州宋、元、明、清四大园林，代表着宋朝的艺术风格。沧浪亭占地面积1.08公顷，园内有一泓清水贯穿，波光倒影，景象万千。</p>
          <p>“沧浪亭”始为五代时吴越国广陵王钱元璙近戚中吴军节度使孙承祐的池馆。宋代著名诗人苏舜钦以四万贯钱买下废园，进行修筑，傍水造亭，因感于“沧浪之水清兮，可以濯吾缨；沧浪之水浊兮，可以濯吾足”，题名“沧浪亭”，自号沧浪翁，并作《沧浪亭记》。欧阳修应邀作《沧浪亭》长诗，诗中以“清风明月本无价，可惜只卖四万钱”题咏此事。自此，“沧浪亭”名声大振。苏氏之后，沧浪亭几度荒废，南宋初年（12世纪初）一度为抗金名将韩世忠的宅第，清康熙三十五年（公元1696年）巡抚宋荦重建此园，把傍水亭子移建于山之巅，形成今天沧浪亭的布局基础，并以文征明隶书“沧浪亭”为匾额。清同治十二年（公元1873年）再次重建，遂成今天之貌。沧浪亭虽因历代更迭有兴废，已非宋时初貌，但其古木苍老郁森，还一直保持旧时的风采，部分地反映出宋代园林的风格。</p>
          `,
        },
        {
          id: 5,
          title: "拙政园",
          address: "江苏省苏州市平江区东北街178号。",
          adress_link: "https://j.map.baidu.com/54/2u",
          adress_img: "sijia/zzy.png",
          image: [
            "http://localhost/vuetu/sijia/hj_21.jpg",
            "http://localhost/vuetu/sijia/hj_18.jpg",
            "http://localhost/vuetu/sijia/hj_19.jpg",
            "http://localhost/vuetu/sijia/hj_20.jpg",
          ],
          content: `
          <p>拙政园，位于江苏省苏州市，始建于明正德初年（16世纪初），是江南古典园林的代表作品。与北京颐和园、承德避暑山庄、苏州留园一起被誉为中国四大名园。</p>
          <p>拙政园位于苏州城东北隅（东北街178号），截至2014年，仍是苏州存在的最大的古典园林，占地78亩（约合5.2公顷）。全园以水为中心，山水萦绕，厅榭精美，花木繁茂，具有浓郁的江南汉族水乡特色。花园分为东、中、西三部分，东花园开阔疏朗，中花园是全园精华所在，西花园建筑精美，各具特色。园南为住宅区，体现典型江南地区汉族民居多进的格局。园南还建有苏州园林博物馆，是国内唯一的园林专题博物馆。</p>
          <p>1961年3月，拙政园被列为首批全国重点文物保护单位，1991年被国家计委、旅游局、建设部列为国家级特殊游览参观点。1997年联合国教科文组织批准列入《世界遗产名录》。2007年被国家旅游局评为首批AAAAA级旅游景区。</p>
          `,
        },
        {
          id: 6,
          title: "留园",
          address: "江南古城苏州市留园路302号。",
          adress_link: "https://j.map.baidu.com/28/4l7J",
          adress_img: "sijia/ly.png",
          image: [
            "http://localhost/vuetu/sijia/wr_05.jpg",
            "http://localhost/vuetu/sijia/wr_06.jpg",
            "http://localhost/vuetu/sijia/wr_07.jpg",
            "http://localhost/vuetu/sijia/wr_08.jpg",
          ],
          content: `
          <p>留园是中国著名古典园林，位于江南古城苏州，以园内建筑布置精巧、奇石众多而知名。与苏州拙政园、北京颐和园、承德避暑山庄并称中国四大名园。一九六一年，留园被中华人民共和国国务院公布为第一批全国重点文物保护单位之一。一九九七年，包括留园在内的苏州古典园林被列为世界文化遗产。</p>
　　      <p>留园位于苏州阊门外，原是明嘉靖年间太仆寺卿徐泰时的东园。园内 　　假山为叠石名家周秉忠(时臣)所作。清嘉庆年间，刘恕以故园改筑，名寒碧山庄，又称刘园。同治年间盛旭人（其儿子即盛宣怀，清著名实业家政治家，北洋大学(天津大学）南洋公学（上海交通大学）创始人）购得，重加扩建，修葺一新，取留与刘的谐音，始称留园。科举考试的最后一个状元俞樾作《留园游记》称其为吴下名园之冠。留园内建筑的数量在苏州诸园中居冠，厅堂、走廊、粉墙、洞门等建筑与假山、水池、花木等组合成数十个大小不等的庭园小品。其在空间上的突出处理，充分体现了古代造园家的高超技艺、卓越智慧和江南园林建筑的艺术风格和特色。</p>
　　      <p>留园全园分为四个部分，在一个园林中能领略到山水、田园、山林、庭园四种不同景色：中部以水景见长，是全园的精华所在；东部以曲院回廊的建筑取胜，园的东部有著名的佳晴喜雨快雪之厅、林泉耆硕之馆、还我读书处、冠云台、冠云楼等十数处斋、轩，院内池后立有三座石峰，居中者为名石冠云峰，两旁为瑞云，岫云两峰；北部具农村风光，并有新辟盆景园；西区则是全园最高处，有野趣，以假山为奇，土石相间，堆砌自然。池南涵碧山房与明瑟楼为留园的主要观景建筑。 留园内的建筑景观还有表现淡泊处世之坦然的“小桃源（小蓬莱）”以及远翠阁、曲溪楼、清风池馆等。</p>
          `,
        },
        {
          id: 7,
          title: "寒山寺",
          address: "江苏省苏州市姑苏区寒山寺弄24号。",
          adress_link: "https://j.map.baidu.com/ff/ch",
          adress_img: "simiao/hss.png",
          image: [
            "http://localhost/vuetu/simiao/sm_01.jpg",
            "http://localhost/vuetu/simiao/sm_02.jpg",
            "http://localhost/vuetu/simiao/sm_03.jpg",
            "http://localhost/vuetu/simiao/sm_04.jpg",
          ],
          content: `
          <p>寒山寺在苏州城西阊门外5公里外的枫桥镇，建于六朝时期的梁代天监年间（公元502-519年），距今已有1400多年。原名“妙利普明塔院”。</p>
          <p>寒山寺山门前面的石拱圈古桥是江村桥，桥堍与山门之间那垛黄墙称照壁。山门两旁两棵古樟。黄墙内古典楼阁飞檐翘角，右为枫江楼，左为霜钟楼，都源于枫桥夜泊诗。</p>
          <p>寒山寺寺院布局并不追求左右均衡，照墙和山门基本是一线相承，后边的大雄宝殿、藏经楼，并不在一条中轴线上；新建的普明塔院，则按南北向中轴线布局。寺中处处皆院，错落相通。</p>
          <p>寒山寺属于禅宗中的临济宗。唐代贞观年间，当时的名僧寒山、希迁两位高僧创建寒山寺。1000多年内寒山寺先后5次遭到火毁（一说是7次），最后一次重建是清代光绪年间。历史上寒山寺曾是中国十大名寺之一，寺内古迹甚多。</p>
          <div style="width:500px;height:320px;margin:0 auto;"><img src="https://iknow-pic.cdn.bcebos.com/4bed2e738bd4b31ce833345a89d6277f9f2ff8c0" style="width:100%;display:block;"></div>
          <p>扩展资料：</p>
          <p>世界之最：</p>
          <p>2008年12月30日，世界最大诗碑和最大佛钟在苏州寒山寺正式落成开放。据了解，今年12月初寒山寺大钟、大碑均已被上海大世界基尼斯总部认定为创“世界记录”。</p>
          <p>其中“寒山寺大佛钟”重达108吨，高8.608米，最大直径5.242米，钟面刻有七万多字的《大乘妙法莲花经》。“寒山寺大碑”总高为16.9米、重约400吨，其正面刻有唐代张继所诗、俞樾所书的《枫桥夜泊》，背面则刻有乾隆御笔的《般若波罗蜜多心经》。</p>
          `,
        },
        {
          id: 8,
          title: "武侯祠",
          address: "江苏省苏州市姑苏区寒山寺弄24号。",
          adress_link: "https://j.map.baidu.com/70/M0z",
          adress_img: "simiao/whs.png",
          image: [
            "http://localhost/vuetu/simiao/sm_05.jpg",
            "http://localhost/vuetu/simiao/sm_06.jpg",
            "http://localhost/vuetu/simiao/sm_07.jpg",
            "http://localhost/vuetu/simiao/sm_08.jpg",
          ],
          content: `
          <p>武侯祠（汉昭烈庙），全国重点文物保护单位，国家AAAA级旅游景区，国家一级博物馆。武侯祠位于四川省成都市武侯区，肇始于公元223年修建刘备惠陵时，它是中国唯一的一座君臣合祀祠庙和最负盛名的诸葛亮、刘备及蜀汉英雄纪念地，也是全国影响最大的三国遗迹博物馆。</p>
          <p>1961年国务院公布为首批全国重点文物保护单位，2008年评选为首批国家一级博物馆。成都武侯祠现占地15万平方米，由三国历史遗迹区（文物区）、西区（三国文化体验区）以及锦里民俗区（锦里）三部分组成，享有“三国圣地”的美誉。</p>
          <div style="width:500px;height:320px;margin:0 auto;"><img src="https://iknow-pic.cdn.bcebos.com/728da9773912b31b88bc3a7d8918367adbb4e196" style="width:100%;display:block;"></div>
          <p>扩展资料</p>
          <p>武侯祠主要景点：</p>
          <p>1、南郊公园</p>
          <p>2003年12月，原成都市南郊公园合并为武侯祠园林区。南郊公园原系民国时期四川省主席、抗战时期第七战区司令长官刘湘墓园。始建于1938年至1942年，400米的中轴线纵贯南北，石牌坊大门、三洞门、四方亭、荐馨堂、墓室等。</p>
          <p>2、锦里古街</p>
          <p>现紧邻武侯祠的“锦里”古街由成都武侯祠博物馆斥资复建，为“全国文化产业示范基地”。锦里作为武侯祠博物馆（三国历史遗迹区、锦里民俗区、西区）的一部分，占地30000余平方米，建筑面积14000余平方米，街道全长550米。</p>
          `,
        },
        {
          id: 9,
          title: "灵隐寺",
          address: "浙江省杭州市西湖区灵隐路法云弄1号。",
          adress_link: "https://j.map.baidu.com/3d/MUu",
          adress_img: "simiao/lys.png",
          image: [
            "http://localhost/vuetu/simiao/sm_09.jpg",
            "http://localhost/vuetu/simiao/sm_10.jpg",
            "http://localhost/vuetu/simiao/sm_11.jpg",
            "http://localhost/vuetu/simiao/sm_12.jpg",
          ],
          content: `
          <p>灵隐寺位于杭州西湖灵隐山麓，处于西湖西部的飞来峰旁，离西湖不远。灵隐寺又名“云林禅寺”，始建于东晋（公元326年），到现在已有一千六百多年历史，是我国佛教禅宗十刹之一。当时印度僧人慧理来杭，看到这里山峰奇秀，以为是“仙灵所隐”，就在这里建寺，取名灵隐。后来济公在此出家，由于他游戏人间的故事家喻户晓，灵隐寺因此名闻遐迩。五代吴越国时，灵隐寺曾两次扩建，大兴土木，建成为九楼、十八阁、七十二殿堂的大寺，房屋达1300余间，僧众达3000人。</p>
          <p>灵隐寺的最前面是天王殿，上悬“云林禅寺”匾额，是清代康熙的手笔。大殿正中佛龛里坐着袒胸露腹的弥勒佛像。弥勒佛后壁佛龛里，站着神态庄严、手执降魔杵的韦驮菩萨，系由独块香樟木雕成，是南宋遗物。灵隐寺的大雄宝殿是单层、重檐、三叠的建筑，高达33.6米。另有清末重塑之木雕释迦坐像，高约24.8米，金光四射，闪耀夺目，富有宋代守实雕塑之风，此外还有十二圆觉，二十诸天等佛。</p>
          <p>年进行全面修整后，改为永久性的钢筋水泥建筑。大殿规模宏敞，气势雄伟，殿正中的释迦牟尼佛像，高19.6米，是以唐代禅宗著名雕塑为蓝本，用24块香樟木雕成的。灵隐寺的殿宇、亭阁、经幢、石塔、佛像等建筑和雕塑艺术，对于研究我国佛教史、建筑艺术史和雕塑艺术史都很有价值，是祖国珍贵的文物。</p>
          <p>现在的灵隐寺园林，除寺内殿前殿旁还保存有一些假山、古树林木外，主要在于寺前的清溪流水沿岸，山泉之间曲径通幽，小桥飞跨。寺之山门前有冷泉亭、壑雷亭、翠微亭诸景。唐朝诗人白居易写有《冷泉亭记》来描述这里的景色。</p>
          `,
        },
      ],
      data_cont: [''],
    };
  },
  created() {
    var id = this.$route.query.id;
    var data = this.data
    var that = this;
    data.forEach((item) => {
      if(item.id==id){
        that.data_cont=[item]
          console.log(that.data_cont);
      }
    });
  },
};
</script>
<style>
.xq_box {
  width: 100%;
  height: auto;
}
.xq_content {
  width: 1170px;
  height: auto;
  margin: 0 auto;
  display: flex;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: "隶书";
}
.xq_content .top {
  flex-basis: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
.xq_content .top .top_left {
  flex-basis: 40%;
  display: flex;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 50px;
  flex-direction: row;
  justify-content: space-between;
}
.xq_content .top .top_right {
  flex-basis: 40%;
  text-align: center;
}

.xq_content .top .top_left div:nth-child(1) {
  font-weight: bold;
}
.xq_content .top .top_left div:nth-child(1) h1 {
  font-size: 45px;
  text-align: center;
}
.xq_content .top .top_left div:nth-child(1) div {
  text-align: center;
  font-size: 24px;
}
.xq_content .top .top_left a {
  color: black;
  display: block;
  width: 150px;
  height: 150px;
  margin-top: 30px;
  text-align: center;
}
.xq_content .top .top_left a img {
  width: 100%;
  display: block;
}
.xq_content .bottom {
  flex-basis: 100%;
}

.xq_content .bottom {
  text-indent: 2em;
}
.xq_content .bottom div {
  font-size: 24px;
  padding: 10px 30px;
}
</style>

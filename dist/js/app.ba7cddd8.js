(function(t){function i(i){for(var a,l,o=i[0],c=i[1],r=i[2],u=0,d=[];u<o.length;u++)l=o[u],Object.prototype.hasOwnProperty.call(s,l)&&s[l]&&d.push(s[l][0]),s[l]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(i);while(d.length)d.shift()();return n.push.apply(n,r||[]),e()}function e(){for(var t,i=0;i<n.length;i++){for(var e=n[i],a=!0,o=1;o<e.length;o++){var c=e[o];0!==s[c]&&(a=!1)}a&&(n.splice(i--,1),t=l(l.s=e[0]))}return t}var a={},s={app:0},n=[];function l(i){if(a[i])return a[i].exports;var e=a[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,l),e.l=!0,e.exports}l.m=t,l.c=a,l.d=function(t,i,e){l.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,i){if(1&i&&(t=l(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var a in t)l.d(e,a,function(i){return t[i]}.bind(null,a));return e},l.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(i,"a",i),i},l.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},l.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=i,o=o.slice();for(var r=0;r<o.length;r++)i(o[r]);var p=c;n.push([0,"chunk-vendors"]),e()})({0:function(t,i,e){t.exports=e("56d7")},"034f":function(t,i,e){"use strict";e("85ec")},"0e5a":function(t,i,e){"use strict";e("f74c")},"4b49":function(t,i,e){},"4d65":function(t,i,e){},"56d7":function(t,i,e){"use strict";e.r(i);e("e260"),e("e6cf"),e("cca6"),e("a79d");var a=e("2b0e"),s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"app"}},[e("div",[e("el-backtop",[e("i",{staticClass:"el-icon-s-promotion"})])],1),e("div",{staticClass:"wrap"},[e("div",{staticClass:"headbox"},[e("el-backtop",{attrs:{target:".page-component__scroll .el-scrollbar__wrap"}}),e("div",{staticClass:"header"},[t._m(0),e("div",{staticClass:"nav",attrs:{id:"list"}},[e("router-link",{class:0==t.active?"active":"",attrs:{to:"/"},nativeOn:{click:function(i){t.active=0}}},[t._v("首页")]),e("router-link",{class:1==t.active?"active":"",attrs:{to:"/Huangjia"},nativeOn:{click:function(i){t.active=1}}},[t._v("皇家园林")]),e("router-link",{class:2==t.active?"active":"",attrs:{to:"/Sijia"},nativeOn:{click:function(i){t.active=2}}},[t._v("私家园林")]),e("router-link",{class:3==t.active?"active":"",attrs:{to:"/Simiao"},nativeOn:{click:function(i){t.active=3}}},[t._v("寺庙园林")])],1),e("div",{staticStyle:{width:"280px"}}),e("div",{staticClass:"demo-input-suffix"},[e("el-input",{attrs:{placeholder:"请输入内容","prefix-icon":"el-icon-search"}})],1)])],1),e("router-view"),t._m(1)],1)])},n=[function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"logo"},[a("img",{attrs:{src:e("9d64"),alt:""}})])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"footer"},[a("div",{staticClass:"footerbox"},[a("div",{staticClass:"left"},[a("div",{staticStyle:{"margin-bottom":"20px"}},[a("a",{attrs:{href:"#"}},[t._v("关于我们 | 网站动态")])]),a("div",[t._v(" Copyright © 2020 园林人网 版权所有 京ICP备xxxxxxx号 Powered by WordPress ")])]),a("div",{staticClass:"right vivify shake duration-5000 infinite"},[a("img",{attrs:{src:e("9d64"),alt:""}})])])])}],l={data:function(){return{input1:"",active:"0"}}},o=l,c=(e("034f"),e("2877")),r=Object(c["a"])(o,s,n,!1,null,null,null),p=r.exports,u=e("8c4f"),d=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"home-content"},[e("div",{staticClass:"lunbotu"},[e("el-carousel",{attrs:{interval:4e3,type:"card",height:"500px"}},t._l(t.lunbo,(function(i,a){return e("el-carousel-item",{key:a},[e("img",{attrs:{src:t.tubase+"banner/"+i,alt:""}})])})),1)],1),e("div",{staticClass:"jieshao",style:"background-image:url("+t.tubase+t.head_bg+");"},[e("div",{staticClass:"jieshao-content"},[e("h1",{staticClass:"animated bounceInDown"},[t._v(t._s(t.jieshao.title))]),e("div",{staticClass:"jieshao-content-wen animated bounceInUp"},[e("p",[t._v(t._s(t.jieshao.jian))]),e("p",[t._v(t._s(t.jieshao.content))])])])]),e("div",{staticClass:"leibie",style:"background-image:url("+t.tubase+t.jieshao_bg+");"},[e("div",{staticClass:"leibie-content"},[e("el-tabs",{staticClass:"leibtab",attrs:{type:"card"},on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(i){t.activeName=i},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:t.leibie1.title,name:"first"}},[e("div",{class:["animated",t.show?"fadeInLeft":""],domProps:{innerHTML:t._s(t.leibie1.content)}}),e("div")]),e("el-tab-pane",{attrs:{label:t.leibie2.title,name:"second"}},[e("div",{staticClass:"animated fadeInLeft",domProps:{innerHTML:t._s(t.leibie2.content)}}),e("div",{staticClass:"leibielunbo animated fadeInUp"},[e("el-carousel",{attrs:{direction:"vertical",autoplay:!0}},t._l(t.leibie2.image,(function(i,a){return e("el-carousel-item",{key:a},[e("img",{attrs:{src:t.tubase+i,alt:""}})])})),1),e("div",{staticClass:"leibielunbo-wen"},[t._v("皇家园林")])],1)]),e("el-tab-pane",{attrs:{label:t.leibie3.title,name:"third"}},[e("div",{staticClass:"animated fadeInLeft",domProps:{innerHTML:t._s(t.leibie3.content)}}),e("div",{staticClass:"leibielunbo animated fadeInUp"},[e("el-carousel",{attrs:{direction:"vertical",autoplay:!0}},t._l(t.leibie3.image,(function(i,a){return e("el-carousel-item",{key:a},[e("img",{attrs:{src:t.tubase+i,alt:""}})])})),1),e("div",{staticClass:"leibielunbo-wen"},[t._v("私家园林")])],1)]),e("el-tab-pane",{attrs:{label:t.leibie4.title,name:"fourth"}},[e("div",{staticClass:"animated fadeInLeft",domProps:{innerHTML:t._s(t.leibie4.content)}}),e("div",{staticClass:"leibielunbo animated fadeInUp"},[e("el-carousel",{attrs:{direction:"vertical",autoplay:!0}},t._l(t.leibie4.image,(function(i,a){return e("el-carousel-item",{key:a},[e("img",{attrs:{src:t.tubase+i,alt:""}})])})),1),e("div",{staticClass:"leibielunbo-wen"},[t._v("寺庙园林")])],1)])],1)],1)])])},h=[],_={data:function(){return{activeName:"first",show:!1,lunbo:["banner(1).jpg","banner(2).jpg","banner(3).jpg","banner(4).jpg","banner(5).jpg","banner(6).jpg","banner(7).jpg","banner(8).jpg"],head_bg:["bg/head_bg.jpg"],jieshao_bg:["bg/jieshao_bg.jpg"],jieshao:{title:"中国古典园林",jian:"中国古典园林是人类文明的重要遗产，被举世公认为世界园林之母。",content:"\n          我国有四大名园，分别是苏州的拙政园、留园、北京的颐和园、承德的避暑山庄，而拙政园无意是中国私家花园的典型代表了。\n          拙政园被称为中国园林之母，可以说，拙政园不仅是苏州的骄傲，而且是中国的骄傲，被列为了世界文化遗产。\n        "},leibie1:{title:"园林类别",content:"<p>我国的园林艺术，如果从殷、周时代囿的出现算起，到现在为止已有三千多年的历史，是世界园林艺术起源最早的国家之一，\n        在世界园林史上占有极重要的位置，并具有极其高超的艺术水平和独特的民族风格。</p><p>园林是人们为了游览娱乐的方便，用自己的双手创造风景的一种艺术。\n        由于各民族、各地区人们对风景的不同理解和偏爱，也就出现了不同风格的园林。</p><p>现存的中国古代园林，一般可以分为皇家园林、私家园林、寺庙园林三种种基本类型。</p>",image:"tab/tab(1).jpg"},leibie2:{title:"皇家园林",content:"\n        <p>皇家园林，在古籍里面称之为“苑”、“囿（yòu）”、“宫苑”、“园囿”、“御苑”，为中国园林的基本类型之一。</p>\n        <p>中国自奴隶社会到封建社会这一阶段，连续几千年的漫长历史时期，帝王君临天下，至高无上，皇权是绝对的权威。\n        像古代西方那样震慑一切的神权，在中国相对皇权而言始终是次要的、从属的地位。与此相适应的，一整套突出帝王至上、\n        皇权至尊的礼法制度也必然渗透到与皇家有关的一切政治仪典、起居规则、生活环境之中，表现为所谓皇家气派。</p>\n        <p>园林作为皇家生活环境的一个重要组成部分，形成了有别于其他园林类型的皇家园林。</p>\n        <p>现存代表有承德的避暑山庄、北京的颐和园、北京北海公园等</p>\n        ",image:["tab/tab(2).jpg","tab/tab(3).jpg","tab/tab(4).jpg"]},leibie3:{title:"私家园林",content:"\n        <p>中国古代园林，除皇家园林外，还有一类属于王公、贵族、地主、富商、士大夫等私人所有的园林，称为私家园林。</p>\n        <p>古籍里称之为园、园亭、园墅、池馆、山池、山庄、别墅、别业等。规模较小，一般只有几亩至十几亩，小者仅一亩半亩而已；\n        大多以水面为中心，四周散布建筑，构成一个个景点或几个景点；以修身养性，闲适自娱为园林主要功能；\n        园主多是文人学士出身，能诗会画，清高风雅，淡素脱俗。私家园林集中在南京、苏州、无锡等地。</p>\n        <p>现代保存下来的园林大多属于明清时代，这些园林充分表现了古代传统园林建筑的独特风格和高超的造园艺术。</p>",image:["tab/tab(5).jpg","tab/tab(6).jpg","tab/tab(7).jpg"]},leibie4:{title:"寺庙园林",content:"\n        <p>寺庙园林，指佛寺、道观、历史名人纪念性祠庙的园林，为中国园林的基本类型之一。</p>\n        <p>寺庙园林狭者仅方丈之地，广者则泛指整个宗教圣地，其实际范围包括寺观周围的自然环境，是寺庙建筑、宗教景物、人工山水和天然山水的综合体。一些著名的大型寺庙园林，\n        往往历经成百上千年的持续开发，积淀着宗教史迹与名人历史故事，题刻下历代文化雅士的摩崖碑刻和楹联诗文，使寺庙园林蕴含着丰厚的历史和文化游赏价值。</p>\n        ",image:["tab/tab(8).jpg","tab/tab(9).jpg","tab/tab(10).jpg"]}}},methods:{handleClick:function(t,i){console.log(t,i)},scroll:function(){var t=document.documentElement.scrollTop;console.log(t),t>=500&&(this.show=!0)}},created:function(){window.addEventListener("scroll",this.scroll)}},m=_,g=(e("cccb"),Object(c["a"])(m,d,h,!1,null,null,null)),j=g.exports,v=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"hjlist"},[e("div",{staticClass:"hjlist_onebox",style:"background-image:url("+t.tubase+"huangjia/hj_04.jpg)"},[e("div",{staticClass:"contanier hjlist_one"},[e("div",{class:["hj_title","animated","fadeInLeftBig"]},[t._v(" 中华园林艺术 ")]),e("div",{staticClass:"yuan"},[t._v("之")]),e("div",{staticClass:"hj_title animated fadeInRightBig"},[t._v("皇家园林")]),e("div",{staticClass:"hj_cont animated fadeInUpBig",domProps:{innerHTML:t._s(t.huangjia)}})])]),e("div",{staticClass:"hjlist_twobox"},[e("div",{staticClass:"hjlist_two"},[e("div",{class:["hjlist_two_left","animated",t.show?"fadeInLeftBig":""]},[e("router-link",{attrs:{to:"/Xq?id=1"}},[e("h2",[t._v(t._s(t.hj_one.title))]),e("div",{domProps:{innerHTML:t._s(t.hj_one.content)}})])],1),e("div",{class:["hjlist_two_right","animated",t.show?"fadeInUpBig":""]},[e("el-carousel",{attrs:{height:"540px",direction:"vertical",autoplay:!0}},t._l(t.hj_one.image,(function(i,a){return e("el-carousel-item",{key:a},[e("img",{attrs:{src:t.tubase+i,alt:""}})])})),1)],1)])]),e("div",{staticClass:"hjlist_twobox"},[e("div",{staticClass:"hjlist_two"},[e("div",{class:["hjlist_two_right","animated",t.show2?"fadeInUpBig":""]},[e("el-carousel",{attrs:{height:"540px",direction:"vertical",autoplay:!0}},t._l(t.hj_two.image,(function(i,a){return e("el-carousel-item",{key:a},[e("img",{attrs:{src:t.tubase+i,alt:""}})])})),1)],1),e("div",{class:["hjlist_two_left","animated",t.show2?"fadeInRightBig":""]},[e("router-link",{attrs:{to:"/Xq?id=2"}},[e("h2",[t._v(t._s(t.hj_two.title))]),e("div",{domProps:{innerHTML:t._s(t.hj_two.content)}})])],1)])]),e("div",{staticClass:"hjlist_twobox"},[e("div",{staticClass:"hjlist_two"},[e("div",{class:["hjlist_two_left","animated",t.show3?"fadeInLeftBig":""]},[e("router-link",{attrs:{to:"/Xq?id=3"}},[e("h2",[t._v(t._s(t.hj_three.title))]),e("div",{domProps:{innerHTML:t._s(t.hj_three.content)}})])],1),e("div",{class:["hjlist_two_right","animated",t.show3?"fadeInUpBig":""]},[e("el-carousel",{attrs:{height:"540px",direction:"vertical",autoplay:!0}},t._l(t.hj_three.image,(function(i,a){return e("el-carousel-item",{key:a},[e("img",{attrs:{src:t.tubase+i,alt:""}})])})),1)],1)])])])},f=[],b={data:function(){return{show:!1,show2:!1,show3:!1,show4:!1,huangjia:"\n      <p>皇家园林，在古籍里面称之为“苑”、“囿（yòu）”、“宫苑”、“园囿”、“御苑”，为中国园林的三种基本类型之一。</p>\n      <p>中国自奴隶社会到封建社会这一阶段，连续几千年的漫长历史时期，帝王君临天下，至高无上，皇权是绝对的权威。\n      像古代西方那样震慑一切的神权，在中国相对皇权而言始终是次要的、从属的地位。与此相适应的，一整套突出帝王至上、\n      皇权至尊的礼法制度也必然渗透到与皇家有关的一切政治仪典、起居规则、生活环境之中，表现为所谓皇家气派。</p>\n      <p>园林作为皇家生活环境的一个重要组成部分，形成了有别于其他园林类型的皇家园林。</p>\n      <p>其中作为代表的有北京颐和园，承德避暑山庄，北京北海公园等。</p>\n      ",hj_one:{title:"颐和园",content:"颐和园,坐落在北京市海淀区新建宫门路19号,距城区十五公里.是一座巨大的皇家园林和清朝的行宫.颐和园素以人工建筑与自然山水巧妙结合的造园手法著称于世,是中国园林艺术顶峰时期的代表.与承德避暑山庄,拙政园,留园并称为中国四大名园.",image:["huangjia/hj_10.jpg","huangjia/hj_11.jpg","huangjia/hj_12.jpg","huangjia/hj_13.jpg"]},hj_two:{title:"承德避暑山庄",content:"避暑山庄——中国现存最大的皇家园林。\n                  山庄正门在宫墙南端，门上镶有用汉、藏、满、回、蒙五种文字镌刻的“丽正门”匾额，门内九重院落组成了皇帝日常起居和处理政务的主要场所——正宫。避暑山庄实际已成为清政府的第二个政治中心。",image:["huangjia/hj_06.jpg","huangjia/hj_07.jpg","huangjia/hj_08.jpg","huangjia/hj_09.jpg"]},hj_three:{title:"北海公园",content:"北海公园位于北京城的中心，是中国现存历史上建园最早、保存最完整、文化沉积最深厚的古典皇家园林。北海的形成和发展，历经金、元、明、清数个朝代，承载着中国近千年的历史和文化，形成了以皇家园林为代表的造园艺术风格，它是凝聚着历代园林文化艺术之大成的杰作。",image:["huangjia/hj_14.jpg","huangjia/hj_15.jpg","huangjia/hj_16.jpg","huangjia/hj_17.jpg"]}}},methods:{scroll:function(){var t=document.documentElement.scrollTop;console.log(t),t>=350&&(this.show=!0),t>=900&&(this.show2=!0),t>=1400&&(this.show3=!0)}},created:function(){window.addEventListener("scroll",this.scroll)}},w=b,C=(e("b962"),Object(c["a"])(w,v,f,!1,null,null,null)),y=C.exports,k=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"wenren_box"},[e("div",{staticClass:"hjlist_onebox",style:"background-image:url("+t.tubase+"sijia/wr_bg.jpg)"},[e("div",{staticClass:"contanier hjlist_one"},[e("div",{class:["hj_title","animated","slideInLeft"]},[t._v("中华园林艺术")]),e("div",{staticClass:"yuan"},[t._v("之")]),e("div",{staticClass:"hj_title animated slideInRight"},[t._v("私家园林")]),e("div",{staticClass:"hj_cont animated fadeInUpBig",domProps:{innerHTML:t._s(t.Sj_title)}})])]),e("div",{staticClass:"wr_list_onebox"},[e("div",{staticClass:"wr_list_one"},[e("div",{class:["wrlist_left","animated",t.show1?"fadeInLeftBig":""]},[e("router-link",{attrs:{to:"/Xq?id=4"}},[e("h2",[t._v(t._s(t.Sj_list1.title))]),e("div",{domProps:{innerHTML:t._s(t.Sj_list1.content)}})])],1),e("div",{class:["wrlist_right","animated",t.show1?"fadeInUpBig":""]},[e("el-carousel",{attrs:{height:"540px",direction:"vertical",autoplay:!0}},t._l(t.Sj_list1.image,(function(i,a){return e("el-carousel-item",{key:a},[e("img",{attrs:{src:t.tubase+i,alt:""}})])})),1)],1)])]),e("div",{staticClass:"wr_list_onebox"},[e("div",{staticClass:"wr_list_one"},[e("div",{class:["wrlist_right","animated",t.show2?"fadeInUpBig":""]},[e("el-carousel",{attrs:{height:"540px",direction:"vertical",autoplay:!0}},t._l(t.Sj_list2.image,(function(i,a){return e("el-carousel-item",{key:a},[e("img",{attrs:{src:t.tubase+i,alt:""}})])})),1)],1),e("div",{class:["wrlist_left","animated",t.show2?"fadeInRightBig":""]},[e("router-link",{attrs:{to:"/Xq?id=5"}},[e("h2",[t._v(t._s(t.Sj_list2.title))]),e("div",{domProps:{innerHTML:t._s(t.Sj_list2.content)}})])],1)])]),e("div",{staticClass:"wr_list_onebox"},[e("div",{staticClass:"wr_list_one"},[e("div",{class:["wrlist_left","animated",t.show3?"fadeInLeftBig":""]},[e("router-link",{attrs:{to:"/Xq?id=6"}},[e("h2",[t._v(t._s(t.Sj_list3.title))]),e("div",{domProps:{innerHTML:t._s(t.Sj_list3.content)}})])],1),e("div",{class:["wrlist_right","animated",t.show3?"fadeInUpBig":""]},[e("el-carousel",{attrs:{height:"540px",direction:"vertical",autoplay:!0}},t._l(t.Sj_list3.image,(function(i,a){return e("el-carousel-item",{key:a},[e("img",{attrs:{src:t.tubase+i,alt:""}})])})),1)],1)])])])},x=[],I={data:function(){return{Sj_title:"<p>中国古代园林，除皇家园林外，还有一类属于王公、贵族、地主、富商、士大夫等私人所有的园林，称为私家园林。</p>\n      <p>古籍里称之为园、园亭、园墅、池馆、山池、山庄、别墅、别业等。规模较小，一般只有几亩至十几亩，小者仅一亩半亩而已；\n      大多以水面为中心，四周散布建筑，构成一个个景点或几个景点；以修身养性，闲适自娱为园林主要功能；园主多是文人学士出身，能诗会画，清高风雅，淡素脱俗。\n      私家园林集中在南京、苏州、无锡等地。</p>\n      <P>现代保存下来的园林大多属于明清时代，这些园林充分表现了古代传统园林建筑的独特风格和高超的造园艺术。</P>",Sj_list1:{title:"沧浪亭",content:"\n        <p>沧浪亭，位于江苏省苏州市城南，是苏州最古老的一所园林，始建于北宋庆历年间（公元1041～1048年），南宋初年（公元12世纪初）曾为名将韩世忠的住宅。\n        沧浪亭造园艺术与众不同，未进园门便设一池绿水绕于园外。园内以山石为主景，迎面一座土山，沧浪石亭便坐落其上。山下凿有水池，山水之间以一条曲折的复廊相连。\n        假山东南部的明道堂是园林的主建筑，此外还有五百名贤祠、看山楼、翠玲珑馆、仰止亭和御碑亭等建筑与之衬映。</p>\n        <p>沧浪亭与狮子林、拙政园、留园一齐列为苏州宋、元、明、清四大园林，园内除沧浪亭本身外还有印心石屋、明道堂、看山楼等建筑和景观。</p>\n        ",image:["sijia/wr_01.jpg","sijia/wr_02.jpg","sijia/wr_03.jpg","sijia/wr_04.jpg"]},Sj_list2:{title:"拙政园",content:"\n        <p>拙政园，位于江苏省苏州市，始建于明正德初年（16世纪初），是江南古典园林的代表作品。</p>\n        <p>四百多年来，拙政园几度分合，或为“私人”宅园，或做“金屋”藏娇，或是“王府”治所，留下了许多诱人探寻的遗迹和典故。 </p>\n        <p>拙政园与北京颐和园、承德避暑山庄、苏州留园一起被誉为中国四大名园。</p>\n        ",image:["sijia/hj_21.jpg","sijia/hj_18.jpg","sijia/hj_19.jpg","sijia/hj_20.jpg"]},Sj_list3:{title:"留园",content:"\n        <p>留园，是苏州古典园林，始建于明代。清代时称“寒碧山庄”，俗称“刘园”，后改为“留园”。以园内建筑布置精巧、奇石众多而知名，与苏州拙政园、北京颐和园、承德避暑山庄并称中国四大名园。</p>\n        <p>留园为中国大型古典私家园林，占地面积23300平方米，代表清代风格，园以建筑艺术精湛著称，厅堂宏敞华丽，庭院富有变化，太湖石以冠云峰为最，有“不出城郭而获山林之趣”。\n        \n        </p>\n        <p>留园是第一批全国重点文物保护单位、世界文化遗产、国家5A级旅游景区。</p>\n        ",image:["sijia/wr_05.jpg","sijia/wr_06.jpg","sijia/wr_07.jpg","sijia/wr_08.jpg"]},show1:!1,show2:!1,show3:!1}},methods:{scroll:function(){var t=document.documentElement.scrollTop;console.log(t),t>=200&&(this.show1=!0),t>=750&&(this.show2=!0),t>=1400&&(this.show3=!0)}},created:function(){window.addEventListener("scroll",this.scroll)}},L=I,P=(e("7bff"),Object(c["a"])(L,k,x,!1,null,null,null)),S=P.exports,A=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"simiao_box"},[e("div",{staticClass:"hjlist_onebox",style:"background-image:url("+t.tubase+"simiao/sm_bg.jpg)"},[e("div",{staticClass:"contanier hjlist_one"},[e("div",{class:["hj_title","animated","slideInLeft"]},[t._v("中华园林艺术")]),e("div",{staticClass:"yuan"},[t._v("之")]),e("div",{staticClass:"hj_title animated slideInRight"},[t._v("寺庙园林")]),e("div",{staticClass:"hj_cont animated fadeInUpBig",domProps:{innerHTML:t._s(t.sm_title)}})])]),e("div",{staticClass:"sm_list_onebox"},[e("div",{staticClass:"sm_list_one"},[e("div",{class:["smlist_left","animated",t.show1?"fadeInLeftBig":""]},[e("router-link",{attrs:{to:"/Xq?id=7"}},[e("h2",[t._v(t._s(t.sm_list1.title))]),e("div",{domProps:{innerHTML:t._s(t.sm_list1.content)}})])],1),e("div",{class:["smlist_right","animated",t.show1?"fadeInUpBig":""]},[e("el-carousel",{attrs:{height:"540px",direction:"vertical",autoplay:!0}},t._l(t.sm_list1.image,(function(i,a){return e("el-carousel-item",{key:a},[e("img",{attrs:{src:t.tubase+i,alt:""}})])})),1)],1)])]),e("div",{staticClass:"sm_list_onebox"},[e("div",{staticClass:"sm_list_one"},[e("div",{class:["smlist_right","animated",t.show2?"fadeInUpBig":""]},[e("el-carousel",{attrs:{height:"540px",direction:"vertical",autoplay:!0}},t._l(t.sm_list2.image,(function(i,a){return e("el-carousel-item",{key:a},[e("img",{attrs:{src:t.tubase+i,alt:""}})])})),1)],1),e("div",{class:["smlist_left","animated",t.show2?"fadeInLeftBig":""]},[e("router-link",{attrs:{to:"/Xq?id=8"}},[e("h2",[t._v(t._s(t.sm_list2.title))]),e("div",{domProps:{innerHTML:t._s(t.sm_list2.content)}})])],1)])]),e("div",{staticClass:"sm_list_onebox"},[e("div",{staticClass:"sm_list_one"},[e("div",{class:["smlist_left","animated",t.show3?"fadeInLeftBig":""]},[e("router-link",{attrs:{to:"/Xq?id=9"}},[e("h2",[t._v(t._s(t.sm_list3.title))]),e("div",{domProps:{innerHTML:t._s(t.sm_list3.content)}})])],1),e("div",{class:["smlist_right","animated",t.show3?"fadeInUpBig":""]},[e("el-carousel",{attrs:{height:"540px",direction:"vertical",autoplay:!0}},t._l(t.sm_list3.image,(function(i,a){return e("el-carousel-item",{key:a},[e("img",{attrs:{src:t.tubase+i,alt:""}})])})),1)],1)])])])},B=[],T={data:function(){return{sm_title:"<p>寺庙园林，指佛寺、道观、历史名人纪念性祠庙的园林，为中国园林的三种基本类型（寺庙园林、皇家园林、私家园林）之一。</p>\n      <p>寺庙园林狭者仅方丈之地，广者则泛指整个宗教圣地，其实际范围包括寺观周围的自然环境，是寺庙建筑、宗教景物、人工山水和天然山水的综合体。\n      一些著名的大型寺庙园林，往往历经成百上千年的持续开发，积淀着宗教史迹与名人历史故事，题刻下历代文化雅士的摩崖碑刻和楹联诗文，使寺庙园林蕴含着丰厚的历史和文化游赏价值。</p>\n      <p>寺庙园林是中国园林的一个分支，论其数量，它比皇家园林、私家园林的总和要多几百倍；论其特色，它具有一系列不同于皇家园林和私家园林的特长；\n      论其选址，它突破了皇家园林和私家园林在分布上的局限，可以广布在自然环境优越的名山胜地。</p>\n      ",sm_list1:{title:"寒山寺",content:"\n        <p>寒山寺位于苏州市姑苏区，始建于南朝萧梁代天监年间（公元502～519年），初名“妙利普明塔院”。寒山寺占地面积约1.3万平方米，建筑面积三千四百余平方米。</p>\n        <p>寒山寺属于禅宗中的临济宗。唐代贞观年间，当时的名僧寒山、希迁两位高僧创建寒山寺。\n        1000多年内寒山寺先后5次遭到火毁（一说是7次），最后一次重建是清代光绪年间。\n        历史上寒山寺曾是中国十大名寺之一，寺内古迹甚多，有张继诗的石刻碑文，寒山、拾得的石刻像，文徵明、唐寅所书碑文残片等。</p>\n        ",image:["simiao/sm_01.jpg","simiao/sm_02.jpg","simiao/sm_03.jpg","simiao/sm_04.jpg"]},sm_list2:{title:"武侯祠",content:"\n        <p>南阳武侯祠坐落于中国历史文化名城河南省南阳市城西卧龙岗上，初建于魏晋，盛于唐宋，有1800多年历史，\n        是刘备“三顾茅庐“发生地，诸葛亮躬耕南阳所在地，历代皇室及百姓祭祀诸葛亮的地方。</P>\n        <P>南阳卧龙岗武侯祠1963年被列为首批河南省重点文物保护单位，1996年被列为全国重点文物保护单位，2007年荣膺国家AAAA级旅游景区，2008年被列为首批国家二级博物馆。</p>\n        ",image:["simiao/sm_05.jpg","simiao/sm_06.jpg","simiao/sm_07.jpg","simiao/sm_08.jpg"]},sm_list3:{title:"灵隐寺",content:"\n        <p>灵隐寺，中国佛教古寺，又名云林寺。</p>\n        <p>灵隐寺开山祖师为西印度僧人慧理和尚。五代吴越王钱镠命请永明延寿大师重兴开拓，并赐名灵隐新寺。宋宁宗嘉定年间，灵隐寺被誉为江南禅宗“五山”之一。\n        清顺治年间，禅宗巨匠具德和尚住持灵隐，筹资重建，仅建殿堂时间就前后历十八年之久，其规模之宏伟跃居“东南之冠”。清康熙二十八年（1689年），康熙帝南巡时，赐名 “云林禅寺”。</p>\n        <p>灵隐寺主要以天王殿、大雄宝殿、药师殿、法堂、华严殿为中轴线，两边附以五百罗汉堂、济公殿、华严阁、大悲楼、方丈楼等建筑构成。现任方丈是光泉法师。</p>\n        \n        ",image:["simiao/sm_09.jpg","simiao/sm_10.jpg","simiao/sm_11.jpg","simiao/sm_12.jpg"]},show1:!1,show2:!1,show3:!1}},methods:{scroll:function(){var t=document.documentElement.scrollTop;console.log(t),t>=200&&(this.show1=!0),t>=750&&(this.show2=!0),t>=1400&&(this.show3=!0)}},created:function(){window.addEventListener("scroll",this.scroll)}},M=T,O=(e("0e5a"),Object(c["a"])(M,A,B,!1,null,null,null)),H=O.exports,E=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"xq_box"},t._l(t.data_cont,(function(i,a){return e("div",{key:a,staticClass:"xq_content"},[e("div",{staticClass:"top"},[e("div",{staticClass:"top_left"},[e("div",[e("h1",[t._v(t._s(i.title))]),e("div",[e("i",{staticClass:"el-icon-map-location"}),e("br"),t._v(t._s(i.address)+" ")])]),e("div",{staticClass:"adress_img"},[e("a",{attrs:{href:i.adress_link,target:"_blank"}},[e("img",{attrs:{src:t.tubase+i.adress_img,alt:""}}),e("h3",[t._v("百度地图")])])])]),e("div",{staticClass:"top_right"},[e("el-image",{staticStyle:{width:"350px",height:"350px"},attrs:{src:i.image[0],"preview-src-list":i.image}})],1)]),e("div",{staticClass:"bottom"},[e("div",{domProps:{innerHTML:t._s(i.content)}})])])})),0)},U=[],q=(e("159b"),{data:function(){return{data:[{id:1,title:"颐和园",address:"北京市海淀区新建宫门路19号",adress_link:"https://j.map.baidu.com/8b/xOf",adress_img:"huangjia/yhy.png",image:["http://localhost/vuetu/huangjia/hj_10.jpg","http://localhost/vuetu/huangjia/hj_11.jpg","http://localhost/vuetu/huangjia/hj_12.jpg","http://localhost/vuetu/huangjia/hj_13.jpg"],content:"\n          <p>颐和园，中国清朝时期皇家园林，前身为清漪园，坐落在北京西郊，距城区15公里，全园占地3.009平方公里(其中颐和园世界文化遗产区面积是2.97平方公里)，水面约占四分之三。与圆明园毗邻。\n          <p>它是以昆明湖、万寿山为基址，以杭州西湖为蓝本，汲取江南园林的设计手法而建成的一座大型山水园林，也是保存最完整的一座皇家行宫御苑，被誉为“皇家园林博物馆”。</p>\n          清朝乾隆皇帝继位以前，在北京西郊一带，建起了四座大型皇家园林。乾隆十五年（1750年），乾隆皇帝为孝敬其母崇庆皇太后动用448万两白银在这里改建为清漪园，形成了从现清华园到香山长达二十公里的皇家园林区。\n          咸丰十年（1860年），清漪园被英法联军焚毁。光绪十四年（1888年）重建，改称颐和园，作消夏游乐地。光绪二十六年（1900年），颐和园又遭“八国联军”的破坏，珍宝被劫掠一空。\n          清朝灭亡后，颐和园在军阀混战和国民党统治时期，又遭破坏。</p>\n          <p>1961年3月4日，颐和园被公布为第一批全国重点文物保护单位，与同时公布的承德避暑山庄、拙政园、留园并称为中国四大名园，1998年11月被列入《世界遗产名录》。\n          2007年5月8日，颐和园经国家旅游局正式批准为国家5A级旅游景区。</p> \n          <p>2009年，颐和园入选中国世界纪录协会中国现存最大的皇家园林。</p>\n          "},{id:2,title:"承德避暑山庄",address:"河北省承德市中心北部，武烈河西岸一带狭长的谷地上。",adress_link:"https://j.map.baidu.com/69/nFf",adress_img:"huangjia/bssz.png",image:["http://localhost/vuetu/huangjia/hj_06.jpg","http://localhost/vuetu/huangjia/hj_07.jpg","http://localhost/vuetu/huangjia/hj_08.jpg","http://localhost/vuetu/huangjia/hj_09.jpg"],content:"\n          <p>承德避暑山庄又名皇家避暑行宫。</p>\n          <p>承德是首批国家历史文化名城,1703年清康熙修建避暑山庄,成为清王朝的第二个政治中心;1723年设热河厅;1733年雍正取“承受先祖德泽”之义;赐字“皇承天德”释义先皇秉承天地化育万物的恩德;并设承德直隶州,始称“承德”;民国和解放初期为原热河省省会;1955年,热河省建制撤销,承德划归河北省,为省辖市。</p>\n          <p>承德的避暑山庄及其周围寺庙是中国十大风景名胜、旅游胜地四十佳、国家重点风景名胜区,被联合国教科文组织批准为世界文化遗产,也是国家首批世界文化遗产。</p>\n          <p>承德避暑山庄,又名“承德离宫”或“热河行宫”“皇家避暑行宫”,是世界文化遗产、国家AAAAA级旅游景区、全国重点文物保护单位、中国四大名园之一。山庄位于河北省承德市中心北部,武烈河西岸一带狭长的谷地上,是清代皇帝夏天避暑和处理政务的场所。</p>\n          <p>承德避暑山庄始建于1703年(康熙四十二年),经康熙、雍正、乾隆三朝,历时89年于1792年建成,占地564万平方米,是世界现存最大皇家园林。1961年被国务院公布为全国重点文物保护单位。避暑山庄按中国地理形貌选址设计,以西北山区、东南湖区、北部平原区之地形地貌构成中国版图的缩影。</p>\n          "},{id:3,title:"北海公园",address:"北京市西城区文津街1号。",adress_link:"https://j.map.baidu.com/51/1w",adress_img:"huangjia/bhgy.png",image:["http://localhost/vuetu/huangjia/hj_14.jpg","http://localhost/vuetu/huangjia/hj_15.jpg","http://localhost/vuetu/huangjia/hj_16.jpg","http://localhost/vuetu/huangjia/hj_17.jpg"],content:"\n          <p>北海公园(Beihai Park)，位于北京市中心区，城内景山西侧，在故宫的西北面，与中海、南海合称三海。属于中国古代皇家园林。全园以北海为中心，面积约71公顷，水面占583市亩，陆地占480市亩。这里原是辽、金、元建离宫，明、清辟为帝王御苑，是中国现存最古老、最完整、最具综合性和代表性的皇家园林之一，1925年开放为公园。是中国保留下来的最悠久最完整的皇家园林，为全国重点文物保护单位，是国家AAAA级旅游景区。</p>\n          <p>北海公园是中国现存最古老、最完整、最具综合性和代表性的皇家园林之一。</p>\n          <p>北海公园以北海为中心，全园分为“北岸景区”“东岸景区”“琼岛景区”和“团城景区”四大区域。北岸区位于公园西北角，主要由快雪堂、五龙亭和小西天、静心斋、阐福寺和西天梵境等一系列宗教建筑构成，其中大家耳熟能详的“九龙壁”也位于此区域内。东岸区位于公园东北角，主要由先蚕坛、画舫斋、濠濮间组成。琼岛景区位于北海南部，以永安寺为中心，周围建有长廊、漪澜堂、悦心殿、阅古楼等建筑，已成为北海标志性建筑的白塔，则位于琼岛的中心最高点，颇有主宰全园的气势。团城位于北海公园最南端，主体建筑为承光殿，店内供奉有一尊1.5米高的大玉佛，通体镶嵌宝石，光彩夺目，游览时必不可错过。团城四周筑墙，自成一体，堪称：城中之城。团城北端有永安桥与琼华岛相连。</p>\n          "},{id:4,title:"沧浪亭",address:"北京市西城区文津街1号。",adress_link:"https://j.map.baidu.com/ce/YPJ",adress_img:"sijia/lct.png",image:["http://localhost/vuetu/sijia/wr_01.jpg","http://localhost/vuetu/sijia/wr_02.jpg","http://localhost/vuetu/sijia/wr_03.jpg","http://localhost/vuetu/sijia/wr_04.jpg"],content:"\n          <p>沧浪亭著名的苏州园林之一。</p>\n          <p>沧浪亭位于苏州城南三元坊，是现存历史最为悠久的江南园林。与狮子林、拙政园、留园并称为苏州宋、元、明、清四大园林，代表着宋朝的艺术风格。沧浪亭占地面积1.08公顷，园内有一泓清水贯穿，波光倒影，景象万千。</p>\n          <p>“沧浪亭”始为五代时吴越国广陵王钱元璙近戚中吴军节度使孙承祐的池馆。宋代著名诗人苏舜钦以四万贯钱买下废园，进行修筑，傍水造亭，因感于“沧浪之水清兮，可以濯吾缨；沧浪之水浊兮，可以濯吾足”，题名“沧浪亭”，自号沧浪翁，并作《沧浪亭记》。欧阳修应邀作《沧浪亭》长诗，诗中以“清风明月本无价，可惜只卖四万钱”题咏此事。自此，“沧浪亭”名声大振。苏氏之后，沧浪亭几度荒废，南宋初年（12世纪初）一度为抗金名将韩世忠的宅第，清康熙三十五年（公元1696年）巡抚宋荦重建此园，把傍水亭子移建于山之巅，形成今天沧浪亭的布局基础，并以文征明隶书“沧浪亭”为匾额。清同治十二年（公元1873年）再次重建，遂成今天之貌。沧浪亭虽因历代更迭有兴废，已非宋时初貌，但其古木苍老郁森，还一直保持旧时的风采，部分地反映出宋代园林的风格。</p>\n          "},{id:5,title:"拙政园",address:"江苏省苏州市平江区东北街178号。",adress_link:"https://j.map.baidu.com/54/2u",adress_img:"sijia/zzy.png",image:["http://localhost/vuetu/sijia/hj_21.jpg","http://localhost/vuetu/sijia/hj_18.jpg","http://localhost/vuetu/sijia/hj_19.jpg","http://localhost/vuetu/sijia/hj_20.jpg"],content:"\n          <p>拙政园，位于江苏省苏州市，始建于明正德初年（16世纪初），是江南古典园林的代表作品。与北京颐和园、承德避暑山庄、苏州留园一起被誉为中国四大名园。</p>\n          <p>拙政园位于苏州城东北隅（东北街178号），截至2014年，仍是苏州存在的最大的古典园林，占地78亩（约合5.2公顷）。全园以水为中心，山水萦绕，厅榭精美，花木繁茂，具有浓郁的江南汉族水乡特色。花园分为东、中、西三部分，东花园开阔疏朗，中花园是全园精华所在，西花园建筑精美，各具特色。园南为住宅区，体现典型江南地区汉族民居多进的格局。园南还建有苏州园林博物馆，是国内唯一的园林专题博物馆。</p>\n          <p>1961年3月，拙政园被列为首批全国重点文物保护单位，1991年被国家计委、旅游局、建设部列为国家级特殊游览参观点。1997年联合国教科文组织批准列入《世界遗产名录》。2007年被国家旅游局评为首批AAAAA级旅游景区。</p>\n          "},{id:6,title:"留园",address:"江南古城苏州市留园路302号。",adress_link:"https://j.map.baidu.com/28/4l7J",adress_img:"sijia/ly.png",image:["http://localhost/vuetu/sijia/wr_05.jpg","http://localhost/vuetu/sijia/wr_06.jpg","http://localhost/vuetu/sijia/wr_07.jpg","http://localhost/vuetu/sijia/wr_08.jpg"],content:"\n          <p>留园是中国著名古典园林，位于江南古城苏州，以园内建筑布置精巧、奇石众多而知名。与苏州拙政园、北京颐和园、承德避暑山庄并称中国四大名园。一九六一年，留园被中华人民共和国国务院公布为第一批全国重点文物保护单位之一。一九九七年，包括留园在内的苏州古典园林被列为世界文化遗产。</p>\n　　      <p>留园位于苏州阊门外，原是明嘉靖年间太仆寺卿徐泰时的东园。园内 　　假山为叠石名家周秉忠(时臣)所作。清嘉庆年间，刘恕以故园改筑，名寒碧山庄，又称刘园。同治年间盛旭人（其儿子即盛宣怀，清著名实业家政治家，北洋大学(天津大学）南洋公学（上海交通大学）创始人）购得，重加扩建，修葺一新，取留与刘的谐音，始称留园。科举考试的最后一个状元俞樾作《留园游记》称其为吴下名园之冠。留园内建筑的数量在苏州诸园中居冠，厅堂、走廊、粉墙、洞门等建筑与假山、水池、花木等组合成数十个大小不等的庭园小品。其在空间上的突出处理，充分体现了古代造园家的高超技艺、卓越智慧和江南园林建筑的艺术风格和特色。</p>\n　　      <p>留园全园分为四个部分，在一个园林中能领略到山水、田园、山林、庭园四种不同景色：中部以水景见长，是全园的精华所在；东部以曲院回廊的建筑取胜，园的东部有著名的佳晴喜雨快雪之厅、林泉耆硕之馆、还我读书处、冠云台、冠云楼等十数处斋、轩，院内池后立有三座石峰，居中者为名石冠云峰，两旁为瑞云，岫云两峰；北部具农村风光，并有新辟盆景园；西区则是全园最高处，有野趣，以假山为奇，土石相间，堆砌自然。池南涵碧山房与明瑟楼为留园的主要观景建筑。 留园内的建筑景观还有表现淡泊处世之坦然的“小桃源（小蓬莱）”以及远翠阁、曲溪楼、清风池馆等。</p>\n          "},{id:7,title:"寒山寺",address:"江苏省苏州市姑苏区寒山寺弄24号。",adress_link:"https://j.map.baidu.com/ff/ch",adress_img:"simiao/hss.png",image:["http://localhost/vuetu/simiao/sm_01.jpg","http://localhost/vuetu/simiao/sm_02.jpg","http://localhost/vuetu/simiao/sm_03.jpg","http://localhost/vuetu/simiao/sm_04.jpg"],content:'\n          <p>寒山寺在苏州城西阊门外5公里外的枫桥镇，建于六朝时期的梁代天监年间（公元502-519年），距今已有1400多年。原名“妙利普明塔院”。</p>\n          <p>寒山寺山门前面的石拱圈古桥是江村桥，桥堍与山门之间那垛黄墙称照壁。山门两旁两棵古樟。黄墙内古典楼阁飞檐翘角，右为枫江楼，左为霜钟楼，都源于枫桥夜泊诗。</p>\n          <p>寒山寺寺院布局并不追求左右均衡，照墙和山门基本是一线相承，后边的大雄宝殿、藏经楼，并不在一条中轴线上；新建的普明塔院，则按南北向中轴线布局。寺中处处皆院，错落相通。</p>\n          <p>寒山寺属于禅宗中的临济宗。唐代贞观年间，当时的名僧寒山、希迁两位高僧创建寒山寺。1000多年内寒山寺先后5次遭到火毁（一说是7次），最后一次重建是清代光绪年间。历史上寒山寺曾是中国十大名寺之一，寺内古迹甚多。</p>\n          <div style="width:500px;height:320px;margin:0 auto;"><img src="https://iknow-pic.cdn.bcebos.com/4bed2e738bd4b31ce833345a89d6277f9f2ff8c0" style="width:100%;display:block;"></div>\n          <p>扩展资料：</p>\n          <p>世界之最：</p>\n          <p>2008年12月30日，世界最大诗碑和最大佛钟在苏州寒山寺正式落成开放。据了解，今年12月初寒山寺大钟、大碑均已被上海大世界基尼斯总部认定为创“世界记录”。</p>\n          <p>其中“寒山寺大佛钟”重达108吨，高8.608米，最大直径5.242米，钟面刻有七万多字的《大乘妙法莲花经》。“寒山寺大碑”总高为16.9米、重约400吨，其正面刻有唐代张继所诗、俞樾所书的《枫桥夜泊》，背面则刻有乾隆御笔的《般若波罗蜜多心经》。</p>\n          '},{id:8,title:"武侯祠",address:"江苏省苏州市姑苏区寒山寺弄24号。",adress_link:"https://j.map.baidu.com/70/M0z",adress_img:"simiao/whs.png",image:["http://localhost/vuetu/simiao/sm_05.jpg","http://localhost/vuetu/simiao/sm_06.jpg","http://localhost/vuetu/simiao/sm_07.jpg","http://localhost/vuetu/simiao/sm_08.jpg"],content:'\n          <p>武侯祠（汉昭烈庙），全国重点文物保护单位，国家AAAA级旅游景区，国家一级博物馆。武侯祠位于四川省成都市武侯区，肇始于公元223年修建刘备惠陵时，它是中国唯一的一座君臣合祀祠庙和最负盛名的诸葛亮、刘备及蜀汉英雄纪念地，也是全国影响最大的三国遗迹博物馆。</p>\n          <p>1961年国务院公布为首批全国重点文物保护单位，2008年评选为首批国家一级博物馆。成都武侯祠现占地15万平方米，由三国历史遗迹区（文物区）、西区（三国文化体验区）以及锦里民俗区（锦里）三部分组成，享有“三国圣地”的美誉。</p>\n          <div style="width:500px;height:320px;margin:0 auto;"><img src="https://iknow-pic.cdn.bcebos.com/728da9773912b31b88bc3a7d8918367adbb4e196" style="width:100%;display:block;"></div>\n          <p>扩展资料</p>\n          <p>武侯祠主要景点：</p>\n          <p>1、南郊公园</p>\n          <p>2003年12月，原成都市南郊公园合并为武侯祠园林区。南郊公园原系民国时期四川省主席、抗战时期第七战区司令长官刘湘墓园。始建于1938年至1942年，400米的中轴线纵贯南北，石牌坊大门、三洞门、四方亭、荐馨堂、墓室等。</p>\n          <p>2、锦里古街</p>\n          <p>现紧邻武侯祠的“锦里”古街由成都武侯祠博物馆斥资复建，为“全国文化产业示范基地”。锦里作为武侯祠博物馆（三国历史遗迹区、锦里民俗区、西区）的一部分，占地30000余平方米，建筑面积14000余平方米，街道全长550米。</p>\n          '},{id:9,title:"灵隐寺",address:"浙江省杭州市西湖区灵隐路法云弄1号。",adress_link:"https://j.map.baidu.com/3d/MUu",adress_img:"simiao/lys.png",image:["http://localhost/vuetu/simiao/sm_09.jpg","http://localhost/vuetu/simiao/sm_10.jpg","http://localhost/vuetu/simiao/sm_11.jpg","http://localhost/vuetu/simiao/sm_12.jpg"],content:"\n          <p>灵隐寺位于杭州西湖灵隐山麓，处于西湖西部的飞来峰旁，离西湖不远。灵隐寺又名“云林禅寺”，始建于东晋（公元326年），到现在已有一千六百多年历史，是我国佛教禅宗十刹之一。当时印度僧人慧理来杭，看到这里山峰奇秀，以为是“仙灵所隐”，就在这里建寺，取名灵隐。后来济公在此出家，由于他游戏人间的故事家喻户晓，灵隐寺因此名闻遐迩。五代吴越国时，灵隐寺曾两次扩建，大兴土木，建成为九楼、十八阁、七十二殿堂的大寺，房屋达1300余间，僧众达3000人。</p>\n          <p>灵隐寺的最前面是天王殿，上悬“云林禅寺”匾额，是清代康熙的手笔。大殿正中佛龛里坐着袒胸露腹的弥勒佛像。弥勒佛后壁佛龛里，站着神态庄严、手执降魔杵的韦驮菩萨，系由独块香樟木雕成，是南宋遗物。灵隐寺的大雄宝殿是单层、重檐、三叠的建筑，高达33.6米。另有清末重塑之木雕释迦坐像，高约24.8米，金光四射，闪耀夺目，富有宋代守实雕塑之风，此外还有十二圆觉，二十诸天等佛。</p>\n          <p>年进行全面修整后，改为永久性的钢筋水泥建筑。大殿规模宏敞，气势雄伟，殿正中的释迦牟尼佛像，高19.6米，是以唐代禅宗著名雕塑为蓝本，用24块香樟木雕成的。灵隐寺的殿宇、亭阁、经幢、石塔、佛像等建筑和雕塑艺术，对于研究我国佛教史、建筑艺术史和雕塑艺术史都很有价值，是祖国珍贵的文物。</p>\n          <p>现在的灵隐寺园林，除寺内殿前殿旁还保存有一些假山、古树林木外，主要在于寺前的清溪流水沿岸，山泉之间曲径通幽，小桥飞跨。寺之山门前有冷泉亭、壑雷亭、翠微亭诸景。唐朝诗人白居易写有《冷泉亭记》来描述这里的景色。</p>\n          "}],data_cont:[""]}},created:function(){var t=this.$route.query.id,i=this.data,e=this;i.forEach((function(i){i.id==t&&(e.data_cont=[i],console.log(e.data_cont))}))}}),X=q,$=(e("af87"),Object(c["a"])(X,E,U,!1,null,null,null)),R=$.exports;a["default"].use(u["a"]);var z=[{path:"/",name:"Home",component:j,meta:{title:"中华园林"}},{path:"/Huangjia",name:"Huangjia",component:y,meta:{title:"皇家园林"}},{path:"/Sijia",name:"Sijia",component:S,meta:{title:"私家园林"}},{path:"/Simiao",name:"Simiao",component:H,meta:{title:"寺庙园林"}},{path:"/Xq",name:"XQ",component:R,meta:{title:"详情"}}],J=new u["a"]({routes:z}),N=J,D=e("2f62");a["default"].use(D["a"]);var F=new D["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Q=e("5c96"),W=e.n(Q);e("0fae"),e("c69f");a["default"].use(W.a);e("deae"),e("ebd9"),e("7367");a["default"].use(W.a),a["default"].config.productionTip=!1,a["default"].prototype.tubase="http://localhost/vuetu/",new a["default"]({router:N,store:F,render:function(t){return t(p)}}).$mount("#app"),N.beforeEach((function(t,i,e){t.meta.title&&(document.title=t.meta.title),e()}))},"5ced":function(t,i,e){},"649e":function(t,i,e){},7367:function(t,i,e){},"7bff":function(t,i,e){"use strict";e("4d65")},"85ec":function(t,i,e){},"9d64":function(t,i,e){t.exports=e.p+"img/logo.9b9586b5.png"},af87:function(t,i,e){"use strict";e("4b49")},b962:function(t,i,e){"use strict";e("649e")},c69f:function(t,i,e){},cccb:function(t,i,e){"use strict";e("5ced")},deae:function(t,i,e){},ebd9:function(t,i,e){},f74c:function(t,i,e){}});
//# sourceMappingURL=app.ba7cddd8.js.map
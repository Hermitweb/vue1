<template>
  <div id="app">
    <div><el-backtop><i class="el-icon-s-promotion"></i></el-backtop></div>
    <!--  v-title data-title="中华园林" -->
    <div class="wrap">
      <!-- header -->
      <div class="headbox">
        <el-backtop
          target=".page-component__scroll .el-scrollbar__wrap"
        ></el-backtop>
        <div class="header">
          <div class="logo"><img src="@/assets/images/logo.png" alt="" /></div>

          <div class="nav" id="list">
            <router-link to="/" :class="active==0?'active':''" @click.native="active=0">首页</router-link>
            <router-link to="/Huangjia" :class="active==1?'active':''" @click.native="active=1">皇家园林</router-link>
            <router-link to="/Sijia" :class="active==2?'active':''" @click.native="active=2">私家园林</router-link>
            <router-link to="/Simiao" :class="active==3?'active':''" @click.native="active=3">寺庙园林</router-link>
          </div>
          <div style="width: 280px"></div>
          <div class="demo-input-suffix">
            <el-input
              placeholder="请输入内容"
              prefix-icon="el-icon-search"
            ></el-input>
            
          </div>
        </div>
      </div>
      <!-- 内容展示区 -->
      <router-view></router-view>
      <!-- footer -->
      <div class="footer">
        <div class="footerbox">
          <div class="left">
            <div style="margin-bottom: 20px">
              <a href="#">关于我们 | 网站动态</a>
            </div>
            <div>
              Copyright © 2020 园林人网 版权所有 京ICP备xxxxxxx号 Powered by
              WordPress
            </div>
          </div>
          <div class="right vivify shake duration-5000 infinite">
            <img src="@/assets/images/logo.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: "",
      active:'0'
    };
  },
 
};
</script>


<style>

.el-backtop {
  color: #409eff !important;
}
.el-input__inner {
  border: 1px solid #409eff !important;
}
.el-input__inner:hover {
  border-color: red !important;
}
.wrap {
  background: rgb(255, 255, 255);
}
.headbox {
  width: 100%;
  height: 100px;
  background: rgb(255, 255, 255);
  border-bottom: 1px solid #ccc;
}
.header {
  width: 1170px;
  margin: 0 auto;
  height: 100px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  background: rgb(255, 255, 255, 0);
}

router-view {
  height: auto;
}
.header .logo {
  height: 100px;
  display: block;
  margin-right: 20px;
}
.header .logo img {
  height: 100%;
  display: block;
}
.nav {
  height: 80px;
  font-size: 25px;
  line-height: 80px;
  display: flex;
  justify-content: flex-start;
}
.nav a {
  color: black;
  margin-right: 15px;
  font-family: "隶书";
}
.header>.nav>.active{
  color:red;
}
.footer {
  background: linear-gradient(to top, #818181 0%, #ffffff 100%);
  width: 100%;
  height: 200px;
  padding-top: 50px;
  border-top: 1px solid #ccc;
}
.footerbox {
  width: 1170px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
}
.footerbox > .left a {
  color: black;
}
</style>

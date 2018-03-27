<template>
  <div class="wrapper">
    <div class="header">
      <div class="inner">
        <div class="user-panel">
          <router-link :to="{ path: '/user/login' }" class="login">登录</router-link>
          <!--<a href="" class="login">登录</a>-->
          <span></span>
          <router-link :to="{ path: '/user/sign' }" class="sign">注册</router-link>
          <!--<a href="" class="sign">注册</a>-->
        </div>
        <div class="cls"></div>


        <!--@select="handleSelect"-->
        <!--<el-menu-->
        <!--:default-active="activeIndex2"-->
        <!--class="el-menu-demo"-->
        <!--mode="horizontal"-->
        <!--background-color="#545c64"-->
        <!--text-color="#ccc"-->
        <!--active-text-color="#ffd04b">-->
        <!--<el-menu-item index="1">-->
        <!--<a href="">-->
        <!--<img src="../assets/logo.png"-->
        <!--style="height: 37px" class="logo">-->
        <!--</a>-->
        <!--</el-menu-item>-->
        <!--<el-menu-item index="2"><a href="" target="_blank">首页</a></el-menu-item>-->
        <!--<el-menu-item index="2"><a href="" target="_blank">玄幻奇幻</a></el-menu-item>-->
        <!--<el-menu-item index="2"><a href="" target="_blank">武侠修真</a></el-menu-item>-->
        <!--<el-menu-item index="2"><a href="" target="_blank">言情都市</a></el-menu-item>-->
        <!--<el-menu-item index="2"><a href="" target="_blank">历史穿越</a></el-menu-item>-->
        <!--<el-menu-item index="2"><a href="" target="_blank">网游动漫</a></el-menu-item>-->
        <!--<el-menu-item index="2"><a href="" target="_blank">科幻小说</a></el-menu-item>-->
        <!--<el-menu-item index="2"><a href="" target="_blank">恐怖灵异</a></el-menu-item>-->
        <!--<el-submenu index="3">-->
        <!--<template slot="title">更多</template>-->
        <!--<el-menu-item index="2-1">选项1</el-menu-item>-->
        <!--<el-menu-item index="2-2">选项2</el-menu-item>-->
        <!--<el-menu-item index="2-3">选项3</el-menu-item>-->
        <!--</el-submenu>-->
        <!--<el-menu-item style:none>-->
        <!--<form>-->
        <!--<input class="pin-input" type="text" placeholder="输入您要查找的小说名称或者作者"/>-->
        <!--<a>查询</a>-->
        <!--</form>-->
        <!--</el-menu-item>-->
        <!--<el-menu-item index="2"><a href="" target="_blank">登录</a></el-menu-item>-->
        <!--<el-menu-item index="2"><a href="" target="_blank">注册</a></el-menu-item>-->
        <!--</el-menu>-->
      </div>
    </div>
    <div class="body">
      <div class="banner">
        <div class="inner">
          <div class="logo-wrapper">
            <router-link :to="{ path: '/' }">
              <img src="../assets/logo.png">
            </router-link>
          </div>
          <div class="book-shelf-wrapper">
            <router-link :to="{ path: '/bookshelf' }" class="book-shelf">
              <img src="" alt="">
              <span>我的书架</span>
            </router-link>
          </div>
          <div class="search-wrapper">
            <div class="search-btn-wrapper">
              <button id="searchBtn" class="search-btn" type="button">
                <img src="../assets/images/search.png">
              </button>
            </div>
            <div class="text-wrapper">
              <div>
                <input type="text" id="searchQuery" placeholder="搜索你想看的小说">
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr>

      <div class="inner">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
    <div class="footer">
      <div class="inner">
        Copyright © 2014-2016 All Right Reserved版权所有 闽江学院2014级软件工程
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formInline: {
          activeIndex2: '1',
          query: ' '
        }
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style scoped>
  .wrapper{
    background-color: #fff;
  }
  /*header*/
  .header {
    background-color: #f6f6f6;
    border-bottom: 1px solid #e2e2e2;
  }

  .header .inner {
    width: 100%;
    margin: 0 auto;
  }

  @media screen and (min-width: 1200px) {
    .header .inner {
      width: 1200px;
      margin: 0 auto;
    }
  }

  .header .user-panel {
    font-size: 0.65em;
    float: right;
    color: #373737;
    padding: 6px;
  }

  .banner {
    padding: 26px 0;
    padding-bottom: 15px;
  }

  .banner .inner {
    width: 100%;
    margin: 0 auto;
  }

  @media screen and (min-width: 1200px) {
    .banner .inner {
      width: 1200px;
      margin: 0 auto;
    }
  }

  /*banner*/
  .banner .logo-wrapper {
    float: left;
  }

  .banner .logo-wrapper img {
    height: 55px;
  }

  .banner .search-wrapper {
    margin: 0 auto;
    width: 380px;
  }

  .banner .search-wrapper .text-wrapper {
    border: 1px solid #c6c6c6;
    padding: 4px 5px 8px;
    margin-right: 50px;
    height: 28px;
  }

  .banner .search-wrapper .text-wrapper input[type=text] {
    margin-top: 5px;
    border: 0;
    width: 100%;
    font-size: 16px;
    box-sizing: border-box;
  }

  .banner .search-wrapper .search-btn-wrapper {
    height: 42px;
    width: 50px;
    float: right;
  }

  .banner .search-wrapper .search-btn {
    background-color: #b81c14;
    border: 0;
    height: 100%;
    width: 100%;
  }

  .banner .search-wrapper .search-btn>img {
    width: 70%;
  }

  .banner .book-shelf-wrapper {
    float: right;
  }

  .banner .book-shelf-wrapper .book-shelf {
    border: 1px solid #c6c6c6;
    padding: 0 20px;
    display: block;
  }

  .banner .book-shelf-wrapper .book-shelf span {
    font-size: 0.8em;
    line-height: 40px;
  }

  /*body inner*/
  .body .inner {
    width: 80%;
    margin: 0 auto;
  }


  /*footer*/
  .footer {
    clear:both;
    margin-top: 50px;
    background-color: #eee;
    padding: 10px 0;
    /*position: absolute;*/
    width: 100%;
    bottom: 0;
  }

  .footer .inner {
    width: 100%;
    margin: 0 auto;
    text-align: center;
    color: #666;
    font-size: 0.75rem;
  }

  a {
    text-decoration: none;
    color: black !important;
  }

  a:hover {
    color: red !important;
  }

</style>

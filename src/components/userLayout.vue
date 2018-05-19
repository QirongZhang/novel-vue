<template>
  <div class="wrapper">
    <div class="header">
      <div class="inner">
        <div class="logo-wrap">
          <router-link :to="{ path: '/' }">
            <img src="../assets/logo.png">
            <span class="sperate"></span>
          </router-link>
          <span class="site-name">读客中文网</span>
        </div>
      </div>
    </div>
    <div class="body">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
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
      return {}
    },

  }
</script>

<style scoped>
  .wrapper{
    background-color: #fff;
  }

  .header .inner {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }

  .header .logo-wrap {
    float: left;
    margin-top: 30px;
  }

  .header .logo-wrap img {
    height: 45px;
    vertical-align: middle;
  }

  .header .sperate {
    display: inline-block;
    vertical-align: middle;
    height: 45px;
    width: 1px;
    background-color: #ccc;
  }

  .header .site-name {
    color: #666;
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
</style>

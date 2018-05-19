<template>
  <div>
    <div class="capter">
      <div class="inner">
        <div class="novel-head" id="novel-head">
          <img :src="novel.novelPic">
          <div class="info">
            <span class="title">{{novel.novelName}}</span>
            <br/>
            <span v-html="novel.introduction" class="intro"></span>
            <br/>
            <span class="author"><img src="../assets/images/head.png">作者：{{novel.author}}</span>
          </div>
          <div class="action">
            <a @click="addBookShelf(novel.novelId)">添加到书架</a>
          </div>
        </div>
        <div class="novel-nav">
          <span>目录</span>
        </div>
        <div class="capter-list" id="capter-list">
          <div class="capter-list-group" id="capter-list-group" style="overflow:hidden">
            <router-link :to="{name:'read',params:{chapterId:chapter.chapterId}}" v-for="chapter in chapterList"
                         style="border-bottom: 1px solid #dfdfdf;padding: 12px;width: 33%;float:left">
              {{chapter.chapterName}}
            </router-link>
            <!--<a v-for="chapter in chapterList" href=""-->
            <!--style="border-bottom: 1px solid #dfdfdf;padding: 12px;width: 33%;float:left">{{chapter.chapterName}}</a>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    watch:{
      '$route.params' (to, from) {
        this.getData4ChapterList();
        this.getNovel();
        // 对路由变化作出响应...
      }
    },
    created: function () {
      this.getData4ChapterList();
      this.getNovel();
    },
    methods: {
      getNovel(){
        let novelId = this.$route.params.novelId;
        if (typeof (novelId) !== 'undefined') {
          this.$http({
            method: 'get',
            url: '/novel/detail/' + novelId,
          }).then((response) => {
            console.log(response.data);
            this.novel = response.data;
          }).catch((error) => {
            console.log(error);
          });
        }
      },
      getData4ChapterList(){
        let novelId = this.$route.params.novelId;
        if (typeof (novelId) !== 'undefined') {
          console.log("novelId : " + novelId);
          this.$http({
            method: 'get',
            url: '/chapter/listByNovelId/' + novelId,
          }).then((response) => {
            console.log(response.data);
            this.chapterList = response.data;
          }).catch((error) => {
            console.log(error);
          });
        }
      },
      addBookShelf(novelId) {
        var user = this.getCookie("account");
        if (user != "") {
          /**
           * 异步请求，将书本添加到书架
           */
          this.$http({
            method: 'get',
            url: '/bookshelf/add?novelId=' + novelId
          }).then((response) => {
            if (response.data.flag) {
              alert(response.data.massage);
            }

          }).catch(function (error) {
            console.log(error);
          });
        } else {
          this.$router.push('/user/login');
        }
      },
      //获取cookie
      getCookie: function (cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') c = c.substring(1);
          if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
        }
        return "";
      }
    },
    data() {
      return {
        novel: {},
        chapterList: []
      }
    }
  }


</script>

<style scoped>
  .capter .inner {
    width: 100%;
    margin: 0 auto;
  }

  @media screen and (min-width: 1200px) {
    .capter .inner {
      width: 900px;
      margin: 0 auto;
    }
  }

  .capter .novel-head > img {
    float: left;
    width: 140px;
    height: 187px;
  }

  .capter .novel-head > .info {
    overflow: hidden;
    padding-left: 20px;
  }

  .capter .novel-head .title {
    font-size: 1.3rem;
  }

  .capter .novel-head .intro {
    font-size: 0.75rem;
    color: #444;
  }

  .capter .novel-head .author {
    font-size: 0.7rem;
    color: #f07465;
  }

  .capter .novel-head .author > img {
    width: 20px;
    vertical-align: middle;
    margin-right: 10px;
  }

  .capter .novel-head {
    padding: 30px;
    overflow: hidden;
    position: relative;
    border: 1px solid #aaa;
    border-bottom: 0;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  }

  .capter .action {
    overflow: hidden;
    padding-left: 20px;
    position: absolute;
    bottom: 30px;
    left: 170px;
  }

  .capter .action a {
    border: 0;
    display: inline-block;
    background-color: #fff;
    color: #b00c05;
    border: 1px solid #b00c05;
    font-size: 0.7rem;
    padding: 8px;
  }

  .capter .novel-nav {
    padding-left: 30px;
    background: #fff;
    position: relative;
    top: -1px;
    border-bottom: 0.5px solid #ddd;
  }

  .capter .novel-nav > span {
    color: #eb324a;
    letter-spacing: 10px;
    border-bottom: 2px solid #eb324a;
  }

  .capter .capter-list {
    padding: 30px;
  }

  .capter .capter-list-group {
    border-bottom: 1px solid #dfdfdf;
    padding-bottom: 5px;
  }

  .capter .capter-list-group > a {
    width: 30%;
    box-sizing: border-box;
    padding: 0 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: inline-block;
    text-align: center;
    color: #000;
    font-size: 0.75rem;
  }

  a {
    text-decoration: none;
    color: black !important;
    cursor: pointer;
  }

  a:HOVER {
    color: red !important;
  }
</style>

<template>
  <div>
    <div class="author-work">
      <div class="inner">
        <div class="title">
          <span>搜索列表</span>
        </div>
        <div class="work-list">
          <div v-for="novel in novelList" class="work-item">
            <img :src='novel.novelPic' style="width: 10.5%;height: 126px;"
                 :alt='novel.novelName'>
            <div class="detail">
              <div class="book-name">
                <router-link :to="{name:'chapter',params:{novelId: novel.novelId}}">{{novel.novelName}}</router-link>
              </div>
              <!--
                <div class="book-type">仙侠</div>-->
              <div class="book-intro"><span v-html="novel.introduction"/></div>
              <div class="book-add">
                <a v-on:click="addBookShelf(novel.novelId)">添加到书架</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import index from "../router/index";

  export default {
    watch: {
      '$route.params'(to, from) {
        this.getData4NovelList();
      }
    },
    created: function () {
      this.getData4NovelList();
    },
    methods: {
      getData4NovelList() {
        let novelName = this.$route.params.novelName;
        if (typeof (novelName) !== 'undefined') {
          this.$http({
            method: 'get',
            url: '/novel/listByNovelName/'+novelName,
          }).then((response) => {
            this.novelList = response.data;
            console.log(response.data);

          }).catch(function (error) {
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
        novelList: []
      }
    }
  }
</script>

<style>
  .author-work .inner {
    width: 100%;
    margin: 0 auto;
  }

  @media screen and (min-width: 1200px) {
    .author-work .inner {
      width: 900px;
      margin: 0 auto;
    }
  }

  .author-work .title {
    margin-top: 20px;
    color: #eb324a;
    border-bottom: 2px solid #eb324a;
  }

  .author-work .work-list {
    padding-top: 20px;
  }

  .author-work .work-item {
    margin-bottom: 20px;
  }

  .author-work .work-item > .detail {
    overflow: hidden;
  }

  .author-work .work-item > img {
    float: left;
  }

  .author-work .work-item > .detail {
    overflow: hidden;
    padding-left: 20px;
    position: relative;
    height: 126px;
  }

  .author-work .book-name > a {
    color: #000;
    text-decoration: none;
  }

  .author-work .book-type {
    font-size: 0.65rem;
    color: #666;
  }

  .author-work .book-intro {
    font-size: 0.7rem;
    color: #666;
  }

  .author-work .book-add {
    position: absolute;
    bottom: 5px;
  }

  .author-work .book-add > a {
    border: 1px solid #b81c14;
    font-size: 12px;
    background-color: #fff;
    color: #b81c14;
    padding: 5px;
    text-decoration: none;
  }

  a {
    text-decoration: none;
    color: black !important;
    cursor: pointer;
  }

  a:HOVER {
    color: red ! important;
  }
</style>

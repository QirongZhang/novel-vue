<template>
  <div>
    <!--<el-breadcrumb separator="/" class="breadcrumb">-->
    <!--<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>-->
    <!--<el-breadcrumb-item>历史穿越</el-breadcrumb-item>-->
    <!--<el-breadcrumb-item>汉乡</el-breadcrumb-item>-->
    <!--<el-breadcrumb-item>第十二章伏兵之计</el-breadcrumb-item>-->
    <!--</el-breadcrumb>-->

    <!--<div class="side-bar">
      <div class="item">
        <div><img class="item-img" src="../assets/images/cata.png"></div>
        <div>目录</div>
      </div>
      <div class="cata-list" id="cataList">
        <div class="cata-item">
          <a v-for="item in lists" :href="getURL(item.chapter_id, item.story_id)">{{ item.chapter_name }}</a>
        </div>
      </div>
    </div>-->
    <div class="side-content">
      <div class="inner">
        <a v-bind:class="chapLeft" @click="clickLeft">
          <img src="../assets/images/left.png" alt="">前一章</a>
        <a class="chap-right chap" @click="clickRight">
          后一章<img src="../assets/images/right.png" alt=""></a>
        <div class="content" style="white-space:pre-wrap">
          <span v-html="chapter.chapterContent"></span>
        </div>
        <a v-bind:class="chapLeft" @click="clickLeft">
          <img src="../assets/images/left.png" alt="">前一章</a>
        <a class="chap-right chap" @click="clickRight">
          后一章<img src="../assets/images/right.png" alt=""></a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    watch: {
      '$route.params'(to, from) {
        this.getData4ChapterDetail();
      }
    },
    created: function () {
      this.getData4ChapterDetail();
      this.chapLeftRight();
    },
    methods: {
      getData4ChapterDetail() {
        console.log('xxxx');
        let chapterId = this.$route.params.chapterId;
        if (typeof (chapterId) !== 'undefined') {
          this.$http({
            method: 'get',
            url: '/chapter/detail/' + chapterId,
          }).then((response) => {
            console.log(response.data);
            this.chapter = response.data;
          }).catch((error) => {
            console.log(error);
          });
        }
      },
      chapLeftRight() {
        if (this.chapter.ordBy === 1) {
          this.chapLeft.disable = true;
        }else {
          this.chapLeft.disable = false;
        }

      },
      clickLeft() {
        this.$http({
          method: 'get',
          url: '/chapter/detailByOrder?novelId=' + this.chapter.novelId + '&ordBy=' + (this.chapter.ordBy - 1),
        }).then((response) => {
          console.log(response.data);
          this.chapter = response.data;
        }).catch((error) => {
          console.log(error);
        });
      },
      clickRight() {
        this.$http({
          method: 'get',
          url: '/chapter/detailByOrder?novelId=' + this.chapter.novelId + '&ordBy=' + (this.chapter.ordBy + 1),
        }).then((response) => {
          this.chapter = response.data;
          console.log(this.chapter.ordBy);
          this.chapLeftRight();
          console.log(this.chapter.ordBy);
        }).catch((error) => {
          console.log(error);
        });
      }

    },
    data() {
      return {
        chapter: {},
        lists: [],
        chapLeft: {
          'chap-left': true,
          chap: true,
          disable: false
        }
      }
    }
  }
</script>

<style scoped>
  .breadcrumb {
    margin: 20px auto;
    margin-left: 130px;
  }

  .side-bar {
    position: fixed;
    float: left;
  }

  .side-bar .item {
    float: left;
  }

  .side-bar .item-img {
    width: 18px;
  }

  .side-bar > .item {
    font-size: 0.7rem;
    color: #888;
    text-align: center;
    padding: 5px 14px;
    border: 1px solid #dad4cb;
    position: relative;
    z-index: 1;
    cursor: pointer;
  }

  .side-bar > .item.actives {
    background-color: #f9f8f2;
    border-right: 0;
  }

  .cata-list {
    display: none;
    position: relative;
    top: 1px;
    float: left;
    background-color: #f9f8f2;
    padding: 20px 40px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
    overflow-y: scroll;
    max-height: 500px;
  }

  .cata-item {
    max-width: 350px;
    font-size: 0.85em;
    padding: 10px;
    overflow: hidden;
  }

  .cata-item > a {
    float: left;
    width: 50%;
    text-align: center;
    color: black;
    padding: 5px 0;
  }

  .cata-item > a:hover {
    color: red;
  }

  .side-content {
    overflow: auto;
    margin-left: 60px;
  }

  .side-content .inner {
    padding-left: 10px;
  }

  .side-content .content {
    background-color: #F8F3E9;
    margin-top: 20px;
    border: 1px solid #dad4cb;
    font-size: 1.3em;
    line-height: 2em;
    padding: 30px 20px;
    white-space: pre-wrap;
    text-indent: 2em;
  }

  .side-content .content p {
    line-height: 1.8;
    overflow: hidden;
    margin: .8em 0;
  }

  .side-content .chap {
    background-color: #b81c14;
    border-radius: 5px;
    font-size: 0.8em;
    color: #fff;
    padding: 10px 0;
    display: inline-block;
    width: 49%;
    text-align: center;
  }

  .side-content .chap.disable {
    pointer-events: none;
    cursor: not-allow;
    background-color: #999;
  }

  .side-content .chap > img {
    height: 15px;
    vertical-align: middle;
  }

  .side-content .chap-left > img {
    padding-right: 15px;
  }

  .side-content .chap-right > img {
    padding-left: 15px;
  }

  .side-content .chap-right {
    margin-left: 17px;
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

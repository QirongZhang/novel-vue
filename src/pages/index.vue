<template>
  <div>
    <div class="middle-bar">
      <div class="inner">
        <div class="classify">
          作品分类
        </div>
        <div class="cls"></div>
      </div>
    </div>
    <div class="middle-banner">
      <div class="inner">
        <div class="cata">
          <ul>
            <li v-for="category in categoryList">
              <router-link :to="{name: 'novel',params: {categoryId:  category.categoryId }}">{{category.categoryName}}</router-link>
            </li>
          </ul>
        </div>
        <div class="cata-content">
          <div class="home">
            <div class="slider" id="slider">
              <div class="container">
                <slide-show :slides="slides" :inv="inv"></slide-show>
              </div>
            </div>
            <div class="publicity">
              <div class="content">
                <div class="title">公告</div>
                <div v-for="notice in noticeList" class="item">
                  <a>{{notice.content}}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cls"></div>
      </div>
    </div>
    <div class="bottom-banner">
      <div class="inner">
        <div class="intro">
          <div class="title">小编推荐</div>
          <div class="books" id="books">
            <div class="book" v-for="novel in novelList">
              <router-link :to="{name: 'chapter',params: {novelId:  novel.novelId }}">
                <img :src="novel.novelPic" style="width: 120px; height:172px; float: left;"/>
                <div class="book-title">{{novel.novelName}}</div>
              </router-link>
              <div class="intro"><span v-html="novel.introduction"/></div>
              <div class="author">
                <!--         	<a href="<%=path %>/AuthorAction!findAuthorByAuthorName?author_id=${storyBeans.author_id}&author_name=${storyBeans.author}">
                 -->
                <a>
                  <img src="../assets/images/head.png" style="width: 1.3em;vertical-align: middle;margin-right: 0.5em;">
                  作者：{{novel.author}}
                </a>
              </div>
            </div>
          </div>
          <div class="cls"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import slideShow from '../components/slideShow'
  export default {
    components:{
      slideShow
    },
    data: function () {
      return {
        categoryList: [],
        noticeList: [],
        novelList: [],
        slides: [
          {
            src: require('@/assets/slideShow/pic1.png'),
            title: 'xxx1',
            href: 'detail/analysis'
          },
          {
            src: require('@/assets/slideShow/pic2.png'),
            title: 'xxx2',
            href: 'detail/count'
          },
          {
            src: require('@/assets/slideShow/pic3.png'),
            title: 'xxx3',
            href: 'http://xxx.xxx.com'
          },
          {
            src: require('@/assets/slideShow/pic4.png'),
            title: 'xxx4',
            href: 'detail/forecast'
          }
        ],
        inv: 3000 //设置轮播时间差
      }
    },
    created: function () {
      this.getCategoryList();
      this.getRecommendNovelList();
      this.getNoticeList();
    },
    methods: {
      getCategoryList(){
        /**
         * 获取类别列表
         */
        this.$http({
          method: 'get',
          url: '/category/list',
        }).then( (response)=> {
          console.log(response.data);
          /**
           * 这个地方this指针不能指向vue
           */
          this.categoryList  = response.data;
        }).catch(function (error) {
          console.log(error);
        });
      },
      getRecommendNovelList(){
        this.$http({
          method: 'get',
          url: '/novel/recommendNovels',
        }).then( (response)=> {
          console.log(response.data);
          /**
           * 这个地方this指针不能指向vue
           */
          this.novelList  = response.data.records;

        }).catch(function (error) {
          console.log(error);
        });
      },
      getNoticeList(){
        /**
         * 获取公告列表
         */
        this.$http({
          method: 'get',
          url: '/novel/selectList4Front',
        }).then( (response)=> {
          console.log('notice = ');
          console.log(response.data);
          /**
           * 这个地方this指针不能指向vue
           */
          this.noticeList  = response.data;

        }).catch(function (error) {
          console.log(error);
        });
      }
    }
  }

</script>

<style scoped>
  .middle-bar {
    background-color: #3e3d43;
    color: #fff;
  }

  .middle-bar .inner {
    width: 100%;
    margin: 0 auto;
  }

  @media screen and (min-width: 1200px) {
    .middle-bar .inner {
      width: 1200px;
      margin: 0 auto;
    }
  }

  .middle-bar .classify {
    #float: left;
    font-size: 0.85rem;
    padding: 0 1em;
    line-height: 2.5em;
    background-color: #313035;
  }

  .middle-banner .inner {
    width: 100%;
    margin: 0 auto;
  }

  @media screen and (min-width: 1200px) {
    .middle-banner .inner {
      width: 1200px;
      margin: 0 auto;
    }
  }

  .middle-banner .cata {
    width: 200px;
    float: left;
    border-bottom: 1px solid #e3e3e3;
  }

  .middle-banner .cata li {
    border: 1px solid #e3e3e3;
    border-top: 0;
    border-bottom: 0;
    width: 100%;
    text-align: center;
    box-sizing: border-box;
    display: inline-block;
    font-size: 0.85rem;
    padding: 0.8em 0.5em;
  }

  .middle-banner .cata li:nth-of-type(odd) {
    background-color: #f7f6f2;
  }

  .middle-banner .cata-content {
    float: left;
    width: 1000px;
  }

  .middle-banner .slider {
    float: left;
    margin: 7px 0 0 10px;
    height: 400px;
    width: 750px;
  }

  .middle-banner .slider .container {
    height: 100%;
    overflow: hidden;
  }

  .middle-banner .slider .img-sets {
    transition: transform 1s ease-in-out;
  }

  .middle-banner .slider .img-sets > a {
    float: left;
    display: block;
    width: 750px;
    height: 300px;
    overflow: hidden;
  }

  .middle-banner .slider .img-sets > a > img {
    width: 100%;
  }

  .middle-banner .publicity {
    overflow: hidden;
    padding-left: 10px;
    padding-top: 16px;
  }

  .middle-banner .publicity .title {
    text-align: center;
    padding-bottom: 10px;
  }

  .middle-banner .publicity .content {
    padding: 10px 5px;
    height: 335px;
    box-sizing: border-box;
    border: 1px solid #e3e3e3;
    background-color: #fcfcf9;
  }

  .middle-banner .publicity .item {
    font-size: 0.7em;
    padding: 5px;
  }

  .middle-banner .publicity .item a {
    color: #000;
  }

  .bottom-banner {
    margin: 20px 0 60px;
  }

  .bottom-banner .inner {
    width: 100%;
    margin: 0 auto;
  }

  @media screen and (min-width: 1200px) {
    .bottom-banner .inner {
      width: 1200px;
      margin: 0 auto;
    }
  }

  .bottom-banner .title {
    writing-mode: vertical-rl;
    float: left;
    height: 100px;
    color: #fff;
    background-color: #b00c05;
    padding: 10px 10px 0px;
  }

  .bottom-banner .books {
    width: 95%;
    float: left;
  }

  .bottom-banner .books .book {
    width: 21%;
    float: left;
    margin-left: 20px;
    margin-bottom: 20px;
    position: relative;
  }

  .bottom-banner .books .intro {
    margin-top: 5px;
    overflow: hidden;
    padding-left: 10px;
    font-size: 0.7rem;
    height: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #555;
  }

  .bottom-banner .books .book-title {
    overflow: hidden;
    padding-left: 10px;
    font-size: 0.85rem;
    padding-left: 0.5em;
  }

  .bottom-banner .books .author {
    overflow: hidden;
    padding-left: 10px;
    font-size: 0.7rem;
    color: #ef958a;
    position: absolute;
    bottom: 5px;
    left: 120px;
  }

  .bottom-banner .books .author > img {
    width: 1.3em;
    vertical-align: middle;
    margin-right: 0.5em;
  }

  .bottom-banner .books .book > img {
    width: 120px;
    float: left;
  }

  a {
    text-decoration: none;
    color: black !important;
    cursor:pointer;
  }

  a:hover {
    color: red !important;
  }
</style>

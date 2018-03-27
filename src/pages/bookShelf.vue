<template>
  <div>
    <div class="author-work">
      <div class="inner">
        <div class="title">
          <span>我的书架</span>
        </div>
        <div class="work-list">
          <div v-for="novel in novelList" class="work-item">
            <img :src='novel.bookCoverUrl' style="width: 10.5%;height: 126px;"
                 :alt='novel.novelName'>
            <div class="detail">
              <div class="book-name"><a href="">{{novel.novelName}}</a></div>
              <!--
                <div class="book-type">仙侠</div>-->
              <div class="book-intro">{{novel.summary}}</div>
              <div class="book-add">
                <a href="">删除</a></div>
            </div>
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
        novelList: [
          {
            bookCoverUrl: require('../assets/images/80.jpeg'),
            novelName: '汉乡',
            summary: '这是简介这是简介这是简介这是简介这是简介这是简介',
          },
          {
            bookCoverUrl: require('../assets/images/80.jpeg'),
            novelName: '汉乡',
            summary: '这是简介这是简介这是简介这是简介这是简介这是简介',
          },
          {
            bookCoverUrl: require('../assets/images/80.jpeg'),
            novelName: '汉乡',
            summary: '这是简介这是简介这是简介这是简介这是简介这是简介',
          },
          {
            bookCoverUrl: require('../assets/images/80.jpeg'),
            novelName: '汉乡',
            summary: '这是简介这是简介这是简介这是简介这是简介这是简介',
          },
        ]
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
    height: 120px;
  }

  .author-work .book-name > a {
    color: #000;
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
    bottom: 3px;
  }

  .author-work .book-add > a {
    border: 1px solid #b81c14;
    font-size: 12px;
    background-color: #fff;
    color: #b81c14;
    padding: 5px;
  }

  a:HOVER {
    color: red ! important;
  }
</style>

<template>
  <div>
    <div class="author-head">
      <div class="inner">
        <img class="avatar" src="../assets/images/author.png" alt="">
        <div class="name">{{author.authorName }}</div>
        <div class="intro">阅文集团白金作家，网络文学代表人物之一，2015中国原创文学风云榜榜首。</div>
        <div class="statis">
          <span>
            作品数：80
          </span>
        </div>
        <div class="cls"></div>
      </div>
    </div>
    <div class="author-work">
      <div class="inner">
        <div class="title">
          <span>作者作品</span>
        </div>
        <div class="work-list">
          <div v-for="novel in 6" class="work-item">
            <img src="../assets/images/80.jpeg" alt="">
            <div class="detail">
              <div class="book-name"><a href="">大术士</a></div>
              <div class="book-type">仙侠</div>
              <div class="book-intro">
                这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍
              </div>
              <div class="book-add">
                <button>添加到书架</button>
              </div>
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
        author: {
          authorName: '荣小荣'
        }
      }
    }

  }
</script>

<style>
  .author-head .inner {
    width: 100%;
    margin: 0 auto;
  }

  @media screen and (min-width: 1200px) {
    .author-head .inner {
      width: 900px;
      margin: 0 auto;
    }
  }

  .author-head .avatar {
    width: 120px;
    float: left;
  }

  .author-head .name {
    overflow: hidden;
    padding-left: 20px;
    font-size: 1.8rem;
  }

  .author-head .intro {
    overflow: hidden;
    padding-left: 20px;
    padding-top: 10px;
    font-size: 0.75rem;
  }

  .author-head .statis {
    overflow: hidden;
    padding-left: 20px;
    font-size: 0.8rem;
    margin-top: 10px;
  }

  .author-head .statis > span {
    display: inline-block;
    text-align: center;
    color: #666;
  }

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
    bottom: 0;
  }

  .author-work .book-add > button {
    border: 1px solid #b81c14;
    background-color: #fff;
    color: #b81c14;
    padding: 5px;
  }
</style>

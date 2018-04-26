<template>
  <div>
    <div class="author-work">
      <div class="inner">
        <div class="title">
          <span>小说列表</span>
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
                <a href="">添加到书架</a></div>
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
        let categoryId = this.$route.params.categoryId;
        if (typeof (categoryId) !== 'undefined') {
          this.$http({
            method: 'get',
            url: '/novel/listByCategoryId/' + categoryId,
          }).then((response) => {
            console.log(response.data);
            this.novelList = response.data.records;
          }).catch((error) => {
            console.log(error);
          });
        }
      },
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

  a:HOVER {
    color: red ! important;
  }
</style>

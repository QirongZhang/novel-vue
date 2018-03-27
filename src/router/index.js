import Vue from 'vue'
import Router from 'vue-router'
import LayoutPage from '@/components/layout'
import IndexPage from '@/pages/index'
import ReadPage from '@/pages/read'
import ChapterPage from '@/pages/chapter'
import UserLayoutPage from '@/components/userLayout'
import SignPage from '@/pages/sign'
import LoginPage from '@/pages/login'
import BookShelfPage from '@/pages/bookShelf'
import AuthorPage from '@/pages/author'
import Novel from '@/pages/novel'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: LayoutPage,
      // redirect: '/index',
      children: [
        {
          path: '',
          name: 'index',
          component: IndexPage
        },
        {
          path: 'read/:chapterId',
          name: 'read',
          component: ReadPage
        },
        {
          path: 'chapter/:novelId',
          name: 'chapter',
          component: ChapterPage
        },
        {
          path: 'bookshelf',
          name: 'bookshelf',
          component: BookShelfPage
        },
        {
          path: 'author',
          name: 'author',
          component: AuthorPage
        },
        {
          path: 'novel/:categoryId',
          name: 'novel',
          component: Novel
        }
      ]
    },
    {
      path: '/user',
      component: UserLayoutPage,
      children: [
        {
          path: 'sign',
          component: SignPage
        },
        {
          path: 'login',
          component: LoginPage
        }
      ]
    }
  ]
})

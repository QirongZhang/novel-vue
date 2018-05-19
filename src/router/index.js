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
import Search from '@/pages/search'

Vue.use(Router)

//静态路由
export const constantRouterMap = [
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
        path: 'author',
        name: 'author',
        component: AuthorPage
      },
      {
        path: 'novel/:categoryId',
        name: 'novel',
        component: Novel
      },
      {
        path: 'search/:novelName',
        name: 'search',
        component: Search
      },
      {
        path: 'bookshelf',
        name: 'bookshelf',
        component: BookShelfPage
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

export default new Router({
  // mode: 'history',
  routes: constantRouterMap
})

//异步挂载的路由
//根据需求动态获取的路由
export const asyncRouterMap = [
  {
    path: 'bookshelf',
    name: 'bookshelf',
    meta: {
      title: '',
      roles: ['user']
    },
    component: BookShelfPage
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

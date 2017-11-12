import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router);

export const constantRouterMap = [
  {
    path: '/',
    name: '',
    component: function (resolve) {
      require(['@/views/loginPage/page1'], resolve)
    },
  },
  {
    path: '/',
    name: '',
    component: function (resolve) {
      require(['@/views/public/base-body'], resolve)
    },
    children:[
      {
        path: 'login',
        name: 'login',
        component: function (resolve) {
          require(['@/views/loginPage/page1'], resolve)
        },
      },
    ],
  },

];

export const asyncRouterMap = [
   {
    path: '/',
    name: '',
    component: function (resolve) {
      require(['@/views/public/base-body'], resolve)
    },
    children:[
      {
        path: '*',
        name: '404',
        component: function (resolve) {
          require(['@/views/loginPage/page1'], resolve)
        },
      },
    ],
  },
];


export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap.concat(asyncRouterMap)
})

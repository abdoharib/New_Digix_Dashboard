import Vue from 'vue'
import Router from "vue-router";

import Body from '../components/body'


import Login from '../pages/auth/login.vue'
import OverView from '../pages/overview'
import Projects from '../pages/projects'

import Jobs from '../pages/job/jobs'
import JobEdit from "../pages/job/edit_job"
import Applications from '../pages/job/applications'
import AddJob from "../pages/job/add_job"



// component

Vue.use(Router)

const routes = [
  { path: '', redirect: { name: 'overview' }},
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: 'تسجيل الدخول',
    }
  },
  {
    path: '/dashboard',
    component: Body,
    children: [
    
    {
      path: 'overview',
      name: 'overview',
      component: OverView,
      meta: {
        title: 'الا حصائيات',
      }
    },
    {
      path: 'jobs',
      name: 'jobs',
      component: Jobs,
      meta: {
        title: 'الوظائف',
      }
    },
    {
      path: 'job-edit/:id',
      name: 'job-edit',
      component: JobEdit,
      meta: {
        title: 'الوظائف',
      }
    },
    {
      path: 'jobs-applications',
      name: 'jobs-applications',
      component: Applications,
      meta: {
        title: 'طلبات التوظيف',
      }
    },
    {
      path: 'jobs-add',
      name: 'jobs-add',
      component: AddJob,
      meta: {
        title: 'طلبات التوظيف',
      }
    },
    {
      path: 'projects',
      name: 'projects',
      component: Projects,
      meta: {
        title: 'ألاعمال',
      }
    },
  ]
  }];


const router = new Router({
  routes,
  base: '/',
  mode: 'history',
  linkActiveClass: "active",
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
});

router.beforeEach((to, from, next) => {
  if(to.name !== "login"){
    let token = localStorage.getItem("AccessToken")
    token && token !== "" ? next() : next("/login")
  }else{
    let token = localStorage.getItem("AccessToken")
    if(token && token !== ""){
      next("")
    }else{
      next()
    }
  }
})

export default router

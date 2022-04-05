import Vue from "vue";
import Vuex from "vuex";
// import 'es6-promise/auto';
import layout from './modules/layout'
import menu from './modules/menu'
import jobs from './modules/jobs'
import projects from './modules/projects'
import projectCategories from './modules/projectCategories'

import { authentication } from './modules/authentication';


Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
      layout,
      menu,
      jobs,
      projects,
      authentication,
      projectCategories
    }
});


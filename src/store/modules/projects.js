import axios from "../../axios.js"

/* eslint-disable */
let mockDataJobs = [

];


const state = {

  types: [

  ],
  loading:false
};

// getters
const getters = {
  //jobs
  AllProjects: ({types}) => {
    return types
  },
  
};

// mutations
const mutations = {
  UpdateProjects: (state, payload) => {
    if (payload) {
      state.types = payload;
      console.log("Projects Updated");
    } else {
      console.log("Falsy Payload in UpdateProjects");
    }
  },
  Loading: (state, payload) => {
      state.loading = payload;
  },
  AddProject: (state, payload) => {
    if (payload) {
      state.types.push(payload);
      console.log("Projects Updated");
    } else {
      console.log("Falsy Payload in UpdateProjects");
    }
  },
  UpdateProject: (state, payload) => {
    if (payload) {
      state.types.forEach(item => {
        if (item.id == payload.id) {
          item = payload
        }
      });
    } else {
      console.log("Falsy Payload in UpdateProjects");
    }
  },
  DeleteProject: (state, payload) => {
    if (payload) {
     state.types.forEach((item,index) => {
      if (item.id == payload) {
        state.types.splice(index,1)
      }
     })
    } else {
      console.log("Falsy Payload in UpdateProjects");
    }
  },
};

const actions = {

  //jobs
  async UpdateProject({commit,state, dispatch },payload) {
   commit('Loading',true)
    let res = await axios.post(`api/portfolio/${payload.id}`, payload,{
      headers:{
        "Authorization":localStorage.getItem("AccessToken")
      }
    }).catch((e) => {
      if(JSON.stringify(e).indexOf("401")) dispatch("authentication/logout",{},{root:true});

      commit('Loading',false)
      console.log(e);
    });
    if (res.data.statusCode !== 200) {
      commit('Loading',false)
      console.log(res.data.message);
    } else {
      
      commit("UpdateProject", res.data.body)
      commit('Loading',false)
      //  dispatch("GetJobs")
    }
  },
  async GetProjects({
    commit,dispatch
  }) {
    commit('Loading',true)
    let res = await axios.get("api/portfolio",{
      headers:{
        "Authorization":localStorage.getItem("AccessToken")
      }
    }).catch((e) => {
      if(JSON.stringify(e).indexOf("401")) dispatch("authentication/logout",{},{root:true});

      console.log(e);
      commit('Loading',false)
    });
    if (res.data.statusCode !== 200) {
      commit('Loading',false)
      console.log(res.data.message);
    } else {
      commit('Loading',false)
      commit("UpdateProjects", res.data.body);
    }
  },
  async AddProject({
    commit,dispatch
  }, new_project) {
    commit('Loading',true)
    let res = await axios.post("api/portfolio", new_project,{
      headers:{
        "Authorization":localStorage.getItem("AccessToken")
      }
    }).catch((e) => {
      if(JSON.stringify(e).indexOf("401")) dispatch("authentication/logout",{},{root:true});

      console.log(e);
      commit('Loading',false)
    });
    if (res.data.statusCode !== 200) {
      commit('Loading',false)
      console.log(res.data.message);
    } else {
      commit('Loading',false)
      commit('AddProject', res.data.body);
    }
  },
  async DeleteProject({commit,dispatch},payload) {
    let res = await axios
      .delete(`api/portfolio/${payload}`,{
        headers:{
          "Authorization":localStorage.getItem("AccessToken")
        }
      })
      .catch((e) => {
        if(JSON.stringify(e).indexOf("401")) dispatch("authentication/logout",{},{root:true});

        console.log(e);
      });
    if (res.data.statusCode !== 200) {
      console.log(res.data.message);
    } else {
      commit('DeleteProject', payload);
    }
  }

};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
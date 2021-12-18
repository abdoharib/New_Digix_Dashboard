import axios from "../../axios.js"

/* eslint-disable */
let mockDataJobs = [
 
];


const state = {

    types:[

    ],
    selected_project: null
};

// getters
const getters = {

  

  //jobs
  AllProjects: ({ types }) => {
    return types.map(type => type.projects ).flat();
  },
  ProjectsByType: ({ Jobs },type) => {
    return types.filter(type => type.id == type )[0].projects
  },
  Selected_Project: ({selected_project}) => {
      if(selected_project) return selected_project
  }


};

// mutations
const mutations = {

  UpdateProjects: ({ types }, payload) => {
    if (payload) {
        types = payload;
      console.log("Projects Updated");
    } else {
      console.log("Falsy Payload in UpdateProjects");
    }
  },
  UpdateSelected_Project: ({ selected_project }, payload) => {
       selected_project = payload;
      console.log("Selected_job Updated");
    
  },


};

const actions = {

    //jobs
  async UpdateProject({ state, commit, dispatch }) {
    let res = await axios.post(`api/portfolio/${state.selected_project.id}`, state.selected_project).catch((e) => {
      console.log(e);
    });
    if (res.data.statusCode !== 200) {
      console.log(res.data.message);
    } else {
      console.log("Updated selected_project");
      //  dispatch("GetJobs")
    }
  },
  async GetProjects({ state, commit }) {
    let res = await axios.get("api/portfolio").catch((e) => {
      console.log(e);
    });
    if (res.data.statusCode !== 200) {
      console.log(res.data.message);
    } else {
      console.log("Projects Arrived");
      commit("UpdateProjects", res.data.body);
    }
  },
  async AddProject({ state, commit }, new_project) {
    let res = await axios.post("api/portfolio", new_project).catch((e) => {
      console.log(e);
    });
    if (res.data.statusCode !== 200) {
      console.log(res.data.message);
    } else {
      console.log("New Project Added >>" + new_project);
    }
  },
  async ArchiveProject({ state, commit }) {
    let res = await axios
      .delete(`api/portfolio/${state.selected_project.id}`, state.selected_job.id)
      .catch((e) => {
        console.log(e);
      });
    if (res.data.statusCode !== 200) {
      console.log(res.data.message);
    } else {
      console.log("Project Arhived >>");
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

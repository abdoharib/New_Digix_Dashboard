import axios from "../../axios.js"

/* eslint-disable */
let mockDataJobs = [

];


const NewProjectTemplate = {
  link: "",
  title: "",
  description: "",
  status: 1,
  details:{
    client:"",
    skills:"",
    createdBy:"",
    finishedAt:Date(),
    clientBrief:''
  },
  image:"",
  category_id: [],
  catagories: {
    branding: {
      isActive: false,
      Page: {
        name: "Section",
        children: [
          {
            name: "BrandingHeader",
            props: {
              icons: {
                tools: {
                  isShown: false,
                  text: ''
                },

              }
            }
          },
          {
            name: "body",

            children: [
            ]
          }
        ]

      }
    },
    marketing: {
      isActive: false,
      Page: {
        name: "Section",
        children: [
          {
            name: "MarketingHeader",
            props: {
              icons: {
                tools: {
                  text: '',
                  isShown: true
                },
                platforms: {
                  text: '',
                  isShown: true
                }
              }
            }
          },
          {
            name: "body",

            children: [
            ]
          }
        ]

      }
    },
    development: {
      isActive: false,
      Page: {
        name: "Section",
        children: [
          {
            name: "DevelopmentHeader",
            props: {
              icons: {
                time: {
                  isShown: true,
                  text: ''
                },
                stack: {
                  isShown: true,
                  text: ''
                }
              }
            }
          },
          {
            name: "body",

            children: [
            ]
          }
        ]

      }
    },
  },
}

const state = {

  types: [

  ],

  NewProject: {
    link: "",
    title: "",
    description: "",
    details:{
      client:"",
      skills:"",
      createdBy:"",
      finishedAt:Date(),
      clientBrief:''
    },
    status: 1,
    image:"",
    category_id: [],
    catagories: {
      branding: {
        isActive: false,
        Page: {
          name: "Section",
          children: [
            {
              name: "BrandingHeader",
              props: {
                icons: {
                  tools: {
                    isShown: false,
                    text: ''
                  },

                }
              }
            },
            {
              name: "body",

              children: [
              ]
            }
          ]

        }
      },
      marketing: {
        isActive: false,
        Page: {
          name: "Section",
          children: [
            {
              name: "MarketingHeader",
              props: {
                icons: {
                  tools: {
                    text: '',
                    isShown: true
                  },
                  platforms: {
                    text: '',
                    isShown: true
                  }
                }
              }
            },
            {
              name: "body",

              children: [
              ]
            }
          ]

        }
      },
      development: {
        isActive: false,
        Page: {
          name: "Section",
          children: [
            {
              name: "DevelopmentHeader",
              props: {
                icons: {
                  time: {
                    isShown: true,
                    text: ''
                  },
                  stack: {
                    isShown: true,
                    text: ''
                  }
                }
              }
            },
            {
              name: "body",

              children: [
              ]
            }
          ]

        }
      },
    },
  },
  loading: false
};

// getters
const getters = {
  //jobs
  AllProjects: ({ types }) => {
    return types
  },

  NewProject: ({NewProject})=>{
    return NewProject
  }

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
      if(!payload.id) {state.NewProject = payload; return null; };
      console.log("asfasf");
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
      state.types.forEach((item, index) => {
        if (item.id == payload) {
          state.types.splice(index, 1)
        }
      })
    } else {
      console.log("Falsy Payload in UpdateProjects");
    }
  },

  ClearNewProject : (state) => {
    state.NewProject = JSON.parse( JSON.stringify(NewProjectTemplate)) 
  }

};

const actions = {

  //jobs
  async UpdateProject({ commit, state, dispatch }, payload) {
    commit('Loading', true)
    let res = await axios.post(`api/portfolio/${payload.id}`, payload, {
      headers: {
        "Authorization": localStorage.getItem("AccessToken")
      }
    }).catch((e) => {
      if (JSON.stringify(e).indexOf("401")) dispatch("authentication/logout", {}, { root: true });

      commit('Loading', false)
      console.log(e);
    });
    if (res.data.statusCode !== 200) {
      commit('Loading', false)
      console.log(res.data.message);
    } else {

      commit("UpdateProject", res.data.body)
      commit('Loading', false)
      //  dispatch("GetJobs")
    }
  },
  async GetProjects({
    commit, dispatch
  }) {
    commit('Loading', true)
    let res = await axios.get("api/portfolio", {
      headers: {
        "Authorization": localStorage.getItem("AccessToken")
      }
    }).catch((e) => {
      if (JSON.stringify(e).indexOf("401")) dispatch("authentication/logout", {}, { root: true });

      console.log(e);
      commit('Loading', false)
    });
    if (res.data.statusCode !== 200) {
      commit('Loading', false)
      console.log(res.data.message);
    } else {
      commit('Loading', false)
      commit("UpdateProjects", res.data.body);
    }
  },
  async AddProject({
    commit, dispatch
  }, new_project) {
    commit('Loading', true)
    let res = await axios.post("api/portfolio", new_project, {
      headers: {
        "Authorization": localStorage.getItem("AccessToken")
      }
    }).catch((e) => {
      if (JSON.stringify(e).indexOf("401")) dispatch("authentication/logout", {}, { root: true });

      console.log(e);
      commit('Loading', false)
    });
    if (res.data.statusCode !== 200) {
      commit('Loading', false)
      console.log(res.data.message);
    } else {
      commit('Loading', false)
      commit('AddProject', res.data.body);
    }
  },
  async DeleteProject({ commit, dispatch }, payload) {
    let res = await axios
      .delete(`api/portfolio/${payload}`, {
        headers: {
          "Authorization": localStorage.getItem("AccessToken")
        }
      })
      .catch((e) => {
        if (JSON.stringify(e).indexOf("401")) dispatch("authentication/logout", {}, { root: true });

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
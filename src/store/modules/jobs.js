import axios from "../../axios.js"

/* eslint-disable */
let mockDataJobs = [
  {
    status: false,
    HTML: "<p>ohhhhhhhh</p>",
    description: "قادر علي عدم حل اي مشكلة ومتفرغ 24 ساعة",
    id: "ab365847-7382-441a-a234-97315a6b78d8",
    title: "مطور ويب",
    type: "job",
    time:new Date().toDateString()
  },
];

let mockDataApplications = [
  
  {
    jobid: "ab365847-7382-441a-a234-97315a6b78d8",
    jobname:"g",
    note: "",
    file: "https://digix-dashboard-bucket.s3.eu-central-1.amazonaws.com/job-sub/ab98f6f3-db16-4212-9bf1-d1e085edb30f.pdf",
    phone: "+218919718023",
    name: "ahmed",
    id: "ab98f6f3-db16-4212-9bf1-d1e085edb30f",
    time: 1639095351000,
    email: "abdoamazon9@gmail.ocm",
    status: { id: 0, name: "معلق" },
    statusid:0
  },
  {
    jobid: "ab365847-7382-441a-a234-97315a6b78d8",
    jobname:"ويب",
    note: "",
    file: "https://digix-dashboard-bucket.s3.eu-central-1.amazonaws.com/job-sub/ab98f6f3-db16-4212-9bf1-d1e085edb30f.pdf",
    phone: "+218919718023",
    name: "mohamed",
    id: "ab98f6f3-db16-4212-9bf1-d1e085edb30f",
    time: 1639505030668,
    email: "abdoamazon9@gmail.ocm",
    status: { id: 0, name: "معلق" },
    statusid:0
  },
  {
    jobid: "ab365847-7382-441a-a234-97315a6b78d8",
    jobname:"ويب",
    note: "",
    file: "https://digix-dashboard-bucket.s3.eu-central-1.amazonaws.com/job-sub/ab98f6f3-db16-4212-9bf1-d1e085edb30f.pdf",
    phone: "+218919718023",
    name: "عبد المهيمن",
    id: "ab98f6f3-db16-4212-9bf1-d1e085edb30f",
    time: 1639505030668,
    email: "abdoamazon9@gmail.ocm",
    status: { id: 0, name: "معلق" },
    statusid:0
  },
];

const state = {
  jobs: [],
  selected_job: {},

  applications: [],
  selected_application: {},
};

// getters
const getters = {

  //applications
  AllApplicatons: ({ applications }) => {
    return applications;
  },
  Selected_Applicaton: ({ selected_application }) => {
    return selected_application;
  },

  //jobs
  AllJobs: ({ jobs }) => {
    return jobs;
  },
  ActiveJobs: ({ jobs }) => {
    return jobs.filter((job) => job.status == true);
  },
  inActiveJobs: ({ jobs }) => {
    return jobs.filter((job) => job.status == false);
  },
  Selected_job: (state) => {
    return state.selected_job;
  },

};

// mutations
const mutations = {

  UpdateJobs: ( state, payload) => {
    if (payload) {
      state.jobs = payload;
      console.log("Jobs Updated");
    } else {
      console.log("Falsy Payload in UpdateJobs");
    }
  },
  UpdateSelected_job: (state, payload) => {
    state.selected_job = payload;
      console.log("Selected_job Updated");
      console.log(state.selected_job);
    
  },

  Update_Application: (state, payload) => {
    state.selected_application = payload;
        console.log("selected_application UpdateApplication");
  },
  UpdateApplications: ( state , payload) => {
    if (payload) {
      state.applications = payload;
        console.log("applications Updated");
      } else {
        console.log("Falsy Payload in UpdateApplications");
      }
  }

};

const actions = {

    //jobs
  async UpdateJob({ state, commit, dispatch }, payload) {
    console.log(payload?payload:state.selected_job);
    
    let res = await axios.post("api/jobs", payload ? payload:state.selected_job,{
      headers:{
        "Authorization":localStorage.getItem("AccessToken")
      }
    }).catch((e) => {
      if(JSON.stringify(e).indexOf("401")) dispatch("authentication/logout",{},{root:true});

      console.log(e);
    });
    if (res.data.statusCode !== 200) {
      console.log(res.data.message);
      console.log(res.data);
      throw res.data.message
    } else {
      console.log("Updated Selected_job");
      console.log(res.data);
      dispatch("GetJobs")
       
    }
  },

  async GetJobs({ state, commit,dispatch },id = null) {
    console.log(id);
    let res = await axios.get("api/jobs",{
      headers:{
        "Authorization":localStorage.getItem("AccessToken")
      },
      params:{
        id:id?id:''
      }
    }).catch((e) => {
      if(JSON.stringify(e).indexOf("401")) dispatch("authentication/logout",{},{root:true});
      console.log(e);
    });
    if (res.data.statusCode !== 200) {
      console.log(res.data.message);
      throw res.data.message
    } else {
      console.log("Jobs Arrived");
      console.log(res.data.body);
      commit("UpdateJobs", res.data.body);
      return id && res.data.body[0] ? res.data.body[0] : null
    }
  },

  async AddJob({ state, commit,dispatch }, payload) {
    
    console.log(payload);
    //check if MaxNoApplications === "" if true delete it
    let sending = payload? payload : state.selected_job
    console.log(sending);
    if(sending && sending["MaxNoApplications"]){ console.log("safsaafs"); sending.MaxNoApplications  == "" && delete sending.MaxNoApplications }

    let res = await axios.put("api/jobs",  sending,{
      headers:{
        "Authorization":localStorage.getItem("AccessToken")
      }
    }).catch((e) => {
      if(JSON.stringify(e).indexOf("401")) dispatch("authentication/logout",{},{root:true});

      console.log(e);
    });
    if (res.data.statusCode !== 200) {
      console.log(res.data.message);
      throw res.data.message
    } else {
      console.log("New Job Added >>");
    }
  },

  async ArchiveJob({ state, commit,dispatch }) {
    let res = await axios
      .delete("api/jobs", {
        headers:{
          "Authorization":localStorage.getItem("AccessToken")
        },
        data:{id:state.selected_job.id}
      })
      .catch((e) => {
        if(JSON.stringify(e).indexOf("401")) dispatch("authentication/logout",{},{root:true});

        console.log(e);
      });
    if (res.data.statusCode !== 200) {
      console.log(res.data.message);
      throw res.data.message
    } else {
      console.log("Job Arhived >>");
    }
  },

  //apps
  async GetApplications({state, commit,dispatch}, filter){
    let res = await axios.get("/api/jobs/submission",{
      headers:{
        "Authorization":localStorage.getItem("AccessToken")
      }
    }).catch((e) => {
     
      if(JSON.stringify(e).indexOf("401")) dispatch("authentication/logout",{},{root:true});
        console.log(e);
      });
      if (res.data.statusCode !== 200) {
        console.log(res.data.message);
        throw res.data.message
      } else {
        console.log("Applications Arrived");
        commit("UpdateApplications", res.data.body);
      }
  },
  async UpdateApplication({state, commit, dispatch}, payload=null){
    console.log(state.selected_application);
    let res = await axios.post("/api/jobs/submission",payload?payload: state.selected_application, {
      headers:{
        "Authorization":localStorage.getItem("AccessToken")
      }
    }).catch((e) => {
      if(JSON.stringify(e).indexOf("401")) dispatch("authentication/logout",{},{root:true});

        console.log(e);
      });
      if (res.data.statusCode !== 200) {
        console.log(res.data.message);
        throw res.data.message
      } else {
        console.log("Application Updated");
        dispatch("GetApplications")

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

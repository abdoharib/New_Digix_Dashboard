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
    jobname:"مطور ويب",
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
  {
    jobid: "ab365847-7382-441a-a234-97315a6b78d8",
    jobname:"مطور ويب",
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
  {
    jobid: "ab365847-7382-441a-a234-97315a6b78d8",
    jobname:"مطور ويب",
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
  {
    jobid: "ab365847-7382-441a-a234-97315a6b78d8",
    jobname:"مطور ويب",
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
  {
    jobid: "ab365847-7382-441a-a234-97315a6b78d8",
    jobname:"مطور ويب",
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
  {
    jobid: "ab365847-7382-441a-a234-97315a6b78d8",
    jobname:"مطور ويب",
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
  {
    jobid: "ab365847-7382-441a-a234-97315a6b78d8",
    jobname:"مطور ويب",
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

  applications: mockDataApplications,
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

  UpdateApplication: (state, payload) => {
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
    
    let res = await axios.post("api/jobs", payload ? payload:state.selected_job).catch((e) => {
      console.log(e);
    });
    if (res.data.statusCode !== 200) {
      console.log(res.data.message);
      console.log(res.data);
    } else {
      console.log("Updated Selected_job");
      console.log(res.data);
      dispatch("GetJobs")
    }
  },

  async GetJobs({ state, commit }) {
    let res = await axios.get("api/jobs").catch((e) => {
      console.log(e);
    });
    if (res.data.statusCode !== 200) {
      console.log(res.data.message);
    } else {
      console.log("Jobs Arrived");
      commit("UpdateJobs", res.data.body);
    }
  },

  async AddJob({ state, commit }, payload) {
    let res = await axios.put("api/jobs",  payload ? payload:state.selected_job).catch((e) => {
      console.log(e);
    });
    if (res.data.statusCode !== 200) {
      console.log(res.data.message);
    } else {
      console.log("New Job Added >>");
    }
  },

  async ArchiveJob({ state, commit }) {
    let res = await axios
      .delete("api/jobs", {
        data:{id:state.selected_job.id}
      })
      .catch((e) => {
        console.log(e);
      });
    if (res.data.statusCode !== 200) {
      console.log(res.data.message);
    } else {
      console.log("Job Arhived >>");
    }
  },

  //apps
  async GetApplications({state, commit}, filter){
    let res = await axios.get("/api/jobs/submission").catch((e) => {
        console.log(e);
      });
      if (res.data.statusCode !== 200) {
        console.log(res.data.message);
      } else {
        console.log("Applications Arrived");
        commit("UpdateApplications", res.data.body);
      }
  },
  async UpdateApplication({state, commit}, payload=null){
    let res = await axios.post("/api/jobs/submission",payload?payload: state.selected_application).catch((e) => {
        console.log(e);
      });
      if (res.data.statusCode !== 200) {
        console.log(res.data.message);
      } else {
        console.log("Application Updated");
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

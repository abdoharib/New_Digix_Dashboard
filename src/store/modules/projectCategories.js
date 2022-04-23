import axios from "../../axios.js"
import Sections from "./PageHelpers"
/* eslint-disable */
let mockDataProjectsCatagory = {
    page: {
        name: "section",
        template: (children) => {
            return `<div class="marketing section over-hide padding-bottom-80" style="padding-top: 3rem;">
            <div class="section-1400 ">
                <div class="container-fluid">
                 ${children}
                </div>
            </div>
        </div>`;
        },
        children: [
            {
                name: "header",
                template: (children, props = null) => {

                    if (!props) {
                        props = {
                            headline: "",
                            icons: {
                                apps: {
                                    text: ''
                                },
                                platforms: {
                                    text: ''
                                }
                            }
                        }
                    }
                    return `<div class="row justify-content-center">

                    <div class="col-12 text-center mb-5">
    
                        <i class="uil uil-megaphone color-primary mr-3" style="font-size: 3rem;"></i>
                        
                        <h2 class="mb-0">
                            التسويق <span class="font-weight-600">الرقمي</span>
                        </h2>
                        
                        <div class="d-flex justify-content-center">
                            <p class=" mt-2 color-gray-dark  w-25 text-center">
                               ${props.headline}
                            </p>
                        </div>
    
                        <div class="d-flex justify-content-center mt-1">
    
                            <div class="mx-3 d-flex">
                                <div>
                                    <i class="uil uil-apps size-24 color-primary"></i>
                                </div>
                                <div class="d-flex align-items-center justify-content-center">
                                    <p class="mx-2 my-0 color-gray-dark">${props ? props.icons.apps.text : ''}</p>
                                </div>
                            </div>
    
                            <div class="mx-1 d-flex">
                                <div>
                                    <i class="uil uil-comment-message size-24 color-primary"></i>
                                </div>
                                <div class="d-flex align-items-center justify-content-center">
                                    <p class="mx-2 my-0 color-gray-dark">${props ? props.icons.platforms.text : ''}</p>
                                </div>
                            </div>
    
                        </div>
    
                    </div>
                </div>`;
                },
            },
            {
                name: "body",
                template: (children, props = null) => {

                    if (!props) {
                        props = {
                            headline: "",
                            icons: {
                                apps: {
                                    text: ''
                                },
                                platforms: {
                                    text: ''
                                }
                            }
                        }
                    }
                    return `<div class="row">${children}</div>`;
                },
                children: [
                    {
                        name: "TwoBox",
                        template: (children, props = null) => {

                            if (!props) {
                                props = {
                                    images: [
                                        {
                                            url: "",
                                            data: "",
                                        },
                                        {
                                            url: "",
                                            data: "",
                                        }
                                    ]
                                }
                            }

                            return `
                            <div class="col-md-6">

                            <a href="img/Frame5.jpg" data-fancybox="">
        
                                <div class="gallery-wrap square over-hide border-4 img-wrap">
        
                                <img src="${props.images[0].url}" alt="">
        
                                    <div class="gallery-mask">
                                        <div class="gallery-icon">
                                            <i class="uil uil-plus size-22 color-white"></i>
                                        </div>
                                    </div>
        
                                </div>
                            </a>
        
                        </div>
        
                        <div class="col-md-6 mt-4 mb-1 mt-md-0">
                            <a href="img/Frame6.jpg" data-fancybox="">
        
                                <div class="gallery-wrap square over-hide border-4 img-wrap">
        
                                    <img src="${props.images[1].url}" alt="">
                                    <div class="gallery-mask">
                                        <div class="gallery-icon">
                                            <i class="uil uil-plus size-22 color-white"></i>
                                        </div>
                                    </div>
        
                                </div>
        
                            </a>
                        </div>`
                        }
                    }
                ]
            }
        ]

    }
};


let state = {
    catagory :{"project_id":"f1c15ea8afa22c234b3ba8974f2f1e4b","catagories":{"branding":{"isActive":true,"Page":{"name":"MarketingSection","children":[{"name":"MarketingHeader"},{"name":"body","children":[{"name":"DoubleBox"}]}]},"HTML":"<div class=\"marketing section over-hide padding-bottom-80\" style=\"padding-top: 3rem;\">\n        <div class=\"section-1400 \">\n            <div class=\"container-fluid\">\n              <div class=\"row justify-content-center\">\n\n        <div class=\"col-12 text-center mb-5\">\n\n            <i class=\"uil uil-megaphone color-primary mr-3\" style=\"font-size: 3rem;\"></i>\n            \n            <h2 class=\"mb-0\">\n                التسويق <span class=\"font-weight-600\">الرقمي</span>\n            </h2>\n            \n            <div class=\"d-flex justify-content-center\">\n                <p class=\" mt-2 color-gray-dark  w-25 text-center\">\n                   \n                </p>\n            </div>\n\n            <div class=\"d-flex justify-content-center mt-1\">\n\n                <div class=\"mx-3 d-flex\">\n                    <div>\n                        <i class=\"uil uil-apps size-24 color-primary\"></i>\n                    </div>\n                    <div class=\"d-flex align-items-center justify-content-center\">\n                        <p class=\"mx-2 my-0 color-gray-dark\"></p>\n                    </div>\n                </div>\n\n                <div class=\"mx-1 d-flex\">\n                    <div>\n                        <i class=\"uil uil-comment-message size-24 color-primary\"></i>\n                    </div>\n                    <div class=\"d-flex align-items-center justify-content-center\">\n                        <p class=\"mx-2 my-0 color-gray-dark\"></p>\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n    </div> <div class=\"row\"> \n        <div class=\"col-md-6\">\n\n        <a href=\"img/Frame5.jpg\" data-fancybox=\"\">\n\n            <div class=\"gallery-wrap square over-hide border-4 img-wrap\">\n\n            <img src=\"\" alt=\"\">\n\n                <div class=\"gallery-mask\">\n                    <div class=\"gallery-icon\">\n                        <i class=\"uil uil-plus size-22 color-white\"></i>\n                    </div>\n                </div>\n\n            </div>\n        </a>\n\n    </div>\n\n    <div class=\"col-md-6 mt-4 mb-1 mt-md-0\">\n        <a href=\"img/Frame6.jpg\" data-fancybox=\"\">\n\n            <div class=\"gallery-wrap square over-hide border-4 img-wrap\">\n\n                <img src=\"\" alt=\"\">\n                <div class=\"gallery-mask\">\n                    <div class=\"gallery-icon\">\n                        <i class=\"uil uil-plus size-22 color-white\"></i>\n                    </div>\n                </div>\n\n            </div>\n\n        </a>\n    </div></div>\n            </div>\n        </div>\n    </div>"}}}
};

// getters
const getters = {
    //should return a list of Component that Represent the Page Body
     PageSections(state) {
         console.log(state);
         let {catagories} =  state.catagory
        let Body = state.catagory.catagories[Object.keys(catagories)[0]].Page.children[1];
         let PageSections = Body.children
         return PageSections;
     }

};

// mutations
const mutations = {

    AddToBody(state,payload) {
        let {catagories} =  state.catagory

        let Body = state.catagory.catagories[Object.keys(catagories)[0]].Page.children[1];
        Body.children.push(payload)
    },

    RemoveFromBody(state,index) {
        let {catagories} =  state.catagory

        let Body = state.catagory.catagories[Object.keys(catagories)[0]].Page.children[1];
        Body.children.splice(index,1)
    },
    ReplaceBody(state,NewBody){
        let {catagories} =  state.catagory

        let Body = state.catagory.catagories[Object.keys(catagories)[0]].Page.children[1];
        Body.children = NewBody
    },
    EditProps(state,payload) {
        let {catagories} =  state.catagory

        let Body = state.catagory.catagories[Object.keys(catagories)[0]].Page.children[1];
        Body.children[payload.index].props = payload.props
    },

    UpdateCatagory(state,payload) {
        state.catagory=payload
    }
};

const actions = {
    
    Append( { commit } ,ElementName) {
        let temp = JSON.parse(JSON.stringify(Sections[ElementName]))
        commit("AddToBody",temp)
    },
    Remove({ commit } ,index) {
        commit("RemoveFromBody",index)
    },
    UpdateProps({ commit } ,payload) {
        console.log(payload);
        commit("EditProps",payload)
    },


    GetCatagory({commit, rootState},payload) {
        let { catagories, id } = payload.project
        console.log(catagories)

        commit("UpdateCatagory",{
            project_id:id,
            catagories:{
                [payload.type]:catagories[payload.type]
            }})
        
    },

    async UpdateCatagory({commit, state}){
        Object.keys(state.catagory.catagories).forEach(key => {
            delete state.catagory.catagories[key].HTML
        })
        let res = await axios.post(`/api/portfolio/categories`,state.catagory,{
            headers:{
                "Authorization":localStorage.getItem("AccessToken")

            }
        });
        if (res.data.statusCode !== 200) {
            console.log(res.data.message);
          } else {
            commit('UpdateCatagory', res.data.body);
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

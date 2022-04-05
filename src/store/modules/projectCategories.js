//import axios from "../../axios.js"
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


const state = {
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
                        name: "DoubleBox",
                        props:{

                        },
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

// getters
const getters = {
    //should return a list of Component that Represent the Page Body
    PageSections(state) {
        let Body = state.page.children[1];
        let PageSections = Body.children
        return PageSections;
    }

};

// mutations
const mutations = {

    AddToBody(state,payload) {
        let Body = state.page.children[1];
        Body.children.push(payload)
    },

    RemoveFromBody(state,index) {
        let Body = state.page.children[1];
        Body.children.splice(index,1)
    },

    EditProps(state,payload) {
        let Body = state.page.children[1];
        Body.children[payload.index].props = payload.props
    }
};

const actions = {

    Append( { commit } ,ElementName) {

        commit("AddToBody",Sections[ElementName])
    },

    Remove({ commit } ,index) {
        commit("RemoveFromBody",index)
    },

    UpdateProps({ commit } ,payload) {
        commit("EditProps",payload)
    }
};



export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};

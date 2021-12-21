import router from '../../router/index';
import axios from "@/axios.js"

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user ?
    {
        status: {
            loggedIn: true
        },
        user
    } :
    {
        status: {},
        user: null
    };

export const authentication = {
    namespaced: true,
    state: initialState,
    getters: {

    },
    actions: {
        login({
            dispatch,
            commit
        }, payload) {
            
            commit('loginRequest', payload.phone);
            console.log('uu');
            return new Promise((resolve, reject) => {
                
                axios.post('/api/auth/login', payload)
                    .then(response => {
                        
                        commit('loginRequest', response.data);
                        console.log(response);
                        if (response.data.statusCode == 200) {

                            axios.defaults.headers.common['Authorization'] = `${response.data.body.token.AccessToken}`;
                            localStorage.setItem('AccessToken', response.data.body.token.AccessToken)
                            localStorage.setItem('RefreshToken', response.data.body.token.RefreshToken)
                            // localStorage.setItem('user', JSON.stringify(response.data.body));
                            commit('loginSuccess', response);
                            resolve(response.data);

                        } else {
                            commit('loginFailure', response);
                            reject(response.data);
                        }
                    })
                    .catch((error) => {
                        commit('loginFailure', error);
                        reject(error);
                    });
            })
        },
        
        
        logout({commit}) {
            return new Promise((resolve, reject) => {
                axios.get(`/auth/logout`)
                    .then((response) => {
                        if (response.data.statusCode == 200) {
                        localStorage.clear()
                        commit('logout');
                        resolve(response)
                        router.go("/auth/login")
                    } else {

                         //added by abdo
                         localStorage.clear()
                         commit('logout');
                         router.go("/auth/login")

                        reject(response);
                    }
                    })
                    .catch((error) => {
                        
                        //added by abdo
                        localStorage.clear()
                        commit('logout');
                        router.go("/auth/login")

                        reject(error)
                    })
            }) 
        }
    },
    mutations: {
        loginRequest(state, user) {
            state.status = {
                loggingIn: true
            };
            state.user = user;
        },
        loginSuccess(state, response) {

            state.status = {
                loggedIn: true
            };
            state.user = response.data.body;

        },
        loginFailure(state) {
            state.status = {};
            state.user = null;
        },
        logout(state) {
            state.status = {};
            state.user = null;
        }
    }
};
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


const URL_MOCKAPI = 'https://60adc5c380a61f0017331a4f.mockapi.io/tp4/usuarios';
const PAYLOAD = {
    users: [],
    type: ""
};

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        users : [],
        type: ""
    },
    mutations: {
      getUsersAxios(state, obj) {
          if(obj.users != null){
            state.users = obj.users;
          }
          
          state.type = obj.type;
      },
        addUser(state, user){
            if(user != null){
                state.users.push(user);
            }
        },
        resetUsers(state){
            state.users = [];
        }
    },
    actions: {
        async getUsersAxiosAsyncAwait({commit}){
            try {
                let res = await axios.get(URL_MOCKAPI);
                PAYLOAD.users = res.data;
                PAYLOAD.type = "async await";
                commit('getUsersAxios', PAYLOAD);
            } catch (error) {
                PAYLOAD.users = null;
                PAYLOAD.type = "async await, pero falló";
                console.log(error);
                commit('getUsersAxios', PAYLOAD);
            }
        },
        getUsersAxiosThenCatch({commit}){
            axios(URL_MOCKAPI)
            .then(res => {
                console.log('Then, catch', res.data);
                PAYLOAD.users = res.data;
                PAYLOAD.type = "then catch";
                commit('getUsersAxios', PAYLOAD);
            })
            .catch(error => {
                console.error(error);
                PAYLOAD.users = null;
                PAYLOAD.type = "then catch, pero falló";
                commit('getUsersAxios', PAYLOAD);
            })
        },
        async agregarUsuario({commit}, usuario){
            try {
              let res = await axios.post(URL_MOCKAPI, usuario, {'content-type':'application/json'});
              commit('addUser', usuario);
              console.log(res);
            } catch (error) {
                commit('addUser', null);
                console.log(error);
            }
        },
        resetUsuarios({commit}){
            commit('resetUsers');
        }
    }
})
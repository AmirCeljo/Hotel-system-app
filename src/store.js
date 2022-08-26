import Vue from 'vue'
import {createStore} from 'vuex'


const store = createStore({
    state:{
        user: JSON.parse(localStorage.getItem('user')),
        sidenav: true
    },
    mutations:{
       
    }
  
})

export default store
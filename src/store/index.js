import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login/index'
import home from './modules/home/index'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: { 
        login, 
        home 
    },
    state: {
        direction: 'forward'
    },
    mutations: {
        updateDirection (state, direction) {
            state.direction = direction
        }
    },
    actions: {}
})

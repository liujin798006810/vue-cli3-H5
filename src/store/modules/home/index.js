import * as type from './mutations_types'
import { getIndex } from 'api'

export default {
    // namespaced: true,

    state: {
        list: []
    },

    getters: {
        list: state => state.list
    },

    mutations: {
        [type.SET_LIST](state, list) {
            state.list = list
            localStorage.setItem('list', JSON.stringify(list))
        }
    },

    actions: {
        async getIndexList(state, data) {
            try {
                let res = await getIndex({
                    pageSize: data.pageSize, 
                    num: data.num
                })
                console.log(res)
            
                let stateList = state.state.list
                let list = res.data
                let list1 = [...stateList, ...list]
                console.log(list1)
                
                state.commit(type.SET_LIST, list1)
            } catch (error) {

            }
        }

    }
}

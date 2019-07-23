import { get, post } from '@/axios/http'

// function getIndex (params) {
//     return get('/mock/5cb48c7ed491cd741c54456f/base/index', params)
// }

function login(params) {
    return post('/mock/5cb48c7ed491cd741c54456f/base/login', params)
}

export const getIndex = params => get('/mock/5cb48c7ed491cd741c54456f/base/index', params)

export {
    // getIndex,
    login
}

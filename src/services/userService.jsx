import http from './httpService'

// const apiEndpoint = config.apiEndpoint + '/createUser'
const apiEndpoint = '/createUser'

export function createUser(user){
    return http.post(apiEndpoint, user)
}

export default {
    createUser
}
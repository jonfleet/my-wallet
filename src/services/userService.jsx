import http from './httpService'
import config from '../config.json'

// const apiEndpoint = config.apiEndpoint + '/createUser'
const apiEndpoint = '/createUser'

export function createUser(user){
    return http.post(apiEndpoint, user)
}

export default {
    createUser
}
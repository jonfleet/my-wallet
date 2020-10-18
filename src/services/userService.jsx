import http from './httpService'
import config from '../config.json'


export function createUser(user){
    return http.post(config.apiEndpoint + '/createUser', user)
}

export default {
    createUser
}
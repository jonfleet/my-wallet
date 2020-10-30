import http from "./httpService"
import {getCurrentUser} from "./authService"

const apiEndpoint = "/report"

export function getReport(){
    const {_id} = getCurrentUser()
    return http.post(apiEndpoint, { userId : _id})
}

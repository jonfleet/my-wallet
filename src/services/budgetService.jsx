import http from "./httpService"
import {getCurrentUser} from "../services/authService"

// const apiEndpoint = config.apiEndpoint
const apiEndpoint = "/budget"

export function getBudget(){
    const {_id} = getCurrentUser()
    return http.post(apiEndpoint, {_id: _id})
}

export function changeBudget(){
    return http.put(apiEndpoint)
}



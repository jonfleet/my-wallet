import http from "./httpService"
import config from "../config.json"

// const apiEndpoint = config.apiEndpoint
const apiEndpoint = "/budget"

export function getBudget(){
    return http.get(apiEndpoint)
}

export function changeBudget(data){
    return http.put(apiEndpoint)
}



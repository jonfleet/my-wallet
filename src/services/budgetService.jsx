import http from "./httpService"
import config from "../config.json"

export function getBudget(){
    return http.get(config.apiEndpoint + "/budget")
}

export function changeBudget(data){
    return http.put(config.apiEndpoint + "/budget", data)
}



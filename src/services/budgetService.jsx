import http from "./httpService"
import {getCurrentUser} from "../services/authService"

const jwt = getCurrentUser()

export function getBudget(){
    return http.post("/getBudget", {userId: jwt._id})
}

export function changeBudget(changeOptions){
    return http.put("/changeBudget", {userId: jwt._id, ...changeOptions})
}
 


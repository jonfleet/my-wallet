import http from "./httpService"
import config from "../config.json"

export function login(username, password){
    const payload = {"username" : username, "password": password}
    return http.post(config.apiEndpoint + "/auth", payload)
}
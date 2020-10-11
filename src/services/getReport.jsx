import http from "./httpService"
import config from "../config.json"

export function getReports(){
    return  http.get(config.apiEndpoint + "/report")
}
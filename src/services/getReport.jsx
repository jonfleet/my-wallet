import http from "./httpService"
import config from "../config.json"
import axios from "axios"

// axios.defaults.baseURL = process.env.REACT_APP_API_URL
// const apiEndpoint = config.apiEndpoint + "/report"
const apiEndpoint = "/report"

// export function getReports(){
//     return  http.get(config.apiEndpoint + "/report")
// }

export function getReports(token){
    return http.get( apiEndpoint, { headers: {
        "x-auth-token" : token
    }})
}
// axios({
//     method: 'get',
//     url: 'http://bit.ly/2mTM3nY',
//     responseType: 'stream'
//   }
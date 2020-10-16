import http from "./httpService"
import config from "../config.json"

// export function getReports(){
//     return  http.get(config.apiEndpoint + "/report")
// }

export function getReports(token){
    return http.get( config.apiEndpoint + "/report", { headers: {
        "x-auth-token" : token
    }})
}
// axios({
//     method: 'get',
//     url: 'http://bit.ly/2mTM3nY',
//     responseType: 'stream'
//   }
import http from "./httpService"
import config from "../config.json"



// const apiEndpoint = config.apiEndpoint + "/postExpense"
const apiEndpoint = "/postExpense"

export async function postExpense (expense){
    console.log('postExpense Function')
    try {
        const request = await http.post(apiEndpoint, expense);
        console.log('Post Request', request);
        window.location.reload()
    } catch (er){
        console.log(er)
    }
    
    
}

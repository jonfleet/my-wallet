import http from "./httpService"
import config from "../config.json"


export async function postExpense (expense){
    console.log('postExpense Function')
    try {
        const request = await http.post(config.apiEndpoint + "/postExpense", expense);
        console.log('Post Request', request);
        window.location.reload()
    } catch (er){
        console.log(er)
    }
    
    
}

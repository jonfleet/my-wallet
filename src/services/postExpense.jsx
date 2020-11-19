import http from "./httpService"

// const apiEndpoint = config.apiEndpoint + "/postExpense"
const apiEndpoint = "/postExpense"

export async function postExpense (expense){
    
    try {
        await http.post(apiEndpoint, expense);
        window.location.reload()
    } catch (er){
        console.log(er)
    }
}

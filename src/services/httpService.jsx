import axios from "axios";

axios.defaults.baseURL = process.env.API_URL
axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('jwt');
console.log("API URL", process.env.API_URL)
// test
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = process.env.REACT_APP_API_URL


axios.interceptors.request.use( (request) => {
    console.log(request)
    return request
    }, (error) => {
    
    return Promise.reject(error)
})


export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

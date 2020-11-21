import axios from "axios";

// axios.defaults.baseURL = process.env.REACT_APP_API_URL
axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('jwt');

// test
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = process.env.REACT_APP_API_URL

// console.log("Private Message: ", process.env.PRIVATE_MESSAGE)
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

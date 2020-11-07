import axios from "axios";

// console.log("Env url: ", process.env.REACT_APP_API_URL)
axios.defaults.baseURL = process.env.REACT_APP_API_URL
axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('jwt');
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = "http://localhost:3700"
axios.defaults.headers.common['Access-Control-Allow-Origin'] = process.env.REACT_APP_API_URL
;

// auth.getJwt()
// console.log("HTTP auth", auth.getJwt())
// axios.interceptors.response.use(null, (error) => {
//   // console.log("HTTP Request: ", request)
//   const expectedError =
//     error.response &&
//     error.response.status >= 400 &&
//     error.response.status < 500;

  
//   // console.log("HTTP URL: ", process.env.REACT_APP_API_URL)  
    
//   if (!expectedError) {
//     console.log("Loggin the error", error);
//     // toast.error("An unexpected error occured.");
//   }

//   return Promise.reject(error);
// });

// axios.interceptors.response.use((request) => {
//   console.log("Starting Request", JSON.stringify(request, null , 2))
//   return request
// })

axios.interceptors.request.use( (request) => {
  console.log(request)
  return request
}, (error) => {
  console.log('Intercepter Error', error)
  return Promise.reject(error)
} )

// export function setJwt(jwt){
//   axios.defaults.headers.common['x-auth-token'] = jwt;

// }

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  // setJwt
};

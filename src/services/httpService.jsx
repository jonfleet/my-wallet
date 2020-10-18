import React from "react";
// import { toast } from "react-toastify";

import auth from "./authService"
import axios from "axios";

axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3700'
axios.defaults.headers.common['x-auth-token'] = auth.getJwt();

// console.log("HTTP auth", auth.getJwt())
axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log("Loggin the error", error);
    // toast.error("An unexpected error occured.");
  }

  return Promise.reject(error);
});

// axios.interceptors.request.use( (request) => {
//   // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjgyMmQ5NzczYTJlZTNiYjA4ZDExOTYiLCJpYXQiOjE2MDI1MjE5ODV9.uyX9hzWR8TyEz9wWSwYGwe4JowJ28tTolaMaRfbOa-M'
//   axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
//   request.headers = {...request.headers, "Access-Control-Allow-Origin": "http://localhost:3700"}
//   console.log(request)
//   return request
// }, (error) => {
//   console.log('Intercepter Error', error)
//   return Promise.reject(error)
// } )

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

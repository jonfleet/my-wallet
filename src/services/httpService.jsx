import React from "react";
// import { toast } from "react-toastify";

import axios from "axios";

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

axios.interceptors.request.use( (request) => {
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
  request.headers = {...request.headers, "Access-Control-Allow-Origin": "http://localhost:3700"}
  console.log(request)
  return request
}, (error) => {
  console.log('Intercepter Error', error)
  return Promise.reject(error)
} )


export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

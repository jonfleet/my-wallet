import http from "./httpService"
import jwt_decode from "jwt-decode"


const tokenKey = "jwt"
const apiEndpoint = "/auth"


export function login(username, password){
    const payload = {"username" : username, "password": password}
    return http.post(apiEndpoint, payload)
}

export function loginWithJWT(jwt){
    localStorage.setItem(tokenKey, jwt)
}

export function logout() {
    localStorage.removeItem(tokenKey)
}

export function getCurrentUser(){
    try {
        const jwt = localStorage.getItem(tokenKey)
        return jwt_decode(jwt)    
    } catch (error) {
        return null
    }  
}

export function getJwt(){
    const JWT = localStorage.getItem('jwt')
    return JWT
}

export default {
    login,
    loginWithJWT,
    logout,
    getCurrentUser,
    getJwt
}
import http from "./httpService"
import config from "../config.json"
import jwt_decode from "jwt-decode"
import axios from "axios"

const tokenKey = "jwt"

// http.setJwt(localStorage.getItem(tokenKey))

export function login(username, password){
    const payload = {"username" : username, "password": password}
    return http.post(config.apiEndpoint + "/auth", payload)
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
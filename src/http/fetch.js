import axios from "axios";

const baseUrl = 'http://localhost:8081';

const http = axios.create({
    baseURL:(process.env.PROD ? window.location.origin : baseUrl),
    headers:{
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
    }
})
// will move below to separate file
const fetchApi = (url, method = 'GET', payload = {}) => {
    return http({
        method:method.toLocaleLowerCase(),
        url:`/${url}`,
        data:payload
    })
    // const request = {
    //     method, headers: {
    //         "Content-Type": "application/json",
    //         "auth-token": localStorage.getItem('token')
    //     }
    // }
    // if (method !== 'GET')
    //     request.body = JSON.stringify(payload)

    // return fetch((process.env.PROD ? window.location.origin : baseUrl) + '/' + url, request)
}

export default fetchApi;
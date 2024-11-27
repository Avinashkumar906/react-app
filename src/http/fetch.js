import axios from "axios";

const baseUrl = 'http://localhost:8081';

const http = axios.create({
    baseURL:(process.env.PROD ? window.location.origin : baseUrl),
    headers:{
        // "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token') || ''
    }
})
// will move below to separate file
const fetchApi = (url, method = 'GET', payload = {}) => {
    return http({
        method:method.toLocaleLowerCase(),
        url:`/${url}`,
        data:payload
    })
}

export default fetchApi;
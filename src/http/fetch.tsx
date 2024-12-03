import axios from "axios";

const baseUrl = 'http://localhost:8081';

const fetchApi = (url:string, method:string = 'GET', payload:any = {}) => {
    return axios({
        // baseURL:baseUrl,
        baseURL:(import.meta.env.MODE !== "development" ? window.location.origin : baseUrl),
        method:method.toLocaleLowerCase(),
        url:`/${url}`,
        data:payload,
        headers:{
            "auth-token": localStorage.getItem('token') || ''
        }
    })
}

export default fetchApi;
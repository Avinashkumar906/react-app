// will move below to separate file
const baseUrl = 'http://localhost:8081'
const fetchApi = (url, method = 'GET', payload = {}) => {
    const request = {
        method, headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token')
        }
    }
    if (method !== 'GET')
        request.body = JSON.stringify(payload)

    return fetch((process.env.PROD ? window.location.origin : baseUrl) + '/' + url, request)
}

export default fetchApi;
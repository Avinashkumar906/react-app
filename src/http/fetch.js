// will move below to separate file
const fetchApi = (url, method = 'GET', payload = {}) => {
    const request = {
        method, headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token')
        }
    }
    if (method !== 'GET')
        request.body = JSON.stringify(payload)

    return fetch(`http://localhost:8080/${url}`, request)
}

export default fetchApi;
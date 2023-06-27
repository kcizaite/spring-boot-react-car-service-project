import axios from 'axios';
import { config } from '../../Constants';
import { parseJwt } from './Helpers';

// -- Axios

const instance = axios.create({
    baseURL: config.url.API_BASE_URL
})

instance.interceptors.request.use(function (config) {
    // If token is expired, redirect user to login
    if (config.headers.Authorization) {
        const token = config.headers.Authorization.split(' ')[1]
        const data = parseJwt(token)
        if (Date.now() > data.exp * 1000) {
            window.location.href = "/login"
        }
    }
    return config
}, function (error) {
    return Promise.reject(error)
})

// -- API functions

export const carServiceApi = {
    authenticate,
};

function authenticate(username, password) {
    return instance.post('/auth/authenticate', { username, password }, {
        headers: { 'Content-type': 'application/json' }
    })
}

// -- Helper functions

// function bearerAuth(user) {
//     return `Bearer ${user.accessToken}`
// }
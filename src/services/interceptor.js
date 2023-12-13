import {logoutService} from "./authService";
import axios from "axios";
const Axios = axios.create({
    baseURL: 'http://localhost:3000'
});

// Function to check token expiry
const CheckExpiry = (token) =>{
    const jwtPayload = JSON.parse(window.atob(token.split('.')[1]));
    const expiryTime = new Date(jwtPayload.exp*1000);
    const currentTime = new Date();
    if(currentTime.getTime() > expiryTime.getTime()){
        return true;
    }
    return false;
}

// Request interceptor for API calls
Axios.interceptors.request.use(
    async config => {
        const token = JSON.parse(localStorage.getItem("token"))

        // check if the token is expired, if yes trigger logOut
        if(!!token && CheckExpiry(token)){
            // Just updating it to reload the page, since the token is no longer available
            // The user will redirected to the login page
            window.location.href = window.location.href;
            logoutService();
        }

        if(token){
            config.headers.token = token;
        }

        config.headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*',
            'Origin': "http://localhost:8000",
            'Referer': "http://localhost:8000/",
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }
        return config;
    },
    error => {
        Promise.reject(error)
    });

export default Axios;
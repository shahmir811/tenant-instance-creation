import axios from 'axios';

const API_URL = "http://52.204.48.0:5011/api/v1/login";

const loginUserService = async (payload) => {
    const response = await axios
        .post(API_URL,payload);
    return response.data;
}

const logoutService = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("permissions");
}
export {
    loginUserService,
    logoutService
}
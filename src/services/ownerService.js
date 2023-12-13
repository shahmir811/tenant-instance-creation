import Axios from "./interceptor";
// import axios from "axios"
// const Axios = axios.create({
//     baseURL: 'http://localhost:8000'
// });

const API_URL = "http://52.204.48.0:5011/api/v1/owners";

const getOwnerDataService = async (payload) => {
    const response = await Axios
        .get(`${API_URL}/${payload.ownerId}/verification`,payload);
    return response.data;
}

export {
    getOwnerDataService,
}
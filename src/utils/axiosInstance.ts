import axios from "axios";
import { API_URL } from "@env";
import { store } from 'store';

const axiosInstance = axios.create({
    baseURL: API_URL, // Set the base URL here
});

axiosInstance.interceptors.request.use(async request => {
    // const { token } = store.getState().auth;
    // const isApiUrl = request.baseURL?.startsWith(`${API_URL}`);
    // if (token && isApiUrl) {
    //     (request.headers as any).Authorization = `Bearer ${token}`;
    // }
    return request;
}, error => {
    return Promise.reject(error);
})

export default axiosInstance;
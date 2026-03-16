import axios from "axios"
import { getStoreId, getToken } from "../utils/storage";

const axiosInstance = axios.create({
    baseURL: "https://store-api.sellkar.pk",
});

axiosInstance.interceptors.request.use((config)=>{
    const storeId = getStoreId();
    const token = getToken();
    console.log("storeId from localStorage:", storeId); // ← add this


    if (storeId) config.headers["storeid"] = storeId;
    if (token) config.headers["token"] = token;

    return config;
});

export default axiosInstance;
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://hotelbooking-production-114e.up.railway.app",
    withCredentials: true,
})

export default axiosInstance;


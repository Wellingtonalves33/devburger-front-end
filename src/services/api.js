import axios from "axios";

export const api = axios.create({
    baseURL: "https://dervburguer-2fhstp0yl-wellingtonalves33s-projects.vercel.app",  
});


api.interceptors.request.use((config) => {
    const userData = localStorage.getItem("devburger:userData");

    const token = userData && JSON.parse(userData).token;

    config.headers.authorization = `Bearer ${token}`;

    return config;
})
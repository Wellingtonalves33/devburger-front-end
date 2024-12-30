import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
});

api.interceptors.request.use((config) => {
    const userData = localStorage.getItem("devburger:userData");
    const token = userData && JSON.parse(userData).token;
    
    if (token) {
        config.headers.authorization = `Bearer ${token}`;
    }
    
    return config;
});

// Adicionar interceptor de resposta para debug
api.interceptors.response.use(
    response => response,
    error => {
        console.error('API Error:', {
            config: error.config,
            response: error.response
        });
        return Promise.reject(error);
    }
);
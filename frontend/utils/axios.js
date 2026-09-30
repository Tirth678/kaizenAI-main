import axios from 'axios';
const api = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL,
    withCredentials: true // passing cookies
})
export default api;

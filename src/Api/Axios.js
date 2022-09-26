import axios from 'axios';
// const BASE_URL = 'https://dev-api-sai.solbeautyandcare.com/api';
const BASE_URL = 'http://192.168.1.22:3001/api';

export default axios.create({
    baseURL: BASE_URL
});


export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});
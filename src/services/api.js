import axios from 'axios';

const API = axios.create({
  baseURL: 'https://nutritrack-backend.onrender.com/api',
});

export const login = (credentials) => API.post('/auth/login', credentials);
export const getDietData = () => API.get('/diet');

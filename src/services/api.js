import axios from 'axios';

const API = axios.create({
//   baseURL: 'https://nutritrack-backend.onrender.com/api',
  baseURL: 'http://127.0.0.1:5000/api',
});
const headers = {
    'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NmRlZWJmMjQxOWU2ZjU3ZjNhYjc4MSIsImlhdCI6MTcxODYyNzAwMywiZXhwIjoxNzE4NjMwNjAzfQ.n_rqM-xkgcCEzfPTC1R8fbE-c6k7PkTp3YN6OI_X0b4", // Replace with your actual token
    'Content-Type': 'application/json',
    // Add any other headers you need
  };

export const login = (credentials) => API.post('/auth/login', credentials);
export const getDietData = () => API.get('/diet',{headers});

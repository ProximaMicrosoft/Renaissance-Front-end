import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API
})

api.interceptors.request.use(async config => {

  const token = localStorage.getItem('TOKEN_KEY');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

//api do meu localhost
export const api2 = axios.create({
  baseURL: process.env.REACT_APP_API_TESTE
})
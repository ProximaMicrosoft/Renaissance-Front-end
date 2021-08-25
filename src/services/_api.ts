import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API 
})

api.interceptors.request.use(async config => { 

  const userData: string | null = localStorage.getItem('userData');
  if (userData != null) {
    const user = JSON.parse(userData);
    config.headers.Authorization = `${user.token}`;
  }
  return config;
});

//api do meu localhost
// export const api2 = axios.create({
//   baseURL: process.env.REACT_APP_API_TESTE
// })
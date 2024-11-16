import axios, {InternalAxiosRequestConfig} from 'axios';

const getAxiosInstance = axios.create({
  baseURL: 'http://5.34.201.164:3000/api/',
});
export default getAxiosInstance;
// getAxiosInstance.interceptors.request.use((req: InternalAxiosRequestConfig) => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     req.headers.Authorization = `Bearer ${token}`;
//   }
//   return req;
// });

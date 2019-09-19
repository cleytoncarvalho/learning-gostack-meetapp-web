import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.interceptors.response.use(
  res => {
    return res;
  },
  error => {
    return Promise.reject(error.response);
  }
);

export default api;

import { useToken } from '@/hooks';
import axios from 'axios';

export const aurorix = axios.create({
  baseURL: process.env.NEXT_PUBLIC_AURORIX_BACKEND_API,
  headers: {
    'X-ORIGIN': 'app-web-game',
  },
});

aurorix.interceptors.request.use(
  function (config) {
    const { token } = useToken();
    const _token = token();

    if (_token) {
      config.headers.Authorization = `Bearer ${_token}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

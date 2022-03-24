import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: 'http://localhost:4000/api',
  headers: {
    'Content-Type': 'multipart/form-data; charset=utf-8',
    //''Content-Type: 'application/json; charset=utf-8',
  },
});
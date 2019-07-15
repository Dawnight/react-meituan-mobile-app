import axios from 'axios';

const instance = axios.create({
  baseURL:'http://192.168.16.111:3001/api'
});

export default instance;

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://servertestecotabox.herokuapp.com/',
});

export default api
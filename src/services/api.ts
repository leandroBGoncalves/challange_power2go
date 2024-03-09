import axios from "axios";

const api = axios.create({
  //baseURL: API_URL,
  baseURL: 'https://restcountries.com/v3.1',
});

export default api;

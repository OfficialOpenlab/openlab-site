import axios from "axios";

const api = axios.create({
  baseURL: 'https://openlab-react-api.onrender.com'
});

export default api;
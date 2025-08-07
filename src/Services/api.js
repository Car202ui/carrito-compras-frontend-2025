import axios from 'axios';

const api = axios.create({
  baseURL: 'https://carrito-compras-tecnica-2025-production.up.railway.app/api',
});


export default api;

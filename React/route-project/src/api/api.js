import axios from 'axios';

const API = 'http://localhost:3000';

const getProducts = () => axios.get(`${API}/products/all`);
const getOrders = () => axios.get(`${API}/orders/all`); 
const getUsers = () => axios.get(`${API}/users/all`);

export { getProducts, getOrders, getUsers };

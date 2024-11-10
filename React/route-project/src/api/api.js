import axios from 'axios';

// Your API endpoint (adjust the endpoint as necessary)
const API = 'https://671b72ad2c842d92c37fff7c.mockapi.io/rajkumar/rk'; 

// Fetching products from the API
const getProducts = () => axios.get(API);

export { getProducts };

import axios from 'axios'


// const API = 'https://671b70ef2c842d92c37fec0c.mockapi.io/prodcutsapp/products'
const API='https://671b72ad2c842d92c37fff7c.mockapi.io/rajkumar/rk';


const getProducts = () => axios.get(API)


export { getProducts }
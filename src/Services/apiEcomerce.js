import axios from "axios";
const apiURL = 'https://ecomerce-master.herokuapp.com/api/v1/'
const apiEcomerce = {
    getProducts: async () => {
        return await axios.get(`${apiURL}item`)
    },
    getProduct: async (id) =>{
        return await axios.get(`${apiURL}item/${id}`)
    },
    login: async (user) =>{
        return await axios.post(`${apiURL}login`, user)
    },
    registerUser: async(user) =>{
        return await axios.post(`${apiURL}signup`, user)
    },
    registerItem: async(product, header) =>{
        return await axios.post(`${apiURL}item`, product, {headers:{'Authorization': `JWT ${header}`} })
    }
} 
export default apiEcomerce


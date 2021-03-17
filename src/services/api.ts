import axios from 'axios';

const api = axios.create({
    baseURL: 'https://minojob.herokuapp.com'
})

export default api;
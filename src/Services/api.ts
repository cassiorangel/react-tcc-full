import axios from 'axios';
const url = "https://reqres.in/api";

const instance = axios.create({
    baseURL: `${url}`,
    headers: {
        'Content-Type': 'application/json',
        'x-access-token': 'application/json',
    },
});


export default instance;
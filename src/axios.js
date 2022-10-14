import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://springitbenbackend.herokuapp.com'
});

axios.defaults.headers.post['Content-Type'] = 'application/json';


export default instance;
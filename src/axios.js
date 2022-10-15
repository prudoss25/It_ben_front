import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://springitbenbackend.herokuapp.com'
});

export const morrocoTownFetcher = axios.create({
    baseURL:'https://parseapi.back4app.com/classes'
})

axios.defaults.headers.post['Content-Type'] = 'application/json';


export default instance;
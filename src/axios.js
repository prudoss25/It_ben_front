import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://springitbenbackend.herokuapp.com'
});

export const morrocoTownFetcher = axios.create({
    baseURL:'https://calm-fjord-14795.herokuapp.com/api'
})
axios.defaults.headers.post['Content-Type'] = 'application/json';


export default instance;
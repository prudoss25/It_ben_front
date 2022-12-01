import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.IT_BEN_API_BASE_URL
});

export const morrocoTownFetcher = axios.create({
    baseURL:process.env.MOROCCO_TOWNS
})

axios.defaults.headers.post['Content-Type'] = 'application/json';


export default instance;
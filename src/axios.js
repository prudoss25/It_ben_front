import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://springitbenbackend.herokuapp.com'
});
axios.defaults.headers.post['Content-Type'] = 'application/json';
// instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// instance.interceptors.request...

export default instance;
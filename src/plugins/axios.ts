import axios from 'axios'

const inc = axios;
inc.defaults.baseURL = '/api';

inc.interceptors.request.use((config) => {
    return config;
});

inc.interceptors.response.use((config) => {
    return config;
});

export default inc;
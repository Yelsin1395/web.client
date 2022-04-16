import axios from 'axios';
import configs from '../configs';

// Import proxies
import ClientProxy from './client.proxy';

//Set default content type
axios.defaults.headers.common.Accept = 'application/json';

//Set default base url
axios.defaults.baseURL = `${configs.REACT_APP_API_BASE_URI}${configs.REACT_APP_API_AUTHOR}`;

// set request axios
axios.interceptors.request.use(
  (request: any) => {
    return request;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

// set response axios
axios.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export { ClientProxy };

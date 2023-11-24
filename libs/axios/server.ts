import axios, {AxiosError, AxiosResponse, InternalAxiosRequestConfig} from "axios";
import https from "https";
import qs from "qs";


const defaultRequestInterceptorOnFullfilled = (config : InternalAxiosRequestConfig) => {
    if (config.paramsSerializer === undefined) {
        config.paramsSerializer = {
            serialize: (params: any) => qs.stringify(params,  { arrayFormat: 'comma' })
        }
    }

    return config;
}

const defaultRequestInterceptorOnRejected = (error : AxiosError) => {

    return Promise.reject(error);
}

const defaultResponseInterceptorOnFullfilled = (response : AxiosResponse) => {
    return response.data;
}

const defaultResponseInterceptorOnRejected = (error : AxiosError) => {
    return Promise.reject(error.response);
}


export const getServerApiAxiosProxy = () => {

    const instance = axios.create({
        baseURL: 'http://localhost:3000',
        withCredentials: true,
        httpsAgent: new https.Agent({
            rejectUnauthorized: false,
        }),
    });

    instance.defaults.timeout = 0;
    instance.defaults.headers['Accept'] = 'application/json';
    instance.defaults.headers['Content-Type'] = 'application/json';
    instance.defaults.headers['Accept-encoding'] = 'chunked';


    instance.interceptors.request.use(defaultRequestInterceptorOnFullfilled, defaultRequestInterceptorOnRejected);
    instance.interceptors.response.use(defaultResponseInterceptorOnFullfilled,defaultResponseInterceptorOnRejected);

    return instance;
}

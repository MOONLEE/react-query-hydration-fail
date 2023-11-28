'use client'


import axios, {AxiosError, AxiosResponse, InternalAxiosRequestConfig} from 'axios';
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

export const createClientNextApiAxiosProxy = () => {

    const instance = axios.create({
        // withCredentials: true,
    });

    instance.defaults.timeout = 0;
    instance.defaults.headers['Accept'] = 'application/json';
    instance.defaults.headers['Content-Type'] = 'application/json';


    instance.interceptors.request.use(defaultRequestInterceptorOnFullfilled, defaultRequestInterceptorOnRejected);
    instance.interceptors.response.use(defaultResponseInterceptorOnFullfilled, defaultResponseInterceptorOnRejected);

    return instance;
}


export const useClientNextApiProxy = () => {
    return createClientNextApiAxiosProxy();
}
import axios from "axios";
import {config} from "../config/"

const axiosConfig = (signal) =>
    axios.create({
        baseURL: config.urlMockapi,
        signal: signal,
        headers: {
            "Content-Type": "application/json",
        },
    });

const genericRequest = async ({ requestType, url, data, signal }) => {
    try {
        const httpClient = axiosConfig(signal);
        const response = await httpClient[requestType](url, data);
        console.log('requestType:', requestType, 'Response code:', response.status);

        return response.data;

    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            console.error(error.response);
        } else {
            throw new Error("UnknownError");
        }
    }
};

export async function get(url, signal) {
    return genericRequest({ requestType: "get", url, signal });
}

export async function post(url, data, signal) {
    return genericRequest({requestType: "post", url, signal, data});
}

export async function put(url, data, signal) {
    return genericRequest({ requestType: "put", url, data, signal });
}

export async function del(url, signal) {
    return genericRequest({ requestType: "delete", url, signal });
}
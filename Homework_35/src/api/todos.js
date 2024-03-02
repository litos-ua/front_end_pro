import { get, put, del } from './httpClient';

export async function getTodos(url, signal) {
    return await get(url, signal);
}

export async function putTodos(url, data, signal) {
    return await put(url, data, signal);
}

export async function delTodos(url, signal) {
    return await del(url, signal);
}

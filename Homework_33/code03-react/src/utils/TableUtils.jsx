
import { usersArray } from '../data/users';

const loadTableData = () => {
    try {
        const localStorageKey = 'tableData';
        const localStorageData = localStorage.getItem(localStorageKey);
        return localStorageData ? JSON.parse(localStorageData) : usersArray;
    } catch (error) {
        console.error('Error loading table data:', error);
    }
};

const getDefaultIdLocalStorage = () => {
    const tableData = JSON.parse(localStorage.getItem('tableData')) || [];
    const maxId = tableData.reduce((max, user) => Math.max(max, parseInt(user.id) || 0), 0);
    return (maxId + 1).toString();
};

const  getDefaultId = () => {
    const tableData = JSON.parse(localStorage.getItem('tableData')) || usersArray || [];
    const maxId = tableData.reduce((max, user) => Math.max(max, parseInt(user.id) || 0), 0);
    return (maxId + 1).toString();
};

export const TableUtils = {
    loadTableData,
    getDefaultIdLocalStorage,
    getDefaultId,
};

// import React from "react";
// import { usersArray } from '../data/users';
//
// export default class TableUtils extends React.Component {
//     static loadTableData() {
//         try{
//             const localStorageKey = 'tableData';
//             const localStorageData = localStorage.getItem(localStorageKey);
//             return localStorageData ? JSON.parse(localStorageData) : usersArray;
//         } catch (error) {
//             console.error('Error loading table data:', error);
//         }
//     }
// //Так робити не треба. Кожен компонент має ізольовану логіку, а утіли це скоріше за всього чисті функції
// //     static updateTableData(appComponent) {
// //         appComponent.setState({
// //             tableData: TableUtils.loadTableData(),
// //         });
// //     }
// //-------------------------------------------------------------------------------------------------------
//     static getDefaultIdLocalStorage = () => {
//         const tableData = JSON.parse(localStorage.getItem('tableData')) || [];
//         const maxId = tableData.reduce((max, user) => Math.max(max, parseInt(user.id) || 0), 0);
//         return (maxId + 1).toString();
//     };
//
//     static getDefaultId = () => {
//         const tableData = JSON.parse(localStorage.getItem('tableData')) || usersArray || [];
//         const maxId = tableData.reduce((max, user) => Math.max(max, parseInt(user.id) || 0), 0);
//         return (maxId + 1).toString();
//     };
//
// }


//import React from "react";
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

const getDefaultId = () => {
    const tableData = JSON.parse(localStorage.getItem('tableData')) || usersArray || [];
    const maxId = tableData.reduce((max, user) => Math.max(max, parseInt(user.id) || 0), 0);
    return (maxId + 1).toString();
};

const TableUtils = {
    loadTableData,
    getDefaultIdLocalStorage,
    getDefaultId,
};

export default TableUtils;
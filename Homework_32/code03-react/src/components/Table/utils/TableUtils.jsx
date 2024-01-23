import React from "react";
import { usersArray } from '../../../data/users';

export default class TableUtils extends React.Component {
    static loadTableData() {
        const localStorageKey = 'tableData';
        const localStorageData = localStorage.getItem(localStorageKey);
        return localStorageData ? JSON.parse(localStorageData) : usersArray;
    }

    static updateTableData() {
        const newTableData = this.loadTableData();
        // Perform any additional updates or logic if needed
        return newTableData;
    }
}

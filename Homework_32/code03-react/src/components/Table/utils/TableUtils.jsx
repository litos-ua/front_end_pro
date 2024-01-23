import React from "react";
import { usersArray } from '../../../data/users';

export default class TableUtils extends React.Component {
    static loadTableData() {
        const localStorageKey = 'tableData';
        const localStorageData = localStorage.getItem(localStorageKey);
        return localStorageData ? JSON.parse(localStorageData) : usersArray;
    }

    static updateTableData(appComponent) {
        appComponent.setState({
            tableData: TableUtils.loadTableData(),
        });
    }

}

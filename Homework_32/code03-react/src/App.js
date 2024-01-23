
import React from "react";
import { Header } from "./components";
import { Table } from "./components";
import { PortalModal} from "./components";
//import { usersArray } from './data/users';
import TableUtils from './components/Table/utils/TableUtils'
import "./App.css";


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
//            tableData: this.loadTableData(),
            tableData:TableUtils.loadTableData(),
        };
    }


    // loadTableData = () => {
    //     return TableUtils.loadTableData();
    // }


    updateTableData = () => {
        this.setState({
//            tableData: this.loadTableData(),
            tableData: TableUtils.loadTableData(),
        });
    }


    render() {

        // const localStorageKey = 'tableData';
        // const localStorageData = localStorage.getItem(localStorageKey);
        // const loadingUsers = localStorageData ? JSON.parse(localStorageData) : usersArray;

        return (
            <div className="App">
                <Header />
                <h1 id={Math.round(Math.random() * 100).toString()}>
                    User Table
                </h1>
                <Table users={this.state.tableData} />
                <PortalModal updateTable={this.updateTableData} />

            </div>
        );
    }
}

export default App;

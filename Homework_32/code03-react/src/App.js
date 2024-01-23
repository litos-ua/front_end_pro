
import React from "react";
import { Header } from "./components";
import { Table } from "./components";
import { PortalModal} from "./components";
import { usersArray } from './data/users';
import "./App.css";

class App extends React.Component {
    render() {
        const localStorageKey = 'tableData';
        const localStorageData = localStorage.getItem(localStorageKey);
        const loadingUsers = localStorageData ? JSON.parse(localStorageData) : usersArray;

        return (
            <div className="App">
                <Header />
                <h1 id={Math.round(Math.random() * 100).toString()}>
                    User Table
                </h1>
                <Table users={loadingUsers} />
                <PortalModal />
            </div>
        );
    }
}

export default App;


import React, { useState, useEffect } from "react";
import { Header, Table, PortalModal } from "./components";
import {TableUtils} from "./utils";
import "./App.css";

const loadTableData = TableUtils.loadTableData;

export default function App() {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await loadTableData();
                setTableData(data);
            } catch (error) {
                console.error('Error loading table data:', error);
            }
        };

        loadData().then();
    }, []);

    const updateTableData = async () => {
        try {
            const data = await loadTableData;
            setTableData(data);
        } catch (error) {
            console.error('Error updating table data:', error);
        }
    };


    return (
        <div className="App">
            <Header />
            <h1>User Table</h1>
            <Table users={tableData} reloadTable={updateTableData} />
            <PortalModal updateTable={updateTableData} />
        </div>
    );
}




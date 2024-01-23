
import React from "react";
import { Header } from "./components";
import { Table } from "./components";
import { PortalModal} from "./components";
import TableUtils from './components/Table/utils/TableUtils'
import "./App.css";


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tableData:TableUtils.loadTableData(),
        };
    }


    updateTableData = () => {
        this.setState({
            tableData: TableUtils.loadTableData(),
        });
    }


    reloadTable = () => {
        this.setState({
            tableData: TableUtils.loadTableData(),
        });
    }


    render() {


        return (
            <div className="App">
                <Header />
                <h1 id={Math.round(Math.random() * 100).toString()}>
                    User Table
                </h1>
                <Table users={this.state.tableData} reloadTable={this.reloadTable} />
                <PortalModal updateTable={this.updateTableData} />

            </div>
        );
    }
}

export default App;

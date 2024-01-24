
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
        TableUtils.updateTableData(this);
    }


    render() {


        return (
            <div className="App">
                <Header />
                <h1>
                    User Table
                </h1>
                <Table users={this.state.tableData} reloadTable={this.updateTableData} />
                <PortalModal updateTable={this.updateTableData} />

            </div>
        );
    }
}

export default App;

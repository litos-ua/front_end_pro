

import React from "react";
import { Header } from "./components";
import { Table } from "./components";
import { usersArray } from './data/users';
import "./App.css";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showDate: false,
        };
    }
    isOpenHandler = () => {
        this.setState((state) => {
            console.log(state);
            return { showDate: !state.showDate };
        });
    };
    render() {
        const { showDate } = this.state;
        const styles = {
            fontWeight: 300,
            color: "#00faff",
        };


        return (
            <div className="App">
                <Header />
                <h1 id={Math.round(Math.random() * 100).toString()} style={styles}>
                    User Table
                </h1>
                {/*<button onClick={this.isOpenHandler}>Click me</button>*/}
                {/*{showDate && <div>{new Date().toISOString()}</div>}*/}
                <Table users={usersArray} />
            </div>
        );
    }
}

export default App;

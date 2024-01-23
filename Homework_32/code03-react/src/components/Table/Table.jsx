
import React, {Component} from 'react';
import './Table.css';

const tableClass = 'custom-table';
const buttonPrimaryClass = 'btn btn-sm btn-primary me-1';
const buttonDangerClass = 'btn btn-sm btn-danger';

export class Table extends Component {

    handleDelete = (userId) => {
        // Filter out the user with the specified userId from the state
        const updatedUsers = this.props.users.filter(user => user.id !== userId);

        // Update the LocalStorage
        this.updateLocalStorage(updatedUsers);

        // Update the state
        this.props.reloadTable(updatedUsers);

        // Display a confirmation message
        alert(`User with ID ${userId} deleted successfully!`);
    }

    updateLocalStorage = (users) => {
        // Update the LocalStorage with the new user data
        const localStorageKey = 'tableData';
        localStorage.setItem(localStorageKey, JSON.stringify(users));
    }

    render() {
        const {users} = this.props;
        console.log(this.props);

        return (
            <table className={tableClass}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.phone}</td>
                        <td>
                            {/*<button className={buttonPrimaryClass} onClick={*/}
                            {/*    () => console.log('Edit', user.id)*/}
                            {/*}>*/}
                            {/*    Edit*/}
                            {/*</button>*/}
                            <button className={buttonDangerClass} onClick={
                                () => this.handleDelete(user.id)
                            }>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        );
    }
}



import React, {Component} from 'react';
import './Table.css';

const tableClass = 'custom-table';
const buttonDangerClass = 'btn btn-sm btn-danger';

export class Table extends Component {

    handleDelete = (userId) => {

        const updatedUsers = this.props.users.filter(user => user.id !== userId);
        this.updateLocalStorage(updatedUsers);
        this.props.reloadTable(updatedUsers);
        alert(`User with ID ${userId} deleted successfully!`);
    }

    updateLocalStorage = (users) => {
        const localStorageKey = 'tableData';
        localStorage.setItem(localStorageKey, JSON.stringify(users));
    }

    render() {
        const {users} = this.props;

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


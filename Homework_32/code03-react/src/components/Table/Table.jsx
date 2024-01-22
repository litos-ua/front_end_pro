'use strict'

import React from 'react';
import './Table.css';

const tableClass = 'custom-table';
const buttonPrimaryClass = 'btn btn-sm btn-primary me-1';
const buttonDangerClass = 'btn btn-sm btn-danger';

class Table extends React.Component {

    constructor(props) {
        super(props);
        this.createUserHandler = this.createUserHandler(this);
        this.editUserHandler = this.editUserHandler.bind(this);
        this.deleteUserHandler = this.deleteUserHandler.bind(this)
    }

    createUserHandler = (userId) => {
        // Create
    }

    editUserHandler = (userId) => {
        // Update
    }

    deleteUserHandler = (userId) => {
        // Delete
    }

    render() {
        const { users } = this.props;

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
                            <button className={buttonPrimaryClass} onClick={
                                () => console.log('Edit', user.id)
                            }>
                                Edit
                            </button>
                            <button className={buttonDangerClass} onClick={
                                () => console.log('Delete', user.id)
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


export { Table };

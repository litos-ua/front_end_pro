
import React from 'react';
import './Table.css';
import { buttonDangerClass, tableClass } from '../../theme';

export function Table({ users, reloadTable }) {
    const handleDelete = (userId) => {
        const updatedUsers = users.filter((user) => user.id !== userId);
        updateLocalStorage(updatedUsers);
        reloadTable(updatedUsers);
        alert(`User with ID ${userId} deleted successfully!`);
    };

    const updateLocalStorage = (updatedUsers) => {
        const localStorageKey = 'tableData';
        localStorage.setItem(localStorageKey, JSON.stringify(updatedUsers));
    };

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
                        <button className={buttonDangerClass} onClick={() => handleDelete(user.id)}>
                            Delete
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

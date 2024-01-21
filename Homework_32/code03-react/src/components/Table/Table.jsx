
import React from 'react';
import './Table.css';


class Table extends React.Component {
    render() {
        const { users } = this.props;

        return (
            <table className="custom-table">
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
                            <button className="btn btn-sm btn-primary me-1" onClick={
                                () => console.log('Edit', user.id)
                            }>Edit</button>
                            <button className="btn btn-sm btn-danger" onClick={
                                () => console.log('Delete', user.id)
                            }>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        );
    }
}



export { Table };

// import React from "react";
// import { createPortal } from "react-dom";
// import './PortalModal.css';
// const buttonInfoClass = 'btn btn-sm btn-info'

// export class PortalModal extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isOpen: false,
//         };
//     }
//
//     toggleModalHandler() {
//         this.setState((prev) => ({ isOpen: !prev.isOpen }));
//     }
//
//     render() {
//         const { isOpen } = this.state;
//         function createModal(toggleModal) {
//             return (
//                 <div className="custom-modal">
//                     <div className="modal-content">
//                         <p>This is modal</p>
//                         <button className={`btn ${buttonInfoClass} close-modal-btn`} onClick={toggleModal}>Close modal</button>
//                     </div>
//                 </div>
//             );
//         }
//         return (
//             <>
//                 <button className={`btn ${buttonInfoClass} toggle-modal-btn`} onClick={this.toggleModalHandler.bind(this)}>Toggle modal </button>
//                 {isOpen &&
//                     createPortal(
//                         createModal(this.toggleModalHandler.bind(this)),
//                         document.getElementById("modals"),
//                     )}
//             </>
//         );
//     }
// }


import React from "react";
import { createPortal } from "react-dom";
import './PortalModal.css';
const buttonPrimaryClass = 'btn btn-sm btn-primary';
const buttonInfoClass = 'btn btn-sm btn-info';
const buttonWarningClass = 'btn btn-sm btn-warning';

export class PortalModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            username: '',
            phone: '',
            isOpen: false,
        };
    }

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    toggleModalHandler = () => {
        this.setState((prev) => ({ isOpen: !prev.isOpen }));
    }

    saveUserHandler = () => {
        try {
            const { id, name, username, phone } = this.state;

            const newUser = {
                id: id.trim(),
                name: name.trim(),
                username: username.trim(),
                phone: phone.trim(),
            };

            const tableData = JSON.parse(localStorage.getItem('tableData')) || [];
            tableData.push(newUser);
            localStorage.setItem('tableData', JSON.stringify(tableData));

            this.toggleModalHandler();
            this.props.updateTable();
            alert('User data saved successfully!');

        } catch (error) {

            console.error('Error saving user data:', error);
            alert('Failed to save user data. Please try again.');
        }
    }


    render() {
        const { isOpen } = this.state;

        function createModal(toggleModal, saveUser, state, handleInputChange) {
            return (
                <div className="custom-modal">
                    <div className="modal-content">
                        <p>Add New User</p>
                        <label>
                            ID:
                            <input
                                type="text"
                                name="id"
                                value={state.id}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Name:
                            <input
                                type="text"
                                name="name"
                                value={state.name}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Username:
                            <input
                                type="text"
                                name="username"
                                value={state.username}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Phone:
                            <input
                                type="text"
                                name="phone"
                                value={state.phone}
                                onChange={handleInputChange}
                            />
                        </label>
                        <button
                            className={`btn ${buttonWarningClass} close-modal-btn`}
                            onClick={toggleModal}
                        >
                            Close modal
                        </button>
                        <button
                            className={`btn ${buttonPrimaryClass} save-user-btn`}
                            onClick={saveUser}
                        >
                            Add User
                        </button>
                    </div>
                </div>
            );
        }

        return (
            <>
                <button
                    className={`btn ${buttonInfoClass} toggle-modal-btn`}
                    onClick={this.toggleModalHandler}
                >
                    Toggle modal
                </button>
                {isOpen &&
                    createPortal(
                        createModal(
                            this.toggleModalHandler,
                            this.saveUserHandler,
                            this.state,
                            this.handleInputChange
                        ),
                        document.getElementById("modals"),
                    )}
            </>
        );
    }
}


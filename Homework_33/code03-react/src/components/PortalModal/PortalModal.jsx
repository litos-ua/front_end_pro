
// import React from "react";
// import { createPortal } from "react-dom";
// import InputWithLabel from "../InputWithLabel/InputWithLabel";
// import ButtonGroup from "../ButtonGroup/ButtonGroup";
// import './PortalModal.css';
// //import TableUtils from "../Table/utils/TableUtils";
// import TableUtils from "../../utils/TableUtils"
// import {buttonInfoClass} from  "../../theme/styles"
// //const buttonInfoClass = 'btn btn-sm btn-info';
//
// export class PortalModal extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             id: TableUtils.getDefaultId(),
//             name: '',
//             username: '',
//             phone: '',
//             isOpen: false,
//         };
//     }
//
//
//     handleInputChange = (event) => {
//         this.setState({ [event.target.name]: event.target.value });
//     }
//
//     toggleModalHandler = () => {
//         this.setState((prev) => ({ isOpen: !prev.isOpen }));
//     }
//
//     saveUserHandler = () => {
//         try {
//             const { id, name, username, phone } = this.state;
//
//             if (!id.trim() || !name.trim() || !username.trim() || !phone.trim()) {
//                 alert('Please fill in all fields.');
//                 return;
//             }
//
//             const newUser = {
//                 id: id.trim(),
//                 name: name.trim(),
//                 username: username.trim(),
//                 phone: phone.trim(),
//             };
//
//             const tableData = JSON.parse(localStorage.getItem('tableData')) || [];
//             tableData.push(newUser);
//             localStorage.setItem('tableData', JSON.stringify(tableData));
//
//             this.toggleModalHandler();
//             this.props.updateTable();
//             alert('User data saved successfully!');
//             this.setState({
//                 id: TableUtils.getDefaultId(),
//                 name: '',
//                 username: '',
//                 phone: '',
//             });
//
//         } catch (error) {
//
//             console.error('Error saving user data:', error);
//             alert('Failed to save user data. Please try again.');
//         }
//     }
//
//
//     render() {
//         const { isOpen } = this.state;
//
//         function createModal(toggleModal, saveUser, state, handleInputChange) {
//             return (
//                 <div className="custom-modal">
//                     <div className="modal-content">
//                         <p>Add New User</p>
//                         <div className="double-input-group">
//                             <InputWithLabel label="ID" name="id" value={state.id} onChange={handleInputChange} />
//                             <InputWithLabel label="Name" name="name" value={state.name} onChange={handleInputChange} />
//                         </div>
//                         <div className="double-input-group">
//                             <InputWithLabel label="Username" name="username" value={state.username} onChange={handleInputChange} />
//                             <InputWithLabel label="Phone" name="phone" value={state.phone} onChange={handleInputChange} />
//                         </div>
//                         <ButtonGroup onClose={toggleModal} onSave={saveUser} />
//                     </div>
//                 </div>
//             );
//         }
//
//         return (
//             <>
//                 <button
//                     className={`btn ${buttonInfoClass} toggle-modal-btn`}
//                     onClick={this.toggleModalHandler}
//                 >
//                     Toggle modal
//                 </button>
//                 {isOpen &&
//                     createPortal(
//                         createModal(
//                             this.toggleModalHandler,
//                             this.saveUserHandler,
//                             this.state,
//                             this.handleInputChange
//                         ),
//                         document.getElementById("modals"),
//                     )}
//             </>
//         );
//     }
// }

import React, { useState } from "react";
import { createPortal } from "react-dom";
import {InputWithLabel} from "../InputWithLabel/InputWithLabel";
import {ButtonGroup} from "../ButtonGroup/ButtonGroup";
import './PortalModal.css';
import TableUtils from "../../utils/TableUtils";
import { buttonInfoClass } from "../../theme/styles";

export const PortalModal = ({ updateTable }) => {
    const [modalState, setModalState] = useState({
        id: TableUtils.getDefaultId(),
        name: '',
        username: '',
        phone: '',
        isOpen: false,
    });

    const handleInputChange = (event) => {
        setModalState({ ...modalState, [event.target.name]: event.target.value });
    };

    const toggleModalHandler = () => {
        setModalState((prev) => ({ ...prev, isOpen: !prev.isOpen }));
    };

    const saveUserHandler = () => {
        try {
            const { id, name, username, phone } = modalState;

            if (!id.trim() || !name.trim() || !username.trim() || !phone.trim()) {
                alert('Please fill in all fields.');
                return;
            }

            const newUser = {
                id: TableUtils.getDefaultId(),
                name: name.trim(),
                username: username.trim(),
                phone: phone.trim(),
            };

            const tableData = JSON.parse(localStorage.getItem('tableData')) || [];
            tableData.push(newUser);
            localStorage.setItem('tableData', JSON.stringify(tableData));

            toggleModalHandler();
            updateTable();
            alert('User data saved successfully!');
            setModalState({
                id: TableUtils.getDefaultId(),
                name: '',
                username: '',
                phone: '',
                isOpen: false,
            });

        } catch (error) {
            console.error('Error saving user data:', error);
            alert('Failed to save user data. Please try again.');
        }
    };

    function createModal() {
        return (
            <div className="custom-modal">
                <div className="modal-content">
                    <p>Add New User</p>
                    <div className="double-input-group">
                        <InputWithLabel label="ID" name="id" value={TableUtils.getDefaultId()} onChange={handleInputChange} />
                        <InputWithLabel label="Name" name="name" value={modalState.name} onChange={handleInputChange} />
                    </div>
                    <div className="double-input-group">
                        <InputWithLabel label="Username" name="username" value={modalState.username} onChange={handleInputChange} />
                        <InputWithLabel label="Phone" name="phone" value={modalState.phone} onChange={handleInputChange} />
                    </div>
                    <ButtonGroup onClose={toggleModalHandler} onSave={saveUserHandler} />
                </div>
            </div>
        );
    }

    return (
        <>
            <button
                className={`btn ${buttonInfoClass} toggle-modal-btn`}
                onClick={toggleModalHandler}
            >
                Toggle modal
            </button>
            {modalState.isOpen &&
                createPortal(
                    createModal(),
                    document.getElementById("modals"),
                )}
        </>
    );
};



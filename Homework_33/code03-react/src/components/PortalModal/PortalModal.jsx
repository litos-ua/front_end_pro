
import React, { useState } from "react";
import { createPortal } from "react-dom";
import {InputWithLabel} from "../InputWithLabel";
import {ButtonGroup} from "../ButtonGroup";
import './PortalModal.css';
import {TableUtils} from "../../utils";
import { buttonInfoClass } from "../../theme";

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



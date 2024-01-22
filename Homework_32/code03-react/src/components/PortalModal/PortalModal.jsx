import React from "react";
import { createPortal } from "react-dom";
import './PortalModal.css';
const buttonInfoClass = 'btn btn-sm btn-info'

export class PortalModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    toggleModalHandler() {
        this.setState((prev) => ({ isOpen: !prev.isOpen }));
    }

    render() {
        const { isOpen } = this.state;
        function createModal(toggleModal) {
            return (
                <div className="custom-modal">
                    <div className="modal-content">
                        <p>This is modal</p>
                        <button className={`btn ${buttonInfoClass} close-modal-btn`} onClick={toggleModal}>Close modal</button>
                    </div>
                </div>
            );
        }
        return (
            <>
                <button className={`btn ${buttonInfoClass} toggle-modal-btn`} onClick={this.toggleModalHandler.bind(this)}>Toggle modal </button>
                {isOpen &&
                    createPortal(
                        createModal(this.toggleModalHandler.bind(this)),
                        document.getElementById("modals"),
                    )}
            </>
        );
    }
}

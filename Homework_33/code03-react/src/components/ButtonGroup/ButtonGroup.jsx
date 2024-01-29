
import React from "react";
import { buttonPrimaryClass, buttonWarningClass } from '../../theme/styles';

export const ButtonGroup = ({ onClose, onSave }) => {
    return (
        <div className="button-group">
            <button
                className={`btn ${buttonWarningClass} close-modal-btn`}
                onClick={onClose}
            >
                Cancel
            </button>
            <button
                className={`btn ${buttonPrimaryClass} save-user-btn`}
                onClick={onSave}
            >
                Add User
            </button>
        </div>
    );
};


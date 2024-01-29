// import React from "react";
// import { buttonPrimaryClass, buttonWarningClass } from '../../theme/styles'
//
// export default class ButtonGroup extends React.Component {
//     render() {
//         const { onClose, onSave } = this.props;
//
//         return (
//             <div className="button-group">
//                 <button
//                     className={`btn ${buttonWarningClass} close-modal-btn`}
//                     onClick={onClose}
//                 >
//                     Cancel
//                 </button>
//                 <button
//                     className={`btn ${buttonPrimaryClass} save-user-btn`}
//                     onClick={onSave}
//                 >
//                     Add User
//                 </button>
//             </div>
//         );
//     }
// }

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


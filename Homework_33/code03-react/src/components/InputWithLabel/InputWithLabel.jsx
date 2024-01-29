// import React from "react";
// import './InputWithLabel.css';
//
// export default class InputWithLabel extends React.Component {
//     render() {
//         const { label, name, value, onChange } = this.props;
//
//         return (
//             <div className="input-group">
//                 <label>
//                     {label}:
//                     <input
//                         type="text"
//                         name={name}
//                         value={value}
//                         onChange={onChange}
//                         readOnly={name === "id"}
//                     />
//                 </label>
//             </div>
//         );
//     }
// }

import React from "react";
import './InputWithLabel.css';

export const InputWithLabel = ({ label, name, value, onChange }) => {
    return (
        <div className="input-group">
            <label>
                {label}:
                <input
                    type="text"
                    name={name}
                    value={value}
                    onChange={onChange}
                    readOnly={name === "id"}
                />
            </label>
        </div>
    );
};

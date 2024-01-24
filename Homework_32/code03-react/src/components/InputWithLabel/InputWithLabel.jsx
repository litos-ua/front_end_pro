import React from "react";
import '../PortalModal/PortalModal.css'

export default class InputWithLabel extends React.Component {
    render() {
        const { label, name, value, onChange } = this.props;

        return (
            <div className="input-group">
                <label>
                    {label}:
                    <input
                        type="text"
                        name={name}
                        value={value}
                        onChange={onChange}
                    />
                </label>
            </div>
        );
    }
}
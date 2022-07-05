import React from 'react';
import "./TextItemWrapper.scss"

const TextItemWrapper = ({ children }) => {
    return (
        <div className="modal-info-text-item-wrapper">
            {children}
        </div>
    );
};

export default TextItemWrapper;
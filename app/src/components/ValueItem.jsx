import React from 'react';
import "./ValueItem.scss"

const ValueItem = ({text}) => {
    return (
        <div className="modal-info-value-item">
            {text}
        </div>
    );
};

export default ValueItem;
import React from 'react';
import "./LineItem.scss"

const LineItem = ({children}) => {
    return (
        <div className="modal-info-line-item">
            {children}
        </div>
    );
};

export default LineItem;
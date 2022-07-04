import React from 'react';
import "./InfoTitle.scss"

const InfoTitle = ({ text }) => {
    return (
        <div className="modal-info-title">
            {text}
        </div>
    );
};

export default InfoTitle;
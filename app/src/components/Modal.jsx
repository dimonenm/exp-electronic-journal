import React from 'react';
import "./Modal.scss"

const Modal = ({ type, children }) => {
    if (type === "create") {
        return (
            <div className='modal-create'>
                {children}
            </div>
        )
    }
    if (type === "search") {
        return (
            <div className='modal-search'>
                {children}
            </div>
        )
    }
    if (type === "info") {
        return (
            <div className='modal-info'>
                {children}
            </div>
        )
    }
    return (
        <div className='modal-hidden'>
            {children}
        </div>
    );
};

export default Modal;
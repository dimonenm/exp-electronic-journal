import React from 'react';
import "./Btn.scss"

const Btn = ({ type, setModal, modal }) => {
    function createClickHandler() {
        console.log(modal.type);
        if (modal.type !== "create") {
            setModal({ type: "create" })
        } else {
            setModal({ type: null })
        }
    }
    function searchClickHandler() {
        console.log(modal.type);
        if (modal.type !== "search") {
            setModal({ type: "search" })
        } else {
            setModal({ type: null })
        }

    }
    function infoClickHandler() {
        console.log(modal.type);
        if (modal.type !== "info") {
            setModal({ type: "info" })
        } else {
            setModal({ type: null })
        }
    }

    if (type === "create") {
        return (
            <div className='btn' onClick={createClickHandler}>
                Btn
            </div>
        )
    }
    if (type === "search") {
        return (
            <div className='btn' onClick={searchClickHandler}>
                Btn
            </div>
        )
    }
    if (type === "info") {
        return (
            <div className='btn' onClick={infoClickHandler}>
                Btn
            </div>
        )
    }
    return (
        <div className='btn'>
            Btn
        </div>
    );
};

export default Btn;
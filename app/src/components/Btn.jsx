import React from 'react';
import "./Btn.scss"
const Btn = ({ type }) => {
    function createClickHandler() {
        console.log("create");
    }
    function searchClickHandler() {
        console.log("search");
    }
    function infoClickHandler() {
        console.log("info");
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
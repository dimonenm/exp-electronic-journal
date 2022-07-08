import React from 'react';
import "./Btn.scss"
import axios from 'axios'
const Btn = ({ type, setModal, modal, expState }) => {
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
    function downloadClickHandler() {
        let req = axios.get("http://localhost:3001/get-db")
        console.log(req);
    }
    function saveClickHandler() {
        let str = [JSON.stringify(expState)]
        console.log(str);
        axios.post('http://localhost:3001/set-db', { str })           
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
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
    if (type === "download") {
        return (
            <div className='btn' onClick={downloadClickHandler}>
                Btn
            </div>
        )
    }
    if (type === "save") {
        return (
            <div className='btn' onClick={saveClickHandler}>
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
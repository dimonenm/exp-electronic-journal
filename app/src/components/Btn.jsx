import React from 'react';
import "./Btn.scss"
import axios from 'axios'


const Btn = ({ type, setModal, modal, expState, setPagesCount }) => {
    function seeMoreCardsHandler() {
        setPagesCount((pref) => {
            return pref + 30
        })
    }
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



        axios.post('http://localhost:3001/set-db', { expState })

        // let str = JSON.stringify(expState)


            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    if (type === "create") {
        return (
            <div className='btn-create' onClick={createClickHandler}>
                
            </div>
        )
    }
    if (type === "search") {
        return (
            <div className='btn-search' onClick={searchClickHandler}>
                
            </div>
        )
    }
    if (type === "info") {
        return (
            <div className='btn-info' onClick={infoClickHandler}>
                
            </div>
        )
    }
    if (type === "problem") {
        return (
            <div className='btn-problem' onClick={infoClickHandler}>
                
            </div>
        )
    }
    if (type === "download") {
        return (
            <div className='btn' onClick={downloadClickHandler}>
                
            </div>
        )
    }
    if (type === "save") {
        return (
            <div className='btn' onClick={saveClickHandler}>
                
            </div>
        )
    }
    if (type === "more") {
        return (
            <div className='btn-more' onClick={seeMoreCardsHandler}>
                
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
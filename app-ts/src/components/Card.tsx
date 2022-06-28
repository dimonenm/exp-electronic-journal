import React, { FC } from 'react';
import "./Card.scss"

interface IInputProps {
    number: string,
    type: string,
    numberOfMaterial: string,
    dateOfIncoming: string,
    dateOfComplite: string,
    executor: string,
    result: string
}

const Card: FC<IInputProps> = ({ number, type, numberOfMaterial, dateOfIncoming, dateOfComplite, executor, result}) => {
    return (
        <div className='card'>
            <div className='card-half-row'>{number}</div>
            <div className='card-half-row'>{type}</div>
            <div className='card-row'>{numberOfMaterial}</div>
            <div className='card-row'>{dateOfIncoming}</div>
            <div className='card-row'>{dateOfComplite}</div>
            <div className='card-row'>{executor}</div>
            <div className='card-row'>{result}</div>
        </div>
    );
};

export default Card;
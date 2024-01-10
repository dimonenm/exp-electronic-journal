import React, { FC } from 'react';
import "./Card.scss"

interface IInputProps {
  number: string | null,
  type: string,
  active: boolean,
  numberOfMaterial: string,
  dateOfIncoming: string,
  dateOfComplite: string,
  executor: string,
  result: string,
  updateClickHendler: (value: string | null) => void
}

const Card: FC<IInputProps> = ({ number, type, active, numberOfMaterial, dateOfIncoming, dateOfComplite, executor, result, updateClickHendler }) => {
  if (active) {
    return (
      <div className='card card-active' onClick={(event) => {
        event.stopPropagation()
        updateClickHendler(number)
      }}>
        <div className="card-half-row2">
          <div className="warning-icon"></div>
          <div className='card-half-row'>{`№ ${number}`}</div>
        </div>
        <div className='card-half-row'>{type}
        </div>
        <div className='card-row'>{numberOfMaterial}</div>
        <div className='card-row'>{dateOfIncoming}</div>
        <div className='card-row'>{dateOfComplite}</div>
        <div className='card-row'>{executor}</div>
        <div className='card-row'>{result}</div>
      </div>
    );
  }
  return (
    <div className='card' onClick={(event) => {
      event.stopPropagation()
      updateClickHendler(number)
    }}>
      <div className="card-half-row2">
      <div className="warning-icon"></div>
      <div className='card-half-row'>{`№ ${number}`}</div>
      </div>
      <div className='card-half-row'>{type}
      </div>
      <div className='card-row'>{numberOfMaterial}</div>
      <div className='card-row'>{dateOfIncoming}</div>
      <div className='card-row'>{dateOfComplite}</div>
      <div className='card-row'>{executor}</div>
      <div className='card-row'>{result}</div>
    </div>
  );
};

export default React.memo(Card);
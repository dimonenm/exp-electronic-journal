import React, { FC } from 'react';
import './Button.scss'

interface IButtonProps {
  type: string,
  modalType: string | null,
  clickHendler: () => void,
  countOfWarnings?: number
}
const Button: FC<IButtonProps> = ({ type, modalType, clickHendler, countOfWarnings }) => {
  if (type === 'create') {
    if (modalType === 'create') {
      return (
        <div className='btn btn-create-active' onClick={clickHendler}></div>
      );
    } else {
      return (
        <div className='btn btn-create' onClick={clickHendler}></div>
      );
    }
  }
  if (type === 'search') {
    if (modalType === 'search') {
      return (
        <div className='btn btn-search-active' onClick={clickHendler}></div>
      );
    } else {
      return (
        <div className='btn btn-search' onClick={clickHendler}></div>
      );
    }
  }
  if (type === 'info') {
    if (modalType === 'info') {
      return (
        <div className='btn btn-info-active' onClick={clickHendler}></div>
      );
    } else {
      return (
        <div className='btn btn-info' onClick={clickHendler}></div>
      );
    }
  }
  if (type === 'warnings') {
    if (modalType === 'warnings') {
      return (
        <div className='btn btn-warnings-active' onClick={clickHendler}></div>
      );
    } else {
      return (
        <>
          <div className='btn btn-warnings' onClick={clickHendler}>
            {countOfWarnings !== 0 ? <span className="notification-counter">{countOfWarnings}</span> : null}
          </div>
        </>
      );
    }
  }
  return null
};

export default Button;
import React, { FC } from 'react';
import './Button.scss'

interface IButtonProps {
  type: string,
  clickHendler: () => void
}
const Button: FC<IButtonProps> = ({ type, clickHendler }) => {
  if (type === 'create') {
    return (
      <div className='btn-create' onClick={clickHendler}></div>
    );    
  }
  if (type === 'search') {
    return (
      <div className='btn-search' onClick={clickHendler}></div>
    );    
  }
  if (type === 'info') {
    return (
      <div className='btn-info' onClick={clickHendler}></div>
    );    
  }
  if (type === 'warnings') {
    return (
      <div className='btn-info' onClick={clickHendler}></div>
    );    
  }
  return null    
};

export default Button;
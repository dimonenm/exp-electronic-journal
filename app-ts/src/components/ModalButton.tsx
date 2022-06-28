import React, { FC } from 'react';
import './ModalButton.scss'

interface IModalButtonProps {
  type: string,
  text: string
}

const ModalButton: FC<IModalButtonProps> = ({ type, text }) => {
  if (type === 'add') {
    return (
      <div className='modal-button'>
        {text}
      </div>
    );
  }
  if (type === 'cancel') {
    return (
      <div className='modal-button'>
        {text}
      </div>
    );
  }
  if (type === 'update') {
    return (
      <div className='modal-button'>
        {text}
      </div>
    );
  }
  if (type === 'clear') {
    return (
      <div className='modal-button'>
        {text}
      </div>
    );
  }
  return null;
};

export default ModalButton;
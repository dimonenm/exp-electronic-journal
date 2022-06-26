import React, { FC } from 'react';
import ModalTitle from './ModalTitle';
import './Modal.scss'

interface ModalProps {
  type: string
}

const Modal: FC<ModalProps> = ({ type }) => {
  if (type === 'create') {
    return (
      <div className='modal-create'>
        <ModalTitle>
          Создание новой экспертизы
        </ModalTitle>
      </div>
    );
  }
  if (type === 'search') {
    return (
      <div className='modal-search'>
        search
      </div>
    );
  }
  if (type === 'info') {
    return (
      <div className='modal-info'>
        info
      </div>
    );
  }
  if (type === 'hidden') {
    return (
      <div className='modal-hidden'>

      </div>
    );
  }
  return (
    <div className='modal'>

    </div>
  );
};

export default Modal;
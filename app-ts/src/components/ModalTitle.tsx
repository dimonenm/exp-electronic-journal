import React, { FC } from 'react';
import './ModalTitle.scss'

interface ModalTitleProps{
  children: React.ReactNode
}

const ModalTitle: FC<ModalTitleProps> = ({children}) => {
  return (
    <div className='modal-title'>
      {children}
    </div>
  );
};

export default ModalTitle;
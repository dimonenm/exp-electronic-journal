import React, { FC } from 'react';
import ModalTitle from './ModalTitle';
import './Modal.scss'
import InputTitle from './InputTitle';
import InputFild from './InputFild';
import Input from './Input';

interface ModalProps {
  type: string
}

const Modal: FC<ModalProps> = ({ type }) => {
  if (type === 'create') {
    return (
      <div className='modal-create'>
        <ModalTitle>Создание новой экспертизы</ModalTitle>

        <Input type='text' title='№ по порядку'/>
        <Input type='date' title='Дата поступления'/>
        <InputTitle>№ по порядку</InputTitle>
        <InputTitle>Дата поступления</InputTitle>
        <InputFild type='text'/>
        <InputFild type='date'/>
        <InputTitle>Вид службы</InputTitle>
        <InputTitle>Орган инициатора</InputTitle>
        <InputFild type='select' name='typeOfService'/>
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
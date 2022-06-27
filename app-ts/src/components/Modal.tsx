import React, { FC } from 'react';
import ModalTitle from './ModalTitle';
import './Modal.scss'
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
        <Input type='select' title='Вид службы' listName='typeOfService' />
        <Input type='select' title='Орган инициатора' listName='unitOfService' />
        <Input type='select' title='Вид материала' listName='typeOfMaterial' />
        <Input type='select' title='Статья' listName='article' />
        <Input type='select' title='Вид экспертизы' listName='typeOfExpertise' />
        <Input type='select' title='Исполнитель' listName='executor' />
        <Input type='date' title='Дата вын. ходат-ва'/>
        <Input type='date' title='Дата удов. ходат-ва'/>
        <Input type='date' title='Дата продления'/>
        <Input type='date' title='Дата окон-я прод-я'/>
        <Input type='select' title='Результат эксп-зы' listName='result' />
        <Input type='date' title='Дата окончания'/>
        <Input type='date' title='Дата завершения'/>
        <ModalTitle>Справка о проверке</ModalTitle>
        <Input type='date' title='Дата назначения'/>
        <Input type='date' title='Дата выполнения'/>
        <Input type='text' title='№ проверки'/>
        <Input type='text' title='№ уг. дела'/>
        <Input type='select' title='Исполнитель' listName='executor' />
        <Input type='select' title='Результат пров-ки' listName='resultOfVerification' />
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
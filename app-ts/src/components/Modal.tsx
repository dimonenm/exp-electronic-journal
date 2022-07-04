import React, { FC, useState } from 'react';
import ModalTitle from './ModalTitle';
import Input from './Input';
import ModalButton from './ModalButton';
import ModalCreate from './ModalCreate';
import './Modal.scss'
import { IExp, IModal } from '../types/types';
import Exp from '../entities/Exp';
import ModalUpdate from './ModalUpdate';

interface ModalProps {
  type: string
  dbExps: IExp[]
  setDbExps?: React.Dispatch<IExp[]>
  setModal: React.Dispatch<IModal>
}

const Modal: FC<ModalProps> = ({ type, dbExps, setDbExps, setModal }) => {

  const [modalDbExps, setModalDbExps] = useState<IExp[]>(dbExps)
  const [expStorage, setExpStorage] = useState<Exp>(new Exp(undefined, `${modalDbExps.length + 1}`))



  if (type === 'create') {
    return (
      <div className='modal-create'>
        <ModalCreate
          modalDbExps={modalDbExps}
          expStorage={expStorage}
          setExpStorage={setExpStorage}
          setModalDbExps={setModalDbExps}
          setDbExps={setDbExps}
          setModal={setModal}
        />
      </div>
    );
  }
  if (type === 'update') {
    console.log('modal - ', type);
    return (
      <div className='modal-update'>
        <ModalUpdate
          modalDbExps={modalDbExps}
          expStorage={expStorage}
          setExpStorage={setExpStorage}
          setModalDbExps={setModalDbExps}
          setDbExps={setDbExps}
          setModal={setModal}
        />

        {/* <ModalTitle>Создание новой экспертизы</ModalTitle>
        <Input type='text' title='№ по порядку' name='id' />
        <Input type='date' title='Дата поступления' name='dateOfReceipt' />
        <Input type='select' title='Вид службы' name='typeOfService' listName='typeOfService' />
        <Input type='select' title='Орган инициатора' name='unitOfService' listName='unitOfService' />
        <Input type='select' title='Вид материала' name='typeOfMaterial' listName='typeOfMaterial' />
        <Input type='select' title='Статья' name='article' listName='article' />
        <Input type='select' title='Вид экспертизы' name='typeOfExpertise' listName='typeOfExpertise' />
        <Input type='select' title='Исполнитель' name='executor' listName='executor' />
        <Input type='date' title='Дата вын. ходат-ва' name='datePetitionStart' />
        <Input type='date' title='Дата удов. ходат-ва' name='datePetitionEnd' />
        <Input type='date' title='Дата продления' name='dateProlongationStart' />
        <Input type='date' title='Срок продления' name='valueOfProlongation' />
        <Input type='select' title='Результат эксп-зы' name='result' listName='result' />
        <Input type='date' title='Дата окончания' name='dateExpEnd' />
        <Input type='date' title='Дата завершения' name='dateExpComplete' />
        <ModalTitle>Справка о проверке</ModalTitle>
        <Input type='date' title='Дата назначения' name='dateVerificationStart' />
        <Input type='date' title='Дата выполнения' name='dateVerificationEnd' />
        <Input type='text' title='№ проверки' name='numberVerification' />
        <Input type='text' title='№ уг. дела' name='verificationNumberOfMaterial' />
        <Input type='select' title='Исполнитель' name='verificationExecutor' listName='executor' />
        <Input type='select' title='Результат пров-ки' name='verificationResult' listName='resultOfVerification' />
        <ModalButton type='update' text='Изменить' />
        <ModalButton type='cancel' text='Отменить' /> */}
      </div>
    );
  }
  if (type === 'search') {
    
    return (
      <div className='modal-search'>
        <ModalButton type='clear' text='Сбросить' />
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
  return null
};

export default Modal;
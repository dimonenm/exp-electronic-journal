import React, { FC } from 'react';
import ModalCreate from './ModalCreate';
import ModalUpdate from './ModalUpdate';
import ModalSearch from './ModalSearch';
import './Modal.scss'
import { IModal } from '../types/types';
import Exp from '../entities/Exp';

interface ModalProps {
  type: string
  idOfExp?: string | null
  dbExps: Exp[]
  setDbExps?: React.Dispatch<Exp[]>
  setModal: React.Dispatch<IModal>
}

const Modal: FC<ModalProps> = ({ type, idOfExp, dbExps, setDbExps, setModal }) => {

  if (type === 'create') {
    return (
      <div className='modal-create'>
        <ModalCreate
          dbExps={dbExps}
          setDbExps={setDbExps}
          setModal={setModal}
        />
      </div>
    );
  }
  if (type === 'update') {    
    return (
      <div className='modal-update'>
        <ModalUpdate
          dbExps={dbExps}
          idOfExp={idOfExp}
          setDbExps={setDbExps}
          setModal={setModal}
        />
      </div>
    );
  }
  if (type === 'search') {
    
    return (
      <div className='modal-search'>
        <ModalSearch
          setModal={setModal}
        />
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
      <div className='modal-hidden'></div>
    );
  }
  return null
};

export default Modal;
import React, { FC } from 'react';
import ModalCreate from './ModalCreate';
import ModalUpdate from './ModalUpdate';
import ModalSearch from './ModalSearch';
import { IModal } from '../types/types';
import Exp from '../entities/Exp';
import SearchExp from '../entities/SearchExp';
import './Modal.scss'
import ModalInfo from './ModalInfo';

interface ModalProps {
  type: string
  idOfExp?: string | null
  dbExps: Exp[]
  searchExp: SearchExp
  searchArr?: Exp[]
  setDbExps?: React.Dispatch<Exp[]>
  setModal: React.Dispatch<IModal>
  setSearchExp: React.Dispatch<SearchExp>
}

const Modal: FC<ModalProps> = ({ type, idOfExp, dbExps, searchExp, searchArr, setDbExps, setModal, setSearchExp }) => {

  if (type === 'create') {
    return (
      <div className='modal modal-create'>
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
      <div className='modal modal-update'>
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
      <div className='modal modal-search'>
        <ModalSearch
          searchExp={searchExp}
          searchArr={searchArr}
          setModal={setModal}
          setSearchExp={setSearchExp}
        />
      </div>
    );
  }
  if (type === 'info') {
    return (
      <div className='modal modal-info'>
        <ModalInfo
          dbExps={dbExps}
          searchArr={searchArr}
        />
      </div>
    );
  }
  if (type === 'hidden') {
    return (
      <div className='modal modal-hidden'></div>
    );
  }
  return null
};

export default Modal;
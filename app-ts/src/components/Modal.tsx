import React, { FC } from 'react';
import ModalCreate from './ModalCreate';
import ModalUpdate from './ModalUpdate';
import ModalSearch from './ModalSearch';
import { IModal } from '../types/types';
import Exp from '../entities/Exp';
import SearchExp from '../entities/SearchExp';
import './Modal.scss'
import ModalInfo from './ModalInfo';
import ModalWarnings from './ModalWarnings';

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

const Modal: FC<ModalProps> = ({ type, idOfExp, dbExps, searchExp, searchArr, setDbExps, setModal, setSearchExp}) => {

  function closeModalClickHandler():void {
    setModal({ type: null, idOfExp: null })
  }

  if (type === 'create') {
    return (
      <>
      <div className='modal modal-create'>
        <ModalCreate
          dbExps={dbExps}
          setDbExps={setDbExps}
          setModal={setModal}
        />
      </div>
        <div className='modal-background' onClick={closeModalClickHandler}></div>
      </>
    );
  }
  if (type === 'update') {
    return (
      <>
      <div className='modal modal-update'>
        <ModalUpdate
          dbExps={dbExps}
          idOfExp={idOfExp}
          setDbExps={setDbExps}
          setModal={setModal}
        />
      </div>
      <div className='modal-background' onClick={closeModalClickHandler}></div>
      </>
    );
  }
  if (type === 'search') {

    return (
      <>
      <div className='modal modal-search'>
        <ModalSearch
          searchExp={searchExp}
          searchArr={searchArr}
          setModal={setModal}
          setSearchExp={setSearchExp}
        />
        </div>
        <div className='modal-background' onClick={closeModalClickHandler}></div>
      </>
    );
  }
  if (type === 'info') {
    return (
      <>
      <div className='modal modal-info'>
        <ModalInfo
          dbExps={dbExps}
          searchArr={searchArr}
        />
        </div>
        <div className='modal-background' onClick={closeModalClickHandler}></div>
      </>
    );
  }
  if (type === 'warnings') {
    return (
      <>
      <div className='modal modal-warnings'>
        <ModalWarnings
          dbExps={dbExps}
        />
        </div>
        <div className='modal-background' onClick={closeModalClickHandler}></div>
      </>
    );
  }
  if (type === 'hidden') {
    return (
      <>
        <div className='modal modal-hidden'></div>
        <div className='background-hidden' onClick={closeModalClickHandler}></div>
      </>
    );
  }
  return null
};

export default Modal;
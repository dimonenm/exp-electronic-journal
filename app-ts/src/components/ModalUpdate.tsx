import React, { FC } from 'react';
import ModalTitle from './ModalTitle';
import Input from './Input';
import ModalButton from './ModalButton';
import { IExp, IModal } from '../types/types';
import Exp from '../entities/Exp';

interface ModalUpdateProps {
  modalDbExps: IExp[],
  expStorage: Exp,
  setExpStorage: React.Dispatch<Exp>,
  setModalDbExps: React.Dispatch<IExp[]>,
  setDbExps: React.Dispatch<IExp[]> | undefined,
  setModal: React.Dispatch<IModal>
}

const ModalUpdate: FC<ModalUpdateProps> = () => {
  return (
    <>
      
    </>
  );
};

export default ModalUpdate;
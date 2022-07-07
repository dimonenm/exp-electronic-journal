import React, { FC } from 'react';
import { IModal } from '../types/types';
import ModalTitle from './ModalTitle';

interface ModalSearchProps{
  setModal: React.Dispatch<IModal>
}

const ModalSearch: FC<ModalSearchProps> = () => {
  return (
    <>
      <ModalTitle>Поиск экспертизы</ModalTitle>
    </>
  );
};

export default ModalSearch;
import React, { FC } from 'react';
import ModalTitle from './ModalTitle';
import Input from './Input';
import ModalButton from './ModalButton';
import { IExp, IModal } from '../types/types';
import Exp from '../entities/Exp';

interface ModalUpdateProps {
  dbExps: IExp[],
  expStorage: Exp,
  setExpStorage: React.Dispatch<Exp>,
  setDbExps: React.Dispatch<Exp[]> | undefined,
  setModal: React.Dispatch<IModal>
}

const ModalUpdate: FC<ModalUpdateProps> = ({ dbExps, expStorage, setExpStorage, setDbExps, setModal }) => {

  function onChangeIdHandler(value: string): void {
    const localExp = new Exp(expStorage)
    localExp.setId(value)
    setExpStorage(localExp)
  }
  function onChangDateOfReceiptHandler(value: string): void {
    const localExp = new Exp(expStorage)
    localExp.setDateOfReceipt(value)
    setExpStorage(localExp)
  }
  function onChangeTypeOfServiceHandler(value: string): void {
    const localExp = new Exp(expStorage)
    localExp.setTypeOfService(value)
    setExpStorage(localExp)
  }
  return (
    <>
      <ModalTitle>Изменение данных экспертизы</ModalTitle>
      <Input type='text' title='№ по порядку' name='id' value={`${expStorage.getId()}`} onChangeIdHandler={onChangeIdHandler} />
      <Input type='date' title='Дата поступления' name='dateOfReceipt' onChangDateOfReceiptHandler={onChangDateOfReceiptHandler} />
      <Input type='select' title='Вид службы' name='typeOfService' listName='typeOfService' onChangeTypeOfServiceHandler={onChangeTypeOfServiceHandler} />
    </>
  );
};

export default ModalUpdate;
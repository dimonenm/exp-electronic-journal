import React, { FC, useState} from 'react';
import ModalTitle from './ModalTitle';
import Input from './Input';
import ModalButton from './ModalButton';
import { IModal } from '../types/types';
import Exp from '../entities/Exp';
import { dateAddReduceDays, seveExpsFromAppDb } from '../services/services'

interface ModalCreateProps {
  dbExps: Exp[],
  setDbExps: React.Dispatch<Exp[]> | undefined,
  setModal: React.Dispatch<IModal>
}

const ModalCreate: FC<ModalCreateProps> = ({ dbExps, setDbExps, setModal }) => {

  const [expStorage, setExpStorage] = useState<Exp>(new Exp(undefined, `${dbExps.length + 1}`))

  let unitOfService
  let article

  function onChangeIdHandler(value: string): void {
    const localExp = new Exp(expStorage)
    localExp.setId(value)
    setExpStorage(localExp)
  }
  function onChangDateOfReceiptHandler(value: string): void {
    const localExp = new Exp(expStorage)
    localExp.setDateOfReceipt(value)
    if (localExp.getDatePetitionStart() === '' && localExp.getDatePetitionEnd() === '' && localExp.getDateProlongationStart() === '') {
      localExp.setDateExpEnd(dateAddReduceDays(value, 15, true))
    }
    setExpStorage(localExp)
  }
  function onChangeTypeOfServiceHandler(value: string): void {
    const localExp = new Exp(expStorage)
    localExp.setTypeOfService(value)
    setExpStorage(localExp)
  }
  function onChangeUnitOfServiceHandler(value: string): void {
    const localExp = new Exp(expStorage)
    localExp.setUnitOfService(value)
    setExpStorage(localExp)
  }
  function onChangeTypeOfMaterialHandler(value: string): void {
    const localExp = new Exp(expStorage)
    localExp.setTypeOfMaterial(value)
    setExpStorage(localExp)
  }
  function onChangeNumberOfMaterialHandler(value: string): void {
    const localExp = new Exp(expStorage)
    localExp.setNumberOfMaterial(value)
    setExpStorage(localExp)
  }
  function onChangeArticleHandler(value: string): void {
    const localExp = new Exp(expStorage)
    localExp.setArticle(value)
    setExpStorage(localExp)
  }
  function onChangeTypeOfExpertiseHandler(value: string): void {
    const localExp = new Exp(expStorage)
    localExp.setTypeOfExpertise(value)
    setExpStorage(localExp)
  }
  function onChangeDifficultOfExpertiseHandler(value: string): void {
    const localExp = new Exp(expStorage)
    localExp.setDifficult(value)
    setExpStorage(localExp)
  }
  function onChangeExecutorHandler(value: string): void {
    const localExp = new Exp(expStorage)
    localExp.setExecutor(value)
    setExpStorage(localExp)
  }
  function onChangeDatePetitionStartHandler(value: string): void {
    const localExp = new Exp(expStorage)
    localExp.setDatePetitionStart(value)
    if (localExp.getDatePetitionEnd() === '' && localExp.getDateProlongationStart() === '') {
      localExp.setDateExpEnd(dateAddReduceDays(value, 20, true))
    }
    setExpStorage(localExp)
  }
  function onChangeDatePetitionEndHandler(value: string): void {
    const localExp = new Exp(expStorage)
    localExp.setDatePetitionEnd(value)
    if (localExp.getDateProlongationStart() === '') {
      localExp.setDateExpEnd(dateAddReduceDays(value, 15, true))
    }
    setExpStorage(localExp)
  }
  function onChangeDateProlongationStartHandler(value: string): void {
    const localExp = new Exp(expStorage)
    localExp.setDateProlongationStart(value)
    setExpStorage(localExp)
  }
  function onChangeValueOfProlongationHandler(value: string): void {
    const localExp = new Exp(expStorage)
    localExp.setValueOfProlongation(value)
    if (localExp.getDateProlongationStart() !== '') {
      localExp.setDateExpEnd(dateAddReduceDays(localExp.getDateProlongationStart(), +value, true))
    }
    setExpStorage(localExp)
  }
  function onChangeResultHandler(value: string): void {
    const localExp = new Exp(expStorage)
    localExp.setResult(value)
    setExpStorage(localExp)
  }
  function onChangeDateExpEndHandler(value: string): void {
    const localExp = new Exp(expStorage)
    localExp.setDateExpEnd(value)
    setExpStorage(localExp)
  }
  function onChangeDateExpCompleteHandler(value: string): void {
    const localExp = new Exp(expStorage)
    localExp.setDateExpComplete(value)
    setExpStorage(localExp)
  }
  function onClickBtnAddHandler(): void {
    
    const localExpArr = [...dbExps]
    let isUniqId = true
    localExpArr.forEach((item) => {
      if (item.getId() === expStorage.getId()) isUniqId = false
    })
    if (isUniqId) {
      localExpArr.push(expStorage);
      setDbExps?.(localExpArr)
      setExpStorage(new Exp(undefined, `${localExpArr.length + 1}`))
      setModal({ type: 'create', idOfExp: null })
      seveExpsFromAppDb('http://localhost:3001/set-db', localExpArr)
    }
  }
  function onClickBtnCancelHandler(): void {
    setExpStorage(new Exp())
    setModal({ type: null, idOfExp: null })
  }

  if (expStorage.getTypeOfService() === '??????') {
    unitOfService = <Input type='select' title='?????????? ????????????????????' name='unitOfService' value={`${expStorage?.getUnitOfService()}`} listName='unitOfService' listType='police' onChangeUnitOfServiceHandler={onChangeUnitOfServiceHandler} />
  } else if (expStorage.getTypeOfService() === '?????? ????') {
    unitOfService = <Input type='select' title='?????????? ????????????????????' name='unitOfService' value={`${expStorage?.getUnitOfService()}`} listName='unitOfService' listType='investigation' onChangeUnitOfServiceHandler={onChangeUnitOfServiceHandler} />
  }
  else {
    unitOfService = <Input type='empty' title='empty' name='empty' />
  }

  if (expStorage.getTypeOfMaterial() === '????') {
    article = <Input type='select' title='????????????' name='article' value={`${expStorage?.getArticle()}`} listName='article' onChangeArticleHandler={onChangeArticleHandler} />
  } else {
    article = <Input type='empty' title='empty' name='empty' />
  }
  return (
    <>
      <ModalTitle>???????????????? ?????????? ????????????????????</ModalTitle>
      <Input type='text' title='??? ???? ??????????????' name='id' value={`${expStorage.getId()}`} onChangeIdHandler={onChangeIdHandler} />
      <Input type='date' title='???????? ??????????????????????' name='dateOfReceipt' value={`${expStorage?.getDateOfReceipt()}`} onChangDateOfReceiptHandler={onChangDateOfReceiptHandler} />
      <Input type='select' title='?????? ????????????' name='typeOfService' value={`${expStorage?.getTypeOfService()}`} listName='typeOfService' onChangeTypeOfServiceHandler={onChangeTypeOfServiceHandler} />
      {unitOfService}
      <Input type='select' title='?????? ??????????????????' name='typeOfMaterial' value={`${expStorage?.getTypeOfMaterial()}`} listName='typeOfMaterial' onChangeTypeOfMaterialHandler={onChangeTypeOfMaterialHandler} />
      <Input type='text' title='??? ??????????????????' name='numberOfMaterial' value={`${expStorage?.getNumberOfMaterial()}`} onChangeNumberOfMaterialHandler={onChangeNumberOfMaterialHandler} />
      {article}
      <Input type='select' title='?????? ????????????????????' name='typeOfExpertise' value={`${expStorage?.getTypeOfExpertise()}`} listName='typeOfExpertise' onChangeTypeOfExpertiseHandler={onChangeTypeOfExpertiseHandler} />
      <Input type='select' title='?????????????????? ????????-????' name='difficultOfExpertise' value={`${expStorage?.getDifficult()}`} listName='difficultOfExpertise' onChangeDifficultOfExpertiseHandler={onChangeDifficultOfExpertiseHandler} />
      <Input type='select' title='??????????????????????' name='executor' value={`${expStorage?.getExecutor()}`} listName='executor' onChangeExecutorHandler={onChangeExecutorHandler} />
      <Input type='date' title='???????? ??????. ??????????-????' name='datePetitionStart' value={`${expStorage?.getDatePetitionStart()}`} onChangeDatePetitionStartHandler={onChangeDatePetitionStartHandler} />
      <Input type='date' title='???????? ????????. ??????????-????' name='datePetitionEnd' value={`${expStorage?.getDatePetitionEnd()}`} onChangeDatePetitionEndHandler={onChangeDatePetitionEndHandler} />
      <Input type='date' title='???????? ??????????????????' name='dateProlongationStart' value={`${expStorage?.getDateProlongationStart()}`} onChangeDateProlongationStartHandler={onChangeDateProlongationStartHandler} />
      <Input type='text' title='???????? ??????????????????' name='valueOfProlongation' value={`${expStorage?.getValueOfProlongation()}`} onChangeValueOfProlongationHandler={onChangeValueOfProlongationHandler} />
      <Input type='select' title='?????????????????? ????????-????' name='result' value={`${expStorage?.getResult()}`} listName='result' onChangeResultHandler={onChangeResultHandler} />
      <Input type='date' title='???????? ??????????????????' name='dateExpEnd' value={`${expStorage.getDateExpEnd()}`} onChangeDateExpEndHandler={onChangeDateExpEndHandler} />
      <Input type='date' title='???????? ????????????????????' name='dateExpComplete' value={`${expStorage?.getDateExpComplete()}`} onChangeDateExpCompleteHandler={onChangeDateExpCompleteHandler} />
      <Input type='empty' title='empty' name='empty' />
      <ModalButton type='add' text='????????????????' onClickBtnAddHandler={onClickBtnAddHandler} />
      <ModalButton type='cancel' text='????????????????' onClickBtnCancelHandler={onClickBtnCancelHandler} />
    </>
  );
};

export default ModalCreate;
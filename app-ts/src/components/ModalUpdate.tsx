import React, { FC, useEffect, useState } from 'react';
import ModalTitle from './ModalTitle';
import Input from './Input';
import ModalButton from './ModalButton';
import { IModal } from '../types/types';
import Exp from '../entities/Exp';
import { dateAddReduceDays, seveExpsFromAppDb } from '../services/services';

interface ModalUpdateProps {
  dbExps: Exp[],
  idOfExp?: string | null | undefined,
  setDbExps: React.Dispatch<Exp[]> | undefined,
  setModal: React.Dispatch<IModal>
}

const ModalUpdate: FC<ModalUpdateProps> = ({ dbExps, idOfExp, setDbExps, setModal }) => {

  const [expStorage, setExpStorage] = useState<Exp>(new Exp())

  useEffect(() => {
    const localUpdateExp = dbExps.find((item) => {
      if (item.getId() === idOfExp) return true
      return false
    })
    if (localUpdateExp) {
      setExpStorage(localUpdateExp)
    }
  }, [dbExps, idOfExp])

  let unitOfService
  let article
  let verification

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
  function onChangeDateVerificationStartHandler(value: string): void {
    const localExp = new Exp(expStorage)
    localExp.setDateVerificationStart(value)
    setExpStorage(localExp)
  }
  function onChangeDateVerificationEndHandler(value: string): void {
    const localExp = new Exp(expStorage)
    localExp.setDateVerificationEnd(value)
    setExpStorage(localExp)
  }
  function onChangeNumberVerificationHandler(value: string): void {
    const localExp = new Exp(expStorage)
    localExp.setNumberVerification(value)
    setExpStorage(localExp)
  }
  function onChangeVerificationNumberOfMaterialHandler(value: string): void {
    const localExp = new Exp(expStorage)
    localExp.setVerificationNumberOfMaterial(value)
    setExpStorage(localExp)
  }
  function onChangeVerificationExecutorHandler(value: string): void {
    const localExp = new Exp(expStorage)
    localExp.setVerificationExecutor(value)
    setExpStorage(localExp)
  }
  function onChangeVerificationResultHandler(value: string): void {
    const localExp = new Exp(expStorage)
    localExp.setVerificationResult(value)
    setExpStorage(localExp)
  }

  function onClickBtnUpdateHandler(): void {
    const localExpArr = dbExps.map((item) => {
      if (item.getId() === expStorage.getId() && idOfExp === expStorage.getId())
        return expStorage
      return item
    })
    setDbExps?.(localExpArr)
    seveExpsFromAppDb('http://localhost:3001/set-db', localExpArr)
    setModal({ type: null, idOfExp: null })
  }
  function onClickBtnCancelHandler(): void {
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

  if (expStorage.getTypeOfExpertise() === '???????? ??????.') {
    verification = (
      <>
        <ModalTitle>?????????????? ?? ????????????????</ModalTitle>
        <Input type='date' title='???????? ????????????????????' name='dateVerificationStart' value={`${expStorage?.getDateVerificationStart()}`} onChangeDateVerificationStartHandler={onChangeDateVerificationStartHandler} />
        <Input type='date' title='???????? ????????????????????' name='dateVerificationEnd' value={`${expStorage?.getDateVerificationEnd()}`} onChangeDateVerificationEndHandler={onChangeDateVerificationEndHandler} />
        <Input type='text' title='??? ????????????????' name='numberVerification' value={`${expStorage?.getNumberVerification()}`} onChangeNumberVerificationHandler={onChangeNumberVerificationHandler} />
        <Input type='text' title='??? ????. ????????' name='verificationNumberOfMaterial' value={`${expStorage?.getVerificationNumberOfMaterial()}`} onChangeVerificationNumberOfMaterialHandler={onChangeVerificationNumberOfMaterialHandler} />
        <Input type='select' title='??????????????????????' name='verificationExecutor' value={`${expStorage?.getVerificationExecutor()}`} listName='verificationExecutor' onChangeVerificationExecutorHandler={onChangeVerificationExecutorHandler} />
        <Input type='select' title='?????????????????? ????????-????' name='verificationResult' value={`${expStorage?.getVerificationResult()}`} listName='verificationResult' onChangeVerificationResultHandler={onChangeVerificationResultHandler} />
      </>
    )
  } else {
    verification = <Input type='empty' title='empty' name='empty' />
  }

  return (
    <>
      <ModalTitle>?????????????????? ???????????? ????????????????????</ModalTitle>
      <Input type='text' title='??? ???? ??????????????' name='id' value={`${expStorage?.getId()}`} onChangeIdHandler={onChangeIdHandler} />
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
      <Input type='select' title='?????????????????? ????????-????' name='result' listName='result' value={`${expStorage?.getResult()}`} onChangeResultHandler={onChangeResultHandler} />
      <Input type='date' title='???????? ??????????????????' name='dateExpEnd' value={`${expStorage?.getDateExpEnd()}`} onChangeDateExpEndHandler={onChangeDateExpEndHandler} />
      <Input type='date' title='???????? ????????????????????' name='dateExpComplete' value={`${expStorage?.getDateExpComplete()}`} onChangeDateExpCompleteHandler={onChangeDateExpCompleteHandler} />
      {verification}
      <ModalButton type='update' text='????????????????' onClickBtnUpdateHandler={onClickBtnUpdateHandler} />
      <ModalButton type='cancel' text='????????????????' onClickBtnCancelHandler={onClickBtnCancelHandler} />
    </>
  );
};

export default ModalUpdate;
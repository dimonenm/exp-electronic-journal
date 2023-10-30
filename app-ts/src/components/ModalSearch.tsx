import React, { FC } from 'react';
import Exp from '../entities/Exp';
import SearchExp from '../entities/SearchExp';
import { IModal } from '../types/types';
import InputSearch from './InputSearch';
import ModalButton from './ModalButton';
import ModalTitle from './ModalTitle';

interface ModalSearchProps{
  searchExp: SearchExp,
  searchArr?: Exp[],
  setModal: React.Dispatch<IModal>,
  setSearchExp: React.Dispatch<SearchExp>,
}

const ModalSearch: FC<ModalSearchProps> = ({ searchExp, searchArr, setModal, setSearchExp}) => {

  let unitOfService
  let kindOfService
  let article
  let verification

  function onChangeIdStartHandler(value: string): void {
    const localExp = new SearchExp(searchExp)
    localExp.setIdStart(value)
    setSearchExp?.(localExp)
  }
  function onChangeIdEndHandler(value: string): void {
    const localExp = new SearchExp(searchExp)
    localExp.setIdEnd(value)
    setSearchExp?.(localExp)
  }
  function onChangDateOfReceiptStartHandler(value: string): void {
    const localExp = new SearchExp(searchExp)
    localExp.setDateOfReceiptStart(value)
    setSearchExp?.(localExp)
  }
  function onChangDateOfReceiptEndHandler(value: string): void {
    const localExp = new SearchExp(searchExp)
    localExp.setDateOfReceiptEnd(value)
    setSearchExp?.(localExp)
  }
  function onChangeTypeOfServiceHandler(value: string): void {
    const localExp = new SearchExp(searchExp)
    localExp.setTypeOfService(value)
    setSearchExp?.(localExp)
  }
  function onChangeUnitOfServiceHandler(value: string): void {
    const localExp = new SearchExp(searchExp)
    localExp.setUnitOfService(value)
    setSearchExp?.(localExp)
  }
  function onChangeKindOfServiceHandler(value: string): void {
    const localExp = new SearchExp(searchExp)
    localExp.setKindOfService(value)
    setSearchExp?.(localExp)
  }
  function onChangeTypeOfMaterialHandler(value: string): void {
    const localExp = new SearchExp(searchExp)
    localExp.setTypeOfMaterial(value)
    setSearchExp?.(localExp)
  }
  function onChangeNumberOfMaterialHandler(value: string): void {
    const localExp = new SearchExp(searchExp)
    localExp.setNumberOfMaterial(value)
    setSearchExp?.(localExp)
  }
  function onChangeArticleHandler(value: string): void {
    const localExp = new SearchExp(searchExp)
    localExp.setArticle(value)
    setSearchExp?.(localExp)
  }
  function onChangeTypeOfExpertiseHandler(value: string): void {
    const localExp = new SearchExp(searchExp)
    localExp.setTypeOfExpertise(value)
    setSearchExp?.(localExp)
  }
  function onChangeDifficultOfExpertiseHandler(value: string): void {
    const localExp = new SearchExp(searchExp)
    localExp.setDifficult(value)
    setSearchExp?.(localExp)
  }
  function onChangeExecutorHandler(value: string): void {
    const localExp = new SearchExp(searchExp)
    localExp.setExecutor(value)
    setSearchExp?.(localExp)
  }
  function onChangeResultHandler(value: string): void {
    const localExp = new SearchExp(searchExp)
    localExp.setResult(value)
    setSearchExp?.(localExp)
  }
  function onChangeStatusOfExpertiseHandler(value: string): void {
    const localExp = new SearchExp(searchExp)
    localExp.setStatusOfExpertise(value)
    console.log('localExp: ', localExp);
    setSearchExp?.(localExp)
  }
  function onChangeDateExpEndStartHandler(value: string): void {
    const localExp = new SearchExp(searchExp)
    localExp.setDateExpEndStart(value)
    setSearchExp?.(localExp)
  }
  function onChangeDateExpEndEndHandler(value: string): void {
    const localExp = new SearchExp(searchExp)
    localExp.setDateExpEndEnd(value)
    setSearchExp?.(localExp)
  }
  function onChangeDateExpCompleteStartHandler(value: string): void {
    const localExp = new SearchExp(searchExp)
    localExp.setDateExpCompleteStart(value)
    setSearchExp?.(localExp)
  }
  function onChangeDateExpCompleteEndHandler(value: string): void {
    const localExp = new SearchExp(searchExp)
    localExp.setDateExpCompleteEnd(value)
    setSearchExp?.(localExp)
  }
  function onChangeDateVerificationStartStartHandler(value: string): void {
    const localExp = new SearchExp(searchExp)
    localExp.setDateVerificationStartStart(value)
    setSearchExp?.(localExp)
  }
  function onChangeDateVerificationStartEndHandler(value: string): void {
    const localExp = new SearchExp(searchExp)
    localExp.setDateVerificationStartEnd(value)
    setSearchExp?.(localExp)
  }
  function onChangeNumberVerificationHandler(value: string): void {
    const localExp = new SearchExp(searchExp)
    localExp.setNumberVerification(value)
    setSearchExp?.(localExp)
  }
  function onChangeVerificationNumberOfMaterialHandler(value: string): void {
    const localExp = new SearchExp(searchExp)
    localExp.setVerificationNumberOfMaterial(value)
    setSearchExp?.(localExp)
  }
  function onChangeVerificationExecutorHandler(value: string): void {
    const localExp = new SearchExp(searchExp)
    localExp.setVerificationExecutor(value)
    setSearchExp?.(localExp)
  }
  function onChangeVerificationResultHandler(value: string): void {
    const localExp = new SearchExp(searchExp)
    localExp.setVerificationResult(value)
    setSearchExp?.(localExp)
  }
  function onClickBtnClearHandler(): void {
    setSearchExp(new SearchExp())
    setModal({ type: 'search', idOfExp: null })
  }

  if (searchExp && searchExp.getTypeOfService() === 'МВД') {
    unitOfService = <InputSearch type='select' title='Орган инициатора' name='unitOfService' value={`${searchExp?.getUnitOfService()}`} listName='unitOfService' listType='police' onChangeUnitOfServiceHandler={onChangeUnitOfServiceHandler} />
    kindOfService = <InputSearch type='select' title='Подразд-е службы' name='kindOfService' value={`${searchExp?.getKindOfService()}`} listName='kindOfService' onChangeKindOfServiceHandler={onChangeKindOfServiceHandler} />
  } else if (searchExp && searchExp.getTypeOfService() === 'ГСУ СК') {
    unitOfService = <InputSearch type='select' title='Орган инициатора' name='unitOfService' value={`${searchExp?.getUnitOfService()}`} listName='unitOfService' listType='investigation' onChangeUnitOfServiceHandler={onChangeUnitOfServiceHandler} />
  } else {
    unitOfService = <InputSearch type='empty' title='empty' name='empty' />
  }

  if (searchExp && searchExp.getTypeOfMaterial() === 'УД') {
    article = <InputSearch type='select' title='Статья' name='article' value={`${searchExp?.getArticle()}`} listName='article' onChangeArticleHandler={onChangeArticleHandler} />
  } else {
    article = <InputSearch type='empty' title='empty' name='empty' />
  }

  if (searchExp && searchExp.getTypeOfExpertise() === 'ТКЭД ден.') {
    verification = (
      <>
        <ModalTitle>Справка о проверке</ModalTitle>
        <InputSearch type='date' title='По дате назн-я с' name='dateVerificationStartStart' value={`${searchExp?.getDateVerificationStartStart()}`} onChangeDateVerificationStartStartHandler={onChangeDateVerificationStartStartHandler} />
        <InputSearch type='date' title='По дате назн-я по' name='dateVerificationStartEnd' value={`${searchExp?.getDateVerificationStartEnd()}`} onChangeDateVerificationStartEndHandler={onChangeDateVerificationStartEndHandler} />
        {/* <InputSearch type='date' title='Дата выполнения' name='dateVerificationEnd' value={`${expStorage?.getDateVerificationEnd()}`} onChangeDateVerificationEndHandler={onChangeDateVerificationEndHandler} /> */}
        <InputSearch type='text' title='По № проверки' name='numberVerification' value={`${searchExp?.getNumberVerification()}`} onChangeNumberVerificationHandler={onChangeNumberVerificationHandler} />
        <InputSearch type='text' title='По № уг. дела' name='verificationNumberOfMaterial' value={`${searchExp?.getVerificationNumberOfMaterial()}`} onChangeVerificationNumberOfMaterialHandler={onChangeVerificationNumberOfMaterialHandler} />
        <InputSearch type='select' title='По исполнителю' name='verificationExecutor' value={`${searchExp?.getVerificationExecutor()}`} listName='verificationExecutor' onChangeVerificationExecutorHandler={onChangeVerificationExecutorHandler} />
        <InputSearch type='select' title='По рез-там пров-ки' name='verificationResult' value={`${searchExp?.getVerificationResult()}`} listName='verificationResult' onChangeVerificationResultHandler={onChangeVerificationResultHandler} />
      </>
    )
  } else {
    // verification = <InputSearch type='empty' title='empty' name='empty' />
    
  }

  return (
    <>
      <ModalTitle>Поиск экспертизы</ModalTitle>
      <InputSearch type='text' title='По № экспертизы с' name='idStart' value={`${searchExp.getIdStart()}`} onChangeIdStartHandler={onChangeIdStartHandler} />
      <InputSearch type='text' title='По № эксп-зы по' name='idEnd' value={`${searchExp.getIdEnd()}`} onChangeIdEndHandler={onChangeIdEndHandler} />
      <InputSearch type='date' title='По дате пост-я с' name='dateOfReceiptStart' value={`${searchExp?.getDateOfReceiptStart()}`} onChangDateOfReceiptStartHandler={onChangDateOfReceiptStartHandler} />
      <InputSearch type='date' title='По дате пост-я по' name='dateOfReceiptEnd' value={`${searchExp?.getDateOfReceiptEnd()}`} onChangDateOfReceiptEndHandler={onChangDateOfReceiptEndHandler} />
      <InputSearch type='select' title='По виду службы' name='typeOfService' value={`${searchExp?.getTypeOfService()}`} listName='typeOfService' onChangeTypeOfServiceHandler={onChangeTypeOfServiceHandler} />
      {unitOfService}
      {kindOfService}
      <InputSearch type='select' title='По виду материала' name='typeOfMaterial' value={`${searchExp?.getTypeOfMaterial()}`} listName='typeOfMaterial' onChangeTypeOfMaterialHandler={onChangeTypeOfMaterialHandler} />
      <InputSearch type='text' title='По № материала' name='numberOfMaterial' value={`${searchExp?.getNumberOfMaterial()}`} onChangeNumberOfMaterialHandler={onChangeNumberOfMaterialHandler} />
      {article}

      <InputSearch type='select' title='По виду эксп-зы' name='typeOfExpertise' value={`${searchExp?.getTypeOfExpertise()}`} listName='typeOfExpertise' onChangeTypeOfExpertiseHandler={onChangeTypeOfExpertiseHandler} />

      <InputSearch type='select' title='По слож-ти эксп-зы' name='difficultOfExpertise' value={`${searchExp?.getDifficult()}`} listName='difficultOfExpertise' onChangeDifficultOfExpertiseHandler={onChangeDifficultOfExpertiseHandler} />
      <InputSearch type='select' title='По исполнителю' name='executor' value={`${searchExp?.getExecutor()}`} listName='executor' onChangeExecutorHandler={onChangeExecutorHandler} />
      <InputSearch type='select' title='По рез-ту эксп-зы' name='result' listName='result' value={`${searchExp?.getResult()}`} onChangeResultHandler={onChangeResultHandler} />
      <InputSearch type='select' title='По состоя-ю эк-зы' name='statusOfExpertise' listName='statusOfExpertise' value={`${searchExp?.getStatusOfExpertise()}`} onChangeStatusOfExpertiseHandler={onChangeStatusOfExpertiseHandler} />
      <InputSearch type='date' title='По дате окон-я с' name='dateExpEndStart' value={`${searchExp?.getDateExpEndStart()}`} onChangeDateExpEndStartHandler={onChangeDateExpEndStartHandler} />
      <InputSearch type='date' title='По дате окон-я по' name='dateExpEndEnd' value={`${searchExp?.getDateExpEndEnd()}`} onChangeDateExpEndEndHandler={onChangeDateExpEndEndHandler} />
      <InputSearch type='date' title='По дате завер-я с' name='dateExpCompleteStart' value={`${searchExp?.getDateExpCompleteStart()}`} onChangeDateExpCompleteStartHandler={onChangeDateExpCompleteStartHandler} />
      <InputSearch type='date' title='По дате завер-я по' name='dateExpCompleteEnd' value={`${searchExp?.getDateExpCompleteEnd()}`} onChangeDateExpCompleteEndHandler={onChangeDateExpCompleteEndHandler} />
      {verification}
      <InputSearch type='searchResult' title='empty' name='empty' value={`${searchArr?.length}`} />
      <ModalButton type='clear' text='Сбросить' onClickBtnClearHandler={onClickBtnClearHandler} />
    </>
  );
};

export default ModalSearch;
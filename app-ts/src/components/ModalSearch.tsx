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
  // function onChangeDatePetitionStartHandler(value: string): void {
  //   const localExp = new SearchExp(searchExp)
  //   localExp.setDatePetitionStart(value)
  //   setSearchExp?.(localExp)
  // }
  // function onChangeDatePetitionEndHandler(value: string): void {
  //   const localExp = new SearchExp(searchExp)
  //   localExp.setDatePetitionEnd(value)
  //   setSearchExp?.(localExp)
  // }
  function onChangeResultHandler(value: string): void {
    const localExp = new SearchExp(searchExp)
    localExp.setResult(value)
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
    // setModal({ type: null, idOfExp: null })
    // setTimeout(() => {
    //   setModal({ type: 'search', idOfExp: null })
    // }, 200)
  }

  if (searchExp && searchExp.getTypeOfService() === '??????') {
    unitOfService = <InputSearch type='select' title='?????????? ????????????????????' name='unitOfService' value={`${searchExp?.getUnitOfService()}`} listName='unitOfService' listType='police' onChangeUnitOfServiceHandler={onChangeUnitOfServiceHandler} />
  } else if (searchExp && searchExp.getTypeOfService() === '?????? ????') {
    unitOfService = <InputSearch type='select' title='?????????? ????????????????????' name='unitOfService' value={`${searchExp?.getUnitOfService()}`} listName='unitOfService' listType='investigation' onChangeUnitOfServiceHandler={onChangeUnitOfServiceHandler} />
  } else {
    unitOfService = <InputSearch type='empty' title='empty' name='empty' />
  }

  if (searchExp && searchExp.getTypeOfMaterial() === '????') {
    article = <InputSearch type='select' title='????????????' name='article' value={`${searchExp?.getArticle()}`} listName='article' onChangeArticleHandler={onChangeArticleHandler} />
  } else {
    article = <InputSearch type='empty' title='empty' name='empty' />
  }

  if (searchExp && searchExp.getTypeOfExpertise() === '???????? ??????.') {
    verification = (
      <>
        <ModalTitle>?????????????? ?? ????????????????</ModalTitle>
        <InputSearch type='date' title='???? ???????? ????????-?? ??' name='dateVerificationStartStart' value={`${searchExp?.getDateVerificationStartStart()}`} onChangeDateVerificationStartStartHandler={onChangeDateVerificationStartStartHandler} />
        <InputSearch type='date' title='???? ???????? ????????-?? ????' name='dateVerificationStartEnd' value={`${searchExp?.getDateVerificationStartEnd()}`} onChangeDateVerificationStartEndHandler={onChangeDateVerificationStartEndHandler} />
        {/* <InputSearch type='date' title='???????? ????????????????????' name='dateVerificationEnd' value={`${expStorage?.getDateVerificationEnd()}`} onChangeDateVerificationEndHandler={onChangeDateVerificationEndHandler} /> */}
        <InputSearch type='text' title='???? ??? ????????????????' name='numberVerification' value={`${searchExp?.getNumberVerification()}`} onChangeNumberVerificationHandler={onChangeNumberVerificationHandler} />
        <InputSearch type='text' title='???? ??? ????. ????????' name='verificationNumberOfMaterial' value={`${searchExp?.getVerificationNumberOfMaterial()}`} onChangeVerificationNumberOfMaterialHandler={onChangeVerificationNumberOfMaterialHandler} />
        <InputSearch type='select' title='???? ??????????????????????' name='verificationExecutor' value={`${searchExp?.getVerificationExecutor()}`} listName='verificationExecutor' onChangeVerificationExecutorHandler={onChangeVerificationExecutorHandler} />
        <InputSearch type='select' title='???? ??????-?????? ????????-????' name='verificationResult' value={`${searchExp?.getVerificationResult()}`} listName='verificationResult' onChangeVerificationResultHandler={onChangeVerificationResultHandler} />
      </>
    )
  } else {
    // verification = <InputSearch type='empty' title='empty' name='empty' />
    
  }

  return (
    <>
      <ModalTitle>?????????? ????????????????????</ModalTitle>
      <InputSearch type='text' title='???? ??? ???????????????????? ??' name='idStart' value={`${searchExp.getIdStart()}`} onChangeIdStartHandler={onChangeIdStartHandler} />
      <InputSearch type='text' title='???? ??? ????????-???? ????' name='idEnd' value={`${searchExp.getIdEnd()}`} onChangeIdEndHandler={onChangeIdEndHandler} />
      <InputSearch type='date' title='???? ???????? ????????-?? ??' name='dateOfReceiptStart' value={`${searchExp?.getDateOfReceiptStart()}`} onChangDateOfReceiptStartHandler={onChangDateOfReceiptStartHandler} />
      <InputSearch type='date' title='???? ???????? ????????-?? ????' name='dateOfReceiptEnd' value={`${searchExp?.getDateOfReceiptEnd()}`} onChangDateOfReceiptEndHandler={onChangDateOfReceiptEndHandler} />
      <InputSearch type='select' title='???? ???????? ????????????' name='typeOfService' value={`${searchExp?.getTypeOfService()}`} listName='typeOfService' onChangeTypeOfServiceHandler={onChangeTypeOfServiceHandler} />
      {unitOfService}
      <InputSearch type='select' title='???? ???????? ??????????????????' name='typeOfMaterial' value={`${searchExp?.getTypeOfMaterial()}`} listName='typeOfMaterial' onChangeTypeOfMaterialHandler={onChangeTypeOfMaterialHandler} />
      <InputSearch type='text' title='???? ??? ??????????????????' name='numberOfMaterial' value={`${searchExp?.getNumberOfMaterial()}`} onChangeNumberOfMaterialHandler={onChangeNumberOfMaterialHandler} />
      {article}

      <InputSearch type='select' title='???? ???????? ????????-????' name='typeOfExpertise' value={`${searchExp?.getTypeOfExpertise()}`} listName='typeOfExpertise' onChangeTypeOfExpertiseHandler={onChangeTypeOfExpertiseHandler} />

      <InputSearch type='select' title='???? ????????-???? ????????-????' name='difficultOfExpertise' value={`${searchExp?.getDifficult()}`} listName='difficultOfExpertise' onChangeDifficultOfExpertiseHandler={onChangeDifficultOfExpertiseHandler} />
      <InputSearch type='select' title='???? ??????????????????????' name='executor' value={`${searchExp?.getExecutor()}`} listName='executor' onChangeExecutorHandler={onChangeExecutorHandler} />
      {/* <InputSearch type='date' title='???????? ??????. ??????????-????' name='datePetitionStart' value={`${searchExp?.getDatePetitionStart()}`} onChangeDatePetitionStartHandler={onChangeDatePetitionStartHandler} />
      <InputSearch type='date' title='???????? ????????. ??????????-????' name='datePetitionEnd' value={`${searchExp?.getDatePetitionEnd()}`} onChangeDatePetitionEndHandler={onChangeDatePetitionEndHandler} /> */}
      {/* <InputSearch type='date' title='???????? ??????????????????' name='dateProlongationStart' value={`${searchExp?.getDateProlongationStart()}`} onChangeDateProlongationStartHandler={onChangeDateProlongationStartHandler} />
      <InputSearch type='text' title='???????? ??????????????????' name='valueOfProlongation' value={`${searchExp?.getValueOfProlongation()}`} onChangeValueOfProlongationHandler={onChangeValueOfProlongationHandler} /> */}
      <InputSearch type='select' title='???? ??????-???? ????????-????' name='result' listName='result' value={`${searchExp?.getResult()}`} onChangeResultHandler={onChangeResultHandler} />
      <InputSearch type='empty' title='empty' name='empty' />
      <InputSearch type='date' title='???? ???????? ????????-?? ??' name='dateExpEndStart' value={`${searchExp?.getDateExpEndStart()}`} onChangeDateExpEndStartHandler={onChangeDateExpEndStartHandler} />
      <InputSearch type='date' title='???? ???????? ????????-?? ????' name='dateExpEndEnd' value={`${searchExp?.getDateExpEndEnd()}`} onChangeDateExpEndEndHandler={onChangeDateExpEndEndHandler} />
      <InputSearch type='date' title='???? ???????? ??????????-?? ??' name='dateExpCompleteStart' value={`${searchExp?.getDateExpCompleteStart()}`} onChangeDateExpCompleteStartHandler={onChangeDateExpCompleteStartHandler} />
      <InputSearch type='date' title='???? ???????? ??????????-?? ????' name='dateExpCompleteEnd' value={`${searchExp?.getDateExpCompleteEnd()}`} onChangeDateExpCompleteEndHandler={onChangeDateExpCompleteEndHandler} />
      {verification}
      <InputSearch type='searchResult' title='empty' name='empty' value={`${searchArr?.length}`} />
      <ModalButton type='clear' text='????????????????' onClickBtnClearHandler={onClickBtnClearHandler} />
    </>
  );
};

export default ModalSearch;
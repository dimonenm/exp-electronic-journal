import React, { FC } from 'react';
import SearchExp from '../entities/SearchExp';
import { IModal } from '../types/types';
import InputSearch from './InputSearch';
import ModalTitle from './ModalTitle';

interface ModalSearchProps{
  searchExp?: SearchExp,
  setModal: React.Dispatch<IModal>,
  setSearchExp?: React.Dispatch<SearchExp> | undefined,
}

const ModalSearch: FC<ModalSearchProps> = ({searchExp, setModal, setSearchExp}) => {

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
  function onChangeDatePetitionStartHandler(value: string): void {
    const localExp = new SearchExp(searchExp)
    localExp.setDatePetitionStart(value)
    setSearchExp?.(localExp)
  }
  function onChangeDatePetitionEndHandler(value: string): void {
    const localExp = new SearchExp(searchExp)
    localExp.setDatePetitionEnd(value)
    setSearchExp?.(localExp)
  }
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

  if (searchExp && searchExp.getTypeOfService() === 'МВД') {
    unitOfService = <InputSearch type='select' title='Орган инициатора' name='unitOfService' value={`${searchExp?.getUnitOfService()}`} listName='unitOfService' listType='police' onChangeUnitOfServiceHandler={onChangeUnitOfServiceHandler} />
  } else if (searchExp && searchExp.getTypeOfService() === 'ГСУ СК') {
    unitOfService = <InputSearch type='select' title='Орган инициатора' name='unitOfService' value={`${searchExp?.getUnitOfService()}`} listName='unitOfService' listType='investigation' onChangeUnitOfServiceHandler={onChangeUnitOfServiceHandler} />
  }
  else {
    unitOfService = <InputSearch type='empty' title='empty' name='empty' />
  }

  if (searchExp && searchExp.getTypeOfMaterial() === 'УД') {
    article = <InputSearch type='select' title='Статья' name='article' value={`${searchExp?.getArticle()}`} listName='article' onChangeArticleHandler={onChangeArticleHandler} />
  } else {
    article = <InputSearch type='empty' title='empty' name='empty' />
  }

  return (
    <>
      <ModalTitle>Поиск экспертизы</ModalTitle>
      <InputSearch type='text' title='По № экспертизы с' name='idStart' value={`${searchExp?.getIdStart()}`} onChangeIdStartHandler={onChangeIdStartHandler} />
      <InputSearch type='text' title='По № эксп-зы по' name='idEnd' value={`${searchExp?.getIdEnd()}`} onChangeIdEndHandler={onChangeIdEndHandler} />
      <InputSearch type='date' title='По дате пост-я с' name='dateOfReceiptStart' value={`${searchExp?.getDateOfReceiptStart()}`} onChangDateOfReceiptStartHandler={onChangDateOfReceiptStartHandler} />
      <InputSearch type='date' title='По дате пост-я по' name='dateOfReceiptEnd' value={`${searchExp?.getDateOfReceiptEnd()}`} onChangDateOfReceiptEndHandler={onChangDateOfReceiptEndHandler} />
      <InputSearch type='select' title='Вид службы' name='typeOfService' value={`${searchExp?.getTypeOfService()}`} listName='typeOfService' onChangeTypeOfServiceHandler={onChangeTypeOfServiceHandler} />
      {unitOfService}
      <InputSearch type='select' title='Вид материала' name='typeOfMaterial' value={`${searchExp?.getTypeOfMaterial()}`} listName='typeOfMaterial' onChangeTypeOfMaterialHandler={onChangeTypeOfMaterialHandler} />
      <InputSearch type='text' title='№ материала' name='numberOfMaterial' value={`${searchExp?.getNumberOfMaterial()}`} onChangeNumberOfMaterialHandler={onChangeNumberOfMaterialHandler} />
      {article}

      <InputSearch type='select' title='Вид экспертизы' name='typeOfExpertise' value={`${searchExp?.getTypeOfExpertise()}`} listName='typeOfExpertise' onChangeTypeOfExpertiseHandler={onChangeTypeOfExpertiseHandler} />

      <InputSearch type='select' title='Сложность эксп-зы' name='difficultOfExpertise' value={`${searchExp?.getDifficult()}`} listName='difficultOfExpertise' onChangeDifficultOfExpertiseHandler={onChangeDifficultOfExpertiseHandler} />
      <InputSearch type='select' title='Исполнитель' name='executor' value={`${searchExp?.getExecutor()}`} listName='executor' onChangeExecutorHandler={onChangeExecutorHandler} />
      <InputSearch type='date' title='Дата вын. ходат-ва' name='datePetitionStart' value={`${searchExp?.getDatePetitionStart()}`} onChangeDatePetitionStartHandler={onChangeDatePetitionStartHandler} />
      <InputSearch type='date' title='Дата удов. ходат-ва' name='datePetitionEnd' value={`${searchExp?.getDatePetitionEnd()}`} onChangeDatePetitionEndHandler={onChangeDatePetitionEndHandler} />
      {/* <InputSearch type='date' title='Дата продления' name='dateProlongationStart' value={`${searchExp?.getDateProlongationStart()}`} onChangeDateProlongationStartHandler={onChangeDateProlongationStartHandler} />
      <InputSearch type='text' title='Срок продления' name='valueOfProlongation' value={`${searchExp?.getValueOfProlongation()}`} onChangeValueOfProlongationHandler={onChangeValueOfProlongationHandler} /> */}
      <InputSearch type='select' title='Результат эксп-зы' name='result' listName='result' value={`${searchExp?.getResult()}`} onChangeResultHandler={onChangeResultHandler} />
      <InputSearch type='date' title='По дате окон-я с' name='dateExpEndStart' value={`${searchExp?.getDateExpEndStart()}`} onChangeDateExpEndStartHandler={onChangeDateExpEndStartHandler} />
      <InputSearch type='date' title='По дате окон-я по' name='dateExpEndEnd' value={`${searchExp?.getDateExpEndEnd()}`} onChangeDateExpEndEndHandler={onChangeDateExpEndEndHandler} />
      <InputSearch type='date' title='По дате завер-я с' name='dateExpCompleteStart' value={`${searchExp?.getDateExpCompleteStart()}`} onChangeDateExpCompleteStartHandler={onChangeDateExpCompleteStartHandler} />
      <InputSearch type='date' title='По дате завер-я по' name='dateExpCompleteEnd' value={`${searchExp?.getDateExpCompleteEnd()}`} onChangeDateExpCompleteEndHandler={onChangeDateExpCompleteEndHandler} />
    </>
  );
};

export default ModalSearch;
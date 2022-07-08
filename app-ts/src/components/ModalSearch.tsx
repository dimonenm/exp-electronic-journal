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

    </>
  );
};

export default ModalSearch;
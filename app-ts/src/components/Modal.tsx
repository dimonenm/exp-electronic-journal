import React, { FC, useState } from 'react';
import ModalTitle from './ModalTitle';
import './Modal.scss'
import Input from './Input';
import ModalButton from './ModalButton';
import { ITypeOfService, ITypeOfMaterial, IExp, IModal } from '../types/types';
import Exp from '../entities/Exp';

interface ModalProps {
  type: string
  dbExps: IExp[]
  setDbExps?: React.Dispatch<IExp[]>
  addBtnClickHendler: () => void
}

const Modal: FC<ModalProps> = ({ type, dbExps, setDbExps, addBtnClickHendler }) => {

  const [modalDbExps, setmodalDbExps] = useState<IExp[]>(dbExps)
  console.log('modalDbExps: ', modalDbExps);
  const [expStorage, setExpStorage] = useState<Exp>(new Exp(undefined, `${modalDbExps.length + 1}`))


  const [typeOfServiceSearch, setTypeOfServiceSearch] = useState<ITypeOfService>({ type: null })
  const [typeOfMaterialSearch, setTypeOfMaterialSearch] = useState<ITypeOfMaterial>({ type: null })



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
    setExpStorage(localExp)
  }
  function onChangeDatePetitionEndHandler(value: string): void {
    const localExp = new Exp(expStorage)
    localExp.setDatePetitionEnd(value)
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
    const localExpArr = [...modalDbExps]
    localExpArr.push(expStorage);
    setDbExps?.(localExpArr)
    setmodalDbExps?.(localExpArr)
    setExpStorage(new Exp(undefined, `${localExpArr.length + 1}`))
    addBtnClickHendler()
  }


  function onChangeTypeOfServiceSearchHandler(value: string) {
    setTypeOfServiceSearch((prev) => ({
      ...prev, type: value
    }))
  }
  function onChangeTypeOfMaterialSearchHandler(value: string) {
    setTypeOfMaterialSearch((prev) => ({
      ...prev, type: value
    }))
  }

  if (type === 'create') {
    let unitOfService
    let article

    if (expStorage.getTypeOfService() === 'МВД') {
      unitOfService = <Input type='select' title='Орган инициатора' name='unitOfService' listName='unitOfService' listType='police' onChangeUnitOfServiceHandler={onChangeUnitOfServiceHandler} />
    } else if (expStorage.getTypeOfService() === 'ГСУ СК') {
      unitOfService = <Input type='select' title='Орган инициатора' name='unitOfService' listName='unitOfService' listType='investigation' onChangeUnitOfServiceHandler={onChangeUnitOfServiceHandler} />
    }
    else {
      unitOfService = <Input type='empty' title='empty' name='empty' />
    }

    if (expStorage.getTypeOfMaterial() === 'УД') {
      article = <Input type='select' title='Статья' name='article' listName='article' onChangeArticleHandler={onChangeArticleHandler} />
    } else {
      article = <Input type='empty' title='empty' name='empty' />
    }

    return (
      <div className='modal-create'>
        <ModalTitle>Создание новой экспертизы</ModalTitle>
        <Input type='text' title='№ по порядку' name='id' value={`${expStorage.getId()}`} onChangeIdHandler={onChangeIdHandler} />
        <Input type='date' title='Дата поступления' name='dateOfReceipt' onChangDateOfReceiptHandler={onChangDateOfReceiptHandler} />
        <Input type='select' title='Вид службы' name='typeOfService' listName='typeOfService' onChangeTypeOfServiceHandler={onChangeTypeOfServiceHandler} />
        {unitOfService}
        <Input type='select' title='Вид материала' name='typeOfMaterial' listName='typeOfMaterial' onChangeTypeOfMaterialHandler={onChangeTypeOfMaterialHandler} />
        <Input type='text' title='№ материала' name='numberOfMaterial' onChangeNumberOfMaterialHandler={onChangeNumberOfMaterialHandler} />
        {article}
        <Input type='select' title='Вид экспертизы' name='typeOfExpertise' listName='typeOfExpertise' onChangeTypeOfExpertiseHandler={onChangeTypeOfExpertiseHandler} />
        <Input type='select' title='Сложность эксп-зы' name='difficultOfExpertise' listName='difficultOfExpertise' onChangeDifficultOfExpertiseHandler={onChangeDifficultOfExpertiseHandler} />
        <Input type='select' title='Исполнитель' name='executor' listName='executor' onChangeExecutorHandler={onChangeExecutorHandler} />
        <Input type='date' title='Дата вын. ходат-ва' name='datePetitionStart' onChangeDatePetitionStartHandler={onChangeDatePetitionStartHandler} />
        <Input type='date' title='Дата удов. ходат-ва' name='datePetitionEnd' onChangeDatePetitionEndHandler={onChangeDatePetitionEndHandler} />
        <Input type='date' title='Дата продления' name='dateProlongationStart' onChangeDateProlongationStartHandler={onChangeDateProlongationStartHandler} />
        <Input type='text' title='Срок продления' name='valueOfProlongation' onChangeValueOfProlongationHandler={onChangeValueOfProlongationHandler} />
        <Input type='select' title='Результат эксп-зы' name='result' listName='result' onChangeResultHandler={onChangeResultHandler} />
        <Input type='date' title='Дата окончания' name='dateExpEnd' onChangeDateExpEndHandler={onChangeDateExpEndHandler} />
        <Input type='date' title='Дата завершения' name='dateExpComplete' onChangeDateExpCompleteHandler={onChangeDateExpCompleteHandler} />
        <Input type='empty' title='empty' name='empty' />
        <ModalButton type='add' text='Добавить' onClickBtnAddHandler={onClickBtnAddHandler} />
        <ModalButton type='cancel' text='Отменить' />
      </div>
    );
  }
  if (type === 'search') {
    let unitOfService
    let article

    if (typeOfServiceSearch.type === 'МВД') {
      unitOfService = <Input type='select' title='По органу иниц-ра' name='byUnitOfService' listName='unitOfService' listType='police' />
    } else if (typeOfServiceSearch.type === 'ГСУ СК') {
      unitOfService = <Input type='select' title='По органу иниц-ра' name='byUnitOfService' listName='unitOfService' listType='investigation' />
    }
    else {
      unitOfService = <Input type='empty' title='empty' name='empty' />
    }

    if (typeOfMaterialSearch.type === 'УД') {
      article = <Input type='select' title='По статье' name='byArticle' listName='article' />
    } else {
      article = <Input type='empty' title='empty' name='empty' />
    }
    return (
      <div className='modal-search'>
        <ModalTitle>Поиск экспертизы</ModalTitle>
        <Input type='text' title='По номеру с' name='byIdStart' />
        <Input type='text' title='По номеру по' name='byIdEnd' />
        <Input type='date' title='По дате поступ-я с' name='byDateOfReceiptStart' />
        <Input type='date' title='По дате поступ-я по' name='byDateOfReceiptEnd' />
        <Input type='select' title='По виду службы' name='byTypeOfService' listName='typeOfService' onChangeTypeOfServiceHandler={onChangeTypeOfServiceSearchHandler} />
        {unitOfService}
        <Input type='select' title='По виду материала' name='byTypeOfMaterial' listName='typeOfMaterial' onChangeTypeOfMaterialHandler={onChangeTypeOfMaterialSearchHandler} />
        <Input type='text' title='По № материала' name='byNumberOfMaterial' />
        {article}
        <Input type='select' title='По виду эксп-зы' name='byTypeOfExpertise' listName='typeOfExpertise' />
        <Input type='select' title='По слож-ти эксп-зы' name='byDifficultOfExpertise' listName='difficultOfExpertise' />
        <Input type='select' title='По исполнителю' name='byExecutor' listName='executor' />
        <Input type='select' title='По рез-ту эксп-зы' name='byResult' listName='result' />
        <Input type='empty' title='empty' name='empty' />
        <Input type='date' title='По дате окон-я с' name='byDateExpEndStart' />
        <Input type='date' title='По дате окон-я по' name='byDateExpEndEnd' />
        <Input type='date' title='По дате завер-я с' name='byDateExpCompleteStart' />
        <Input type='date' title='По дате завер-я по' name='byDateExpCompleteEnd' />
        <ModalTitle>Справка о проверке</ModalTitle>
        <Input type='date' title='По дате назн-я с' name='byDateVerificationStartStart' />
        <Input type='date' title='По дате назн-я по' name='byDateVerificationStartEnd' />
        <Input type='date' title='По дате вып-я с' name='byDateVerificationEndStart' />
        <Input type='date' title='По дате вып-я по' name='byDateVerificationEndEnd' />
        <Input type='text' title='По № проверки' name='byNumberVerification' />
        <Input type='text' title='По № уг. дела' name='byVerificationNumberOfMaterial' />
        <Input type='select' title='По исполнителю' name='byVerificationExecutor' listName='executor' />
        <Input type='select' title='По рез-ту пров-ки' name='byVerificationResult' listName='resultOfVerification' />
        <ModalButton type='clear' text='Сбросить' />
      </div>
    );
  }
  if (type === 'info') {
    return (
      <div className='modal-info'>
        info
      </div>
    );
  }
  if (type === 'update') {
    return (
      <div className='modal-update'>
        <ModalTitle>Создание новой экспертизы</ModalTitle>
        <Input type='text' title='№ по порядку' name='id' />
        <Input type='date' title='Дата поступления' name='dateOfReceipt' />
        <Input type='select' title='Вид службы' name='typeOfService' listName='typeOfService' />
        <Input type='select' title='Орган инициатора' name='unitOfService' listName='unitOfService' />
        <Input type='select' title='Вид материала' name='typeOfMaterial' listName='typeOfMaterial' />
        <Input type='select' title='Статья' name='article' listName='article' />
        <Input type='select' title='Вид экспертизы' name='typeOfExpertise' listName='typeOfExpertise' />
        <Input type='select' title='Исполнитель' name='executor' listName='executor' />
        <Input type='date' title='Дата вын. ходат-ва' name='datePetitionStart' />
        <Input type='date' title='Дата удов. ходат-ва' name='datePetitionEnd' />
        <Input type='date' title='Дата продления' name='dateProlongationStart' />
        <Input type='date' title='Срок продления' name='valueOfProlongation' />
        <Input type='select' title='Результат эксп-зы' name='result' listName='result' />
        <Input type='date' title='Дата окончания' name='dateExpEnd' />
        <Input type='date' title='Дата завершения' name='dateExpComplete' />
        <ModalTitle>Справка о проверке</ModalTitle>
        <Input type='date' title='Дата назначения' name='dateVerificationStart' />
        <Input type='date' title='Дата выполнения' name='dateVerificationEnd' />
        <Input type='text' title='№ проверки' name='numberVerification' />
        <Input type='text' title='№ уг. дела' name='verificationNumberOfMaterial' />
        <Input type='select' title='Исполнитель' name='verificationExecutor' listName='executor' />
        <Input type='select' title='Результат пров-ки' name='verificationResult' listName='resultOfVerification' />
        <ModalButton type='update' text='Изменить' />
        <ModalButton type='cancel' text='Отменить' />
      </div>
    );
  }
  if (type === 'hidden') {
    return (
      <div className='modal-hidden'>

      </div>
    );
  }
  return null
};

export default Modal;
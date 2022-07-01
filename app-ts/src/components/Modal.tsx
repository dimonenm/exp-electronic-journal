import React, { FC, useState } from 'react';
import ModalTitle from './ModalTitle';
import './Modal.scss'
import Input from './Input';
import ModalButton from './ModalButton';
import { ITypeOfService, ITypeOfMaterial, IExp } from '../types/types';

interface ModalProps {
  type: string
  dbExps: IExp[]
  setDbExps?: React.Dispatch<IExp[]>
}

const Modal: FC<ModalProps> = ({ type, dbExps, setDbExps }) => {

  const [modalDbExps, setModalDbExps] = useState<IExp[]>(dbExps)

  const [typeOfService, setTypeOfService] = useState<ITypeOfService>({ type: null })
  const [typeOfMaterial, setTypeOfMaterial] = useState<ITypeOfMaterial>({ type: null })
  const [typeOfServiceSearch, setTypeOfServiceSearch] = useState<ITypeOfService>({ type: null })
  const [typeOfMaterialSearch, setTypeOfMaterialSearch] = useState<ITypeOfMaterial>({ type: null })

  


  function onChangeTypeOfServiceHandler(value: string) {
    setTypeOfService((prev) => ({
      ...prev, type: value
    }))
  }
  function onChangeTypeOfMaterialHandler(value: string) {
    setTypeOfMaterial((prev) => ({
      ...prev, type: value
    }))
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

    if (typeOfService.type === 'МВД') {
      unitOfService = <Input type='select' title='Орган инициатора' name='unitOfService' listName='unitOfService' listType='police' />
    } else if (typeOfService.type === 'ГСУ СК') {
      unitOfService = <Input type='select' title='Орган инициатора' name='unitOfService' listName='unitOfService' listType='investigation' />
    }
    else {
      unitOfService = <Input type='empty' title='empty' />
    }

    if (typeOfMaterial.type === 'УД') {
      article = <Input type='select' title='Статья' name='article' listName='article' />
    } else {
      article = <Input type='empty' title='empty' name='empty' />
    }

    return (
      <div className='modal-create'>
        <ModalTitle>Создание новой экспертизы</ModalTitle>
        <Input type='text' title='№ по порядку' name='id' value={`${modalDbExps.length}`} />
        <Input type='date' title='Дата поступления' name='dateOfReceipt' />
        <Input type='select' title='Вид службы' name='typeOfService' listName='typeOfService' onChangeTypeOfServiceHandler={onChangeTypeOfServiceHandler} />
        {unitOfService}
        <Input type='select' title='Вид материала' name='typeOfMaterial' listName='typeOfMaterial' onChangeTypeOfMaterialHandler={onChangeTypeOfMaterialHandler} />
        <Input type='text' title='№ материала' name='numberOfMaterial'/>
        {article}
        <Input type='select' title='Вид экспертизы' name='typeOfExpertise' listName='typeOfExpertise' />
        <Input type='select' title='Сложность эксп-зы' name='difficultOfExpertise' listName='difficultOfExpertise' />
        <Input type='select' title='Исполнитель' name='executor' />
        <Input type='date' title='Дата вын. ходат-ва' name='datePetitionStart'/>
        <Input type='date' title='Дата удов. ходат-ва' name='datePetitionEnd'/>
        <Input type='date' title='Дата продления' name='dateProlongationStart'/>
        <Input type='text' title='Срок продления' name='valueOfProlongation'/>
        <Input type='select' title='Результат эксп-зы' name='result' listName='result' />
        <Input type='date' title='Дата окончания' name='dateExpEnd'/>
        <Input type='date' title='Дата завершения' name='dateExpComplete'/>
        <Input type='empty' title='empty' name='empty'/>
        <ModalButton type='add' text='Добавить' />
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
        <Input type='date' title='По дате назн-я с' />
        <Input type='date' title='По дате назн-я по' />
        <Input type='date' title='По дате вып-я с' />
        <Input type='date' title='По дате вып-я по' />
        <Input type='text' title='По № проверки' />
        <Input type='text' title='По № уг. дела' />
        <Input type='select' title='По исполнителю' listName='executor' />
        <Input type='select' title='По рез-ту пров-ки' listName='resultOfVerification' />
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
        <Input type='text' title='№ по порядку' />
        <Input type='date' title='Дата поступления' />
        <Input type='select' title='Вид службы' listName='typeOfService' />
        <Input type='select' title='Орган инициатора' listName='unitOfService' />
        <Input type='select' title='Вид материала' listName='typeOfMaterial' />
        <Input type='select' title='Статья' listName='article' />
        <Input type='select' title='Вид экспертизы' listName='typeOfExpertise' />
        <Input type='select' title='Исполнитель' listName='executor' />
        <Input type='date' title='Дата вын. ходат-ва' />
        <Input type='date' title='Дата удов. ходат-ва' />
        <Input type='date' title='Дата продления' />
        <Input type='date' title='Дата окон-я прод-я' />
        <Input type='select' title='Результат эксп-зы' listName='result' />
        <Input type='date' title='Дата окончания' />
        <Input type='date' title='Дата завершения' />
        <ModalTitle>Справка о проверке</ModalTitle>
        <Input type='date' title='Дата назначения' />
        <Input type='date' title='Дата выполнения' />
        <Input type='text' title='№ проверки' />
        <Input type='text' title='№ уг. дела' />
        <Input type='select' title='Исполнитель' listName='executor' />
        <Input type='select' title='Результат пров-ки' listName='resultOfVerification' />
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
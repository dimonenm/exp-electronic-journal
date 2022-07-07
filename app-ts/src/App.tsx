import React, { useState } from 'react';
import './App.scss'
import Container from './containers/Container';
import Header from './containers/Header';
import Main from './containers/Main';
import Menu from './components/Menu';
import Modal from './components/Modal';
import Button from './components/Button';
import { IModal } from './types/types';
import Exp from './entities/Exp';
import Gallery from './containers/Gallery';
import Card from './components/Card';

const App = () => {

  // const [dbExps, setDbExps] = useState<IExp[]>([])
  const [dbExps, setDbExps] = useState<Exp[]>((): Exp[] => { return addDbExps(10) })
  const [modal, setModal] = useState<IModal>({ type: null, idOfExp: null })
  const [searchExp, setSearchExp] = useState<Exp>(new Exp())

  let cardsArr

  if (dbExps.length) {
    cardsArr = dbExps.map((item) => {
      if (modal.idOfExp && modal.idOfExp === item.getId()) {
        return (<Card
          key={item.getId()}
          active={true}
          number={item.getId()}
          type={`${item.getTypeOfMaterial()}`}
          numberOfMaterial={`${item.getNumberOfMaterial()}`}
          dateOfIncoming={`поступила ${dateFromUsToRu(item.getDateOfReceipt())}`}
          dateOfComplite={item.getDateExpComplete() ? `завершена ${dateFromUsToRu(item.getDateExpComplete())}` : 'завершена н/д'}
          executor={`${item.getExecutor()}`}
          result={item.getResult() ? `${item.getResult()}` : 'в производстве'}
          updateClickHendler={updateClickHendler}
        />)
      }
      return (<Card
        key={item.getId()}
        active={false}
        number={item.getId()}
        type={`${item.getTypeOfMaterial()}`}
        numberOfMaterial={`${item.getNumberOfMaterial()}`}
        dateOfIncoming={`поступила ${dateFromUsToRu(item.getDateOfReceipt())}`}
        dateOfComplite={item.getDateExpComplete() ? `завершена ${dateFromUsToRu(item.getDateExpComplete())}` : 'завершена н/д'}
        executor={`${item.getExecutor()}`}
        result={item.getResult() ? `${item.getResult()}` : 'в производстве'}
        updateClickHendler={updateClickHendler}
      />)
    }).reverse()    
  }


  // генератор экспертиз для базы
  function addDbExps(count: number) {

    let arr: Exp[] = []

    for (let i = 0; i < count; i++) {
      const dateOfReceipt = '2022-07-05'
      const typeOfServiceRand = Math.random()
      const typeOfService = typeOfServiceRand < 0.25 ?
        'МВД' : typeOfServiceRand >= 0.25 && typeOfServiceRand < 0.5 ?
          'ГСУ СК' : typeOfServiceRand >= 0.5 && typeOfServiceRand < 0.75 ?
            'ФСБ' : typeOfServiceRand >= 0.75 ?
              'Суд' : ''

      let unitOfService = ''
      if (typeOfService === 'МВД') {
        const unitOfServiceRand = Math.random()
        unitOfService = unitOfServiceRand < 0.25 ?
          'ОМВД России по г. Евпатории' : unitOfServiceRand >= 0.25 && unitOfServiceRand < 0.5 ?
            'ОМВД России по г. Феодосии' : unitOfServiceRand >= 0.5 && unitOfServiceRand < 0.75 ?
              'ОМВД России по г. Судаку' : unitOfServiceRand >= 0.75 ?
                'ОМВД России по г. Алуште' : ''
      }
      if (typeOfService === 'ГСУ СК') {
        const unitOfServiceRand = Math.random()
        unitOfService = unitOfServiceRand < 0.25 ?
          'СО по г. Евпатории' : unitOfServiceRand >= 0.25 && unitOfServiceRand < 0.5 ?
            'СО по г. Феодосия' : unitOfServiceRand >= 0.5 && unitOfServiceRand < 0.75 ?
              'СО по г. Судак' : unitOfServiceRand >= 0.75 ?
                'СО по г. Алушта' : ''
      }

      const typeOfMaterialRand = Math.random()
      const typeOfMaterial = typeOfMaterialRand < 0.33 ?
        'УД' : typeOfMaterialRand >= 0.33 && typeOfMaterialRand < 0.66 ?
          'КУСП' : typeOfMaterialRand >= 0.66 ?
            'КРСП' : ''

      const numberOfMaterialRand = [Math.ceil((Math.random() * 100)), Math.ceil((Math.random() * 100)), Math.ceil((Math.random() * 100)), Math.ceil((Math.random() * 100)), Math.ceil((Math.random() * 100))]
      let numberOfMaterial = ''
      if (typeOfMaterial === 'УД') {
        numberOfMaterial = `1200${numberOfMaterialRand[0]}${numberOfMaterialRand[1]}${numberOfMaterialRand[2]}${numberOfMaterialRand[3]}${numberOfMaterialRand[4]}`
      } else {
        numberOfMaterial = `${numberOfMaterialRand[0]}${numberOfMaterialRand[1]} от 01.07.2022`
      }

      let article = ''
      if (typeOfMaterial === 'УД') {
        const articleRand = Math.random()
        article = articleRand < 0.25 ?
          'ст. 101 УК РФ' : articleRand >= 0.25 && articleRand < 0.5 ?
            'ст. 105 УК РФ' : articleRand >= 0.5 && articleRand < 0.75 ?
              'ст. 158, 159, 160 УК РФ' : articleRand >= 0.75 ?
                'ст. 186, 187 УК РФ' : ''
      }

      const typeOfExpertiseRand = Math.random()
      const typeOfExpertise = typeOfExpertiseRand < 0.25 ?
        'Портретная' : typeOfExpertiseRand >= 0.25 && typeOfExpertiseRand < 0.5 ?
          'Почерковедческая' : typeOfExpertiseRand >= 0.5 && typeOfExpertiseRand < 0.75 ?
            'ТКЭД общ.' : typeOfExpertiseRand >= 0.75 ?
              'ТКЭД ден.' : ''

      const executorRand = Math.random()
      const executor = executorRand < 0.25 ?
        'Польченко Т.В.' : executorRand >= 0.25 && executorRand < 0.5 ?
          'Поволодцкий Д.Г.' : executorRand >= 0.5 && executorRand < 0.75 ?
            'Васильев И.С.' : executorRand >= 0.75 ?
              'Балабанов А.А.' : ''
      const difficultRand = Math.random()
      const difficult = difficultRand < 0.33 ?
        'Простая' : difficultRand >= 0.33 && difficultRand < 0.66 ?
          'Средней слож-ти' : difficultRand >= 0.66 ?
            'Сложная' : ''

      const datePetitionStart = '2022-07-05'
      const datePetitionEnd = '2022-07-05'
      const dateProlongationStart = '2022-07-05'
      const valueOfProlongation = '5'

      const resultRand = Math.random()
      const result = resultRand < 0.25 ?
        'Результативная' : resultRand >= 0.25 && resultRand < 0.5 ?
          'Не результативная' : resultRand >= 0.5 && resultRand < 0.75 ?
            'Без исполнения' : resultRand >= 0.75 ?
              'Сообщение о невозм.' : ''

      const dateExpEnd = '2022-07-05'
      const dateExpComplete = '2022-07-05'
      const exp = new Exp()
      exp.setId(`${i + 1}`)
      exp.setDateOfReceipt(dateOfReceipt)
      exp.setTypeOfService(typeOfService)
      exp.setUnitOfService(unitOfService)
      exp.setTypeOfMaterial(typeOfMaterial)
      exp.setNumberOfMaterial(numberOfMaterial)
      exp.setArticle(article)
      exp.setTypeOfExpertise(typeOfExpertise)
      exp.setExecutor(executor)
      exp.setDifficult(difficult)
      exp.setDatePetitionStart(datePetitionStart)
      exp.setDatePetitionEnd(datePetitionEnd)
      exp.setDateProlongationStart(dateProlongationStart)
      exp.setValueOfProlongation(valueOfProlongation)
      exp.setResult(result)
      exp.setDateExpEnd(dateExpEnd)
      exp.setDateExpComplete(dateExpComplete)
      arr.push(exp)
    }
    return arr
  }
  function dateFromUsToRu(incomingStr: string | null) {
    let result = 'н/д'
    if (incomingStr) {
      let splits = incomingStr.split("-")
      result = `${splits[2]}.${splits[1]}.${splits[0]}`
    }
    return result
  }

  function createClickHendler() {
    if (modal.type !== 'create') {
      setModal((prev) => ({
        ...prev, type: 'create', idOfExp: null
      }))
    } else {
      setModal((prev) => ({
        ...prev, type: null, idOfExp: null
      }))
    }
  }
  function updateClickHendler(number: string | null) {
    if (modal.type !== 'update') {
      setModal((prev) => ({
        ...prev, type: 'update', idOfExp: number
      }))
    } else {
      setModal((prev) => ({
        ...prev, type: null, idOfExp: null
      }))
      setTimeout(() => {
        setModal((prev) => ({
          ...prev, type: 'update', idOfExp: number
        }))        
      },200)
    }
  }
  function searchClickHendler() {
    if (modal.type !== 'search') {
      setModal((prev) => ({
        ...prev, type: 'search', idOfExp: null
      }))
    } else {
      setModal((prev) => ({
        ...prev, type: null, idOfExp: null
      }))
    }
  }
  function infoClickHendler() {
    if (modal.type !== 'info') {
      setModal((prev) => ({
        ...prev, type: 'info', idOfExp: null
      }))
    } else {
      setModal((prev) => ({
        ...prev, type: null, idOfExp: null
      }))
    }
  }

  return (
    <Container>
      <Header>Электронный журнал 0.0.1</Header>
      <Main>
        <Menu type='left'>
          <Button type='create' clickHendler={createClickHendler} />
          <Button type='search' clickHendler={searchClickHendler} />
        </Menu>
        <Modal
          type={modal.type === 'create' ? 'create' : modal.type === 'search' ? 'search' : modal.type === 'update' ? 'update' : 'hidden'}
          idOfExp={modal.idOfExp}
          dbExps={dbExps}
          setDbExps={setDbExps}
          setModal={setModal}
        />
        <Gallery>
          {cardsArr}
        </Gallery>
        <Modal
          type={modal.type === 'info' ? 'info' : 'hidden'}
          dbExps={dbExps}
          setModal={setModal}
        />
        <Menu type='right'>
          <Button type='info' clickHendler={infoClickHendler} />
        </Menu>
      </Main>
    </Container>
  );
};

export default App;

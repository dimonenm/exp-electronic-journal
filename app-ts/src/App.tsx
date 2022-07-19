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
import SearchExp from './entities/SearchExp';

const App = () => {

  const [dbExps, setDbExps] = useState<Exp[]>([])
  // const [dbExps, setDbExps] = useState<Exp[]>((): Exp[] => { return addDbExps(1000) })
  const [modal, setModal] = useState<IModal>({ type: null, idOfExp: null })
  const [searchExp, setSearchExp] = useState<SearchExp>(new SearchExp())


  let searchCardsArr: JSX.Element[] = []
  let searchArr: Exp[] = []
  let cardsArr: JSX.Element[] = []

  if (searchExp.isSearchExp()) {
    searchArr = dbExps.map((item) => {
      return item
    })
    if (searchExp.getIdStart() !== '' || searchExp.getIdEnd() !== '') {
      if (searchExp.getIdStart() !== '' && searchExp.getIdEnd() !== '') {
        searchArr = searchArr.filter((item) => {
          if (+item.getId() >= +searchExp.getIdStart() && +item.getId() <= +searchExp.getIdEnd()) return true
          return false
        })
      }
      else if (searchExp.getIdStart() !== '') {
        searchArr = searchArr.filter((item) => {
          if (+item.getId() >= +searchExp.getIdStart()) return true
          return false
        })
      }
      else if (searchExp.getIdEnd() !== '') {
        searchArr = searchArr.filter((item) => {
          if (+item.getId() <= +searchExp.getIdEnd()) return true
          return false
        })
      }
    }
    if (searchExp.getDateOfReceiptStart() !== '' || searchExp.getDateOfReceiptEnd() !== '') {
      if (searchExp.getDateOfReceiptStart() !== '' && searchExp.getDateOfReceiptEnd() !== '') {
        searchArr = searchArr.filter((item) => {
          if (item.getDateOfReceipt() >= searchExp.getDateOfReceiptStart() && item.getDateOfReceipt() <= searchExp.getDateOfReceiptEnd()) return true
          return false
        })
      }
      else if (searchExp.getDateOfReceiptStart() !== '') {
        searchArr = searchArr.filter((item) => {
          if (item.getDateOfReceipt() >= searchExp.getDateOfReceiptStart()) return true
          return false
        })
      }
      else if (searchExp.getDateOfReceiptEnd() !== '') {
        searchArr = searchArr.filter((item) => {
          if (item.getDateOfReceipt() <= searchExp.getDateOfReceiptEnd()) return true
          return false
        })
      }

    }
    if (searchExp.getTypeOfService() !== '' && searchExp.getTypeOfService() !== 'не указано') {
      searchArr = searchArr.filter((item) => {
        if (item.getTypeOfService() === searchExp.getTypeOfService()) return true
        return false
      })
    }
    if (searchExp.getUnitOfService() !== '' && searchExp.getUnitOfService() !== 'не указано') {
      searchArr = searchArr.filter((item) => {
        if (item.getUnitOfService() === searchExp.getUnitOfService()) return true
        return false
      })
    }
    if (searchExp.getTypeOfMaterial() !== '' && searchExp.getTypeOfMaterial() !== 'не указано') {
      searchArr = searchArr.filter((item) => {
        if (item.getTypeOfMaterial() === searchExp.getTypeOfMaterial()) return true
        return false
      })
    }
    if (searchExp.getNumberOfMaterial() !== '') {
      searchArr = searchArr.filter((item) => {
        if (new RegExp(searchExp.getNumberOfMaterial()).test(item.getNumberOfMaterial())) return true
        return false
      })
    }
    if (searchExp.getArticle() !== '' && searchExp.getArticle() !== 'не указано') {
      searchArr = searchArr.filter((item) => {
        if (item.getArticle() === searchExp.getArticle()) return true
        return false
      })
    }
    if (searchExp.getTypeOfExpertise() !== '' && searchExp.getTypeOfExpertise() !== 'не указано') {
      searchArr = searchArr.filter((item) => {
        if (item.getTypeOfExpertise() === searchExp.getTypeOfExpertise()) return true
        return false
      })
    }
    if (searchExp.getDifficult() !== '' && searchExp.getDifficult() !== 'не указано') {
      searchArr = searchArr.filter((item) => {
        if (item.getDifficult() === searchExp.getDifficult()) return true
        return false
      })
    }
    if (searchExp.getExecutor() !== '' && searchExp.getExecutor() !== 'не указано') {
      searchArr = searchArr.filter((item) => {
        if (item.getExecutor() === searchExp.getExecutor()) return true
        return false
      })
    }
    if (searchExp.getResult() !== '' && searchExp.getResult() !== 'не указано') {
      searchArr = searchArr.filter((item) => {
        if (item.getResult() === searchExp.getResult()) return true
        return false
      })
    }
    if (searchExp.getDateExpEndStart() !== '' || searchExp.getDateExpEndEnd() !== '') {
      if (searchExp.getDateExpEndStart() !== '' && searchExp.getDateExpEndEnd() !== '') {
        searchArr = searchArr.filter((item) => {
          if (item.getDateExpEnd() >= searchExp.getDateExpEndStart() && item.getDateExpEnd() <= searchExp.getDateExpEndEnd()) return true
          return false
        })
      }
      else if (searchExp.getDateExpEndStart() !== '') {
        searchArr = searchArr.filter((item) => {
          if (item.getDateExpEnd() >= searchExp.getDateExpEndStart()) return true
          return false
        })
      }
      else if (searchExp.getDateExpEndEnd() !== '') {
        searchArr = searchArr.filter((item) => {
          if (item.getDateExpEnd() <= searchExp.getDateExpEndEnd()) return true
          return false
        })
      }
    }
    if (searchExp.getDateExpCompleteStart() !== '' || searchExp.getDateExpCompleteEnd() !== '') {
      if (searchExp.getDateExpCompleteStart() !== '' && searchExp.getDateExpCompleteEnd() !== '') {
        searchArr = searchArr.filter((item) => {
          if (item.getDateExpComplete() >= searchExp.getDateExpCompleteStart() && item.getDateExpComplete() <= searchExp.getDateExpCompleteEnd()) return true
          return false
        })
      }
      else if (searchExp.getDateExpCompleteStart() !== '') {
        searchArr = searchArr.filter((item) => {
          if (item.getDateExpComplete() >= searchExp.getDateExpCompleteStart()) return true
          return false
        })
      }
      else if (searchExp.getDateExpCompleteEnd() !== '') {
        searchArr = searchArr.filter((item) => {
          if (item.getDateExpComplete() <= searchExp.getDateExpCompleteEnd()) return true
          return false
        })
      }
    }
    if (searchExp.getDateVerificationStartStart() !== '' || searchExp.getDateVerificationStartEnd() !== '') {
      if (searchExp.getDateVerificationStartStart() !== '' && searchExp.getDateVerificationStartEnd() !== '') {
        searchArr = searchArr.filter((item) => {
          if (item.getDateVerificationStart() >= searchExp.getDateVerificationStartStart() && item.getDateVerificationStart() <= searchExp.getDateVerificationStartEnd()) return true
          return false
        })
      }
      else if (searchExp.getDateVerificationStartStart() !== '') {
        searchArr = searchArr.filter((item) => {
          if (item.getDateVerificationStart() >= searchExp.getDateVerificationStartStart()) return true
          return false
        })
      }
      else if (searchExp.getDateVerificationStartEnd() !== '') {
        searchArr = searchArr.filter((item) => {
          if (item.getDateVerificationStart() <= searchExp.getDateVerificationStartEnd()) return true
          return false
        })
      }
    }
    if (searchExp.getNumberVerification() !== '') {
      searchArr = searchArr.filter((item) => {
        if (new RegExp(searchExp.getNumberVerification()).test(item.getNumberVerification())) return true
        return false
      })
    }
    if (searchExp.getVerificationNumberOfMaterial() !== '') {
      searchArr = searchArr.filter((item) => {
        if (new RegExp(searchExp.getVerificationNumberOfMaterial()).test(item.getVerificationNumberOfMaterial())) return true
        return false
      })
    }
    if (searchExp.getVerificationExecutor() !== '' && searchExp.getVerificationExecutor() !== 'не указано') {
      searchArr = searchArr.filter((item) => {
        if (item.getVerificationExecutor() === searchExp.getVerificationExecutor()) return true
        return false
      })
    }
    if (searchExp.getVerificationResult() !== '' && searchExp.getVerificationResult() !== 'не указано') {
      searchArr = searchArr.filter((item) => {
        if (item.getVerificationResult() === searchExp.getVerificationResult()) return true
        return false
      })
    }
  }

  if (searchArr.length) {
    searchCardsArr = searchArr.map((item) => {
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
  } else if (dbExps.length) {
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
      const dateOfReceipt = dateAddDays(new Date(), dayGenerator(1, new Date().getDate()), false);
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
      const executor = executorRand < 0.1 ?
        'Польченко Т.В.' : executorRand >= 0.1 && executorRand < 0.2 ?
          'Поволодцкий Д.Г.' : executorRand >= 0.2 && executorRand < 0.3 ?
            'Васильев И.С.' : executorRand >= 0.3 && executorRand < 0.4 ?
              'Арзяков Д.Н.' : executorRand >= 0.4 && executorRand < 0.5 ?
                'Халилов Р.Н.' : executorRand >= 0.5 && executorRand < 0.6 ?
                  'Балабанов А.А.' : executorRand >= 0.6 && executorRand < 0.7 ?
                    'Дружинина Е.Ю.' : executorRand >= 0.7 && executorRand < 0.8 ?
                      'Еноткин А.А.' : executorRand >= 0.8 && executorRand < 0.85 ?
                        'Киселев А.С.' : executorRand >= 0.85 && executorRand < 0.9 ?
                          'Марчук В.А.' : executorRand >= 0.9 ?
                            'Черногоров А.Ю.' : ''
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

      const dateExpEnd = dateAddDays(new Date(), dayGenerator(1, new Date().getDate()), false)
      const dateExpComplete = dateAddDays(new Date(), dayGenerator(1, new Date().getDate()), false)
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
  function dateFromRutoUs(incomingStr: string) {
    let result
    let splits = incomingStr.split(".")
    result = `${splits[2]}-${splits[1]}-${splits[0]}`
    return result
  }
  function dateAddDays(incomingDate: Date, countOfDays: number, plusMinus: boolean) {
    let date = new Date(incomingDate)

    if (plusMinus === true) {
      date.setDate(date.getDate() + countOfDays)
    } else {
      date.setDate(date.getDate() - countOfDays)
    }
    date.setHours(0)
    return dateFromRutoUs(date.toLocaleDateString())
  }
  function dayGenerator(from: number, to: number) {
    return (from + Math.random() * (to - from));
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
    setModal((prev) => ({
      ...prev, type: 'update', idOfExp: number
    }))
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

  let dbIn = fetch("http://localhost:3001/get-db").then((data) => data.json()).then(data => {
    console.log('data in: ', data);
  })
  const dbOut: Exp[] = addDbExps(20)

  async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  // postData("http://localhost:3001/set-db", dbOut)
  //   .then(data => {
  //     console.log('data out: ', data); // JSON data parsed by `data.json()` call
  //   });


  return (
    <Container>
      <Header logoText='Электронный журнал 0.0.1' />
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
          searchArr={searchArr}
          searchExp={searchExp}
          setSearchExp={setSearchExp}
        />
        <Gallery>
          {searchCardsArr.length ? searchCardsArr : cardsArr}
        </Gallery>
        <Modal
          type={modal.type === 'info' ? 'info' : 'hidden'}
          dbExps={dbExps}
          searchExp={searchExp}
          searchArr={searchArr}
          setModal={setModal}
          setSearchExp={setSearchExp}
        />
        <Menu type='right'>
          <Button type='info' clickHendler={infoClickHendler} />
        </Menu>
      </Main>
    </Container>
  );
};

export default App;

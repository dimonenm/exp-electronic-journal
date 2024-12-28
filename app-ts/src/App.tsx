import React, { useState, useEffect } from 'react';
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
import { dateFromUsToRu, loadExpsForAppDb } from './services/services';
import ButtonYear from './components/ButtonYear';

const App = () => {

  const [dbExps, setDbExps] = useState<Exp[]>([])
  const [modal, setModal] = useState<IModal>({ type: null, idOfExp: null })
  const [searchExp, setSearchExp] = useState<SearchExp>(new SearchExp())
  const [year, setYear] = useState<string>('')

  let searchCardsArr: JSX.Element[] = []
  let searchArr: Exp[] = []
  let cardsArr: JSX.Element[] = []
  let countOfWarnings: number = 0
  const resultExpsarr: { id: string, type: 'completed' | 'expired' | 'none' | 'worning' }[] = []

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
    if (searchExp.getKindOfService() !== '' && searchExp.getKindOfService() !== 'не указано') {
      searchArr = searchArr.filter((item) => {
        if (item.getKindOfService() === searchExp.getKindOfService()) return true
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
    if (searchExp.getStatusOfExpertise() !== '' && searchExp.getStatusOfExpertise() !== 'не указано') {
      if (searchExp.getStatusOfExpertise() === 'В производстве') {
        searchArr = searchArr.filter((item) => {
          if (item.getDateExpComplete() === '' && item.getResult() === '') return true
          return false
        })
      }
      if (searchExp.getStatusOfExpertise() === 'На ходатайстве') {
        searchArr = searchArr.filter((item) => {
          if (item.getDateExpComplete() === '' && item.getResult() === '' && item.getDatePetitionStart() !== '') return true
          return false
        })
      }
      if (searchExp.getStatusOfExpertise() === 'На продлении') {
        searchArr = searchArr.filter((item) => {
          if (item.getDateExpComplete() === '' && item.getResult() === '' && item.getDateProlongationStart() !== '') return true
          return false
        })
      }
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

  dbExps.forEach((item) => {
    if (item.getResult() === '' || item.getResult() === 'не указано') {
      if (item.getDatePetitionStart() === '' && item.getDateExpComplete() === '') {
        const date1 = new Date(item.getDateExpEnd())
        const date2 = new Date()
        const daysCount = Math.floor(((Number(date1) - Number(date2)) / 1000 / 60 / 60 / 24))
        if (daysCount <= 5 && daysCount >= 0) {
          countOfWarnings += 1
          resultExpsarr.push({ id: item.getId(), type: 'worning' })
          return
        }
        if (daysCount < 0) {
          countOfWarnings += 1
          resultExpsarr.push({ id: item.getId(), type: 'expired' })
          return
        }
      }
      
      if (item.getDateExpComplete() !== '') {
        countOfWarnings += 1
        resultExpsarr.push({ id: item.getId(), type: 'worning' })
        return
      }

      if (item.getDatePetitionStart() !== '' && item.getDatePetitionEnd() === '' && item.getValueOfProlongation() === '') {
        const date1 = new Date(item.getDateExpEnd())
        const date2 = new Date()
        const daysCount = Math.floor(((Number(date1) - Number(date2)) / 1000 / 60 / 60 / 24))
        if (daysCount <= 3 && daysCount >= 0) {
          resultExpsarr.push({ id: item.getId(), type: 'worning' })
          countOfWarnings += 1
          return
        }
        if (daysCount < 0) {
          countOfWarnings += 1
          resultExpsarr.push({ id: item.getId(), type: 'expired' })
          return
        }

      }

    }

    if (item.getDateExpComplete() !== '' && item.getResult() !== '' && item.getResult() !== 'не указано') {
      resultExpsarr.push({ id: item.getId(), type: 'completed' })
    }
    else {
      resultExpsarr.push({ id: item.getId(), type: 'none' })
    }
  })

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
          isWarning={resultExpsarr[Number(item.getId()) - 1].type}
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
        isWarning={resultExpsarr[Number(item.getId()) - 1].type}
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
          isWarning={resultExpsarr[Number(item.getId()) - 1].type}
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
        isWarning={resultExpsarr[Number(item.getId()) - 1].type}
        updateClickHendler={updateClickHendler}
      />)
    }).reverse()
  }

  function createClickHendler(): void {
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
  function galleryClickHendler() {
    setModal((prev) => ({
      ...prev, type: null, idOfExp: null
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
  function warningsClickHendler() {
    if (modal.type !== 'warnings') {
      setModal((prev) => ({
        ...prev, type: 'warnings', idOfExp: null
      }))
    } else {
      setModal((prev) => ({
        ...prev, type: null, idOfExp: null
      }))
    }
  }



  useEffect(() => {
    var currentYear = new Date().getFullYear().toString()
    setYear(currentYear)
    loadExpsForAppDb("http://localhost:3001/get-db", currentYear).then((data) => {
      setDbExps(data)
    })
  }, [])
  useEffect(() => {
    loadExpsForAppDb("http://localhost:3001/get-db", year).then((data) => {
      setDbExps(data)
    })
  }, [year])


  return (
    <Container>
      <Header logoText='Электронный журнал 0.0.3' />
      <Main>
        <Menu type='left'>
          <Button type='create' modalType={modal.type} clickHendler={createClickHendler} />
          <Button type='search' modalType={modal.type} clickHendler={searchClickHendler} />
          <Button type='info' modalType={modal.type} clickHendler={infoClickHendler} />
          <Button type='warnings' modalType={modal.type} clickHendler={warningsClickHendler} countOfWarnings={countOfWarnings} />
        </Menu>
        <Modal
          type={modal.type === 'create' ? 'create' : 'hidden'}
          idOfExp={modal.idOfExp}
          dbExps={dbExps}
          setDbExps={setDbExps}
          setModal={setModal}
          searchArr={searchArr}
          searchExp={searchExp}
          setSearchExp={setSearchExp}
          year={year}
        />
        <Modal
          type={modal.type === 'search' ? 'search' : 'hidden'}
          idOfExp={modal.idOfExp}
          dbExps={dbExps}
          setDbExps={setDbExps}
          setModal={setModal}
          searchArr={searchArr}
          searchExp={searchExp}
          setSearchExp={setSearchExp}
          year={year}
        />
        <Modal
          type={modal.type === 'update' ? 'update' : 'hidden'}
          idOfExp={modal.idOfExp}
          dbExps={dbExps}
          setDbExps={setDbExps}
          setModal={setModal}
          searchArr={searchArr}
          searchExp={searchExp}
          setSearchExp={setSearchExp}
          year={year}
        />
        <Gallery galleryClickHendler={galleryClickHendler}>
          {searchCardsArr.length ? searchCardsArr : cardsArr}
        </Gallery>
        <Modal
          type={modal.type === 'info' ? 'info' : 'hidden'}
          dbExps={dbExps}
          searchExp={searchExp}
          searchArr={searchArr}
          setModal={setModal}
          setSearchExp={setSearchExp}
          year={year}
        />
        <Modal
          type={modal.type === 'warnings' ? 'warnings' : 'hidden'}
          dbExps={dbExps}
          searchExp={searchExp}
          searchArr={searchArr}
          setModal={setModal}
          setSearchExp={setSearchExp}
          year={year}
        />
        <Menu type='right'>
          <ButtonYear year='2023' activeYear={year} setYear={setYear} />
          <ButtonYear year='2024' activeYear={year} setYear={setYear} />
          <ButtonYear year='2025' activeYear={year} setYear={setYear} />
        </Menu>
      </Main>
    </Container>
  );
};

export default App;

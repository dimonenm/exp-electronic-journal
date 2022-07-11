import Container from './containers/Container';
import './App.css';
import Header from './containers/Header';
import Main from './containers/Main';
import Menu from './components/Menu';
import Btn from './components/Btn';
import Gallery from './containers/Gallery';
import Card from './components/Card';
import Modal from './components/Modal';
import { useState } from 'react';



function App() {

  const [modal, setModal] = useState({ type: null })
  const [expState] = useState(addDbExps(100))

  function addDbExps(count) {

    let arr = []

    for (let i = 0; i < count; i++) {
      // const dateOfReceipt = new Date()
      const dateOfReceiptStr = "2022-07-06"
      const typeOfServiceRand = Math.random()
      const typeOfService = typeOfServiceRand < 0.25 ?
        'МВД' : typeOfServiceRand >= 0.25 && typeOfServiceRand < 0.5 ?
          'ГСУ СК' : typeOfServiceRand >= 0.5 && typeOfServiceRand < 0.75 ?
            'ФСБ' : typeOfServiceRand >= 0.75 ?
              'Суд' : null

      let unitOfService = null
      if (typeOfService === 'МВД') {
        const unitOfServiceRand = Math.random()
        unitOfService = unitOfServiceRand < 0.25 ?
          'ОМВД России по г. Евпатории' : unitOfServiceRand >= 0.25 && unitOfServiceRand < 0.5 ?
            'ОМВД России по г. Феодосии' : unitOfServiceRand >= 0.5 && unitOfServiceRand < 0.75 ?
              'ОМВД России по г. Судаку' : unitOfServiceRand >= 0.75 ?
                'ОМВД России по г. Алуште' : null
      }
      if (typeOfService === 'ГСУ СК') {
        const unitOfServiceRand = Math.random()
        unitOfService = unitOfServiceRand < 0.25 ?
          'СО по г. Евпатории' : unitOfServiceRand >= 0.25 && unitOfServiceRand < 0.5 ?
            'СО по г. Феодосия' : unitOfServiceRand >= 0.5 && unitOfServiceRand < 0.75 ?
              'СО по г. Судак' : unitOfServiceRand >= 0.75 ?
                'СО по г. Алушта' : null
      }

      const typeOfMaterialRand = Math.random()
      const typeOfMaterial = typeOfMaterialRand < 0.33 ?
        'УД' : typeOfMaterialRand >= 0.33 && typeOfMaterialRand < 0.66 ?
          'КУСП' : typeOfMaterialRand >= 0.66 ?
            'КРСП' : null

      const numberOfMaterialRand = [Math.ceil((Math.random() * 100)), Math.ceil((Math.random() * 100)), Math.ceil((Math.random() * 100)), Math.ceil((Math.random() * 100)), Math.ceil((Math.random() * 100))]
      let numberOfMaterial = null
      if (typeOfMaterial === 'УД') {
        numberOfMaterial = `1200${numberOfMaterialRand[0]}${numberOfMaterialRand[1]}${numberOfMaterialRand[2]}${numberOfMaterialRand[3]}${numberOfMaterialRand[4]}`
      } else {
        numberOfMaterial = `${numberOfMaterialRand[0]}${numberOfMaterialRand[1]} от 01.07.2022`
      }

      let article = null
      if (typeOfMaterial === 'УД') {
        const articleRand = Math.random()
        article = articleRand < 0.17 ?
          'ст. 101 УК РФ' : articleRand >= 0.17 && articleRand < 0.34 ?
            'ст. 105 УК РФ' : articleRand >= 0.34 && articleRand < 0.51 ?
              'ст. 158, 159, 160 УК РФ' : articleRand >= 0.51 && articleRand < 0.68 ?
                'ст. 186, 187 УК РФ' : articleRand >= 0.68 && articleRand < 0.85 ?
                  'ст. 222 УК РФ' : articleRand >= 0.85 ?
                    'ст. 264 УК РФ' : null
      }

      const typeOfExpertiseRand = Math.random()
      const typeOfExpertise = typeOfExpertiseRand < 0.25 ?
        'Портретная' : typeOfExpertiseRand >= 0.25 && typeOfExpertiseRand < 0.5 ?
          'Почерк' : typeOfExpertiseRand >= 0.5 && typeOfExpertiseRand < 0.75 ?
            'ТКЭД общ.' : typeOfExpertiseRand >= 0.75 ?
              'ТКЭД ден.' : null

      const executorRand = Math.random()
      const executor = executorRand < 0.09 ?
        'Польченко Т.В.' : executorRand >= 0.09 && executorRand < 0.18 ?
          'Поволодцкий Д.Г.' : executorRand >= 0.18 && executorRand < 0.27 ?
            'Васильев И.С.' : executorRand >= 0.27 && executorRand < 0.36 ?
              'Арзяков Д.Н.' : executorRand >= 0.36 && executorRand < 0.45 ?
                'Халилов Р.Н.' : executorRand >= 0.45 && executorRand < 0.54 ?
                  'Балабанов А.А.' : executorRand >= 0.54 && executorRand < 0.63 ?
                    'Дружинина Е.Ю.' : executorRand >= 0.63 && executorRand < 0.72 ?
                      'Еноткин А.А.' : executorRand >= 0.72 && executorRand < 0.81 ?
                        'Киселев А.С.' : executorRand >= 0.81 && executorRand < 0.9 ?
                          'Марчук В.А.' : executorRand >= 0.99 ?
                            'Черногоров А.Ю.' : null


      const difficultRand = Math.random()
      const difficult = difficultRand < 0.33 ?
        'Простая' : difficultRand >= 0.33 && difficultRand < 0.66 ?
          'Средней слож-ти' : difficultRand >= 0.66 ?
            'Сложная' : null

      const datePetitionStart = null
      const datePetitionEnd = null
      const dateProlongationStart = null
      const dateProlongationEnd = null

      const resultRand = Math.random()
      const result = resultRand < 0.25 ?
        'Результативная' : resultRand >= 0.25 && resultRand < 0.5 ?
          'Не результативная' : resultRand >= 0.5 && resultRand < 0.75 ?
            'Без исполнения' : resultRand >= 0.75 ?
              'Сообщение о невозм.' : null

      const dateExpEnd = null
      const dateExpComplete = null
      const exp = {
        id: `${i + 1}`,
        dateOfReceipt: dateOfReceiptStr,
        typeOfService: typeOfService,
        unitOfService: unitOfService,
        typeOfMaterial: typeOfMaterial,
        numberOfMaterial: numberOfMaterial,
        article: article,
        typeOfExpertise: typeOfExpertise,
        executor: executor,
        difficult: difficult,
        datePetitionStart: datePetitionStart,
        datePetitionEnd: datePetitionEnd,
        dateProlongationStart: dateProlongationStart,
        dateProlongationEnd: dateProlongationEnd,
        result: result,
        dateExpEnd: dateExpEnd,
        dateExpComplete: dateExpComplete,
        dateVerificationStart: null,
        dateVerificationEnd: null,
        numberVerification: null,
        verificationNumberOfMaterial: null,
        verificationExecutor: null,
        verificationResult: null,
      }
      arr.push(exp)
    }
    return arr
  }
  const date = "2022-07-05"
  // function dateFromUsToRu(incomingStr) {
  //   let result
  //   let splits = incomingStr.split("-")
  //   result = `${splits[2]}.${splits[1]}.${splits[0]}`
  //   return result
  // }
  // function dateFromRutoUs(incomingStr) {
  //   let result
  //   let splits = incomingStr.split(".")
  //   result = `${splits[2]}-${splits[1]}-${splits[0]}`
  //   return result
  // }
  function dateAddDays(incomingDate, countOfDays) {
    let date = new Date(incomingDate)
    date.setDate(date.getDate() + countOfDays)
    date.setHours(0)
    console.log(date.toLocaleDateString());
  }
  dateAddDays(date, 27);

  let cardArr = expState.map(
    (item) => {
      return (
        <Card
          key={item.id}
          number={`${item.id}`}
          type={`${item.typeOfExpertise}`}
          numberOfMaterial={`${item.numberOfMaterial}`}
          dateOfIncoming="поступил 00.00.2022"
          dateOfComplite="окончание 00.00.2022"
          executor={`${item.executor}`} result={`${item.result}`} />)
    }
  ).reverse()

  return (
    <div className="App">

      <Container>
        <Header>Электронный журнал 0.0.1</Header>
        <Main>
          <Menu>
            <Btn type="create" setModal={setModal} modal={modal}></Btn>
            <Btn type="search" setModal={setModal} modal={modal}></Btn>
            {/* <Btn type="download" />
            <Btn type="save" expState={expState} /> */}
          </Menu>
          <Modal type={modal.type === 'create' ? 'create' : modal.type === 'search' ? 'search' : 'hidden'}></Modal>
          <Gallery>
            {cardArr}
          </Gallery>
          <Modal type={modal.type === 'info' ? 'info' : 'hidden'} expState={expState}>

          </Modal>
          <Menu>
            <Btn type="info" setModal={setModal} modal={modal}></Btn>
          </Menu>
        </Main>
      </Container>

    </div>
  );
}

export default App;

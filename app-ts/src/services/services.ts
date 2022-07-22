import Exp from "../entities/Exp"

// функции работы с датой
export function dateFromUsToRu(incomingStr: string | null) {
  let result = 'н/д'
  if (incomingStr) {
    let splits = incomingStr.split("-")
    result = `${splits[2]}.${splits[1]}.${splits[0]}`
  }
  return result
}
export function dateFromRutoUs(incomingStr: string) {
  let result
  let splits = incomingStr.split(".")
  result = `${splits[2]}-${splits[1]}-${splits[0]}`
  return result
}
export function dateAddReduceDays(incomingDate: string, countOfDays: number, plusMinus: boolean) {
  let date = new Date(incomingDate)

  if (plusMinus === true) {
    date.setDate(date.getDate() + countOfDays)
  } else {
    date.setDate(date.getDate() - countOfDays)
  }
  date.setHours(0)
  return dateFromRutoUs(date.toLocaleDateString())
}
export function dayGenerator(from: number, to: number) {
  return (from + Math.random() * (to - from));
}
// функции сохранения и загрузки базы
export function loadExpsForAppDb(url: string){
  return fetch(url).then((data) => data.json()).then((data: []) => {
    const loadedData: Exp[] = []
    data.forEach((item) => {
      let newExp = new Exp()
      newExp.copyDataFromDbExp(item)
      loadedData.push(newExp)
    })
    return loadedData
  })
}
export function seveExpsFromAppDb(url: string, data: Exp[]) {
  const settings: RequestInit = {
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
  }
  fetch(url, settings);
}

// генератор экспертиз для базы
export function addDbExps(count: number) {

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
export function dateAddDays(incomingDate: Date, countOfDays: number, plusMinus: boolean) {
  let date = new Date(incomingDate)

  if (plusMinus === true) {
    date.setDate(date.getDate() + countOfDays)
  } else {
    date.setDate(date.getDate() - countOfDays)
  }
  date.setHours(0)
  return dateFromRutoUs(date.toLocaleDateString())
}
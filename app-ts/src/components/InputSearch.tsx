import React, { FC } from 'react'
import './Input.scss'

interface IInputSearchProps {
  type: string
  listName?: string
  listType?: string
  title: string
  name: string
  value?: string | undefined
  onChangeIdStartHandler?: (value: string) => void
  onChangeIdEndHandler?: (value: string) => void
  onChangDateOfReceiptStartHandler?: (value: string) => void
  onChangDateOfReceiptEndHandler?: (value: string) => void
  onChangeTypeOfServiceHandler?: (value: string) => void
  onChangeUnitOfServiceHandler?: (value: string) => void
  onChangeKindOfServiceHandler?: (value: string) => void
  onChangeTypeOfMaterialHandler?: (value: string) => void
  onChangeNumberOfMaterialHandler?: (value: string) => void
  onChangeArticleHandler?: (value: string) => void
  onChangeTypeOfExpertiseHandler?: (value: string) => void
  onChangeDifficultOfExpertiseHandler?: (value: string) => void
  onChangeExecutorHandler?: (value: string) => void
  onChangeDatePetitionStartHandler?: (value: string) => void
  onChangeDatePetitionEndHandler?: (value: string) => void
  onChangeDateProlongationStartHandler?: (value: string) => void
  onChangeValueOfProlongationHandler?: (value: string) => void
  onChangeResultHandler?: (value: string) => void
  onChangeStatusOfExpertiseHandler?: (value: string) => void
  onChangeDateExpEndStartHandler?: (value: string) => void
  onChangeDateExpEndEndHandler?: (value: string) => void
  onChangeDateExpCompleteStartHandler?: (value: string) => void
  onChangeDateExpCompleteEndHandler?: (value: string) => void
  onChangeDateVerificationStartStartHandler?: (value: string) => void
  onChangeDateVerificationStartEndHandler?: (value: string) => void
  onChangeDateVerificationEndHandler?: (value: string) => void
  onChangeNumberVerificationHandler?: (value: string) => void
  onChangeVerificationNumberOfMaterialHandler?: (value: string) => void
  onChangeVerificationExecutorHandler?: (value: string) => void
  onChangeVerificationResultHandler?: (value: string) => void
}

const InputSearch: FC<IInputSearchProps> = ({
  type,
  listName,
  listType,
  title,
  name,
  value,
  onChangeIdStartHandler,
  onChangeIdEndHandler,
  onChangDateOfReceiptStartHandler,
  onChangDateOfReceiptEndHandler,
  onChangeTypeOfServiceHandler,
  onChangeUnitOfServiceHandler,
  onChangeKindOfServiceHandler,
  onChangeTypeOfMaterialHandler,
  onChangeNumberOfMaterialHandler,
  onChangeArticleHandler,
  onChangeTypeOfExpertiseHandler,
  onChangeDifficultOfExpertiseHandler,
  onChangeExecutorHandler,
  onChangeDatePetitionStartHandler,
  onChangeDatePetitionEndHandler,
  onChangeDateProlongationStartHandler,
  onChangeValueOfProlongationHandler,
  onChangeResultHandler,
  onChangeStatusOfExpertiseHandler,
  onChangeDateExpEndStartHandler,
  onChangeDateExpEndEndHandler,
  onChangeDateExpCompleteStartHandler,
  onChangeDateExpCompleteEndHandler,
  onChangeDateVerificationStartStartHandler,
  onChangeDateVerificationStartEndHandler,
  onChangeDateVerificationEndHandler,
  onChangeNumberVerificationHandler,
  onChangeVerificationNumberOfMaterialHandler,
  onChangeVerificationExecutorHandler,
  onChangeVerificationResultHandler,
}) => {
  let input
  if (type === 'text') {
    if (name === 'idStart')
      input = (
        <input
          type='text'
          className='input-text'
          value={value}
          onChange={event => {
            onChangeIdStartHandler?.(event.target.value)
          }}
        />
      )
    if (name === 'idEnd')
      input = (
        <input
          type='text'
          className='input-text'
          value={value}
          onChange={event => {
            onChangeIdEndHandler?.(event.target.value)
          }}
        />
      )
    if (name === 'numberOfMaterial')
      input = (
        <input
          type='text'
          className='input-text'
          value={value}
          onChange={event => {
            onChangeNumberOfMaterialHandler?.(event.target.value)
          }}
        />
      )
    if (name === 'valueOfProlongation')
      input = (
        <input
          type='text'
          className='input-text'
          value={value}
          onChange={event => {
            onChangeValueOfProlongationHandler?.(event.target.value)
          }}
        />
      )
    if (name === 'numberVerification')
      input = (
        <input
          type='text'
          className='input-text'
          value={value}
          onChange={event => {
            onChangeNumberVerificationHandler?.(event.target.value)
          }}
        />
      )
    if (name === 'verificationNumberOfMaterial')
      input = (
        <input
          type='text'
          className='input-text'
          value={value}
          onChange={event => {
            onChangeVerificationNumberOfMaterialHandler?.(event.target.value)
          }}
        />
      )
  }
  if (type === 'date') {
    if (name === 'dateOfReceiptStart') {
      input = (
        <input
          type='date'
          className='input-date'
          value={value}
          onChange={event => {
            onChangDateOfReceiptStartHandler?.(event.target.value)
          }}
        />
      )
    }
    if (name === 'dateOfReceiptEnd') {
      input = (
        <input
          type='date'
          className='input-date'
          value={value}
          onChange={event => {
            onChangDateOfReceiptEndHandler?.(event.target.value)
          }}
        />
      )
    }
    if (name === 'datePetitionStart') {
      input = (
        <input
          type='date'
          className='input-date'
          value={value}
          onChange={event => {
            onChangeDatePetitionStartHandler?.(event.target.value)
          }}
        />
      )
    }
    if (name === 'datePetitionEnd') {
      input = (
        <input
          type='date'
          className='input-date'
          value={value}
          onChange={event => {
            onChangeDatePetitionEndHandler?.(event.target.value)
          }}
        />
      )
    }
    if (name === 'dateProlongationStart') {
      input = (
        <input
          type='date'
          className='input-date'
          value={value}
          onChange={event => {
            onChangeDateProlongationStartHandler?.(event.target.value)
          }}
        />
      )
    }
    if (name === 'dateExpEndStart') {
      input = (
        <input
          type='date'
          className='input-date'
          value={value}
          onChange={event => {
            onChangeDateExpEndStartHandler?.(event.target.value)
          }}
        />
      )
    }
    if (name === 'dateExpEndEnd') {
      input = (
        <input
          type='date'
          className='input-date'
          value={value}
          onChange={event => {
            onChangeDateExpEndEndHandler?.(event.target.value)
          }}
        />
      )
    }
    if (name === 'dateExpCompleteStart') {
      input = (
        <input
          type='date'
          className='input-date'
          value={value}
          onChange={event => {
            onChangeDateExpCompleteStartHandler?.(event.target.value)
          }}
        />
      )
    }
    if (name === 'dateExpCompleteEnd') {
      input = (
        <input
          type='date'
          className='input-date'
          value={value}
          onChange={event => {
            onChangeDateExpCompleteEndHandler?.(event.target.value)
          }}
        />
      )
    }
    if (name === 'dateVerificationStartStart') {
      input = (
        <input
          type='date'
          className='input-date'
          value={value}
          onChange={event => {
            onChangeDateVerificationStartStartHandler?.(event.target.value)
          }}
        />
      )
    }
    if (name === 'dateVerificationStartEnd') {
      input = (
        <input
          type='date'
          className='input-date'
          value={value}
          onChange={event => {
            onChangeDateVerificationStartEndHandler?.(event.target.value)
          }}
        />
      )
    }
    if (name === 'dateVerificationEnd') {
      input = (
        <input
          type='date'
          className='input-date'
          value={value}
          onChange={event => {
            onChangeDateVerificationEndHandler?.(event.target.value)
          }}
        />
      )
    }
  }
  if (type === 'select') {
    if (listName === 'typeOfService') {
      input = (
        <select
          className='select'
          value={value}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            onChangeTypeOfServiceHandler?.(event.target.value)
          }}
        >
          <option>не указано</option>
          <option>МВД</option>
          <option>ГСУ СК</option>
          <option>ВСУ СК</option>
          <option>ФСБ</option>
          <option>Суд</option>
        </select>
      )
    }
    if (listName === 'unitOfService') {
      if (listType === 'police') {
        input = (
          <select
            className='select'
            value={value}
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              onChangeUnitOfServiceHandler?.(event.target.value)
            }}
          >
            <option>не указано</option>
            <option>ОМВД России по г. Евпатории</option>
            <option>ОМВД России по г. Феодосии</option>
            <option>ОМВД России по г. Судаку</option>
            <option>ОМВД России по г. Алуште</option>
            <option>ОМВД России по г. Армянску</option>
            <option>ОМВД России по Бахчисарайскому району</option>
            <option>ОМВД России по Белогорскому району</option>
            <option>МО МВД России «Джанкойский»</option>
            <option>ОМВД России по Кировскому району</option>
            <option>ОМВД России по Красногвардейскому району</option>
            <option>МОМВД России «Красноперекопский»</option>
            <option>ОМВД России по Ленинскому району</option>
            <option>ОМВД России по Нижнегорскому району</option>
            <option>ОМВД России по Первомайскому району</option>
            <option>ОМВД России по Раздольненскому району</option>
            <option>МОМВД России «Сакский»</option>
            <option>ОМВД России по Симферопольскому району</option>
            <option>ОМВД России по Советскому району</option>
            <option>ОМВД России по Черноморскому району</option>
            <option>УМВД России по г. Ялте</option>
            <option>УМВД России по г. Ялте ОП №1 "Алупкинский"</option>
            <option>УМВД России по г. Ялте ОП №2 "Ливадийский"</option>
            <option>УМВД России по г. Ялте ОП №3 "Массандровский"</option>
            <option>
              УМВД России по г. Симферополю ОП №1 "Железнодорожный"
            </option>
            <option>УМВД России по г. Симферополю ОП №2 "Киевский"</option>
            <option>УМВД России по г. Симферополю ОП №3 "Центральный"</option>
            <option>УМВД России по г. Севастополю</option>
            <option>УМВД России по г. Керчи</option>
            <option>ЛОП</option>
            <option>СЧСУ МВД</option>
            <option>СЧСУ</option>
            <option>ОКОН по Симферополю</option>
            <option>ДНР</option>
            <option>ЛНР</option>
            <option>Херсонская область</option>
            <option>Запорожская область</option>
            <option>ЛУ на транспорте</option>
          </select>
        )
      }
      if (listType === 'investigation') {
        input = (
          <select
            className='select'
            value={value}
            onChange={event => {
              onChangeUnitOfServiceHandler?.(event.target.value)
            }}
          >
            <option>не указано</option>
            <option>ГСУ СК РФ по РК и г. Севастополю</option>
            <option>СО по г. Евпатории</option>
            <option>СО по г. Феодосия</option>
            <option>СО по г. Судак</option>
            <option>СО по г. Алушта</option>
            <option>СО по г. Ялта</option>
            <option>СО по г. Армянску</option>
            <option>СО по Бахчисарайскому району</option>
            <option>СО по Белогорскому району</option>
            <option>СО по г. Джанкой</option>
            <option>СО по г. Красноперекопск</option>
            <option>СО по Ленинскому району</option>
            <option>СО по Нижнегорскому району</option>
            <option>СО по Первомайскому району</option>
            <option>СО по Раздольненскому району</option>
            <option>СО по г. Саки</option>
            <option>СО по Симферопольскому району</option>
            <option>СО по Советскому району</option>
            <option>СО по Черноморскому району</option>
            <option>СО по г. Керчи</option>
            <option>СО по Железнодорожному району г. Симферополь</option>
            <option>СО по Киевскому району г. Симферополь</option>
            <option>СО по Центральному району г. Симферополь</option>
            <option>Крымский СО на транспорте</option>
            <option>Белагорский МСО</option>
            <option>Кировский МСО</option>
            <option>Красногвардейский МСО</option>
          </select>
        )
      }
    }
    if (listName === 'kindOfService') {
      input = (
        <select
          className='select'
          value={value}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            onChangeKindOfServiceHandler?.(event.target.value)
          }}
        >
          <option>не указано</option>
          <option>УУП</option>
          <option>ОУР</option>
          <option>ОЭБ</option>
          <option>СО</option>
          <option>ОД</option>
          <option>УКОН</option>
        </select>
      )
    }
    if (listName === 'typeOfMaterial') {
      input = (
        <select
          className='select'
          value={value}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            onChangeTypeOfMaterialHandler?.(event.target.value)
          }}
        >
          <option>не указано</option>
          <option>УД</option>
          <option>КУСП</option>
          <option>КРСП</option>
        </select>
      )
    }
    if (listName === 'article') {
      input = (
        <select
          className='select'
          value={value}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            onChangeArticleHandler?.(event.target.value)
          }}
        >
          <option>не указано</option>
          <option>ст. 101 УК РФ</option>
          <option>ст. 105 УК РФ</option>
          <option>ст. 158 УК РФ</option>
          <option>ст. 159 УК РФ</option>
          <option>ст. 160 УК РФ</option>
          <option>ст. 186, 187 УК РФ</option>
          <option>ст. 222 УК РФ</option>
          <option>ст. 264 УК РФ</option>
        </select>
      )
    }
    if (listName === 'typeOfExpertise') {
      input = (
        <select
          className='select'
          value={value}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            onChangeTypeOfExpertiseHandler?.(event.target.value)
          }}
        >
          <option>не указано</option>
          <option>Почерковедческая</option>
          <option>ТКЭД общ.</option>
          <option>ТКЭД ден.</option>
          <option>ТКЭД ден. Банк</option>
          <option>ТКЭД акц. марки</option>
          <option>ТКЭД вод. РФ</option>
          <option>ТКЭД вод. ИН</option>
          <option>ТКЭД пасп. РФ</option>
          <option>ТКЭД пасп. ИН</option>
          <option>Портретная</option>
        </select>
      )
    }
    if (listName === 'difficultOfExpertise') {
      input = (
        <select
          className='select'
          value={value}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            onChangeDifficultOfExpertiseHandler?.(event.target.value)
          }}
        >
          <option>не указано</option>
          <option>Простая</option>
          <option>Средней слож-ти</option>
          <option>Сложная</option>
        </select>
      )
    }
    if (listName === 'executor') {
      input = (
        <select
          className='select'
          value={value}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            onChangeExecutorHandler?.(event.target.value)
          }}
        >
          <option>не указано</option>
          <option>Польченко Т.В.</option>
          <option>Поволодцкий Д.Г.</option>
          <option>Васильев И.С.</option>
          <option>Арзяков Д.Н.</option>
          <option>Халилов Р.Н.</option>
          <option>Балабанов А.А.</option>
          <option>Голынков Д.Н.</option>
          <option>Шулипа Е.Ю.</option>
          <option>Киселев А.С.</option>
          <option>Марчук В.А.</option>
        </select>
      )
    }
    if (listName === 'result') {
      input = (
        <select
          className='select'
          value={value}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            onChangeResultHandler?.(event.target.value)
          }}
        >
          <option>не указано</option>
          <option>Результативная</option>
          <option>Не результативная</option>
          <option>Без исполнения</option>
          <option>Сообщение о невозм.</option>
        </select>
      )
    }
    if (listName === 'statusOfExpertise') {
      input = (
        <select
          className='select'
          value={value}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            onChangeStatusOfExpertiseHandler?.(event.target.value)
          }}
        >
          <option>не указано</option>
          <option>В производстве</option>
          <option>На ходатайстве</option>
          <option>На продлении</option>
        </select>
      )
    }
    if (listName === 'verificationExecutor') {
      input = (
        <select
          className='select'
          value={value}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            onChangeVerificationExecutorHandler?.(event.target.value)
          }}
        >
          <option>не указано</option>
          <option>Польченко Т.В.</option>
          <option>Поволодцкий Д.Г.</option>
          <option>Васильев И.С.</option>
          <option>Арзяков Д.Н.</option>
          <option>Халилов Р.Н.</option>
          <option>Балабанов А.А.</option>
          <option>Голынков Д.Н.</option>
          <option>Шулипа Е.Ю.</option>
          <option>Киселев А.С.</option>
          <option>Марчук В.А.</option>
        </select>
      )
    }
    if (listName === 'verificationResult') {
      input = (
        <select
          className='select'
          value={value}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            onChangeVerificationResultHandler?.(event.target.value)
          }}
        >
          <option>не указано</option>
          <option>Совпадение</option>
          <option>Отсутствие сов-я</option>
        </select>
      )
    }
  }
  if (type === 'empty') {
    return (
      <div className='input'>
        <div className='input-title'>{null}</div>
        {null}
      </div>
    )
  }
  if (type === 'searchResult') {
    return (
      <div className='input'>
        <div className='input-title'>{`Количество совпадений - ${value}`}</div>
      </div>
    )
  }
  return (
    <div className='input'>
      <div className='input-title'>{title}</div>
      {input}
    </div>
  )
}

export default InputSearch

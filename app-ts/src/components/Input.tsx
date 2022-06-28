import React, { FC } from 'react';
import './Input.scss'

interface IInputProps {
  type: string,
  listName?: string,
  title: string,
  onChangeHandler?: (value: string) => void
}

const Input: FC<IInputProps> = ({ type, listName, title, onChangeHandler }) => {
  let input
  if (type === 'text') {
    input = <input type="text" className='input-text' />
  }
  if (type === 'date') {
    input = <input type="date" className='input-date' />
  }
  if (type === 'select') {
    if (listName === 'typeOfService') {
      input = <select className='select' onChange={(event) => {
        const newValue = event.target.value
        onChangeHandler(newValue)
      }}>
        <option>не указано</option>
        <option>МВД</option>
        <option>ГСУ СК</option>
        <option>ФСБ</option>
        <option>Суд</option>
      </select>
    }

    if (listName === 'unitOfService') {
      input = <select className='select'>
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
        <option>УМВД России по г. Ялте ОП №1 "Алупкинский"</option>
        <option>УМВД России по г. Ялте ОП №2 "Ливадийский"</option>
        <option>УМВД России по г. Ялте ОП №3 "Массандровский"</option>
        <option>УМВД России по г. Симферополю ОП №1 "Железнодорожный"</option>
        <option>УМВД России по г. Симферополю ОП №2 "Киевский"</option>
        <option>УМВД России по г. Симферополю ОП №3 "Центральный"</option>
        <option>УМВД России по г. Севастополю</option>
        <option>УМВД России по г. Керчи</option>
        <option>ЛОП</option>
        <option>СЧСУ МВД</option>
        <option>СЧСУ</option>
        <option>ОКОН по Симферополю</option>
      </select>
      /*input = <select className='select'>
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
        <option>Белагорский МСО</option>
        <option>Кировский МСО</option>
        <option>Красногвардейский МСО</option>
      </select>*/
    }

    if (listName === 'typeOfMaterial') {
      input = <select className='select'>
        <option>не указано</option>
        <option>УД</option>
        <option>КУСП</option>
        <option>КРСП</option>
      </select>
    }

    if (listName === 'article') {
      input = <select className='select'>
        <option>не указано</option>
        <option>ст. 101 УК РФ</option>
        <option>ст. 105 УК РФ</option>
        <option>ст. 158, 159, 160 УК РФ</option>
        <option>ст. 186, 187 УК РФ</option>
        <option>ст. 222 УК РФ</option>
        <option>ст. 264 УК РФ</option>
      </select>
    }

    if (listName === 'typeOfExpertise') {
      input = <select className='select'>
        <option>не указано</option>
        <option>Портретная</option>
        <option>Почерковедческая</option>
        <option>ТКЭД общ.</option>
        <option>ТКЭД ден.</option>
      </select>
    }

    if (listName === 'executor') {
      input = <select className='select'>
        <option>не указано</option>
        <option>Польченко Т.В.</option>
        <option>Поволодцкий Д.Г.</option>
        <option>Васильев И.С.</option>
        <option>Арзяков Д.Н.</option>
        <option>Халилов Р.Н.</option>
        <option>Балабанов А.А.</option>
        <option>Дружинина Е.Ю.</option>
        <option>Еноткин А.А.</option>
        <option>Киселев А.С.</option>
        <option>Марчук В.А.</option>
        <option>Черногоров А.Ю.</option>
      </select>
    }
    if (listName === 'result') {
      input = <select className='select'>
        <option>не указано</option>
        <option>Результативная</option>
        <option>Не результативная</option>
        <option>Без исполнения</option>
        <option>Сообщение о невозм.</option>
      </select>
    }
    if (listName === 'resultOfVerification') {
      input = <select className='select'>
        <option>не указано</option>
        <option>Совпадение</option>
        <option>Отсутствие сов-я</option>
      </select>
    }
  }
  if (type === 'empty') {
    return (
      <div className='input'>
        <div className='input-title'>
          {null}
        </div>
        {null}
      </div>
    );
  }
  return (
    <div className='input'>
      <div className='input-title'>
        {title}
      </div>
      {input}
    </div>
  );
};

export default Input;
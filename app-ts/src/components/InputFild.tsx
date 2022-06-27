import React, { FC } from 'react';
import './InputFild.scss'

interface IInputFild{
  type: string,
  name?:string
}

const InputFild: FC<IInputFild> = ({ type, name }) => {
  if (type === 'text') {
    return <input type="text" className='input-text'/>
  }
  if (type === 'date') {
    return <input type="date" className='input-date'/>
  }
  if (type === 'select' && name === 'typeOfService') {
    return <select className='select'>
      <option>не указано</option>
      <option>МВД</option>
      <option>ГСУ СК</option>
      <option>ФСБ</option>
      <option>Суд</option>
    </select>
  }
  if (type === 'select' && name === 'unitOfService') {
    return <select className='select'>
      <option>не указано</option>
      <option>МВД</option>
      <option>ГСУ СК</option>
      <option>ФСБ</option>
      <option>Суд</option>
    </select>
  }
  return (
    <div>
      
    </div>
  );
};

export default InputFild;
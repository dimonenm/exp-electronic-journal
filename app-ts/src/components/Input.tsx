import React, { FC } from 'react';
import './Input.scss'

interface IInputProps {
  type: string,
  name?: string,
  title: string
}

const Input: FC<IInputProps> = ({ type, name, title }) => {
  let input
  if (type === 'text') {
    input = <input type="text" className='input-text' />
  }
  if (type === 'date') {
    input = <input type="date" className='input-date' />
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
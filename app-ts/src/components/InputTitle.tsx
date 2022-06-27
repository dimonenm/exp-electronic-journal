import React, { FC } from 'react';
import "./InputTitle.scss";

interface IInputTitleProps{
  children: React.ReactNode
}

const InputTitle: FC<IInputTitleProps> = ({children}) => {
  return (
    <div className='input-title'>
      {children}
    </div>
  );
};

export default InputTitle;
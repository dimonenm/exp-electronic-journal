import React, { FC } from 'react';
import './Main.scss'

interface MainProps {
  children: React.ReactNode
}

const Main: FC<MainProps> = ({ children }) => {
  return (
    <div className='main'>
      {children}
    </div>
  );
};

export default Main;
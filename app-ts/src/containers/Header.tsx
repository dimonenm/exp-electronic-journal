import React, { FC } from 'react';
import './Header.scss'

interface HeaderProps {
  children: React.ReactNode
}

const Header:FC<HeaderProps> = ({children}) => {
  return (
    <div className='header'>
      {children}
    </div>
  );
};

export default Header;
import React, { FC } from 'react';
import './Header.scss'

interface HeaderProps {
  logoText: string
}

const Header: FC<HeaderProps> = ({ logoText }) => {
  return (
    <div className='header'>
      {logoText}
    </div>
  );
};

export default React.memo(Header);
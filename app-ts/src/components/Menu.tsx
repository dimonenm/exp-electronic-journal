import React, { FC } from 'react';
import './Menu.scss'

interface MenuProps {
  type: string,
  children: React.ReactNode
}

const Menu: FC<MenuProps> = ({ type, children }) => {
  if (type === 'left') {
    return (
      <div className='menu-left'>
        {children}
      </div>
    );
  }
  if (type === 'right') {
    return (
      <div className='menu-right'>
        {children}
      </div>
    );
  }
  return (
    <div className='menu'>
      {children}
    </div>
  );
};

export default Menu;
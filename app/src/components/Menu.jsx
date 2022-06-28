import React from 'react';
import "./Menu.scss"
const Menu = ({children}) => {
    return (
        <div className='menu'>
            {children}
        </div>
    );
};

export default Menu;
import React from 'react';
import "./Gallery.scss"
const Gallery = ({children}) => {
    return (
        <div className='gallery'>
            {children}
        </div>
    );
};

export default Gallery;
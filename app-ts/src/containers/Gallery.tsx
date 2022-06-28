import React, { FC } from 'react';
import "./Gallery.scss"

interface GalleryProps {
    children: React.ReactNode
}

const Gallery: FC<GalleryProps> = ({ children }) => {
    return (
        <div className='gallery'>
            {children}
        </div>
    );
};

export default Gallery;
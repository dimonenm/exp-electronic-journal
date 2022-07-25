import React, { FC } from 'react';
import "./Gallery.scss"

interface IGalleryProps {
    galleryClickHendler: () => void,
    children: React.ReactNode
}

const Gallery: FC<IGalleryProps> = ({ children }) => {
    return (
        <div className='gallery' onClick={galleryClickHendler}>
            {children}
        </div>
    );
};

export default Gallery;
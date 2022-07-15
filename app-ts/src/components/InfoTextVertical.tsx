import React, { FC } from 'react';

interface InfoTextProps {
  text: string
}

const InfoText: FC<InfoTextProps> = ({ text }) => {
  return (
    <div className='modal-info-text-vertical'>
      {text}
    </div>
  );
};

export default InfoText;
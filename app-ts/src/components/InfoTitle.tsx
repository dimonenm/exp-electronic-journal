import React, { FC } from 'react';

interface InfoTitleProps{
  text: string
}

const InfoTitle: FC<InfoTitleProps> = ({ text }) => {
  return (
    <div className="modal-info-title">
      {text}
    </div>
  );
};

export default InfoTitle;
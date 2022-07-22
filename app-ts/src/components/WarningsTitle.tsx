import React, { FC } from 'react';

interface WarningsTitleProps{
  text: string
}

const WarningsTitle: FC<WarningsTitleProps> = ({ text }) => {
  return (
    <div className="modal-warnings-title">
      {text}
    </div>
  );
};

export default WarningsTitle;
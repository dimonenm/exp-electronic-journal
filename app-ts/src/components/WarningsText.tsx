import React, { FC } from 'react';

interface WarningsTextProps {
  text: string
}

const WarningsText: FC<WarningsTextProps> = ({ text }) => {
  return (
    <div className="modal-warnings-text">
      {text}
    </div>
  );
};

export default WarningsText;
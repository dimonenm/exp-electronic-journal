import React, { FC } from 'react';

interface WarningsTextProps {
  text: string,
  number: string,
  updateClickHendler: (value: string | null) => void
}

const WarningsText: FC<WarningsTextProps> = ({ text, number, updateClickHendler }) => {
  return (
    <div className="modal-warnings-text" onClick={(event) => {
      event.stopPropagation()
      updateClickHendler(number)
    }}> 
      {text}
    </div>
  );
};

export default WarningsText;
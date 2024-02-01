import React, { FC } from 'react';

interface InfoTableProps {
  type: string
  children: React.ReactNode
}

const InfoTable: FC<InfoTableProps> = ({ type, children }) => {
  if (type === 'article') {
    return (
      <div className='modal-info-table-article'>
        {children}
      </div>
    );
  }
  if (type === 'executors') {
    return (
      <div className='modal-info-table-executors'>
        {children}
      </div>
    );
  }
  if (type === 'daysSpent') {
    return (
      <div className="modal-info-table-daysSpent">
        {children}
      </div>
    )

  }
  return (<></>);
};

export default InfoTable;
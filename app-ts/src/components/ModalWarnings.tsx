import React, { FC } from 'react';
import Exp from '../entities/Exp';
import WarningsText from './WarningsText';
import WarningsTitle from './WarningsTitle';

interface ModalWarningsProps {
  dbExps: Exp[]
  searchArr?: Exp[]
}

const ModalWarnings: FC<ModalWarningsProps> = ({ dbExps, searchArr }) => {

  // let report: Report

  if (searchArr?.length) {
    // report = addReportData(searchArr)
  } else {
    // report = addReportData(dbExps)
  }

  return (
    <>
      <WarningsTitle text="Список экспертиз, требующих внимания" />
      <WarningsText text="№13 - 5 дней до окончания экспертизы" />
      <WarningsText text="№14 - 3 дней до окончания ходатайства" />
    </>
  );
};

export default ModalWarnings;
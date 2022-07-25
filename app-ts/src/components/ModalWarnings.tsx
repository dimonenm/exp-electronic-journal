import React, { FC } from 'react';
import Exp from '../entities/Exp';
import WarningsText from './WarningsText';
import WarningsTitle from './WarningsTitle';

interface ModalWarningsProps {
  dbExps: Exp[]
  searchArr?: Exp[]
}

const ModalWarnings: FC<ModalWarningsProps> = ({ dbExps, searchArr }) => {

  let expWarningsComponentsArr: React.ReactNode[] = []
  let petitionsWarningsComponentsArr: React.ReactNode[] = []

  if (searchArr?.length) {
    searchArr.forEach((item) => {
      console.log(item);
    })
  } else {
    dbExps.forEach((item) => {
      if (item.getResult() === '' || item.getResult() === 'не указано') {
        if (item.getDatePetitionStart() === '') {
          const date1 = new Date(item.getDateExpEnd())
          const date2 = new Date()
          const daysCount = Math.floor(((Number(date1) - Number(date2)) / 1000 / 60 / 60 / 24))
          if (daysCount <= 5 && daysCount >= 0) {
            const dayOfWeek = daysCount === 0 ? 'дней' : daysCount === 5 ? 'дней' : daysCount === 1 ? 'день' : 'дня'
            const text = `№${item.getId()} - ${daysCount} ${dayOfWeek} до окончания экспертизы`
            expWarningsComponentsArr.push(<WarningsText key={item.getId()} text={text} />)            
          }
          if (daysCount < 0) {
            const dayOfWeek = daysCount < -5 ? 'дней' : daysCount === -1 ? 'день' : 'дня'
            const text = `№${item.getId()} - ${daysCount * -1} ${dayOfWeek} после окончания экспертизы`
            expWarningsComponentsArr.push(<WarningsText key={item.getId()} text={text} />)            
          }
        }
        if (item.getDatePetitionStart() !== '' && item.getDatePetitionEnd() === '' && item.getValueOfProlongation() === '') {
          const date1 = new Date(item.getDateExpEnd())
          const date2 = new Date()
          const daysCount = Math.floor(((Number(date1) - Number(date2)) / 1000 / 60 / 60 / 24))
          if (daysCount <= 3 && daysCount >= 0) {
            const dayOfWeek = daysCount === 0 ? 'дней' : daysCount === 1 ? 'день' : 'дня'
            const text = `№${item.getId()} - ${daysCount} ${dayOfWeek} до окончания ходатайства`
            petitionsWarningsComponentsArr.push(<WarningsText key={item.getId()} text={text} />)            
          }
          if (daysCount < 0) {
            const dayOfWeek = daysCount < -5 ? 'дней' : daysCount === -1 ? 'день' : 'дня'
            const text = `№${item.getId()} - ${daysCount * -1} ${dayOfWeek} после окончания ходатайства`
            petitionsWarningsComponentsArr.push(<WarningsText key={item.getId()} text={text} />)
          }
        }
      }

    })
  }

  return (
    <>
      <WarningsTitle text="Список экспертиз, требующих внимания" />
      {expWarningsComponentsArr}
      {petitionsWarningsComponentsArr}
    </>
  );
};

export default ModalWarnings;
import React, { FC } from 'react';
import Exp from '../entities/Exp';
import Report from '../entities/Report';
import InfoSeparator from './InfoSeparator';
import InfoTable from './InfoTable';
import InfoText from './InfoText';
import InfoTextVertical from './InfoTextVertical';
import InfoTitle from './InfoTitle';

interface ModalInfoProps {
  dbExps: Exp[]
  searchArr?: Exp[]
}

const ModalInfo: FC<ModalInfoProps> = ({ dbExps, searchArr }) => {

  let report: Report

  function addReportData(arr: Exp[]): Report {
    const report = new Report()
    let assignedHandwritingExps: number = 0
    let assignedTCEDExps: number = 0
    let assignedPortraitExps: number = 0
    let assignedTotalExps: number = 0
    let resultHandwritingExps: number = 0
    let resultTCEDExps: number = 0
    let resultPortraitExps: number = 0
    let resultTotalExps: number = 0
    
    arr.forEach(item => {
      assignedTotalExps += 1
      if (item.getTypeOfExpertise() === 'Почерковедческая') {
        assignedHandwritingExps += 1
        if (item.getResult() === 'Результативная') {
          resultHandwritingExps += 1
          resultTotalExps += 1
        }
      }
      if (item.getTypeOfExpertise() === 'ТКЭД общ.' || item.getTypeOfExpertise() === 'ТКЭД ден.') {
        assignedTCEDExps += 1
        if (item.getResult() === 'Результативная') {
          resultTCEDExps += 1
          resultTotalExps += 1
        }
      }
      if (item.getTypeOfExpertise() === 'Портретная') {
        assignedPortraitExps += 1
        if (item.getResult() === 'Результативная') {
          resultPortraitExps += 1
          resultTotalExps += 1
        }
      }
    })

    report.setAssignedHandwritingExps(assignedHandwritingExps.toString())
    report.setAssignedTCEDExps(assignedTCEDExps.toString())
    report.setAssignedPortraitExps(assignedPortraitExps.toString())
    report.setAssignedTotalExps(assignedTotalExps.toString())
    report.setResultHandwritingExps(resultHandwritingExps.toString())
    report.setResultTCEDExps(resultTCEDExps.toString())
    report.setResultPortraitExps(resultPortraitExps.toString())
    report.setResultTotalExps(resultTotalExps.toString())

    return report
  }

  if (searchArr?.length) {
    report = addReportData(searchArr)
  } else {
    report = addReportData(dbExps)
  }

  return (
    <>
      <InfoTitle text="Количество назначенных экспертиз" />
      <div></div>
      <div></div>
      <InfoText text="Почерковедческих:" />
      <InfoText text={report.getAssignedHandwritingExps()} />
      <InfoText text="ТКЭД:" />
      <InfoText text={report.getAssignedTCEDExps()} />
      <InfoText text="Портретных:" />
      <InfoText text={report.getAssignedPortraitExps()} />
      <InfoText text="Всего:" />
      <InfoText text={report.getAssignedTotalExps()} />
      <div></div>
      <div></div>
      <InfoTitle text="Количество результативных экспертиз" />
      <div></div>
      <div></div>
      <InfoText text="Почерковедческих:" />
      <InfoText text={report.getResultHandwritingExps()} />
      <InfoText text="ТКЭД:" />
      <InfoText text={report.getResultTCEDExps()} />
      <InfoText text="Портретных:" />
      <InfoText text={report.getResultPortraitExps()} />
      <InfoText text="Всего:" />
      <InfoText text={report.getResultTotalExps()} />
      <div></div>
      <div></div>
      <InfoTitle text="Количество экспертиз по статьям" />
      <div></div>
      <div></div>
      <InfoTable type="article">
        <InfoText text="" />
        <InfoTextVertical text="Всего" />
        <InfoTextVertical text="Почерк-ких" />
        <InfoTextVertical text="ТКЭД" />
        <InfoTextVertical text="Портретных" />
        <InfoTextVertical text="Проверок" />
        <InfoSeparator />
        <InfoText text="Всего:" />
        <InfoText text="36" />
        <InfoText text="6" />
        <InfoText text="17" />
        <InfoText text="13" />
        <InfoText text="153" />
        <InfoSeparator />
        <InfoText text="ст. 101 УК РФ:" />
        <InfoText text="4" />
        <InfoText text="1" />
        <InfoText text="2" />
        <InfoText text="1" />
        <InfoText text="" />
        <InfoSeparator />
        <InfoText text="ст. 105 УК РФ:" />
        <InfoText text="3" />
        <InfoText text="0" />
        <InfoText text="2" />
        <InfoText text="1" />
        <InfoText text="" />
        <InfoSeparator />
        <InfoText text="ст. 158, 159, 160 УК РФ:" />
        <InfoText text="7" />
        <InfoText text="2" />
        <InfoText text="3" />
        <InfoText text="2" />
        <InfoText text="" />
        <InfoSeparator />
        <InfoText text="ст. 186, 187 УК РФ:" />
        <InfoText text="5" />
        <InfoText text="1" />
        <InfoText text="3" />
        <InfoText text="1" />
        <InfoText text="" />
        <InfoSeparator />
        <InfoText text="ст. 222 УК РФ:" />
        <InfoText text="9" />
        <InfoText text="1" />
        <InfoText text="6" />
        <InfoText text="2" />
        <InfoText text="" />
        <InfoSeparator />
        <InfoText text="ст. 264 УК РФ:" />
        <InfoText text="5" />
        <InfoText text="1" />
        <InfoText text="1" />
        <InfoText text="3" />
        <InfoText text="" />
        <InfoSeparator />
      </InfoTable>
      <div></div>
      <div></div>
      <InfoTitle text="Количество экспертиз по исполнителям" />
      <div></div>
      <div></div>
      <InfoTable type="executors">
        <InfoText text="" />
        <InfoTextVertical text="Всего" />
        <InfoTextVertical text="Почерк-ких" />
        <InfoTextVertical text="ТКЭД" />
        <InfoTextVertical text="Портретных" />
        <InfoTextVertical text="Проверок" />
        <InfoSeparator />
        <InfoText text="Всего:" />
        <InfoText text="100" />
        <InfoText text="18" />
        <InfoText text="54" />
        <InfoText text="28" />
        <InfoText text="153" />
        <InfoSeparator />
        <InfoText text="Польченко Т.В.:" />
        <InfoText text="10" />
        <InfoText text="1" />
        <InfoText text="6" />
        <InfoText text="3" />
        <InfoText text="" />
        <InfoSeparator />
        <InfoText text="Поволодцкий Д.Г.:" />
        <InfoText text="13" />
        <InfoText text="2" />
        <InfoText text="7" />
        <InfoText text="4" />
        <InfoText text="" />
        <InfoSeparator />
        <InfoText text="Васильев И.С.:" />
        <InfoText text="8" />
        <InfoText text="2" />
        <InfoText text="4" />
        <InfoText text="2" />
        <InfoText text="" />
        <InfoSeparator />
        <InfoText text="Арзяков Д.Н.:" />
        <InfoText text="11" />
        <InfoText text="2" />
        <InfoText text="7" />
        <InfoText text="2" />
        <InfoText text="" />
        <InfoSeparator />
        <InfoText text="Халилов Р.Н.:" />
        <InfoText text="9" />
        <InfoText text="2" />
        <InfoText text="6" />
        <InfoText text="1" />
        <InfoText text="" />
        <InfoSeparator />
        <InfoText text="Балабанов А.А.:" />
        <InfoText text="10" />
        <InfoText text="2" />
        <InfoText text="5" />
        <InfoText text="3" />
        <InfoText text="" />
        <InfoSeparator />
        <InfoText text="Дружинина Е.Ю.:" />
        <InfoText text="5" />
        <InfoText text="0" />
        <InfoText text="3" />
        <InfoText text="2" />
        <InfoText text="" />
        <InfoSeparator />
        <InfoText text="Еноткин А.А.:" />
        <InfoText text="7" />
        <InfoText text="1" />
        <InfoText text="5" />
        <InfoText text="1" />
        <InfoText text="" />
        <InfoSeparator />
        <InfoText text="Киселев А.С.:" />
        <InfoText text="9" />
        <InfoText text="1" />
        <InfoText text="4" />
        <InfoText text="4" />
        <InfoText text="" />
        <InfoSeparator />
        <InfoText text="Марчук В.А.:" />
        <InfoText text="6" />
        <InfoText text="2" />
        <InfoText text="2" />
        <InfoText text="2" />
        <InfoText text="" />
        <InfoSeparator />
        <InfoText text="Черногоров А.Ю.:" />
        <InfoText text="2" />
        <InfoText text="1" />
        <InfoText text="0" />
        <InfoText text="1" />
        <InfoText text="" />
        <InfoSeparator />
      </InfoTable>
    </>
  );
};

export default ModalInfo;
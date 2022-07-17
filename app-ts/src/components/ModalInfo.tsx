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
    let assignedExps = {
      Handwriting: 0,
      TCED: 0,
      Portrait: 0,
      Total: 0
    }
    let resultExps = {
      Handwriting: 0,
      TCED: 0,
      Portrait: 0,
      Total: 0
    }
    let articleExps = {
      Handwriting: {
        'Всего': 0,
        'ст 101': 0,
        'ст 105': 0,
        'ст 158,159,160': 0,
        'ст 186,187': 0,
        'ст 222': 0,
        'ст 264': 0
      },
      TCED: {
        'Всего': 0,
        'ст 101': 0,
        'ст 105': 0,
        'ст 158,159,160': 0,
        'ст 186,187': 0,
        'ст 222': 0,
        'ст 264': 0
      },
      Portrait: {
        'Всего': 0,
        'ст 101': 0,
        'ст 105': 0,
        'ст 158,159,160': 0,
        'ст 186,187': 0,
        'ст 222': 0,
        'ст 264': 0
      },
      Verifications: 0,
      Total: {
        'Всего': 0,
        'ст 101': 0,
        'ст 105': 0,
        'ст 158,159,160': 0,
        'ст 186,187': 0,
        'ст 222': 0,
        'ст 264': 0
      }
    }

    arr.forEach(item => {
      assignedExps.Total += 1
      if (item.getTypeOfExpertise() === 'Почерковедческая') {
        assignedExps.Handwriting += 1
        if (item.getResult() === 'Результативная') {
          resultExps.Handwriting += 1
          resultExps.Total += 1
        }
      }
      if (item.getTypeOfExpertise() === 'ТКЭД общ.' || item.getTypeOfExpertise() === 'ТКЭД ден.') {
        assignedExps.TCED += 1
        if (item.getResult() === 'Результативная') {
          resultExps.TCED += 1
          resultExps.Total += 1
        }
      }
      if (item.getTypeOfExpertise() === 'Портретная') {
        assignedExps.Portrait += 1
        if (item.getResult() === 'Результативная') {
          resultExps.Portrait += 1
          resultExps.Total += 1
        }
      }

      if (item.getTypeOfMaterial() === 'УД') {
        articleExps.Total['Всего'] += 1
        if (item.getArticle() === 'ст. 101 УК РФ') {
          articleExps.Total['ст 101'] += 1 
          if (item.getTypeOfExpertise() === 'Почерковедческая') {
            articleExps.Handwriting['Всего'] += 1
            articleExps.Handwriting['ст 101'] += 1
          }
          if (item.getTypeOfExpertise() === 'ТКЭД общ.' || item.getTypeOfExpertise() === 'ТКЭД ден.') {
            articleExps.TCED['Всего'] += 1
            articleExps.TCED['ст 101'] += 1
          }
          if (item.getTypeOfExpertise() === 'Портретная') {
            articleExps.Portrait['Всего'] += 1
            articleExps.Portrait['ст 101'] += 1
          }
        }
        if (item.getArticle() === 'ст. 105 УК РФ') {
          articleExps.Total['ст 105'] += 1
          if (item.getTypeOfExpertise() === 'Почерковедческая') {
            articleExps.Handwriting['Всего'] += 1
            articleExps.Handwriting['ст 105'] += 1
          }
          if (item.getTypeOfExpertise() === 'ТКЭД общ.' || item.getTypeOfExpertise() === 'ТКЭД ден.') {
            articleExps.TCED['Всего'] += 1
            articleExps.TCED['ст 105'] += 1
          }
          if (item.getTypeOfExpertise() === 'Портретная') {
            articleExps.Portrait['Всего'] += 1
            articleExps.Portrait['ст 105'] += 1
          }
        }
        if (item.getArticle() === 'ст. 158, 159, 160 УК РФ') {
          articleExps.Total['ст 158,159,160'] += 1
          if (item.getTypeOfExpertise() === 'Почерковедческая') {
            articleExps.Handwriting['Всего'] += 1
            articleExps.Handwriting['ст 158,159,160'] += 1
          }
          if (item.getTypeOfExpertise() === 'ТКЭД общ.' || item.getTypeOfExpertise() === 'ТКЭД ден.') {
            articleExps.TCED['Всего'] += 1
            articleExps.TCED['ст 158,159,160'] += 1
          }
          if (item.getTypeOfExpertise() === 'Портретная') {
            articleExps.Portrait['Всего'] += 1
            articleExps.Portrait['ст 158,159,160'] += 1
          }
        }
        if (item.getArticle() === 'ст. 186, 187 УК РФ') {
          articleExps.Total['ст 186,187'] += 1
          if (item.getTypeOfExpertise() === 'Почерковедческая') {
            articleExps.Handwriting['Всего'] += 1
            articleExps.Handwriting['ст 186,187'] += 1
          }
          if (item.getTypeOfExpertise() === 'ТКЭД общ.' || item.getTypeOfExpertise() === 'ТКЭД ден.') {
            articleExps.TCED['Всего'] += 1
            articleExps.TCED['ст 186,187'] += 1
          }
          if (item.getTypeOfExpertise() === 'Портретная') {
            articleExps.Portrait['Всего'] += 1
            articleExps.Portrait['ст 186,187'] += 1
          }
        }
        if (item.getArticle() === 'ст. 222 УК РФ') {
          articleExps.Total['ст 222'] += 1
          if (item.getTypeOfExpertise() === 'Почерковедческая') {
            articleExps.Handwriting['Всего'] += 1
            articleExps.Handwriting['ст 222'] += 1
          }
          if (item.getTypeOfExpertise() === 'ТКЭД общ.' || item.getTypeOfExpertise() === 'ТКЭД ден.') {
            articleExps.TCED['Всего'] += 1
            articleExps.TCED['ст 222'] += 1
          }
          if (item.getTypeOfExpertise() === 'Портретная') {
            articleExps.Portrait['Всего'] += 1
            articleExps.Portrait['ст 222'] += 1
          }
        }
        if (item.getArticle() === 'ст. 264 УК РФ') {
          articleExps.Total['ст 264'] += 1
          if (item.getTypeOfExpertise() === 'Почерковедческая') {
            articleExps.Handwriting['Всего'] += 1
            articleExps.Handwriting['ст 264'] += 1
          }
          if (item.getTypeOfExpertise() === 'ТКЭД общ.' || item.getTypeOfExpertise() === 'ТКЭД ден.') {
            articleExps.TCED['Всего'] += 1
            articleExps.TCED['ст 264'] += 1
          }
          if (item.getTypeOfExpertise() === 'Портретная') {
            articleExps.Portrait['Всего'] += 1
            articleExps.Portrait['ст 264'] += 1
          }
        }
      }
      if (item.getDateVerificationStart() !== '') {
        articleExps.Verifications += 1
      }
    })

    report.setAssignedHandwritingExps(assignedExps.Handwriting.toString())
    report.setAssignedTCEDExps(assignedExps.TCED.toString())
    report.setAssignedPortraitExps(assignedExps.Portrait.toString())
    report.setAssignedTotalExps(assignedExps.Total.toString())
    report.setResultHandwritingExps(resultExps.Handwriting.toString())
    report.setResultTCEDExps(resultExps.TCED.toString())
    report.setResultPortraitExps(resultExps.Portrait.toString())
    report.setResultTotalExps(resultExps.Total.toString())
    
    report.setArticleExpsHandwriting(articleExps.Handwriting['Всего'].toString(), articleExps.Handwriting['ст 101'].toString(), articleExps.Handwriting['ст 105'].toString(), articleExps.Handwriting['ст 158,159,160'].toString(), articleExps.Handwriting['ст 186,187'].toString(), articleExps.Handwriting['ст 222'].toString(), articleExps.Handwriting['ст 264'].toString())
    
    report.setArticleExpsTCED(articleExps.TCED['Всего'].toString(), articleExps.TCED['ст 101'].toString(), articleExps.TCED['ст 105'].toString(), articleExps.TCED['ст 158,159,160'].toString(), articleExps.TCED['ст 186,187'].toString(), articleExps.TCED['ст 222'].toString(), articleExps.TCED['ст 264'].toString())
    
    report.setArticleExpsPortrait(articleExps.Portrait['Всего'].toString(), articleExps.Portrait['ст 101'].toString(), articleExps.Portrait['ст 105'].toString(), articleExps.Portrait['ст 158,159,160'].toString(), articleExps.Portrait['ст 186,187'].toString(), articleExps.Portrait['ст 222'].toString(), articleExps.Portrait['ст 264'].toString())

    report.setArticleExpsVerifications(articleExps.Verifications.toString())
    
    report.setArticleExpsTotal(articleExps.Total['Всего'].toString(), articleExps.Total['ст 101'].toString(), articleExps.Total['ст 105'].toString(), articleExps.Total['ст 158,159,160'].toString(), articleExps.Total['ст 186,187'].toString(), articleExps.Total['ст 222'].toString(), articleExps.Total['ст 264'].toString())

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
        <InfoText text={report.getArticleExpsTotal('Всего')} />
        <InfoText text={report.getArticleExpsHandwriting('Всего')} />
        <InfoText text={report.getArticleExpsTCED('Всего')} />
        <InfoText text={report.getArticleExpsPortrait('Всего')} />
        <InfoText text={report.getArticleExpsVerifications()} />
        <InfoSeparator />
        <InfoText text="ст. 101 УК РФ:" />
        <InfoText text={report.getArticleExpsTotal('ст 101')} />
        <InfoText text={report.getArticleExpsHandwriting('ст 101')} />
        <InfoText text={report.getArticleExpsTCED('ст 101')} />
        <InfoText text={report.getArticleExpsPortrait('ст 101')} />
        <InfoText text="" />
        <InfoSeparator />
        <InfoText text="ст. 105 УК РФ:" />
        <InfoText text={report.getArticleExpsTotal('ст 105')} />
        <InfoText text={report.getArticleExpsHandwriting('ст 105')} />
        <InfoText text={report.getArticleExpsTCED('ст 105')} />
        <InfoText text={report.getArticleExpsPortrait('ст 105')} />
        <InfoText text="" />
        <InfoSeparator />
        <InfoText text="ст. 158, 159, 160 УК РФ:" />
        <InfoText text={report.getArticleExpsTotal('ст 158,159,160')} />
        <InfoText text={report.getArticleExpsHandwriting('ст 158,159,160')} />
        <InfoText text={report.getArticleExpsTCED('ст 158,159,160')} />
        <InfoText text={report.getArticleExpsPortrait('ст 158,159,160')} />
        <InfoText text="" />
        <InfoSeparator />
        <InfoText text="ст. 186, 187 УК РФ:" />
        <InfoText text={report.getArticleExpsTotal('ст 186,187')} />
        <InfoText text={report.getArticleExpsHandwriting('ст 186,187')} />
        <InfoText text={report.getArticleExpsTCED('ст 186,187')} />
        <InfoText text={report.getArticleExpsPortrait('ст 186,187')} />
        <InfoText text="" />
        <InfoSeparator />
        <InfoText text="ст. 222 УК РФ:" />
        <InfoText text={report.getArticleExpsTotal('ст 222')} />
        <InfoText text={report.getArticleExpsHandwriting('ст 222')} />
        <InfoText text={report.getArticleExpsTCED('ст 222')} />
        <InfoText text={report.getArticleExpsPortrait('ст 222')} />
        <InfoText text="" />
        <InfoSeparator />
        <InfoText text="ст. 264 УК РФ:" />
        <InfoText text={report.getArticleExpsTotal('ст 264')} />
        <InfoText text={report.getArticleExpsHandwriting('ст 264')} />
        <InfoText text={report.getArticleExpsTCED('ст 264')} />
        <InfoText text={report.getArticleExpsPortrait('ст 264')} />
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
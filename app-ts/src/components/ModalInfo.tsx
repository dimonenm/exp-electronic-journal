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
        'ст 158': 0,
        'ст 159': 0,
        'ст 160': 0,
        'ст 186,187': 0,
        'ст 222': 0,
        'ст 264': 0
      },
      TCED: {
        'Всего': 0,
        'ст 101': 0,
        'ст 105': 0,
        'ст 158': 0,
        'ст 159': 0,
        'ст 160': 0,
        'ст 186,187': 0,
        'ст 222': 0,
        'ст 264': 0
      },
      Portrait: {
        'Всего': 0,
        'ст 101': 0,
        'ст 105': 0,
        'ст 158': 0,
        'ст 159': 0,
        'ст 160': 0,
        'ст 186,187': 0,
        'ст 222': 0,
        'ст 264': 0
      },
      Verifications: 0,
      Total: {
        'Всего': 0,
        'ст 101': 0,
        'ст 105': 0,
        'ст 158': 0,
        'ст 159': 0,
        'ст 160': 0,
        'ст 186,187': 0,
        'ст 222': 0,
        'ст 264': 0
      }
    }
    let executorExps = {
      Handwriting: {
        'Всего': 0,
        'Польченко Т.В.': 0,
        'Поволодцкий Д.Г.': 0,
        'Васильев И.С.': 0,
        'Арзяков Д.Н.': 0,
        'Халилов Р.Н.': 0,
        'Балабанов А.А.': 0,
        'Голынков Д.Н.': 0,
        'Шулипа Е.Ю.': 0,
        'Киселев А.С.': 0,
        'Марчук В.А.': 0
      },
      TCED: {
        'Всего': 0,
        'Польченко Т.В.': 0,
        'Поволодцкий Д.Г.': 0,
        'Васильев И.С.': 0,
        'Арзяков Д.Н.': 0,
        'Халилов Р.Н.': 0,
        'Балабанов А.А.': 0,
        'Голынков Д.Н.': 0,
        'Шулипа Е.Ю.': 0,
        'Киселев А.С.': 0,
        'Марчук В.А.': 0,
      },
      Portrait: {
        'Всего': 0,
        'Польченко Т.В.': 0,
        'Поволодцкий Д.Г.': 0,
        'Васильев И.С.': 0,
        'Арзяков Д.Н.': 0,
        'Халилов Р.Н.': 0,
        'Балабанов А.А.': 0,
        'Голынков Д.Н.': 0,
        'Шулипа Е.Ю.': 0,
        'Киселев А.С.': 0,
        'Марчук В.А.': 0
      },
      Verifications: {
        'Всего': 0,
        'Польченко Т.В.': 0,
        'Поволодцкий Д.Г.': 0,
        'Васильев И.С.': 0,
        'Арзяков Д.Н.': 0,
        'Халилов Р.Н.': 0,
        'Балабанов А.А.': 0,
        'Голынков Д.Н.': 0,
        'Шулипа Е.Ю.': 0,
        'Киселев А.С.': 0,
        'Марчук В.А.': 0
      },
      Total: {
        'Всего': 0,
        'Польченко Т.В.': 0,
        'Поволодцкий Д.Г.': 0,
        'Васильев И.С.': 0,
        'Арзяков Д.Н.': 0,
        'Халилов Р.Н.': 0,
        'Балабанов А.А.': 0,
        'Голынков Д.Н.': 0,
        'Шулипа Е.Ю.': 0,
        'Киселев А.С.': 0,
        'Марчук В.А.': 0
      }
    }
    let expertisesWithPetition: number = 0
    let expertiseDaysSpent: {
      'до 5 дней': 0,
      'до 15 дней': 0,
      'более 15 дней': 0
    } = {
      'до 5 дней': 0,
      'до 15 дней': 0,
      'более 15 дней': 0
    }


    arr.forEach(item => {
      assignedExps.Total += 1
      executorExps.Total['Всего'] += 1
      if (item.getTypeOfExpertise() === 'Почерковедческая') {
        assignedExps.Handwriting += 1
        executorExps.Handwriting['Всего'] += 1
        if (item.getResult() === 'Результативная') {
          resultExps.Handwriting += 1
          resultExps.Total += 1
        }
        if (item.getExecutor() === 'Польченко Т.В.') {
          executorExps.Handwriting['Польченко Т.В.'] += 1
          executorExps.Total['Польченко Т.В.'] += 1
        }
        if (item.getExecutor() === 'Поволодцкий Д.Г.') {
          executorExps.Handwriting['Поволодцкий Д.Г.'] += 1
          executorExps.Total['Поволодцкий Д.Г.'] += 1
        }
        if (item.getExecutor() === 'Васильев И.С.') {
          executorExps.Handwriting['Васильев И.С.'] += 1
          executorExps.Total['Васильев И.С.'] += 1
        }
        if (item.getExecutor() === 'Арзяков Д.Н.') {
          executorExps.Handwriting['Арзяков Д.Н.'] += 1
          executorExps.Total['Арзяков Д.Н.'] += 1
        }
        if (item.getExecutor() === 'Халилов Р.Н.') {
          executorExps.Handwriting['Халилов Р.Н.'] += 1
          executorExps.Total['Халилов Р.Н.'] += 1
        }
        if (item.getExecutor() === 'Балабанов А.А.') {
          executorExps.Handwriting['Балабанов А.А.'] += 1
          executorExps.Total['Балабанов А.А.'] += 1
        }
        if (item.getExecutor() === 'Голынков Д.Н.') {
          executorExps.Handwriting['Голынков Д.Н.'] += 1
          executorExps.Total['Голынков Д.Н.'] += 1
        }
        if (item.getExecutor() === 'Шулипа Е.Ю.') {
          executorExps.Handwriting['Шулипа Е.Ю.'] += 1
          executorExps.Total['Шулипа Е.Ю.'] += 1
        }
        if (item.getExecutor() === 'Киселев А.С.') {
          executorExps.Handwriting['Киселев А.С.'] += 1
          executorExps.Total['Киселев А.С.'] += 1
        }
        if (item.getExecutor() === 'Марчук В.А.') {
          executorExps.Handwriting['Марчук В.А.'] += 1
          executorExps.Total['Марчук В.А.'] += 1
        }
      }
      if (item.getTypeOfExpertise() === 'ТКЭД общ.' || item.getTypeOfExpertise() === 'ТКЭД ден.') {
        assignedExps.TCED += 1
        executorExps.TCED['Всего'] += 1
        if (item.getResult() === 'Результативная') {
          resultExps.TCED += 1
          resultExps.Total += 1
        }
        if (item.getExecutor() === 'Польченко Т.В.') {
          executorExps.TCED['Польченко Т.В.'] += 1
          executorExps.Total['Польченко Т.В.'] += 1
        }
        if (item.getExecutor() === 'Поволодцкий Д.Г.') {
          executorExps.TCED['Поволодцкий Д.Г.'] += 1
          executorExps.Total['Поволодцкий Д.Г.'] += 1
        }
        if (item.getExecutor() === 'Васильев И.С.') {
          executorExps.TCED['Васильев И.С.'] += 1
          executorExps.Total['Васильев И.С.'] += 1
        }
        if (item.getExecutor() === 'Арзяков Д.Н.') {
          executorExps.TCED['Арзяков Д.Н.'] += 1
          executorExps.Total['Арзяков Д.Н.'] += 1
        }
        if (item.getExecutor() === 'Халилов Р.Н.') {
          executorExps.TCED['Халилов Р.Н.'] += 1
          executorExps.Total['Халилов Р.Н.'] += 1
        }
        if (item.getExecutor() === 'Балабанов А.А.') {
          executorExps.TCED['Балабанов А.А.'] += 1
          executorExps.Total['Балабанов А.А.'] += 1
        }
        if (item.getExecutor() === 'Голынков Д.Н.') {
          executorExps.TCED['Голынков Д.Н.'] += 1
          executorExps.Total['Голынков Д.Н.'] += 1
        }
        if (item.getExecutor() === 'Шулипа Е.Ю.') {
          executorExps.TCED['Шулипа Е.Ю.'] += 1
          executorExps.Total['Шулипа Е.Ю.'] += 1
        }
        if (item.getExecutor() === 'Киселев А.С.') {
          executorExps.TCED['Киселев А.С.'] += 1
          executorExps.Total['Киселев А.С.'] += 1
        }
        if (item.getExecutor() === 'Марчук В.А.') {
          executorExps.TCED['Марчук В.А.'] += 1
          executorExps.Total['Марчук В.А.'] += 1
        }
      }
      if (item.getTypeOfExpertise() === 'Портретная') {
        assignedExps.Portrait += 1
        executorExps.Portrait['Всего'] += 1
        if (item.getResult() === 'Результативная') {
          resultExps.Portrait += 1
          resultExps.Total += 1
        }
        if (item.getExecutor() === 'Польченко Т.В.') {
          executorExps.Portrait['Польченко Т.В.'] += 1
          executorExps.Total['Польченко Т.В.'] += 1
        }
        if (item.getExecutor() === 'Поволодцкий Д.Г.') {
          executorExps.Portrait['Поволодцкий Д.Г.'] += 1
          executorExps.Total['Поволодцкий Д.Г.'] += 1
        }
        if (item.getExecutor() === 'Васильев И.С.') {
          executorExps.Portrait['Васильев И.С.'] += 1
          executorExps.Total['Васильев И.С.'] += 1
        }
        if (item.getExecutor() === 'Арзяков Д.Н.') {
          executorExps.Portrait['Арзяков Д.Н.'] += 1
          executorExps.Total['Арзяков Д.Н.'] += 1
        }
        if (item.getExecutor() === 'Халилов Р.Н.') {
          executorExps.Portrait['Халилов Р.Н.'] += 1
          executorExps.Total['Халилов Р.Н.'] += 1
        }
        if (item.getExecutor() === 'Балабанов А.А.') {
          executorExps.Portrait['Балабанов А.А.'] += 1
          executorExps.Total['Балабанов А.А.'] += 1
        }
        if (item.getExecutor() === 'Голынков Д.Н.') {
          executorExps.Portrait['Голынков Д.Н.'] += 1
          executorExps.Total['Голынков Д.Н.'] += 1
        }
        if (item.getExecutor() === 'Шулипа Е.Ю.') {
          executorExps.Portrait['Шулипа Е.Ю.'] += 1
          executorExps.Total['Шулипа Е.Ю.'] += 1
        }
        if (item.getExecutor() === 'Киселев А.С.') {
          executorExps.Portrait['Киселев А.С.'] += 1
          executorExps.Total['Киселев А.С.'] += 1
        }
        if (item.getExecutor() === 'Марчук В.А.') {
          executorExps.Portrait['Марчук В.А.'] += 1
          executorExps.Total['Марчук В.А.'] += 1
        }
      }
      if (item.getTypeOfMaterial() === 'УД') {
        if (item.getArticle() === 'ст. 101 УК РФ') {
          articleExps.Total['Всего'] += 1
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
          articleExps.Total['Всего'] += 1
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
        if (item.getArticle() === 'ст. 158 УК РФ') {
          articleExps.Total['Всего'] += 1
          articleExps.Total['ст 158'] += 1
          if (item.getTypeOfExpertise() === 'Почерковедческая') {
            articleExps.Handwriting['Всего'] += 1
            articleExps.Handwriting['ст 158'] += 1
          }
          if (item.getTypeOfExpertise() === 'ТКЭД общ.' || item.getTypeOfExpertise() === 'ТКЭД ден.') {
            articleExps.TCED['Всего'] += 1
            articleExps.TCED['ст 158'] += 1
          }
          if (item.getTypeOfExpertise() === 'Портретная') {
            articleExps.Portrait['Всего'] += 1
            articleExps.Portrait['ст 158'] += 1
          }
        }
        if (item.getArticle() === 'ст. 159 УК РФ') {
          articleExps.Total['Всего'] += 1
          articleExps.Total['ст 159'] += 1
          if (item.getTypeOfExpertise() === 'Почерковедческая') {
            articleExps.Handwriting['Всего'] += 1
            articleExps.Handwriting['ст 159'] += 1
          }
          if (item.getTypeOfExpertise() === 'ТКЭД общ.' || item.getTypeOfExpertise() === 'ТКЭД ден.') {
            articleExps.TCED['Всего'] += 1
            articleExps.TCED['ст 159'] += 1
          }
          if (item.getTypeOfExpertise() === 'Портретная') {
            articleExps.Portrait['Всего'] += 1
            articleExps.Portrait['ст 159'] += 1
          }
        }
        if (item.getArticle() === 'ст. 160 УК РФ') {
          articleExps.Total['Всего'] += 1
          articleExps.Total['ст 160'] += 1
          if (item.getTypeOfExpertise() === 'Почерковедческая') {
            articleExps.Handwriting['Всего'] += 1
            articleExps.Handwriting['ст 160'] += 1
          }
          if (item.getTypeOfExpertise() === 'ТКЭД общ.' || item.getTypeOfExpertise() === 'ТКЭД ден.') {
            articleExps.TCED['Всего'] += 1
            articleExps.TCED['ст 160'] += 1
          }
          if (item.getTypeOfExpertise() === 'Портретная') {
            articleExps.Portrait['Всего'] += 1
            articleExps.Portrait['ст 160'] += 1
          }
        }
        if (item.getArticle() === 'ст. 186, 187 УК РФ') {
          articleExps.Total['Всего'] += 1
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
          articleExps.Total['Всего'] += 1
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
          articleExps.Total['Всего'] += 1
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
        executorExps.Verifications['Всего'] += 1
        if (item.getVerificationExecutor() === 'Польченко Т.В.') {
          executorExps.Verifications['Польченко Т.В.'] += 1
        }
        if (item.getExecutor() === 'Поволодцкий Д.Г.') {
          executorExps.Verifications['Поволодцкий Д.Г.'] += 1
        }
        if (item.getExecutor() === 'Васильев И.С.') {
          executorExps.Verifications['Васильев И.С.'] += 1
        }
        if (item.getExecutor() === 'Арзяков Д.Н.') {
          executorExps.Verifications['Арзяков Д.Н.'] += 1
        }
        if (item.getExecutor() === 'Халилов Р.Н.') {
          executorExps.Verifications['Халилов Р.Н.'] += 1
        }
        if (item.getExecutor() === 'Балабанов А.А.') {
          executorExps.Verifications['Балабанов А.А.'] += 1
        }
        if (item.getExecutor() === 'Голынков Д.Н.') {
          executorExps.Verifications['Голынков Д.Н.'] += 1
        }
        if (item.getExecutor() === 'Шулипа Е.Ю.') {
          executorExps.Verifications['Шулипа Е.Ю.'] += 1
        }
        if (item.getExecutor() === 'Киселев А.С.') {
          executorExps.Verifications['Киселев А.С.'] += 1
        }
        if (item.getExecutor() === 'Марчук В.А.') {
          executorExps.Verifications['Марчук В.А.'] += 1
        }
      }

      if (item.getDatePetitionStart() !== '') {
        expertisesWithPetition += 1
      }
      if (item.getDateExpComplete() !== '') {
        const start = Number(new Date(item.getDateOfReceipt()))
        const end = Number(new Date(item.getDateExpComplete()))
        const res = (end - start) / 1000 / 60 / 60 / 24
        if (res > 0 && res < 5) {
          expertiseDaysSpent['до 5 дней'] += 1
        } else if (res >= 5 && res < 14) {
          expertiseDaysSpent['до 15 дней'] += 1
        } else if (res >= 15) {
          expertiseDaysSpent['более 15 дней'] += 1
        }
      }
    })
    console.log('экспертизПоЗатраченвмДням: ', expertiseDaysSpent['более 15 дней']);
    console.log('экспертизСХодатайством: ', expertisesWithPetition);

    report.setAssignedHandwritingExps(assignedExps.Handwriting.toString())
    report.setAssignedTCEDExps(assignedExps.TCED.toString())
    report.setAssignedPortraitExps(assignedExps.Portrait.toString())
    report.setAssignedTotalExps(assignedExps.Total.toString())
    report.setResultHandwritingExps(resultExps.Handwriting.toString())
    report.setResultTCEDExps(resultExps.TCED.toString())
    report.setResultPortraitExps(resultExps.Portrait.toString())
    report.setResultTotalExps(resultExps.Total.toString())
    report.setExpertisesWithPetition(expertisesWithPetition.toString())
    report.setExpertiseDaysSpent(
      expertiseDaysSpent['до 5 дней'].toString(),
      expertiseDaysSpent['до 15 дней'].toString(),
      expertiseDaysSpent['более 15 дней'].toString()
    )
    report.setArticleExpsHandwriting(
      articleExps.Handwriting['Всего'].toString(),
      articleExps.Handwriting['ст 101'].toString(),
      articleExps.Handwriting['ст 105'].toString(),
      articleExps.Handwriting['ст 158'].toString(),
      articleExps.Handwriting['ст 159'].toString(),
      articleExps.Handwriting['ст 160'].toString(),
      articleExps.Handwriting['ст 186,187'].toString(),
      articleExps.Handwriting['ст 222'].toString(),
      articleExps.Handwriting['ст 264'].toString()
    )
    report.setArticleExpsTCED(
      articleExps.TCED['Всего'].toString(),
      articleExps.TCED['ст 101'].toString(),
      articleExps.TCED['ст 105'].toString(),
      articleExps.TCED['ст 158'].toString(),
      articleExps.TCED['ст 159'].toString(),
      articleExps.TCED['ст 160'].toString(),
      articleExps.TCED['ст 186,187'].toString(),
      articleExps.TCED['ст 222'].toString(),
      articleExps.TCED['ст 264'].toString()
    )
    report.setArticleExpsPortrait(
      articleExps.Portrait['Всего'].toString(),
      articleExps.Portrait['ст 101'].toString(),
      articleExps.Portrait['ст 105'].toString(),
      articleExps.Portrait['ст 158'].toString(),
      articleExps.Portrait['ст 159'].toString(),
      articleExps.Portrait['ст 160'].toString(),
      articleExps.Portrait['ст 186,187'].toString(),
      articleExps.Portrait['ст 222'].toString(),
      articleExps.Portrait['ст 264'].toString()
    )
    report.setArticleExpsVerifications(articleExps.Verifications.toString())
    report.setArticleExpsTotal(
      articleExps.Total['Всего'].toString(),
      articleExps.Total['ст 101'].toString(),
      articleExps.Total['ст 105'].toString(),
      articleExps.Total['ст 158'].toString(),
      articleExps.Total['ст 159'].toString(),
      articleExps.Total['ст 160'].toString(),
      articleExps.Total['ст 186,187'].toString(),
      articleExps.Total['ст 222'].toString(),
      articleExps.Total['ст 264'].toString()
    )
    report.setExecutorExpsHandwriting(
      executorExps.Handwriting['Всего'].toString(),
      executorExps.Handwriting['Польченко Т.В.'].toString(),
      executorExps.Handwriting['Поволодцкий Д.Г.'].toString(),
      executorExps.Handwriting['Васильев И.С.'].toString(),
      executorExps.Handwriting['Арзяков Д.Н.'].toString(),
      executorExps.Handwriting['Халилов Р.Н.'].toString(),
      executorExps.Handwriting['Балабанов А.А.'].toString(),
      executorExps.Handwriting['Голынков Д.Н.'].toString(),
      executorExps.Handwriting['Шулипа Е.Ю.'].toString(),
      executorExps.Handwriting['Киселев А.С.'].toString(),
      executorExps.Handwriting['Марчук В.А.'].toString()
    )
    report.setExecutorExpsTCED(
      executorExps.TCED['Всего'].toString(),
      executorExps.TCED['Польченко Т.В.'].toString(),
      executorExps.TCED['Поволодцкий Д.Г.'].toString(),
      executorExps.TCED['Васильев И.С.'].toString(),
      executorExps.TCED['Арзяков Д.Н.'].toString(),
      executorExps.TCED['Халилов Р.Н.'].toString(),
      executorExps.TCED['Балабанов А.А.'].toString(),
      executorExps.TCED['Голынков Д.Н.'].toString(),
      executorExps.TCED['Шулипа Е.Ю.'].toString(),
      executorExps.TCED['Киселев А.С.'].toString(),
      executorExps.TCED['Марчук В.А.'].toString()
    )
    report.setExecutorExpsPortrait(
      executorExps.Portrait['Всего'].toString(),
      executorExps.Portrait['Польченко Т.В.'].toString(),
      executorExps.Portrait['Поволодцкий Д.Г.'].toString(),
      executorExps.Portrait['Васильев И.С.'].toString(),
      executorExps.Portrait['Арзяков Д.Н.'].toString(),
      executorExps.Portrait['Халилов Р.Н.'].toString(),
      executorExps.Portrait['Балабанов А.А.'].toString(),
      executorExps.Portrait['Голынков Д.Н.'].toString(),
      executorExps.Portrait['Шулипа Е.Ю.'].toString(),
      executorExps.Portrait['Киселев А.С.'].toString(),
      executorExps.Portrait['Марчук В.А.'].toString()
    )
    report.setExecutorExpsVerifications(
      executorExps.Verifications['Всего'].toString(),
      executorExps.Verifications['Польченко Т.В.'].toString(),
      executorExps.Verifications['Поволодцкий Д.Г.'].toString(),
      executorExps.Verifications['Васильев И.С.'].toString(),
      executorExps.Verifications['Арзяков Д.Н.'].toString(),
      executorExps.Verifications['Халилов Р.Н.'].toString(),
      executorExps.Verifications['Балабанов А.А.'].toString(),
      executorExps.Verifications['Голынков Д.Н.'].toString(),
      executorExps.Verifications['Шулипа Е.Ю.'].toString(),
      executorExps.Verifications['Киселев А.С.'].toString(),
      executorExps.Verifications['Марчук В.А.'].toString()
    )
    report.setExecutorExpsTotal(
      executorExps.Total['Всего'].toString(),
      executorExps.Total['Польченко Т.В.'].toString(),
      executorExps.Total['Поволодцкий Д.Г.'].toString(),
      executorExps.Total['Васильев И.С.'].toString(),
      executorExps.Total['Арзяков Д.Н.'].toString(),
      executorExps.Total['Халилов Р.Н.'].toString(),
      executorExps.Total['Балабанов А.А.'].toString(),
      executorExps.Total['Голынков Д.Н.'].toString(),
      executorExps.Total['Шулипа Е.Ю.'].toString(),
      executorExps.Total['Киселев А.С.'].toString(),
      executorExps.Total['Марчук В.А.'].toString()
    )
    return report
  }

  if (searchArr?.length) {
    report = addReportData(searchArr)
  } else {
    report = addReportData(dbExps)
  }
console.log('get', report.getExpertiseDaysSpent('до 5 дней'));
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
      <InfoTitle text="Количество вынесенных ходатайств" />
      <InfoText text="Всего:" />
      <InfoText text={report.getExpertisesWithPetition()} />
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
      <InfoTitle text="Количество дней затраченных на производство экспертиз" />
      <div></div>
      <div></div>
      <InfoText text="до 5 дней:" />
      <InfoText text={report.getExpertiseDaysSpent('до 5 дней')}/>
      <InfoText text="до 15 дней:" />
      <InfoText text={report.getExpertiseDaysSpent('до 15 дней')}/>
      <InfoText text="более 15 дней:" />
      <InfoText text={report.getExpertiseDaysSpent('более 15 дней')} />
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
        <InfoText text="ст. 158 УК РФ:" />
        <InfoText text={report.getArticleExpsTotal('ст 158')} />
        <InfoText text={report.getArticleExpsHandwriting('ст 158')} />
        <InfoText text={report.getArticleExpsTCED('ст 158')} />
        <InfoText text={report.getArticleExpsPortrait('ст 158')} />
        <InfoText text="" />
        <InfoSeparator />
        <InfoText text="ст. 159 УК РФ:" />
        <InfoText text={report.getArticleExpsTotal('ст 159')} />
        <InfoText text={report.getArticleExpsHandwriting('ст 159')} />
        <InfoText text={report.getArticleExpsTCED('ст 159')} />
        <InfoText text={report.getArticleExpsPortrait('ст 159')} />
        <InfoText text="" />
        <InfoSeparator />
        <InfoText text="ст. 160 УК РФ:" />
        <InfoText text={report.getArticleExpsTotal('ст 160')} />
        <InfoText text={report.getArticleExpsHandwriting('ст 160')} />
        <InfoText text={report.getArticleExpsTCED('ст 160')} />
        <InfoText text={report.getArticleExpsPortrait('ст 160')} />
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
        <InfoText text={report.getExecutorExpsTotal('Всего')} />
        <InfoText text={report.getExecutorExpsHandwriting('Всего')} />
        <InfoText text={report.getExecutorExpsTCED('Всего')} />
        <InfoText text={report.getExecutorExpsPortrait('Всего')} />
        <InfoText text={report.getExecutorExpsVerifications('Всего')} />
        <InfoSeparator />
        <InfoText text="Польченко Т.В.:" />
        <InfoText text={report.getExecutorExpsTotal('Польченко Т.В.')} />
        <InfoText text={report.getExecutorExpsHandwriting('Польченко Т.В.')} />
        <InfoText text={report.getExecutorExpsTCED('Польченко Т.В.')} />
        <InfoText text={report.getExecutorExpsPortrait('Польченко Т.В.')} />
        <InfoText text={report.getExecutorExpsVerifications('Польченко Т.В.')} />
        <InfoSeparator />
        <InfoText text="Поволодцкий Д.Г.:" />
        <InfoText text={report.getExecutorExpsTotal('Поволодцкий Д.Г.')} />
        <InfoText text={report.getExecutorExpsHandwriting('Поволодцкий Д.Г.')} />
        <InfoText text={report.getExecutorExpsTCED('Поволодцкий Д.Г.')} />
        <InfoText text={report.getExecutorExpsPortrait('Поволодцкий Д.Г.')} />
        <InfoText text={report.getExecutorExpsVerifications('Поволодцкий Д.Г.')} />
        <InfoSeparator />
        <InfoText text="Васильев И.С.:" />
        <InfoText text={report.getExecutorExpsTotal('Васильев И.С.')} />
        <InfoText text={report.getExecutorExpsHandwriting('Васильев И.С.')} />
        <InfoText text={report.getExecutorExpsTCED('Васильев И.С.')} />
        <InfoText text={report.getExecutorExpsPortrait('Васильев И.С.')} />
        <InfoText text={report.getExecutorExpsVerifications('Васильев И.С.')} />
        <InfoSeparator />
        <InfoText text="Арзяков Д.Н.:" />
        <InfoText text={report.getExecutorExpsTotal('Арзяков Д.Н.')} />
        <InfoText text={report.getExecutorExpsHandwriting('Арзяков Д.Н.')} />
        <InfoText text={report.getExecutorExpsTCED('Арзяков Д.Н.')} />
        <InfoText text={report.getExecutorExpsPortrait('Арзяков Д.Н.')} />
        <InfoText text={report.getExecutorExpsVerifications('Арзяков Д.Н.')} />
        <InfoSeparator />
        <InfoText text="Халилов Р.Н.:" />
        <InfoText text={report.getExecutorExpsTotal('Халилов Р.Н.')} />
        <InfoText text={report.getExecutorExpsHandwriting('Халилов Р.Н.')} />
        <InfoText text={report.getExecutorExpsTCED('Халилов Р.Н.')} />
        <InfoText text={report.getExecutorExpsPortrait('Халилов Р.Н.')} />
        <InfoText text={report.getExecutorExpsVerifications('Халилов Р.Н.')} />
        <InfoSeparator />
        <InfoText text="Балабанов А.А.:" />
        <InfoText text={report.getExecutorExpsTotal('Балабанов А.А.')} />
        <InfoText text={report.getExecutorExpsHandwriting('Балабанов А.А.')} />
        <InfoText text={report.getExecutorExpsTCED('Балабанов А.А.')} />
        <InfoText text={report.getExecutorExpsPortrait('Балабанов А.А.')} />
        <InfoText text={report.getExecutorExpsVerifications('Балабанов А.А.')} />
        <InfoSeparator />
        <InfoText text="Голынков Д.Н.:" />
        <InfoText text={report.getExecutorExpsTotal('Голынков Д.Н.')} />
        <InfoText text={report.getExecutorExpsHandwriting('Голынков Д.Н.')} />
        <InfoText text={report.getExecutorExpsTCED('Голынков Д.Н.')} />
        <InfoText text={report.getExecutorExpsPortrait('Голынков Д.Н.')} />
        <InfoText text={report.getExecutorExpsVerifications('Голынков Д.Н.')} />
        <InfoSeparator />
        <InfoText text="Шулипа Е.Ю.:" />
        <InfoText text={report.getExecutorExpsTotal('Шулипа Е.Ю.')} />
        <InfoText text={report.getExecutorExpsHandwriting('Шулипа Е.Ю.')} />
        <InfoText text={report.getExecutorExpsTCED('Шулипа Е.Ю.')} />
        <InfoText text={report.getExecutorExpsPortrait('Шулипа Е.Ю.')} />
        <InfoText text={report.getExecutorExpsVerifications('Шулипа Е.Ю.')} />
        <InfoSeparator />
        <InfoText text="Киселев А.С.:" />
        <InfoText text={report.getExecutorExpsTotal('Киселев А.С.')} />
        <InfoText text={report.getExecutorExpsHandwriting('Киселев А.С.')} />
        <InfoText text={report.getExecutorExpsTCED('Киселев А.С.')} />
        <InfoText text={report.getExecutorExpsPortrait('Киселев А.С.')} />
        <InfoText text={report.getExecutorExpsVerifications('Киселев А.С.')} />
        <InfoSeparator />
        <InfoText text="Марчук В.А.:" />
        <InfoText text={report.getExecutorExpsTotal('Марчук В.А.')} />
        <InfoText text={report.getExecutorExpsHandwriting('Марчук В.А.')} />
        <InfoText text={report.getExecutorExpsTCED('Марчук В.А.')} />
        <InfoText text={report.getExecutorExpsPortrait('Марчук В.А.')} />
        <InfoText text={report.getExecutorExpsVerifications('Марчук В.А.')} />
        <InfoSeparator />
      </InfoTable>
    </>
  );
};

export default ModalInfo;
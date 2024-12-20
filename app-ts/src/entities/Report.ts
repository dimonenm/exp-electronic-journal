export default class Report {
  assignedHandwritingExps: string = ''
  assignedTCEDExps: string = ''
  assignedPortraitExps: string = ''
  assignedTotalExps: string = ''
  resultHandwritingExps: string = ''
  resultTCEDExps: string = ''
  resultPortraitExps: string = ''
  resultTotalExps: string = ''
  expsWithPetition = {
    Handwriting: '0',
    TCED: '0',
    Portrait: '0',
    Total: '0',
  }
  satisfiedPetitions = {
    Handwriting: '0',
    TCED: '0',
    Portrait: '0',
    Total: '0',
  }
  expsDaysSpent = {
    Handwriting: {
      'до 5 дней': '',
      'до 15 дней': '',
      'более 15 дней': '',
    },
    TCED: {
      'до 5 дней': '',
      'до 15 дней': '',
      'более 15 дней': '',
    },
    Portrait: {
      'до 5 дней': '',
      'до 15 дней': '',
      'более 15 дней': '',
    },
    Total: {
      'до 5 дней': '',
      'до 15 дней': '',
      'более 15 дней': '',
    },
  }
  articleExps = {
    Handwriting: {
      Всего: '',
      'ст 101': '',
      'ст 105': '',
      'ст 135': '',
      'ст 158': '',
      'ст 159': '',
      'ст 160': '',
      'ст 162': '',
      'ст 167': '',
      'ст 186,187': '',
      'ст 222': '',
      'ст 264': '',
    },
    TCED: {
      Всего: '',
      'ст 101': '',
      'ст 105': '',
      'ст 135': '',
      'ст 158': '',
      'ст 159': '',
      'ст 160': '',
      'ст 162': '',
      'ст 167': '',
      'ст 186,187': '',
      'ст 222': '',
      'ст 264': '',
    },
    Portrait: {
      Всего: '',
      'ст 101': '',
      'ст 105': '',
      'ст 135': '',
      'ст 158': '',
      'ст 159': '',
      'ст 160': '',
      'ст 162': '',
      'ст 167': '',
      'ст 186,187': '',
      'ст 222': '',
      'ст 264': '',
    },
    Verifications: '',
    Total: {
      Всего: '',
      'ст 101': '',
      'ст 105': '',
      'ст 135': '',
      'ст 158': '',
      'ст 159': '',
      'ст 160': '',
      'ст 162': '',
      'ст 167': '',
      'ст 186,187': '',
      'ст 222': '',
      'ст 264': '',
    },
  }
  executorExps = {
    Handwriting: {
      Всего: '',
      'Польченко Т.В.': '',
      'Поволодцкий Д.Г.': '',
      'Васильев И.С.': '',
      'Арзяков Д.Н.': '',
      'Халилов Р.Н.': '',
      'Балабанов А.А.': '',
      'Голынков Д.Н.': '',
      'Шулипа Е.Ю.': '',
      'Миронова Е.С.': '',
      'Киселев А.С.': '',
      'Марчук В.А.': '',
    },
    TCED: {
      Всего: '',
      'Польченко Т.В.': '',
      'Поволодцкий Д.Г.': '',
      'Васильев И.С.': '',
      'Арзяков Д.Н.': '',
      'Халилов Р.Н.': '',
      'Балабанов А.А.': '',
      'Голынков Д.Н.': '',
      'Шулипа Е.Ю.': '',
      'Миронова Е.С.': '',
      'Киселев А.С.': '',
      'Марчук В.А.': '',
    },
    Portrait: {
      Всего: '',
      'Польченко Т.В.': '',
      'Поволодцкий Д.Г.': '',
      'Васильев И.С.': '',
      'Арзяков Д.Н.': '',
      'Халилов Р.Н.': '',
      'Балабанов А.А.': '',
      'Голынков Д.Н.': '',
      'Шулипа Е.Ю.': '',
      'Миронова Е.С.': '',
      'Киселев А.С.': '',
      'Марчук В.А.': '',
    },
    Verifications: {
      Всего: '',
      'Польченко Т.В.': '',
      'Поволодцкий Д.Г.': '',
      'Васильев И.С.': '',
      'Арзяков Д.Н.': '',
      'Халилов Р.Н.': '',
      'Балабанов А.А.': '',
      'Голынков Д.Н.': '',
      'Шулипа Е.Ю.': '',
      'Миронова Е.С.': '',
      'Киселев А.С.': '',
      'Марчук В.А.': '',
    },
    Total: {
      Всего: '',
      'Польченко Т.В.': '',
      'Поволодцкий Д.Г.': '',
      'Васильев И.С.': '',
      'Арзяков Д.Н.': '',
      'Халилов Р.Н.': '',
      'Балабанов А.А.': '',
      'Голынков Д.Н.': '',
      'Шулипа Е.Ю.': '',
      'Миронова Е.С.': '',
      'Киселев А.С.': '',
      'Марчук В.А.': '',
    },
  }

  getAssignedHandwritingExps(): string {
    return this.assignedHandwritingExps
  }
  getAssignedTCEDExps(): string {
    return this.assignedTCEDExps
  }
  getAssignedPortraitExps(): string {
    return this.assignedPortraitExps
  }
  getAssignedTotalExps(): string {
    return this.assignedTotalExps
  }
  getResultHandwritingExps(): string {
    return this.resultHandwritingExps
  }
  getResultTCEDExps(): string {
    return this.resultTCEDExps
  }
  getResultPortraitExps(): string {
    return this.resultPortraitExps
  }
  getResultTotalExps(): string {
    return this.resultTotalExps
  }

  getExpsWithPetition(id: string): string {
    if (id === 'Почерковедческая') return this.expsWithPetition.Handwriting
    if (id === 'ТКЭД') return this.expsWithPetition.TCED
    if (id === 'Портретная') return this.expsWithPetition.Portrait
    if (id === 'Всего') return this.expsWithPetition.Total
    return ''
  }

  getSatisfiedPetitions(id: string): string {
    if (id === 'Почерковедческая') return this.satisfiedPetitions.Handwriting
    if (id === 'ТКЭД') return this.satisfiedPetitions.TCED
    if (id === 'Портретная') return this.satisfiedPetitions.Portrait
    if (id === 'Всего') return this.satisfiedPetitions.Total
    return ''
  }
  getExpsDaysSpentHandwriting(id: string): string {
    if (id === 'до 5 дней') return this.expsDaysSpent.Handwriting['до 5 дней']
    if (id === 'до 15 дней') return this.expsDaysSpent.Handwriting['до 15 дней']
    if (id === 'более 15 дней')
      return this.expsDaysSpent.Handwriting['более 15 дней']
    return ''
  }
  getExpsDaysSpentTCED(id: string): string {
    if (id === 'до 5 дней') return this.expsDaysSpent.TCED['до 5 дней']
    if (id === 'до 15 дней') return this.expsDaysSpent.TCED['до 15 дней']
    if (id === 'более 15 дней') return this.expsDaysSpent.TCED['более 15 дней']
    return ''
  }
  getExpsDaysSpentPortrait(id: string): string {
    if (id === 'до 5 дней') return this.expsDaysSpent.Portrait['до 5 дней']
    if (id === 'до 15 дней') return this.expsDaysSpent.Portrait['до 15 дней']
    if (id === 'более 15 дней')
      return this.expsDaysSpent.Portrait['более 15 дней']
    return ''
  }
  getExpsDaysSpentTotal(id: string): string {
    if (id === 'до 5 дней') return this.expsDaysSpent.Total['до 5 дней']
    if (id === 'до 15 дней') return this.expsDaysSpent.Total['до 15 дней']
    if (id === 'более 15 дней') return this.expsDaysSpent.Total['более 15 дней']
    return ''
  }
  getArticleExpsHandwriting(id: string): string {
    if (id === 'Всего') return this.articleExps.Handwriting['Всего']
    if (id === 'ст 101') return this.articleExps.Handwriting['ст 101']
    if (id === 'ст 105') return this.articleExps.Handwriting['ст 105']
    if (id === 'ст 135') return this.articleExps.Handwriting['ст 135']
    if (id === 'ст 158') return this.articleExps.Handwriting['ст 158']
    if (id === 'ст 159') return this.articleExps.Handwriting['ст 159']
    if (id === 'ст 160') return this.articleExps.Handwriting['ст 160']
    if (id === 'ст 162') return this.articleExps.Handwriting['ст 162']
    if (id === 'ст 167') return this.articleExps.Handwriting['ст 167']
    if (id === 'ст 186,187') return this.articleExps.Handwriting['ст 186,187']
    if (id === 'ст 222') return this.articleExps.Handwriting['ст 222']
    if (id === 'ст 264') return this.articleExps.Handwriting['ст 264']
    return ''
  }
  getArticleExpsTCED(id: string): string {
    if (id === 'Всего') return this.articleExps.TCED['Всего']
    if (id === 'ст 101') return this.articleExps.TCED['ст 101']
    if (id === 'ст 105') return this.articleExps.TCED['ст 105']
    if (id === 'ст 135') return this.articleExps.TCED['ст 135']
    if (id === 'ст 158') return this.articleExps.TCED['ст 158']
    if (id === 'ст 159') return this.articleExps.TCED['ст 159']
    if (id === 'ст 160') return this.articleExps.TCED['ст 160']
    if (id === 'ст 162') return this.articleExps.TCED['ст 162']
    if (id === 'ст 167') return this.articleExps.TCED['ст 167']
    if (id === 'ст 186,187') return this.articleExps.TCED['ст 186,187']
    if (id === 'ст 222') return this.articleExps.TCED['ст 222']
    if (id === 'ст 264') return this.articleExps.TCED['ст 264']
    return ''
  }
  getArticleExpsPortrait(id: string): string {
    if (id === 'Всего') return this.articleExps.Portrait['Всего']
    if (id === 'ст 101') return this.articleExps.Portrait['ст 101']
    if (id === 'ст 105') return this.articleExps.Portrait['ст 105']
    if (id === 'ст 135') return this.articleExps.Portrait['ст 135']
    if (id === 'ст 158') return this.articleExps.Portrait['ст 158']
    if (id === 'ст 159') return this.articleExps.Portrait['ст 159']
    if (id === 'ст 160') return this.articleExps.Portrait['ст 160']
    if (id === 'ст 162') return this.articleExps.Portrait['ст 162']
    if (id === 'ст 167') return this.articleExps.Portrait['ст 167']
    if (id === 'ст 186,187') return this.articleExps.Portrait['ст 186,187']
    if (id === 'ст 222') return this.articleExps.Portrait['ст 222']
    if (id === 'ст 264') return this.articleExps.Portrait['ст 264']
    return ''
  }
  getArticleExpsVerifications(): string {
    return this.articleExps.Verifications
  }
  getArticleExpsTotal(article: string): string {
    if (article === 'Всего') return this.articleExps.Total['Всего']
    if (article === 'ст 101') return this.articleExps.Total['ст 101']
    if (article === 'ст 105') return this.articleExps.Total['ст 105']
    if (article === 'ст 135') return this.articleExps.Total['ст 135']
    if (article === 'ст 158') return this.articleExps.Total['ст 158']
    if (article === 'ст 159') return this.articleExps.Total['ст 159']
    if (article === 'ст 160') return this.articleExps.Total['ст 160']
    if (article === 'ст 162') return this.articleExps.Total['ст 162']
    if (article === 'ст 167') return this.articleExps.Total['ст 167']
    if (article === 'ст 186,187') return this.articleExps.Total['ст 186,187']
    if (article === 'ст 222') return this.articleExps.Total['ст 222']
    if (article === 'ст 264') return this.articleExps.Total['ст 264']
    return ''
  }
  getExecutorExpsHandwriting(id: string): string {
    if (id === 'Всего') return this.executorExps.Handwriting['Всего']
    if (id === 'Польченко Т.В.')
      return this.executorExps.Handwriting['Польченко Т.В.']
    if (id === 'Поволодцкий Д.Г.')
      return this.executorExps.Handwriting['Поволодцкий Д.Г.']
    if (id === 'Васильев И.С.')
      return this.executorExps.Handwriting['Васильев И.С.']
    if (id === 'Арзяков Д.Н.')
      return this.executorExps.Handwriting['Арзяков Д.Н.']
    if (id === 'Халилов Р.Н.')
      return this.executorExps.Handwriting['Халилов Р.Н.']
    if (id === 'Балабанов А.А.')
      return this.executorExps.Handwriting['Балабанов А.А.']
    if (id === 'Голынков Д.Н.')
      return this.executorExps.Handwriting['Голынков Д.Н.']
    if (id === 'Шулипа Е.Ю.')
      return this.executorExps.Handwriting['Шулипа Е.Ю.']
    if (id === 'Миронова Е.С.')
      return this.executorExps.Handwriting['Миронова Е.С.']
    if (id === 'Киселев А.С.')
      return this.executorExps.Handwriting['Киселев А.С.']
    if (id === 'Марчук В.А.')
      return this.executorExps.Handwriting['Марчук В.А.']
    return ''
  }
  getExecutorExpsTCED(id: string): string {
    if (id === 'Всего') return this.executorExps.TCED['Всего']
    if (id === 'Польченко Т.В.') return this.executorExps.TCED['Польченко Т.В.']
    if (id === 'Поволодцкий Д.Г.')
      return this.executorExps.TCED['Поволодцкий Д.Г.']
    if (id === 'Васильев И.С.') return this.executorExps.TCED['Васильев И.С.']
    if (id === 'Арзяков Д.Н.') return this.executorExps.TCED['Арзяков Д.Н.']
    if (id === 'Халилов Р.Н.') return this.executorExps.TCED['Халилов Р.Н.']
    if (id === 'Балабанов А.А.') return this.executorExps.TCED['Балабанов А.А.']
    if (id === 'Голынков Д.Н.') return this.executorExps.TCED['Голынков Д.Н.']
    if (id === 'Шулипа Е.Ю.') return this.executorExps.TCED['Шулипа Е.Ю.']
    if (id === 'Миронова Е.С.') return this.executorExps.TCED['Миронова Е.С.']
    if (id === 'Киселев А.С.') return this.executorExps.TCED['Киселев А.С.']
    if (id === 'Марчук В.А.') return this.executorExps.TCED['Марчук В.А.']
    return ''
  }
  getExecutorExpsPortrait(id: string): string {
    if (id === 'Всего') return this.executorExps.Portrait['Всего']
    if (id === 'Польченко Т.В.')
      return this.executorExps.Portrait['Польченко Т.В.']
    if (id === 'Поволодцкий Д.Г.')
      return this.executorExps.Portrait['Поволодцкий Д.Г.']
    if (id === 'Васильев И.С.')
      return this.executorExps.Portrait['Васильев И.С.']
    if (id === 'Арзяков Д.Н.') return this.executorExps.Portrait['Арзяков Д.Н.']
    if (id === 'Халилов Р.Н.') return this.executorExps.Portrait['Халилов Р.Н.']
    if (id === 'Балабанов А.А.')
      return this.executorExps.Portrait['Балабанов А.А.']
    if (id === 'Голынков Д.Н.')
      return this.executorExps.Portrait['Голынков Д.Н.']
    if (id === 'Шулипа Е.Ю.') return this.executorExps.Portrait['Шулипа Е.Ю.']
    if (id === 'Миронова Е.С.') return this.executorExps.Portrait['Миронова Е.С.']
    if (id === 'Киселев А.С.') return this.executorExps.Portrait['Киселев А.С.']
    if (id === 'Марчук В.А.') return this.executorExps.Portrait['Марчук В.А.']
    return ''
  }
  getExecutorExpsVerifications(id: string): string {
    if (id === 'Всего') return this.executorExps.Verifications['Всего']
    if (id === 'Польченко Т.В.')
      return this.executorExps.Verifications['Польченко Т.В.']
    if (id === 'Поволодцкий Д.Г.')
      return this.executorExps.Verifications['Поволодцкий Д.Г.']
    if (id === 'Васильев И.С.')
      return this.executorExps.Verifications['Васильев И.С.']
    if (id === 'Арзяков Д.Н.')
      return this.executorExps.Verifications['Арзяков Д.Н.']
    if (id === 'Халилов Р.Н.')
      return this.executorExps.Verifications['Халилов Р.Н.']
    if (id === 'Балабанов А.А.')
      return this.executorExps.Verifications['Балабанов А.А.']
    if (id === 'Голынков Д.Н.')
      return this.executorExps.Verifications['Голынков Д.Н.']
    if (id === 'Шулипа Е.Ю.')
      return this.executorExps.Verifications['Шулипа Е.Ю.']
    if (id === 'Миронова Е.С.')
      return this.executorExps.Verifications['Миронова Е.С.']
    if (id === 'Киселев А.С.')
      return this.executorExps.Verifications['Киселев А.С.']
    if (id === 'Марчук В.А.')
      return this.executorExps.Verifications['Марчук В.А.']
    return ''
  }
  getExecutorExpsTotal(id: string): string {
    if (id === 'Всего') return this.executorExps.Total['Всего']
    if (id === 'Польченко Т.В.')
      return this.executorExps.Total['Польченко Т.В.']
    if (id === 'Поволодцкий Д.Г.')
      return this.executorExps.Total['Поволодцкий Д.Г.']
    if (id === 'Васильев И.С.') return this.executorExps.Total['Васильев И.С.']
    if (id === 'Арзяков Д.Н.') return this.executorExps.Total['Арзяков Д.Н.']
    if (id === 'Халилов Р.Н.') return this.executorExps.Total['Халилов Р.Н.']
    if (id === 'Балабанов А.А.')
      return this.executorExps.Total['Балабанов А.А.']
    if (id === 'Голынков Д.Н.') return this.executorExps.Total['Голынков Д.Н.']
    if (id === 'Шулипа Е.Ю.') return this.executorExps.Total['Шулипа Е.Ю.']
    if (id === 'Миронова Е.С.') return this.executorExps.Total['Миронова Е.С.']
    if (id === 'Киселев А.С.') return this.executorExps.Total['Киселев А.С.']
    if (id === 'Марчук В.А.') return this.executorExps.Total['Марчук В.А.']
    return ''
  }

  setAssignedHandwritingExps(value: string): void {
    this.assignedHandwritingExps = value
  }
  setAssignedTCEDExps(value: string): void {
    this.assignedTCEDExps = value
  }
  setAssignedPortraitExps(value: string): void {
    this.assignedPortraitExps = value
  }
  setAssignedTotalExps(value: string): void {
    this.assignedTotalExps = value
  }
  setResultHandwritingExps(value: string): void {
    this.resultHandwritingExps = value
  }
  setResultTCEDExps(value: string): void {
    this.resultTCEDExps = value
  }
  setResultPortraitExps(value: string): void {
    this.resultPortraitExps = value
  }
  setResultTotalExps(value: string): void {
    this.resultTotalExps = value
  }

  setExpsWithPetitionHandwriting(value: string) {
    this.expsWithPetition.Handwriting = value
  }
  setExpsWithPetitionTCED(value: string) {
    this.expsWithPetition.TCED = value
  }
  setExpsWithPetitionPortrait(value: string) {
    this.expsWithPetition.Portrait = value
  }
  setExpsWithPetitionTotal(value: string) {
    this.expsWithPetition.Total = value
  }

  setSatisfiedPetitionHandwriting(value: string) {
    this.satisfiedPetitions.Handwriting = value
  }
  setSatisfiedPetitionTCED(value: string) {
    this.satisfiedPetitions.TCED = value
  }
  setSatisfiedPetitionPortrait(value: string) {
    this.satisfiedPetitions.Portrait = value
  }

  setSatisfiedPetitionTotal(value: string) {
    this.satisfiedPetitions.Total = value
  }

  setExpsDaysSpentHandwriting(v1: string, v2: string, v3: string): void {
    this.expsDaysSpent.Handwriting['до 5 дней'] = v1
    this.expsDaysSpent.Handwriting['до 15 дней'] = v2
    this.expsDaysSpent.Handwriting['более 15 дней'] = v3
  }
  setExpsDaysSpentTCED(v1: string, v2: string, v3: string): void {
    this.expsDaysSpent.TCED['до 5 дней'] = v1
    this.expsDaysSpent.TCED['до 15 дней'] = v2
    this.expsDaysSpent.TCED['более 15 дней'] = v3
  }
  setExpsDaysSpentPortrait(v1: string, v2: string, v3: string): void {
    this.expsDaysSpent.Portrait['до 5 дней'] = v1
    this.expsDaysSpent.Portrait['до 15 дней'] = v2
    this.expsDaysSpent.Portrait['более 15 дней'] = v3
  }
  setExpsDaysSpentTotal(v1: string, v2: string, v3: string): void {
    this.expsDaysSpent.Total['до 5 дней'] = v1
    this.expsDaysSpent.Total['до 15 дней'] = v2
    this.expsDaysSpent.Total['более 15 дней'] = v3
  }

  setArticleExpsHandwriting(
    v1: string,
    v2: string,
    v3: string,
    v4: string,
    v5: string,
    v6: string,
    v7: string,
    v8: string,
    v9: string,
    v10: string,
    v11: string,
    v12: string
  ): void {
    this.articleExps.Handwriting['Всего'] = v1
    this.articleExps.Handwriting['ст 101'] = v2
    this.articleExps.Handwriting['ст 105'] = v3
    this.articleExps.Handwriting['ст 135'] = v4
    this.articleExps.Handwriting['ст 158'] = v5
    this.articleExps.Handwriting['ст 159'] = v6
    this.articleExps.Handwriting['ст 160'] = v7
    this.articleExps.Handwriting['ст 162'] = v8
    this.articleExps.Handwriting['ст 167'] = v9
    this.articleExps.Handwriting['ст 186,187'] = v10
    this.articleExps.Handwriting['ст 222'] = v11
    this.articleExps.Handwriting['ст 264'] = v12
  }
  setArticleExpsTCED(
    v1: string,
    v2: string,
    v3: string,
    v4: string,
    v5: string,
    v6: string,
    v7: string,
    v8: string,
    v9: string,
    v10: string,
    v11: string,
    v12: string
  ): void {
    this.articleExps.TCED['Всего'] = v1
    this.articleExps.TCED['ст 101'] = v2
    this.articleExps.TCED['ст 105'] = v3
    this.articleExps.TCED['ст 135'] = v4
    this.articleExps.TCED['ст 158'] = v5
    this.articleExps.TCED['ст 159'] = v6
    this.articleExps.TCED['ст 160'] = v7
    this.articleExps.TCED['ст 162'] = v8
    this.articleExps.TCED['ст 167'] = v9
    this.articleExps.TCED['ст 186,187'] = v10
    this.articleExps.TCED['ст 222'] = v11
    this.articleExps.TCED['ст 264'] = v12
  }
  setArticleExpsPortrait(
    v1: string,
    v2: string,
    v3: string,
    v4: string,
    v5: string,
    v6: string,
    v7: string,
    v8: string,
    v9: string,
    v10: string,
    v11: string,
    v12: string
  ): void {
    this.articleExps.Portrait['Всего'] = v1
    this.articleExps.Portrait['ст 101'] = v2
    this.articleExps.Portrait['ст 105'] = v3
    this.articleExps.Portrait['ст 135'] = v4
    this.articleExps.Portrait['ст 158'] = v5
    this.articleExps.Portrait['ст 159'] = v6
    this.articleExps.Portrait['ст 160'] = v7
    this.articleExps.Portrait['ст 162'] = v8
    this.articleExps.Portrait['ст 167'] = v9
    this.articleExps.Portrait['ст 186,187'] = v10
    this.articleExps.Portrait['ст 222'] = v11
    this.articleExps.Portrait['ст 264'] = v12
  }
  setArticleExpsVerifications(value: string): void {
    this.articleExps.Verifications = value
  }
  setArticleExpsTotal(
    v1: string,
    v2: string,
    v3: string,
    v4: string,
    v5: string,
    v6: string,
    v7: string,
    v8: string,
    v9: string,
    v10: string,
    v11: string,
    v12: string
  ): void {
    this.articleExps.Total['Всего'] = v1
    this.articleExps.Total['ст 101'] = v2
    this.articleExps.Total['ст 105'] = v3
    this.articleExps.Total['ст 135'] = v4
    this.articleExps.Total['ст 158'] = v5
    this.articleExps.Total['ст 159'] = v6
    this.articleExps.Total['ст 160'] = v7
    this.articleExps.Total['ст 162'] = v8
    this.articleExps.Total['ст 167'] = v9
    this.articleExps.Total['ст 186,187'] = v10
    this.articleExps.Total['ст 222'] = v11
    this.articleExps.Total['ст 264'] = v12
  }

  setExecutorExpsHandwriting(
    v1: string,
    v2: string,
    v3: string,
    v4: string,
    v5: string,
    v6: string,
    v7: string,
    v8: string,
    v9: string,
    v10: string,
    v11: string,
    v12: string
  ): void {
    this.executorExps.Handwriting['Всего'] = v1
    this.executorExps.Handwriting['Польченко Т.В.'] = v2
    this.executorExps.Handwriting['Поволодцкий Д.Г.'] = v3
    this.executorExps.Handwriting['Васильев И.С.'] = v4
    this.executorExps.Handwriting['Арзяков Д.Н.'] = v5
    this.executorExps.Handwriting['Халилов Р.Н.'] = v6
    this.executorExps.Handwriting['Балабанов А.А.'] = v7
    this.executorExps.Handwriting['Голынков Д.Н.'] = v8
    this.executorExps.Handwriting['Шулипа Е.Ю.'] = v9
    this.executorExps.Handwriting['Миронова Е.С.'] = v10
    this.executorExps.Handwriting['Киселев А.С.'] = v11
    this.executorExps.Handwriting['Марчук В.А.'] = v12
  }
  setExecutorExpsTCED(
    v1: string,
    v2: string,
    v3: string,
    v4: string,
    v5: string,
    v6: string,
    v7: string,
    v8: string,
    v9: string,
    v10: string,
    v11: string,
    v12: string
  ): void {
    this.executorExps.TCED['Всего'] = v1
    this.executorExps.TCED['Польченко Т.В.'] = v2
    this.executorExps.TCED['Поволодцкий Д.Г.'] = v3
    this.executorExps.TCED['Васильев И.С.'] = v4
    this.executorExps.TCED['Арзяков Д.Н.'] = v5
    this.executorExps.TCED['Халилов Р.Н.'] = v6
    this.executorExps.TCED['Балабанов А.А.'] = v7
    this.executorExps.TCED['Голынков Д.Н.'] = v8
    this.executorExps.TCED['Шулипа Е.Ю.'] = v9
    this.executorExps.TCED['Миронова Е.С.'] = v10
    this.executorExps.TCED['Киселев А.С.'] = v11
    this.executorExps.TCED['Марчук В.А.'] = v12
  }
  setExecutorExpsPortrait(
    v1: string,
    v2: string,
    v3: string,
    v4: string,
    v5: string,
    v6: string,
    v7: string,
    v8: string,
    v9: string,
    v10: string,
    v11: string,
    v12: string
  ): void {
    this.executorExps.Portrait['Всего'] = v1
    this.executorExps.Portrait['Польченко Т.В.'] = v2
    this.executorExps.Portrait['Поволодцкий Д.Г.'] = v3
    this.executorExps.Portrait['Васильев И.С.'] = v4
    this.executorExps.Portrait['Арзяков Д.Н.'] = v5
    this.executorExps.Portrait['Халилов Р.Н.'] = v6
    this.executorExps.Portrait['Балабанов А.А.'] = v7
    this.executorExps.Portrait['Голынков Д.Н.'] = v8
    this.executorExps.Portrait['Шулипа Е.Ю.'] = v9
    this.executorExps.Portrait['Миронова Е.С.'] = v10
    this.executorExps.Portrait['Киселев А.С.'] = v11
    this.executorExps.Portrait['Марчук В.А.'] = v12
  }
  setExecutorExpsVerifications(
    v1: string,
    v2: string,
    v3: string,
    v4: string,
    v5: string,
    v6: string,
    v7: string,
    v8: string,
    v9: string,
    v10: string,
    v11: string,
    v12: string
  ): void {
    this.executorExps.Verifications['Всего'] = v1
    this.executorExps.Verifications['Польченко Т.В.'] = v2
    this.executorExps.Verifications['Поволодцкий Д.Г.'] = v3
    this.executorExps.Verifications['Васильев И.С.'] = v4
    this.executorExps.Verifications['Арзяков Д.Н.'] = v5
    this.executorExps.Verifications['Халилов Р.Н.'] = v6
    this.executorExps.Verifications['Балабанов А.А.'] = v7
    this.executorExps.Verifications['Голынков Д.Н.'] = v8
    this.executorExps.Verifications['Шулипа Е.Ю.'] = v9
    this.executorExps.Verifications['Миронова Е.С.'] = v10
    this.executorExps.Verifications['Киселев А.С.'] = v11
    this.executorExps.Verifications['Марчук В.А.'] = v12
  }
  setExecutorExpsTotal(
    v1: string,
    v2: string,
    v3: string,
    v4: string,
    v5: string,
    v6: string,
    v7: string,
    v8: string,
    v9: string,
    v10: string,
    v11: string,
    v12: string
  ): void {
    this.executorExps.Total['Всего'] = v1
    this.executorExps.Total['Польченко Т.В.'] = v2
    this.executorExps.Total['Поволодцкий Д.Г.'] = v3
    this.executorExps.Total['Васильев И.С.'] = v4
    this.executorExps.Total['Арзяков Д.Н.'] = v5
    this.executorExps.Total['Халилов Р.Н.'] = v6
    this.executorExps.Total['Балабанов А.А.'] = v7
    this.executorExps.Total['Голынков Д.Н.'] = v8
    this.executorExps.Total['Шулипа Е.Ю.'] = v9
    this.executorExps.Total['Миронова Е.С.'] = v10
    this.executorExps.Total['Киселев А.С.'] = v11
    this.executorExps.Total['Марчук В.А.'] = v12
  }
}
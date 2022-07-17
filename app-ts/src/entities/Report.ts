export default class Report {
  assignedHandwritingExps: string = ''
  assignedTCEDExps: string = ''
  assignedPortraitExps: string = ''
  assignedTotalExps: string = ''
  resultHandwritingExps: string = ''
  resultTCEDExps: string = ''
  resultPortraitExps: string = ''
  resultTotalExps: string = ''
  articleExps = {
    Handwriting: {
      'Всего': '',
      'ст 101': '',
      'ст 105': '',
      'ст 158,159,160': '',
      'ст 186,187': '',
      'ст 222': '',
      'ст 264': ''
    },
    TCED: {
      'Всего': '',
      'ст 101': '',
      'ст 105': '',
      'ст 158,159,160': '',
      'ст 186,187': '',
      'ст 222': '',
      'ст 264': ''
    },
    Portrait: {
      'Всего': '',
      'ст 101': '',
      'ст 105': '',
      'ст 158,159,160': '',
      'ст 186,187': '',
      'ст 222': '',
      'ст 264': ''
    },
    Verifications: '',
    Total: {
      'Всего': '',
      'ст 101': '',
      'ст 105': '',
      'ст 158,159,160': '',
      'ст 186,187': '',
      'ст 222': '',
      'ст 264': ''
    }
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
  getArticleExpsHandwriting(id: string): string {
    if (id === 'Всего') return this.articleExps.Handwriting['Всего']
    if (id === 'ст 101') return this.articleExps.Handwriting['ст 101']
    if (id === 'ст 105') return this.articleExps.Handwriting['ст 105']
    if (id === 'ст 158,159,160') return this.articleExps.Handwriting['ст 158,159,160']
    if (id === 'ст 186,187') return this.articleExps.Handwriting['ст 186,187']
    if (id === 'ст 222') return this.articleExps.Handwriting['ст 222']
    if (id === 'ст 264') return this.articleExps.Handwriting['ст 264']
    return ''
  }
  getArticleExpsTCED(id: string): string {
    if (id === 'Всего') return this.articleExps.TCED['Всего']
    if (id === 'ст 101') return this.articleExps.TCED['ст 101']
    if (id === 'ст 105') return this.articleExps.TCED['ст 105']
    if (id === 'ст 158,159,160') return this.articleExps.TCED['ст 158,159,160']
    if (id === 'ст 186,187') return this.articleExps.TCED['ст 186,187']
    if (id === 'ст 222') return this.articleExps.TCED['ст 222']
    if (id === 'ст 264') return this.articleExps.TCED['ст 264']
    return ''
  }
  getArticleExpsPortrait(id: string): string {
    if (id === 'Всего') return this.articleExps.Portrait['Всего']
    if (id === 'ст 101') return this.articleExps.Portrait['ст 101']
    if (id === 'ст 105') return this.articleExps.Portrait['ст 105']
    if (id === 'ст 158,159,160') return this.articleExps.Portrait['ст 158,159,160']
    if (id === 'ст 186,187') return this.articleExps.Portrait['ст 186,187']
    if (id === 'ст 222') return this.articleExps.Portrait['ст 222']
    if (id === 'ст 264') return this.articleExps.Portrait['ст 264']
    return ''
  }
  getArticleExpsVerifications(): string {
    return this.articleExps.Verifications
  }
  getArticleExpsTotal(id: string): string {
    if (id === 'Всего') return this.articleExps.Total['Всего']
    if (id === 'ст 101') return this.articleExps.Total['ст 101']
    if (id === 'ст 105') return this.articleExps.Total['ст 105']
    if (id === 'ст 158,159,160') return this.articleExps.Total['ст 158,159,160']
    if (id === 'ст 186,187') return this.articleExps.Total['ст 186,187']
    if (id === 'ст 222') return this.articleExps.Total['ст 222']
    if (id === 'ст 264') return this.articleExps.Total['ст 264']
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
  setArticleExpsHandwriting(v1: string, v2: string, v3: string, v4: string, v5: string, v6: string, v7: string): void {
    this.articleExps.Handwriting['Всего'] = v1
    this.articleExps.Handwriting['ст 101'] = v2
    this.articleExps.Handwriting['ст 105'] = v3
    this.articleExps.Handwriting['ст 158,159,160'] = v4
    this.articleExps.Handwriting['ст 186,187'] = v5
    this.articleExps.Handwriting['ст 222'] = v6
    this.articleExps.Handwriting['ст 264'] = v7
  }
  setArticleExpsTCED(v1: string, v2: string, v3: string, v4: string, v5: string, v6: string, v7: string): void {
    this.articleExps.TCED['Всего'] = v1
    this.articleExps.TCED['ст 101'] = v2
    this.articleExps.TCED['ст 105'] = v3
    this.articleExps.TCED['ст 158,159,160'] = v4
    this.articleExps.TCED['ст 186,187'] = v5
    this.articleExps.TCED['ст 222'] = v6
    this.articleExps.TCED['ст 264'] = v7
  }
  setArticleExpsPortrait(v1: string, v2: string, v3: string, v4: string, v5: string, v6: string, v7: string): void {
    this.articleExps.Portrait['Всего'] = v1
    this.articleExps.Portrait['ст 101'] = v2
    this.articleExps.Portrait['ст 105'] = v3
    this.articleExps.Portrait['ст 158,159,160'] = v4
    this.articleExps.Portrait['ст 186,187'] = v5
    this.articleExps.Portrait['ст 222'] = v6
    this.articleExps.Portrait['ст 264'] = v7
  }
  setArticleExpsVerifications(value: string): void {
    this.articleExps.Verifications = value
  }
  setArticleExpsTotal(v1: string, v2: string, v3: string, v4: string, v5: string, v6: string, v7: string): void {
    this.articleExps.Total['Всего'] = v1
    this.articleExps.Total['ст 101'] = v2
    this.articleExps.Total['ст 105'] = v3
    this.articleExps.Total['ст 158,159,160'] = v4
    this.articleExps.Total['ст 186,187'] = v5
    this.articleExps.Total['ст 222'] = v6
    this.articleExps.Total['ст 264'] = v7
  }
}
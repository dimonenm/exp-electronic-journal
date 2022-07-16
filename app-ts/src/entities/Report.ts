export default class Report {
  assignedHandwritingExps: string = ''
  assignedTCEDExps: string = ''
  assignedPortraitExps: string = ''
  assignedTotalExps: string = ''
  resultHandwritingExps: string = ''
  resultTCEDExps: string = ''
  resultPortraitExps: string = ''
  resultTotalExps: string = ''

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
}
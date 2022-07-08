export default class SearchExp {
  idStart: string
  idEnd: string
  dateOfReceiptStart: string
  dateOfReceiptEnd: string
  typeOfService: string
  unitOfService: string
  typeOfMaterial: string
  numberOfMaterial: string
  article: string
  typeOfExpertise: string
  executor: string
  difficult: string
  datePetitionStart: string
  datePetitionEnd: string
  dateProlongationStart: string
  valueOfProlongation: string
  result: string
  dateExpEndStart: string
  dateExpEndEnd: string
  dateExpCompleteStart: string
  dateExpCompleteEnd: string
  dateVerificationStart: string
  dateVerificationEnd: string
  numberVerification: string
  verificationNumberOfMaterial: string
  verificationExecutor: string
  verificationResult: string
  constructor(oldExp?: SearchExp) {
    this.idStart = oldExp?.getIdStart() || ''
    this.idEnd = oldExp?.getIdEnd() || ''
    this.dateOfReceiptStart = oldExp?.getDateOfReceiptStart() || ''
    this.dateOfReceiptEnd = oldExp?.getDateOfReceiptEnd() || ''
    this.typeOfService = oldExp?.getTypeOfService() || ''
    this.unitOfService = oldExp?.getUnitOfService() || ''
    this.typeOfMaterial = oldExp?.getTypeOfMaterial() || ''
    this.numberOfMaterial = oldExp?.getNumberOfMaterial() || ''
    this.article = oldExp?.getArticle() || ''
    this.typeOfExpertise = oldExp?.getTypeOfExpertise() || ''
    this.executor = oldExp?.getExecutor() || ''
    this.difficult = oldExp?.getDifficult() || ''
    this.datePetitionStart = oldExp?.getDatePetitionStart() || ''
    this.datePetitionEnd = oldExp?.getDatePetitionEnd() || ''
    this.dateProlongationStart = oldExp?.getDateProlongationStart() || ''
    this.valueOfProlongation = oldExp?.getValueOfProlongation() || ''
    this.result = oldExp?.getResult() || ''
    this.dateExpEndStart = oldExp?.getDateExpEndStart() || ''
    this.dateExpEndEnd = oldExp?.getDateExpEndEnd() || ''
    this.dateExpCompleteStart = oldExp?.getDateExpCompleteStart() || ''
    this.dateExpCompleteEnd = oldExp?.getDateExpCompleteEnd() || ''
    this.dateVerificationStart = oldExp?.getDateVerificationStart() || ''
    this.dateVerificationEnd = oldExp?.getDateVerificationEnd() || ''
    this.numberVerification = oldExp?.getNumberVerification() || ''
    this.verificationNumberOfMaterial = oldExp?.getVerificationNumberOfMaterial() || ''
    this.verificationExecutor = oldExp?.getVerificationExecutor() || ''
    this.verificationResult = oldExp?.getVerificationResult() || ''
  }
  getIdStart(): string | null {
    return this.idStart
  }
  getIdEnd(): string | null {
    return this.idEnd
  }
  getDateOfReceiptStart(): string | null {
    return this.dateOfReceiptStart
  }
  getDateOfReceiptEnd(): string | null {
    return this.dateOfReceiptEnd
  }
  getTypeOfService(): string | null {
    return this.typeOfService
  }
  getUnitOfService(): string | null {
    return this.unitOfService
  }
  getTypeOfMaterial(): string | null {
    return this.typeOfMaterial
  }
  getNumberOfMaterial(): string | null {
    return this.numberOfMaterial
  }
  getArticle(): string | null {
    return this.article
  }
  getTypeOfExpertise(): string | null {
    return this.typeOfExpertise
  }
  getExecutor(): string | null {
    return this.executor
  }
  getDifficult(): string | null {
    return this.difficult
  }
  getDatePetitionStart(): string | null {
    return this.datePetitionStart
  }
  getDatePetitionEnd(): string | null {
    return this.datePetitionEnd
  }
  getDateProlongationStart(): string | null {
    return this.dateProlongationStart
  }
  getValueOfProlongation(): string | null {
    return this.valueOfProlongation
  }
  getResult(): string | null {
    return this.result
  }
  getDateExpEndStart(): string | null {
    return this.dateExpEndStart
  }
  getDateExpEndEnd(): string | null {
    return this.dateExpEndEnd
  }
  getDateExpCompleteStart(): string | null {
    return this.dateExpCompleteStart
  }
  getDateExpCompleteEnd(): string | null {
    return this.dateExpCompleteEnd
  }
  getDateVerificationStart(): string | null {
    return this.dateVerificationStart
  }
  getDateVerificationEnd(): string | null {
    return this.dateVerificationEnd
  }
  getNumberVerification(): string | null {
    return this.numberVerification
  }
  getVerificationNumberOfMaterial(): string | null {
    return this.verificationNumberOfMaterial
  }
  getVerificationExecutor(): string | null {
    return this.verificationExecutor
  }
  getVerificationResult(): string | null {
    return this.verificationResult
  }
  setIdStart(value: string): void {
    this.idStart = value
  }
  setIdEnd(value: string): void {
    this.idEnd = value
  }
  setDateOfReceiptStart(value: string): void {
    this.dateOfReceiptStart = value
  }
  setDateOfReceiptEnd(value: string): void {
    this.dateOfReceiptEnd = value
  }
  setTypeOfService(value: string): void {
    this.typeOfService = value
  }
  setUnitOfService(value: string): void {
    this.unitOfService = value
  }
  setTypeOfMaterial(value: string): void {
    this.typeOfMaterial = value
  }
  setNumberOfMaterial(value: string): void {
    this.numberOfMaterial = value
  }
  setArticle(value: string): void {
    this.article = value
  }
  setTypeOfExpertise(value: string): void {
    this.typeOfExpertise = value
  }
  setExecutor(value: string): void {
    this.executor = value
  }
  setDifficult(value: string): void {
    this.difficult = value
  }
  setDatePetitionStart(value: string): void {
    this.datePetitionStart = value
  }
  setDatePetitionEnd(value: string): void {
    this.datePetitionEnd = value
  }
  setDateProlongationStart(value: string): void {
    this.dateProlongationStart = value
  }
  setValueOfProlongation(value: string): void {
    this.valueOfProlongation = value
  }
  setResult(value: string): void {
    this.result = value
  }
  setDateExpEndStart(value: string): void {
    this.dateExpEndStart = value
  }
  setDateExpEndEnd(value: string): void {
    this.dateExpEndEnd = value
  }
  setDateExpCompleteStart(value: string): void {
    this.dateExpCompleteStart = value
  }
  setDateExpCompleteEnd(value: string): void {
    this.dateExpCompleteEnd = value
  }
  setDateVerificationStart(value: string): void {
    this.dateVerificationStart = value
  }
  setDateVerificationEnd(value: string): void {
    this.dateVerificationEnd = value
  }
  setNumberVerification(value: string): void {
    this.numberVerification = value
  }
  setVerificationNumberOfMaterial(value: string): void {
    this.verificationNumberOfMaterial = value
  }
  setVerificationExecutor(value: string): void {
    this.verificationExecutor = value
  }
  setVerificationResult(value: string): void {
    this.verificationResult = value
  }

}
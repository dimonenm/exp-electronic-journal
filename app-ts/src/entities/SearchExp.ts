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
  dateVerificationStartStart: string
  dateVerificationStartEnd: string
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
    this.dateVerificationStartStart = oldExp?.getDateVerificationStartStart() || ''
    this.dateVerificationStartEnd = oldExp?.getDateVerificationStartEnd() || ''
    this.dateVerificationEnd = oldExp?.getDateVerificationEnd() || ''
    this.numberVerification = oldExp?.getNumberVerification() || ''
    this.verificationNumberOfMaterial = oldExp?.getVerificationNumberOfMaterial() || ''
    this.verificationExecutor = oldExp?.getVerificationExecutor() || ''
    this.verificationResult = oldExp?.getVerificationResult() || ''
  }
  getIdStart(): string {
    return this.idStart
  }
  getIdEnd(): string {
    return this.idEnd
  }
  getDateOfReceiptStart(): string {
    return this.dateOfReceiptStart
  }
  getDateOfReceiptEnd(): string {
    return this.dateOfReceiptEnd
  }
  getTypeOfService(): string {
    return this.typeOfService
  }
  getUnitOfService(): string {
    return this.unitOfService
  }
  getTypeOfMaterial(): string {
    return this.typeOfMaterial
  }
  getNumberOfMaterial(): string {
    return this.numberOfMaterial
  }
  getArticle(): string {
    return this.article
  }
  getTypeOfExpertise(): string {
    return this.typeOfExpertise
  }
  getExecutor(): string {
    return this.executor
  }
  getDifficult(): string {
    return this.difficult
  }
  getDatePetitionStart(): string {
    return this.datePetitionStart
  }
  getDatePetitionEnd(): string {
    return this.datePetitionEnd
  }
  getDateProlongationStart(): string {
    return this.dateProlongationStart
  }
  getValueOfProlongation(): string {
    return this.valueOfProlongation
  }
  getResult(): string {
    return this.result
  }
  getDateExpEndStart(): string {
    return this.dateExpEndStart
  }
  getDateExpEndEnd(): string {
    return this.dateExpEndEnd
  }
  getDateExpCompleteStart(): string {
    return this.dateExpCompleteStart
  }
  getDateExpCompleteEnd(): string {
    return this.dateExpCompleteEnd
  }
  getDateVerificationStartStart(): string {
    return this.dateVerificationStartStart
  }
  getDateVerificationStartEnd(): string {
    return this.dateVerificationStartEnd
  }
  getDateVerificationEnd(): string {
    return this.dateVerificationEnd
  }
  getNumberVerification(): string {
    return this.numberVerification
  }
  getVerificationNumberOfMaterial(): string {
    return this.verificationNumberOfMaterial
  }
  getVerificationExecutor(): string {
    return this.verificationExecutor
  }
  getVerificationResult(): string {
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
  setDateVerificationStartStart(value: string): void {
    this.dateVerificationStartStart = value
  }
  setDateVerificationStartEnd(value: string): void {
    this.dateVerificationStartEnd = value
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
  isSearchExp(): boolean{
    if (
      this.idStart !== '' ||
    this.idEnd !== '' ||
    this.dateOfReceiptStart !== '' ||
    this.dateOfReceiptEnd !== '' ||
    this.typeOfService !== '' ||
    this.unitOfService !== '' ||
    this.typeOfMaterial !== '' ||
    this.numberOfMaterial !== '' ||
    this.article !== '' ||
    this.typeOfExpertise !== '' ||
    this.executor !== '' ||
    this.difficult !== '' ||
    this.datePetitionStart !== '' ||
    this.datePetitionEnd !== '' ||
    this.dateProlongationStart !== '' ||
    this.valueOfProlongation !== '' ||
    this.result !== '' ||
    this.dateExpEndStart !== '' ||
    this.dateExpEndEnd !== '' ||
    this.dateExpCompleteStart !== '' ||
    this.dateExpCompleteEnd !== '' ||
    this.dateVerificationStartStart !== '' ||
    this.dateVerificationStartEnd !== '' ||
    this.dateVerificationEnd !== '' ||
    this.numberVerification !== '' ||
    this.verificationNumberOfMaterial !== '' ||
    this.verificationExecutor !== '' ||
    this.verificationResult !== ''
    ) return true
    else return false
  }

}
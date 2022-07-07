export interface IModal{
  type: string | null
  idOfExp: string | null
}
export interface ITypeOfService {
  type: string | null
}
export interface ITypeOfMaterial {
  type: string | null
}
export interface IExp{
  id: string,
  dateOfReceipt: string,
  typeOfService: string,
  unitOfService: string,
  typeOfMaterial: string,
  numberOfMaterial: string,
  article: string,
  typeOfExpertise: string,
  executor: string,
  difficult: string,
  datePetitionStart: string,
  datePetitionEnd: string,
  dateProlongationStart: string,
  valueOfProlongation: string,
  result: string,
  dateExpEnd: string,
  dateExpComplete: string,
  dateVerificationStart: string,
  dateVerificationEnd: string,
  numberVerification: string,
  verificationNumberOfMaterial: string,
  verificationExecutor: string,
  verificationResult: string,
}
export interface ISearchExp {
  id: string,
  dateOfReceiptStart: string,
  dateOfReceiptEnd: string,
  typeOfService: string,
  unitOfService: string,
  typeOfMaterial: string,
  numberOfMaterial: string,
  article: string,
  typeOfExpertise: string,
  executor: string,
  difficult: string,
  datePetitionStart: string,
  datePetitionEnd: string,
  dateProlongationStart: string,
  valueOfProlongation: string,
  result: string,
  dateExpEnd: string,
  dateExpComplete: string,
  dateVerificationStart: string,
  dateVerificationEnd: string,
  numberVerification: string,
  verificationNumberOfMaterial: string,
  verificationExecutor: string,
  verificationResult: string,
}
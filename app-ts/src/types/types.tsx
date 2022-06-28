export interface IModal{
  type: string | null
}
export interface ITypeOfService {
  type: string | null
}
export interface IExp{
  id: string | null,
  dateOfReceipt: string | null,
  typeOfService: string | null,
  unitOfService: string | null,
  typeOfMaterial: string | null,
  numberOfMaterial: string | null,
  article: string | null,
  typeOfExpertise: string | null,
  executor: string | null,
  datePetitionStart: string | null,
  datePetitionEnd: string | null,
  dateProlongationStart: string | null,
  dateProlongationEnd: string | null,
  result: string | null,
  dateExpEnd: string | null,
  dateExpComplete: string | null,
  dateVerificationStart: string | null,
  dateVerificationEnd: string | null,
  numberVerification: string | null,
  verificationNumberOfMaterial: string | null,
  verificationExecutor: string | null,
  verificationResult: string | null,
}
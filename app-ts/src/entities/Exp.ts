import { IExp } from "../types/types";

export default class Exp implements IExp{
  id: string | null
  dateOfReceipt: string | null
  typeOfService: string | null
  unitOfService: string | null
  typeOfMaterial: string | null
  numberOfMaterial: string | null
  article: string | null
  typeOfExpertise: string | null
  executor: string | null
  difficult: string | null
  datePetitionStart: string | null
  datePetitionEnd: string | null
  dateProlongationStart: string | null
  valueOfProlongation: string | null
  result: string | null
  dateExpEnd: string | null
  dateExpComplete: string | null
  dateVerificationStart: string | null
  dateVerificationEnd: string | null
  numberVerification: string | null
  verificationNumberOfMaterial: string | null
  verificationExecutor: string | null
  verificationResult: string | null
  constructor() {
    this.id = null
    this.dateOfReceipt = null
    this.typeOfService = null
    this.unitOfService = null
    this.typeOfMaterial = null
    this.numberOfMaterial = null
    this.article = null
    this.typeOfExpertise = null
    this.executor = null
    this.difficult = null
    this.datePetitionStart = null
    this.datePetitionEnd = null
    this.dateProlongationStart = null
    this.valueOfProlongation = null
    this.result = null
    this.dateExpEnd = null
    this.dateExpComplete = null
    this.dateVerificationStart = null
    this.dateVerificationEnd = null
    this.numberVerification = null
    this.verificationNumberOfMaterial = null
    this.verificationExecutor = null
    this.verificationResult = null    
  }
  getId():string | null{
    return this.id
  }
  getDateOfReceipt():string | null{
    return this.dateOfReceipt
  }
  getTypeOfService():string | null{
    return this.typeOfService
  }
  getUnitOfService():string | null{
    return this.unitOfService
  }
  getTypeOfMaterial():string | null{
    return this.typeOfMaterial
  }
  getNumberOfMaterial():string | null{
    return this.numberOfMaterial
  }
  getArticle():string | null{
    return this.article
  }
  getTypeOfExpertise():string | null{
    return this.typeOfExpertise
  }
  getExecutor():string | null{
    return this.executor
  }
  getDifficult():string | null{
    return this.difficult
  }
  getDatePetitionStart():string | null{
    return this.datePetitionStart
  }
  getDatePetitionEnd():string | null{
    return this.datePetitionEnd
  }
  getDateProlongationStart():string | null{
    return this.dateProlongationStart
  }
  getValueOfProlongation():string | null{
    return this.valueOfProlongation
  }
  getResult():string | null{
    return this.result
  }
  getDateExpEnd():string | null{
    return this.dateExpEnd
  }
  getDateExpComplete():string | null{
    return this.dateExpComplete
  }
  getDateVerificationStart():string | null{
    return this.dateVerificationStart
  }
  getDateVerificationEnd():string | null{
    return this.dateVerificationEnd
  }
  getNumberVerification():string | null{
    return this.numberVerification
  }
  getVerificationNumberOfMaterial():string | null{
    return this.verificationNumberOfMaterial
  }
  getVerificationExecutor():string | null{
    return this.verificationExecutor
  }
  getVerificationResult():string | null{
    return this.verificationResult
  }
  setId(value: string): void {
    this.id = value
  }
  setDateOfReceipt(value: string): void {
    this.dateOfReceipt = value
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
  setDateExpEnd(value: string): void {
    this.dateExpEnd = value
  }
  setDateExpComplete(value: string): void {
    this.dateExpComplete = value
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
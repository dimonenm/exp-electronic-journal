export function dateFromUsToRu(incomingStr: string | null) {
  let result = 'н/д'
  if (incomingStr) {
    let splits = incomingStr.split("-")
    result = `${splits[2]}.${splits[1]}.${splits[0]}`
  }
  return result
}
export function dateFromRutoUs(incomingStr: string) {
  let result
  let splits = incomingStr.split(".")
  result = `${splits[2]}-${splits[1]}-${splits[0]}`
  return result
}
export function dateAddReduceDays(incomingDate: string, countOfDays: number, plusMinus: boolean) {
  let date = new Date(incomingDate)

  if (plusMinus === true) {
    date.setDate(date.getDate() + countOfDays)
  } else {
    date.setDate(date.getDate() - countOfDays)
  }
  date.setHours(0)
  return dateFromRutoUs(date.toLocaleDateString())
}
export function dayGenerator(from: number, to: number) {
  return (from + Math.random() * (to - from));
}
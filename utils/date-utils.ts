// https://stackoverflow.com/questions/13894632/get-time-difference-between-two-dates-in-seconds/13894670
// careful! might not work with typescript

const dateComparisonInSeconds = (startTime: string, endTime: string): number => {
  const t1 = new Date(startTime)
  const t2 = new Date(endTime)

  return (t2.getTime() - t1.getTime()) / 1000
}

export default dateComparisonInSeconds


export const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const convertAWSDateToHumanReadableDate = AWSDate => {
  const date = new Date(AWSDate)
  const day = date.getUTCDate()
  const year = date.getUTCFullYear()
  const month = date.getUTCMonth() //
  return `${monthNames[month]} ${day}, ${year} - at ${date.getHours()}h${date.getMinutes()}`
}
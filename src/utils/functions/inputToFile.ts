const XLSX = require('xlsx')

function InputTextToTextFile (title: string, inputText: string): File[] {
  const blob = new Blob([inputText], { type: 'text/plain' })
  return [new File([blob], `${title}.txt`, { type: 'text/plain' })]
}

function ExcelToString (data: ArrayBuffer): string {
  const workbook = XLSX.read(data)
  const firstSheetName = workbook.SheetNames[0]
  const sheet = workbook.Sheets[firstSheetName]
  return XLSX.utils.sheet_to_csv(sheet)
}

export { InputTextToTextFile, ExcelToString }

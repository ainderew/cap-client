export interface ClicksForm {
  labels: string[]
  clicks: number[]
  ageCounts: {
    teen: number
    youngAdult: number
    adult: number
    senior: number
  }
}
const url = 'http://localhost:5000'
export const getYearData = async (businessId: string, year: number): Promise<any> => {
  const response = await fetch(`${url}/api/clicks/${businessId}/${year}`)
  if (!response.ok) {
    throw new Error('Request failed')
  }
  const data = await response.json()
  return data
}

export const getYearlyData = async (businessId: string, year: number): Promise<any> => {
  const response = await fetch(`${url}/api/yearlyclicks/${businessId}/${year}`)
  if (!response.ok) {
    throw new Error('Request failed')
  }
  const data = await response.json()

  return data
}

export const getMonthlyData = async (businessId: string, year: number, month: number): Promise<any> => {
  const response = await fetch(`${url}/api/monthlyclicks/${businessId}/${year}/${month}`)
  if (!response.ok) {
    throw new Error('Request failed')
  }
  const data = await response.json()

  return data
}

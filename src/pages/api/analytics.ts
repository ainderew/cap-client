export interface clickYealy {
  label: string
  daily: number
  click: number
  age: number

}

export const getYearData = async (businessId: string, year: number): Promise<any> => {
  const response = await fetch(`http://localhost:5000/api/clicks/${businessId}/${year}`)
  if (!response.ok) {
    throw new Error('Request failed')
  }
  const data = await response.json()

  return data
}

export const getYearlyData = async (businessId: string, year: number): Promise<any> => {
  const response = await fetch(`http://localhost:5000/api/yearlyclicks/${businessId}/${year}`)
  if (!response.ok) {
    throw new Error('Request failed')
  }
  const data = await response.json()

  return data
}

export const getMonthlyData = async (businessId: string, year: number, month: number): Promise<any> => {
  const response = await fetch(`http://localhost:5000/api/monthlyclicks/${businessId}/${year}/${month}`)
  if (!response.ok) {
    throw new Error('Request failed')
  }
  const data = await response.json()

  return data
}

export const createAnalytics = async (businessId: string): Promise<any> => {
  const response = await fetch(`http://localhost:5000/api/monthlyclicks/${businessId}`)
  if (!response.ok) {
    throw new Error('Request failed')
  }
  const data = await response.json()

  return data
}

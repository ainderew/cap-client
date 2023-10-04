// useDashboardData.ts
import { useEffect, useState } from 'react'
import { useStores } from '@/core/stores/UseStores'
import {
  getYearlyData,
  getMonthlyData,
  getYearData
} from '@/pages/api/analytics'

interface DashboardData {
  yearlyData: number[]
  yearlyLabel: string[]
  monthlyData: number[]
  monthlyLabel: string[]
  currentYearly: number
  prevYearly: number
  isRetrieved: boolean
  isSelected: boolean
  teen: number
  youngAdult: number
  adult: number
  midAdult: number
  senior: number
  selectedMonthnum: number
  selectedMonthstr: string
  formattedDate: string
  handleMonthChange: (event: { target: { value: string } }) => void
}

export const useDashboardData = (): DashboardData => {
  const [yearlyData, setYearlyData] = useState<number[]>([])
  const [yearlyLabel, setYearlyLabel] = useState<string[]>([])
  const [monthlyData, setMonthlyData] = useState<number[]>([])
  const [monthlyLabel, setMonthlyLabel] = useState<string[]>([])
  const [currentYearly, setCurrentYearly] = useState<number>(0)
  const [prevYearly, setPrevYearly] = useState<number>(0)
  const [isRetrieved, setIsRetrieved] = useState<boolean>(false)
  const [isSelected, setIsSelected] = useState<boolean>(false)
  const [teen, setTeen] = useState<number>(0)
  const [youngAdult, setYoungAdult] = useState<number>(0)
  const [adult, setAdult] = useState<number>(0)
  const [midAdult, setMidAdult] = useState<number>(0)
  const [senior, setSenior] = useState<number>(0)
  const currentDate = new Date()
  const [selectedMonthnum, setSelectedMonthnum] = useState(currentDate.getMonth())

  const [formattedDate, setFormattedDate] = useState('') // Add formattedDate state
  const [selectedMonthstr, setSelectedMonthstr] = useState('')
  // Format the current date and set it to the formattedDate state
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  setFormattedDate(currentDate.toLocaleDateString(undefined, options))
  const { authStore } = useStores()
  const businessId = authStore.userProfile?.profile._id
  const currentYear = currentDate.getFullYear()

  useEffect(() => {
    const fetchClicks = async (): Promise<any> => {
      try {
        if (businessId !== null && businessId !== undefined) {
          const yearlyData = await getYearlyData(businessId, currentYear)
          const monthlyData = await getMonthlyData(businessId, currentYear, selectedMonthnum + 1)
          const CurrentYearlyData = await getYearData(businessId, currentYear)
          const prevYearlyData = await getYearData(businessId, currentYear - 1)
          setTeen(monthlyData.ageCounts.teen)
          setAdult(monthlyData.ageCounts.adult)
          setYoungAdult(monthlyData.ageCounts.youngAdult)
          setMidAdult(monthlyData.ageCounts.midAdult)
          setSenior(monthlyData.ageCounts.seniors)
          setYearlyData(yearlyData.clicks)
          setYearlyLabel(yearlyData.labels)
          setMonthlyData(monthlyData.clicks)
          setMonthlyLabel(monthlyData.labels)
          setCurrentYearly(CurrentYearlyData)
          setPrevYearly(prevYearlyData)
          setIsRetrieved(true)
          setIsSelected(true)
        }
      } catch (error) {
        console.log(error)
      }
    }
    void fetchClicks()
  }, [selectedMonthnum])

  const handleMonthChange = (event: { target: { value: string } }): any => {
    const selectedValue = parseInt(event.target.value, 10)
    setSelectedMonthnum(selectedValue)
    setSelectedMonthstr(yearlyLabel[selectedValue])
    setIsSelected(false)
  }

  return {
    yearlyData,
    yearlyLabel,
    monthlyData,
    monthlyLabel,
    currentYearly,
    prevYearly,
    isRetrieved,
    isSelected,
    teen,
    youngAdult,
    adult,
    midAdult,
    senior,
    selectedMonthnum,
    selectedMonthstr,
    formattedDate,
    handleMonthChange
  }
}

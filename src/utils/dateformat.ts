import { format } from 'date-fns'

export function formatDate(inputDate: string): string {
  const date = new Date(inputDate)
  return format(date, 'MMMM dd, yyyy HH:mm:ss')
}

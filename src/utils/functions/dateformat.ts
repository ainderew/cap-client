import { format, formatDistance } from 'date-fns'

export function formatDate (inputDate: string): string {
  const date = new Date(inputDate)
  return format(date, 'MMMM dd, yyyy HH:mm:ss')
}

export function formatRelativeDate(inputDate: string) {
  return formatDistance(
    new Date(inputDate),
    new Date(),
   { addSuffix: true }
)
}
import { getTimeAgo } from '../utils/get-relative-time'

export function useTimeAgo(timestamp: number) {
  const locale = globalThis.navigator?.language ?? 'es'
  const timeAgo = getTimeAgo(timestamp, locale)

  const date = new Date(timestamp)
  const formatDate = new Intl.DateTimeFormat(locale, {
    month: 'long', day: 'numeric'
  }).format(date)

  return {
    dateTime: formatDate,
    timeAgo
  }
}

/*
  dateTime: September 25 || 25 de Setiembre
  timeAgo: 1 day ago || hace 1 dia
*/

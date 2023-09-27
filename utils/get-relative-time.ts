const DATE_UNITS = {
  // year: 31536000,
  month: 2629800,
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1 // second is the smallest unit
}

const getSecondsDiff = (timestamp: number) => (Date.now() - timestamp) / 1000

const getUnitAndValueDate = (secondsElapsed: number) => {
  for (const [unit, secondsInUnit] of Object.entries(DATE_UNITS)) {
    if (secondsElapsed >= secondsInUnit || unit === 'second') {
      const value = Math.floor(secondsElapsed / secondsInUnit) * -1
      return { value, unit }
    }
  }
}

export const getTimeAgo = (timestamp: number, locale: string) => {
  const rtf = new Intl.RelativeTimeFormat(locale)

  const secondsElapsed = getSecondsDiff(timestamp)
  const { value, unit } = getUnitAndValueDate(secondsElapsed) as { value: number, unit: Intl.RelativeTimeFormatUnit }
  return rtf.format(value, unit)
}

import type { calendar_v3 } from 'googleapis'
import type { date } from '../api/fetch-events/route'

type Schema$Event = calendar_v3.Schema$Event
type Schema$EventDateTime = calendar_v3.Schema$EventDateTime

// Bookings are made in Norwegian time, so timed events are turned into dates in that time zone
const osloDateParts = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Europe/Oslo',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit'
})

function toDate(time: Schema$EventDateTime | undefined): date | undefined {
  if (time?.date) {
    return time.date
  }

  if (time?.dateTime) {
    const parts = Object.fromEntries(osloDateParts.formatToParts(new Date(time.dateTime)).map((part) => [part.type, part.value]))
    return `${parts.year}-${parts.month}-${parts.day}`
  }

  return undefined
}

export function cleanEvents(events: Schema$Event[]) {
  const dates: date[] = []

  events.forEach((event) => {
    const dateStart = toDate(event.start)
    const dateEnd = toDate(event.end)

    if (dateStart && dateEnd) {
      if (dateEnd > dateStart) {
        // The end date is the check-out day, which is free for the next guest
        getDatesBetween(dateStart, dateEnd, dates)
      } else {
        // A timed event that starts and ends on the same day still blocks that day
        dates.push(dateStart)
      }
    }
  })

  return dates
}

function getDatesBetween(startDate: date, endDate: date, dates: date[] = []) {
  let dateEnd = new Date(endDate)

  // Start from the startDate and iterate until the endDate
  for (let date = new Date(startDate); date < dateEnd; date.setDate(date.getDate() + 1)) {
    dates.push(formatDate(date)) // Add each date to the array
  }
  return dates
}

export function formatDate(date: Date) {
  // Get the year, month, and day from the date object
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0') // Month starts from 0, so add 1 and pad with leading zero if necessary
  const day = String(date.getDate()).padStart(2, '0') // Pad with leading zero if necessary
  // Return the formatted date string in 'YYYY-MM-DD' format
  return `${year}-${month}-${day}`
}

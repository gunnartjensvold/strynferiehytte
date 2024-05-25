import { calendar_v3 } from 'googleapis'
import Schema$Event = calendar_v3.Schema$Event
import { date } from '../api/fetch-events/route'

export function cleanEvents(events: Schema$Event[]) {
  const dates: date[] = []

  events.forEach((event) => {
    let dateStart = event.start?.date
    let dateEnd = event.end?.date

    if (event.start?.dateTime) {
      dateStart = event.start.date?.slice(0, 6)
    }

    if (event.end?.dateTime) {
      dateEnd = event.end.date?.slice(0, 6)
    }

    if (dateStart && dateEnd) {
      getDatesBetween(dateStart, dateEnd, dates)
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

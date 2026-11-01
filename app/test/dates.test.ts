import { describe, expect, test } from 'vitest'
import type { calendar_v3 } from 'googleapis'
import { cleanEvents, formatDate } from '../utils/dates'

const allDayEvent = (start: string, end: string): calendar_v3.Schema$Event => ({
  start: { date: start },
  end: { date: end }
})

describe('cleanEvents', () => {
  test('expands an all-day event into every booked day, excluding the end date', () => {
    expect(cleanEvents([allDayEvent('2024-07-01', '2024-07-04')])).toEqual(['2024-07-01', '2024-07-02', '2024-07-03'])
  })

  test('handles events that cross a month boundary', () => {
    expect(cleanEvents([allDayEvent('2024-01-30', '2024-02-02')])).toEqual(['2024-01-30', '2024-01-31', '2024-02-01'])
  })

  test('covers every day of overlapping events', () => {
    const dates = cleanEvents([allDayEvent('2024-07-01', '2024-07-04'), allDayEvent('2024-07-03', '2024-07-06')])
    expect(new Set(dates)).toEqual(new Set(['2024-07-01', '2024-07-02', '2024-07-03', '2024-07-04', '2024-07-05']))
  })

  test('blocks the days of a booking with start and end times, leaving the check-out day free', () => {
    const event = { start: { dateTime: '2024-07-01T15:00:00+02:00' }, end: { dateTime: '2024-07-04T11:00:00+02:00' } }
    expect(cleanEvents([event])).toEqual(['2024-07-01', '2024-07-02', '2024-07-03'])
  })

  test('blocks the day of a timed event that starts and ends on the same day', () => {
    const event = { start: { dateTime: '2024-07-01T10:00:00+02:00' }, end: { dateTime: '2024-07-01T14:00:00+02:00' } }
    expect(cleanEvents([event])).toEqual(['2024-07-01'])
  })

  test('reads timed events in Norwegian time', () => {
    // 23:30 UTC on 1 July is 01:30 on 2 July in Norway
    const event = { start: { dateTime: '2024-07-01T23:30:00Z' }, end: { dateTime: '2024-07-02T08:00:00Z' } }
    expect(cleanEvents([event])).toEqual(['2024-07-02'])
  })

  test('ignores events without dates', () => {
    expect(cleanEvents([{}, { start: { date: '2024-07-01' } }])).toEqual([])
  })
})

test('formatDate pads month and day', () => {
  expect(formatDate(new Date(2024, 0, 5))).toBe('2024-01-05')
})

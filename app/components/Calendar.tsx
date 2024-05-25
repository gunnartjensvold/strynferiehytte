'use client'

import Button from './Button'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined'
import { useEffect, useState } from 'react'
import { date } from '../api/fetch-events/route'

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
export function Calendar() {
  const today = new Date()
  const [currentDate, setCurrentDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1))
  const [events, setEvents] = useState<date[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/fetch-events', { cache: 'no-store' })
        if (!response.ok) {
          throw new Error('Failed to fetch events')
        }
        const data = await response.json()
        console.log(data)
        setEvents(data)
      } catch (err) {
        console.error('Error fetching events:', err)
        // setError(err.message);
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const generateDays = () => {
    const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth())
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), daysInMonth)
    const startDay = firstDayOfMonth.getDay() // 0: Sunday, 1: Monday, ..., 6: Saturday

    // Determine the first Monday before or on the first day of the month
    const daysFromPrevMonth = startDay === 0 ? 6 : startDay - 1

    const days = []

    const disabledDates = new Set<date>()
    events.forEach((event) => {
      disabledDates.add(event)
    })

    const className = 'font-bold xs:text-lg md:text-2xl pt-1 pl-1 md:pt-3 md:pl-6 sm:h-24 h-16 rounded-md '
    // Fill days from previous month
    const prevMonthLastDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate()
    for (let i = daysFromPrevMonth; i > 0; i--) {
      const formattedDate = formatDate(currentDate.getFullYear(), currentDate.getMonth() - 1, prevMonthLastDay - i + 1)

      let bacgkroundColor = 'bg-slate-200'
      if (disabledDates.has(formattedDate)) {
        bacgkroundColor = 'bg-error'
      }

      days.push(
        <div
          key={`prev-${i}`}
          className={className + bacgkroundColor + ' opacity-60'}
        >
          {prevMonthLastDay - i + 1}.
        </div>
      )
    }

    // Fill days of current month
    for (let i = 1; i <= daysInMonth; i++) {
      const formattedDate = formatDate(currentDate.getFullYear(), currentDate.getMonth(), i)

      let bacgkroundColor = 'bg-success'
      if (disabledDates.has(formattedDate)) {
        bacgkroundColor = 'bg-error'
      }

      days.push(
        <div
          key={i}
          className={className + bacgkroundColor}
        >
          {i}.
        </div>
      )
    }

    // Fill days from next month to complete the last week
    const endDay = lastDayOfMonth.getDay() // 0: Sunday, 1: Monday, ..., 6: Saturday
    const daysFromNextMonth = endDay === 0 ? 0 : 7 - endDay
    for (let i = 1; i <= daysFromNextMonth; i++) {
      const formattedDate = formatDate(currentDate.getFullYear(), currentDate.getMonth() + 1, i)

      let bacgkroundColor = 'bg-slate-200'
      if (disabledDates.has(formattedDate)) {
        bacgkroundColor = 'bg-error'
      }

      days.push(
        <div
          key={`next-${i}`}
          className={className + bacgkroundColor + ' opacity-60'}
        >
          {i}.
        </div>
      )
    }
    return days
  }

  function createLoader() {
    return (
      <span>
        <svg
          className='animate-spin -ml-1 mr-3 h-7 w-7'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
        >
          <circle
            className='opacity-25'
            cx='12'
            cy='12'
            r='10'
            stroke='currentColor'
            strokeWidth='4'
          ></circle>
          <path
            className='opacity-75'
            fill='currentColor'
            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
          ></path>
        </svg>
      </span>
    )
  }

  return (
    <div className='flex flex-col gap-6 md:gap-14 w-full'>
      <div className='flex justify-between items-center'>
        <h1 className='text-xl xs:text-2xl sm:text-4xl font-bold text-green'>{months[currentDate.getMonth()] + ' ' + currentDate.getFullYear()}</h1>
        <div className='flex gap-2 items-center'>
          {loading && createLoader()}
          <Button
            srText='Previous month'
            type='secondary'
            icon={<ArrowBackIosOutlinedIcon />}
            onClick={previousMonth}
          />

          <Button
            srText='Next month'
            type='secondary'
            icon={<ArrowForwardIosOutlinedIcon />}
            onClick={nextMonth}
          />
        </div>
      </div>
      <div className='grid grid-cols-7 gap-1 xs:gap-2 sm:gap-3 md:gap-4'>{generateDays()}</div>
    </div>
  )
}

function formatDate(year: number, month: number, day: number) {
  // Pad month and day with leading zeros if necessary
  const paddedMonth = String(month + 1).padStart(2, '0') // Month starts from 0, so add 1 and pad with leading zero if necessary
  const paddedDay = String(day).padStart(2, '0') // Pad with leading zero if necessary
  // Return the formatted date string in 'YYYY-MM-DD' format
  return `${year}-${paddedMonth}-${paddedDay}`
}

'use client'

import Button from './Button'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined'
import { useState } from 'react'

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
export function Calendar() {
  const today = new Date()
  const [currentDate, setCurrentDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1))

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

    // Fill days from previous month
    const prevMonthLastDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate()
    for (let i = daysFromPrevMonth; i > 0; i--) {
      days.push(
        <div
          key={`prev-${i}`}
          className='font-bold xs:text-lg md:text-2xl pt-1 pl-1 md:pt-3 md:pl-6 sm:h-24 h-16 rounded-md bg-slate-200 opacity-50'
        >
          {prevMonthLastDay - i + 1}.
        </div>
      )
    }

    // Fill days of current month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        <div
          key={i}
          className='bg-success font-bold xs:text-lg md:text-2xl pt-1 pl-1 md:pt-3 md:pl-6 sm:h-24 h-16 rounded-md'
        >
          {i}.
        </div>
      )
    }

    // Fill days from next month to complete the last week
    const endDay = lastDayOfMonth.getDay() // 0: Sunday, 1: Monday, ..., 6: Saturday
    const daysFromNextMonth = endDay === 0 ? 0 : 7 - endDay
    for (let i = 1; i <= daysFromNextMonth; i++) {
      days.push(
        <div
          key={`next-${i}`}
          className='font-bold xs:text-lg md:text-2xl pt-1 pl-1 md:pt-3 md:pl-6 sm:h-24 h-16 rounded-md bg-slate-200 opacity-50'
        >
          {i}.
        </div>
      )
    }
    return days
  }

  return (
    <div className='flex flex-col gap-6 md:gap-14 w-full'>
      <div className='flex justify-between items-center'>
        <h1 className='text-xl xs:text-2xl sm:text-4xl font-bold text-green'>{months[currentDate.getMonth()] + ' ' + currentDate.getFullYear()}</h1>
        <div className='flex gap-2'>
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

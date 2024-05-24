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
    const days = []
    const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth())
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        <div
          className='bg-success font-bold xs:text-lg md:text-2xl pt-1 pl-1 md:pt-3 md:pl-6 sm:h-24 h-16 rounded-md'
          key={i}
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

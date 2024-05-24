import Button from './Button'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined'

export function Calendar() {
  return (
    <div className='flex flex-col gap-14 w-full'>
      <div className='flex justify-between'>
        <h1 className='text-4xl font-bold text-green'>Calendar</h1>
        <div className='flex gap-2'>
          <Button
            srText='Previous month'
            type='secondary'
            icon={<ArrowBackIosOutlinedIcon />}
          />

          <Button
            srText='Next month'
            type='secondary'
            icon={<ArrowForwardIosOutlinedIcon />}
          />
        </div>
      </div>
    </div>
  )
}

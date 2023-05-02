import React, { useEffect, useState } from 'react'
import moment from 'moment/moment'

const Time = () => {
  const [time, setTime] = useState(moment().format('LTS'))
  const [date, setDate] = useState(moment().format("MMM Do YY"))
  useEffect(() => {
    setInterval(() => {
      setTime(moment().format('LTS'))
      setDate(moment().format("MMM Do YY"))
    }, 1000)
  }, [])
  return (
    <div >
      <h1 className='text-4xl text-stone-50 font-bold'>{time}</h1>
      <h3 className='text-stone-50 font-bold'>{date}</h3>
    </div>
  )
}

export default Time
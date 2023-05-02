import React from 'react'
import moment from 'moment'
import { convertString } from './CardWeather'

const HourCard = ({ dataInHour }) => {
  const date = new Date(dataInHour.dt * 1000)
  return (
    <div className='flex flex-row justify-around items-center w-full h-10 bg-slate-50 rounded-lg my-1 cursor-pointer hover:bg-[#fad1d1]'>
      <div className='flex flex-col justify-center items-center p-1'>
        <p className='text-xs'>{moment(date).format('LT')}</p>
      </div>
      <p className='text-2xl mb-2'>{Math.round(dataInHour.main.temp - 273.15)}°</p>
      <div className='flex flex-row justify-center items-center w-[10vw]'>
        <img className='max-w-[50px] h-auto' src={`https://openweathermap.org/img/wn/${dataInHour.weather[0].icon}@2x.png`} alt="" />
        <p className='text-xs'>{convertString(dataInHour.weather[0].description)}</p>
      </div>
    </div>
  )
}

export default HourCard
import React, { useState } from 'react'
import moment from 'moment';
import { WiBarometer, WiCloud, WiHumidity, WiThermometer } from 'react-icons/wi';
import { BsFillCaretRightFill, BsFillCaretDownFill } from "react-icons/bs";
import { convertString } from './CardWeather';
import HourCard from './HourCard';

import './Scroll.css'

const DayCard = ({ data5Day, dt, show = false }) => {
  const [isShow, setIsShow] = useState(show)
  // const [data, setData] = useState()

  // useEffect(() => {
  //   setData(data5Day.list.filter(item => {
  //     return new Date(item.dt * 1000).getDate() === new Date(dt * 1000).getDate()
  //   }))
  // }, [])

  const date = new Date(dt * 1000)
  let day = ''
  // var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  switch (date.getDay()) {
    case 0: day = 'Sun'
      break;
    case 1: day = 'Mon'
      break;
    case 2: day = 'Tue'
      break;
    case 3: day = 'Wed'
      break;
    case 4: day = 'Thu'
      break;
    case 5: day = 'Fri'
      break;
    case 6: day = 'Sat'
      break;
    default: day = ''
  }

  return (
    <div className='relative flex flex-col justify-start items-center w-[90%] rounded-2xl cursor-pointer '
      onClick={() => setIsShow(!isShow)}
    >
      {data5Day.list &&
        <div className='flex flex-row justify-around items-center w-[100%] p-1 bg-[#fff] hover:bg-[#b7c2f9]  rounded-2xl my-1'>
          {/* date */}
          <div className='flex flex-col justify-center items-center p-1'>
            <p className='text-3xl'>{day}</p>
            <p className='text-xs'>{moment(date).format("MMM Do YY")}</p>
          </div>

          {/* weather */}
          <div className='flex flex-col '>
            <p className='text-4xl mb-2'>{Math.round(data5Day.list[0].main.temp - 273.15)}°</p>
            <div className='flex flex-row justify-around'>
              <p className='text-center flex flex-row items-center mx-2 text-xs'><WiThermometer />{Math.round(data5Day.list[0].main.temp_min - 273.15)}°/{Math.round(data5Day.list[0].main.temp_max - 273.15)}°</p>
              <p className='text-center flex flex-row items-center mx-2 text-xs'><WiHumidity /> {data5Day.list[0].main.humidity}%</p>
              <p className='text-center flex flex-row items-center mx-2 text-xs'><WiBarometer />{data5Day.list[0].main.pressure}hPa</p>
              <p className='text-center flex flex-row items-center mx-2 text-xs'><WiCloud />{data5Day.list[0].clouds.all}%</p>
            </div>
          </div>

          {/* icon */}
          <div className='flex flex-col justify-center items-center w-[8vw]'>
            <img className='max-w-[50px] h-auto' src={`https://openweathermap.org/img/wn/${data5Day.list[0].weather[0].icon}@2x.png`} alt="" />
            <p className='text-xs'>{convertString(data5Day.list[0].weather[0].description)}</p>
          </div>
          {/* more */}
          <div onClick={() => setIsShow(!isShow)} className='flex justify-center items-center cursor-pointer text-sky-400 hover:text-blue-600 shadow-transparent'>
            {isShow ? (<BsFillCaretRightFill />) : (<BsFillCaretDownFill />)}
          </div>
        </div>
      }


      {/* more info */}
      {isShow && (
        <div id='scroll' className='my-1 flex flex-col justify-start items-center w-full max-h-[20vh] overflow-y-auto'>
          {
            data5Day.list.map(item => {
              if (new Date(item.dt * 1000).getDate() === new Date(dt * 1000).getDate())
                return <HourCard key={item.dt} dataInHour={item} />
            })
          }


        </div>
      )}
    </div>

  )
}

export default DayCard
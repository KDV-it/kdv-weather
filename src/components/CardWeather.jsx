import React from 'react'
import { GoLocation } from 'react-icons/go';
import { WiThermometer, WiHumidity, WiBarometer, WiStrongWind, WiWindDeg } from 'react-icons/wi';
import { MdVisibility } from 'react-icons/md';

export const convertString = (str) => {
  var strArr = str.toLowerCase().split(' ');
  var result = strArr.map(function (str) {
    return str.replace(str.charAt(0), str.charAt(0).toUpperCase());
  });
  return result.join(' ');
}
const CardWeather = ({ dataCurrent }) => {
  const urlIcon = dataCurrent ? `https://openweathermap.org/img/wn/${dataCurrent.weather[0].icon}@2x.png` : ''
  return (
    dataCurrent &&
    <div className={`text-[#fefcfd] flex flex-col justify-start items-center p-2 py-4 w-[30%] rounded-2xl bg-[#7344b4] `}>
      <div className='flex flex-row justify-center items-center'>
        <span className='text-[#f15959]'><GoLocation /></span>
        <h1 className='text-2xl font-bold m-2'>{dataCurrent.name}</h1>
      </div>
      <div className='flex flex-row items-end '>
        <p className='text-6xl flex flex-row'>{Math.round(dataCurrent.main.temp - 273.15)}°</p>
        <p className='font-medium'>{convertString(dataCurrent.weather[0].description)}</p>
      </div>
      <div className='w-full flex justify-center' >
        <img className='w-[40%]' src={urlIcon} alt='icon' />
      </div>
      <div className='w-full flex flex-row justify-evenly items-center mb-2'>
        <p className='flex flex-row items'><span className='flex items-center'><WiThermometer /></span> max/min: {Math.round(dataCurrent.main.temp_max - 273.15)}° / {Math.round(dataCurrent.main.temp_min - 273.15)}°</p>
        {/* <p className='flex flex-row items-center'><WiThermometer />min: {Math.round(dataCurrent.main.temp_min - 273.15)}<WiCelsius /></p> */}
        {/* <p className='flex flex-row items-center'><WiThermometer />max: {Math.round(dataCurrent.main.temp_max - 273.15)}<WiCelsius /></p> */}
      </div>
      <div className='w-[80%] px-4 py-2 rounded-2xl bg-[#ffffff5d] h-[40%] font-medium'>
        <span className='flex flex-row items-center justify-between w-full'><p className='flex flex-row items-center'><WiHumidity /> Humidity:</p><p> {Math.round(dataCurrent.main.temp_min - 273.15)}%</p></span>
        <span className='flex flex-row items-center justify-between w-full'><p className='flex flex-row items-center'><WiBarometer /> Pressure:</p><p> {dataCurrent.main.pressure}hPa</p></span>
        <span className='flex flex-row items-center justify-between w-full'><p className='flex flex-row items-center'><WiThermometer /> Feels Like:</p><p> {Math.round(dataCurrent.main.feels_like - 273.15)}%</p></span>
        <span className='flex flex-row items-center justify-between w-full'><p className='flex flex-row items-center'><MdVisibility /> Visibility:</p><p> {Math.round(dataCurrent.visibility / 1000)}km</p></span>
        <span className='flex flex-row items-center justify-between w-full'><p className='flex flex-row items-center'><WiStrongWind /> Wind Speed:</p><p> {dataCurrent.wind.speed}m/s</p></span>
        <span className='flex flex-row items-center justify-between w-full'><p className='flex flex-row items-center'><WiWindDeg /> Wind Deg:</p><p> {dataCurrent.wind.deg}</p></span>

      </div>

    </div>


  )
}

export default CardWeather
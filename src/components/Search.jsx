import React from 'react'
import { useState } from 'react'
import { IoClose } from 'react-icons/io5'

import CityList from '../cityList.json'
import './Scroll.css'

const Search = ({ dataCurrent, setDataCurrent, setData5Day, data5Day, show, setShow }) => {
  const [search, setSearch] = useState('')
  const [cityMatch, setCityMatch] = useState([]);

  const key = process.env.REACT_APP_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}`
  //api get 5 day 3hour step
  const url5 = `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=${key}`

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    if (e.target.value.length > 2) {
      searchCountry(e.target.value)
    }
  }

  const handleSubmit = async () => {
    const response = await fetch(url)
    const dataRes = await response.json();
    setDataCurrent(dataRes)
    setShow(false)

    const response5 = await fetch(url5)
    const dataRes5 = await response5.json();
    setData5Day(dataRes5);

    console.log('data5res', dataRes5);
    // console.log(dataRes.list.map((item, index) => {
    //   return dataRes.list[index + 1]
    // }));
  }

  const searchCountry = (text) => {
    let matches = CityList.filter((city) => {
      const regex = new RegExp(`${text}`, 'gi')
      return city.name.match(regex);
    })
    setCityMatch(matches)
  }


  return (
    <div className='w-[60%] relative mt-[15vh]'>
      <div className='ml-0 mb-1 p-1  flex flex-row justify-between bg-[#f9fafb] rounded-lg overflow-hidden w-[100%]'>
        <div className='p-2 bg-[#f9fafb]'>
          <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input onChange={handleChange} type='text' value={search} className='w-full bg-[#f9fafb] p-1 outline-none' placeholder="Type your city..." required />
        {
          search &&
          <span className='flex justify-center items-center text-2xl hover:text-gray-400 p-1 cursor-pointer'
            onClick={() => {
              setSearch('')
              setCityMatch([])
              setDataCurrent(null)
              setShow(!show)
            }}
          >
            <IoClose />
          </span>
        }
        <button onClick={handleSubmit} type='submit' className='px-4 border rounded text-white font-medium  bg-blue-700 hover:bg-blue-400'>Search</button>

      </div>

      <div className='p-1 max-h-[50vh] overflow-y-auto  w-[100%] shadow-2xl rounded-xl absolute top-[100%] left-0 z-10'
        id="scroll"
        style={{ '::WebkitScrollbar': { width: 0 }, color: '#1e4ed8' }}
      >
        {cityMatch && cityMatch.map((city) => {
          return (
            <div key={city.id} className='w-[100%] p-2  box-border bg-white rounded mb-[1px] cursor-pointer hover:bg-[#e8f1f9ee]'
              onClick={() => {
                setSearch(city.name)
                setCityMatch([])
              }}
            >
              <p className='font-medium text-slate-500'>{city.name}</p>
            </div>
          )
        })}
      </div>
    </div>

  )
}

export default Search
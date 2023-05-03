import React, { useEffect, useState } from 'react'
import CardWeather from './CardWeather';

import DayCard from './DayCard';
// import Data5Day from '../testData5Day.json'


const ResultWeather = ({ dataCurrent, Data5Day }) => {
  const [lstDay, setLstDay] = useState([]);

  // const lstDay = []

  useEffect(() => {
    if (Data5Day.list) {
      let temp = [];
      for (let i = 1; i < Data5Day.list.length; i++) {
        const dt = Data5Day.list[i].dt;
        const lastDt = Data5Day.list[i - 1].dt;
        let date = new Date(dt * 1000);
        let lastDate = new Date(lastDt * 1000);
        if (date.getDate() !== lastDate.getDate()) {
          temp.push(Data5Day.list[i].dt);
        }
      }
      setLstDay(temp);
    }
  }, [Data5Day])

  return (
    <div className='w-[65%]  h-[60vh] bg-gradient-to-b from-[#bae3f2a5] to-[#abd1dcaf] flex flex-row justify-between p-4 rounded-2xl mt-2' >
      {/* current weather */}
      {dataCurrent &&
        <>
          <CardWeather dataCurrent={dataCurrent} />
          <div className='rounded-2xl bg-gradient-to-b from-[#015C92] to-[#2D82B5] h-full w-[70%] ml-4 p-2 px-4 flex flex-col justify-start items-center '>
            <h1 className='font-medium text-[#fff] text-2xl m-2'>Next 5 days</h1>

            <div id='scroll' className='flex flex-col max-h-[60vh] overflow-y-auto w-full justify-start items-center border-y-2 p-2 mx-4'>
              {lstDay.map((item, index) => {
                return <DayCard key={index} data5Day={Data5Day} dt={item} />
              })}
            </div>
          </div>
        </>
      }


    </div>
  )

}

export default ResultWeather
import { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Search from './components/Search';
import Time from './components/Time';
import ResultWeather from './components/ResultWeather';

import 'animate.css';

function App() {
  const [dataCurrent, setDataCurrent] = useState(null);
  const [data5Day, setData5Day] = useState(null);
  const [show, setShow] = useState(true);
  return (
    <div className={`App flex flex-col justify-start items-center bg-cover bg-no-repeat h-screen w-screen `}>
      <video autoPlay loop muted
        className="z-[-1] absolute w-screen h-[100vh] object-cover">
        <source src="video-bg.mp4" type="video/mp4"></source>
      </video>
      <Navbar />
      <Search
        dataCurrent={dataCurrent}
        setDataCurrent={setDataCurrent}
        data5Day={data5Day}
        setData5Day={setData5Day}
        show={show}
        setShow={setShow}
      />
      <Time />

      {dataCurrent && data5Day &&
        <ResultWeather
          className="animate__animated animate__backInDown z-50"
          dataCurrent={dataCurrent}
          Data5Day={data5Day}
        />
      }
      {show &&
        <h1 className='mt-10 font-bold text-5xl text-white'>WELLCOME TO MY WEBSITE!</h1>
      }
    </div>
  );
}

export default App;

import React from 'react'

const Navbar = () => {
  // const [dark, setDark] = React.useState(false);
  return (
    <nav className='fixed top-0 left-0 w-screen h-[8vh] flex flex-row justify-between items-center py-1 px-10 bg-gradient shadow-lg '>
      <div className="">
        <img src='/logo.png' alt="logo" className="w-16" />
      </div>
      <ul className='flex flex-row justify-evenly items-center '>
        <li className='m-4 p-1 px-3 w-24 font-bold text-gray-100 hover:cursor-pointer hover:bg-[#6a9cfd] hover:border-[1px] rounded'>Home</li>
        <li className='m-4 p-1 px-3 w-24 font-bold text-gray-100 hover:cursor-pointer hover:bg-[#6a9cfd] hover:border-[1px] rounded'>About</li>
        <li className='m-4 p-1 px-3 w-24 font-bold text-gray-100 hover:cursor-pointer hover:bg-[#6a9cfd] hover:border-[1px] rounded'>Contact</li>
      </ul>
      <div>
        {/* <button className='w-24 m-3 p-1 px-3 border-[1px] rounded text-sm hover:cursor-pointer hover:bg-[#6a9cfd] font-bold text-yellow-50' onClick={() => setDark(!dark)}>
          {dark ? 'Light ☀️' : 'Dark 🌙'}
        </button> */}
      </div>
    </nav>
  )
}

export default Navbar
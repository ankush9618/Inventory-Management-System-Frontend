import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";

function Navbar() {
  const [loggedIn,setLoggedIn] = useState(true)
  return (
    <div className='hidden md:block bg-gray-700 h-14 md:ml-64 fixed w-85/100'>
          <div className='flex justify-between items-center h-full'>
            <div className='ml-8 '>
              <div className='flex items-center px-4 gap-4 rounded-3xl border-2 border-white'>
                <input type="text" className='text-white py-1 outline-none' placeholder='Type something to search..'/>
                <IoSearch className='font-bold text-xl text-white cursor-pointer'/>
              </div>
                
            </div>
            <div className='mr-8 flex items-center gap-4'>
                {loggedIn&&<img src="https://res.cloudinary.com/daootd1uo/image/upload/v1742757690/qi1onwszqlq6cxtcpm5b.png" alt="" className='h-8 rounded-3xl cursor-pointer' />}
                {loggedIn?<button className='bg-sky-500 px-2 py-1 rounded-md text-white font-semibold'>Logout</button>:<button className='bg-sky-500 px-2 py-1 rounded-md text-white font-semibold'>Login</button>}
            </div>
          </div>
    </div>
  )
}

export default Navbar
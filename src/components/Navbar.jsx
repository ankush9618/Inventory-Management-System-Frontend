import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [loggedIn,setLoggedIn] = useState(false)
  return (
    <div className=' bg-gray-700 h-14 w-full'>
          <div className='flex justify-between items-center h-full'>
            <div className='ml-8 '>
              <div className='flex items-center px-4 gap-4 rounded-3xl border-2 border-white'>
                <input type="text" className='text-white py-1 outline-none' placeholder='Type something to search..'/>
                <IoSearch className='font-bold text-xl text-white cursor-pointer'/>
              </div>
                
            </div>
            <div className='mr-8 flex items-center gap-4'>
                {loggedIn&&<img src="https://res.cloudinary.com/daootd1uo/image/upload/v1742757690/qi1onwszqlq6cxtcpm5b.png" alt="" className='h-8 rounded-3xl cursor-pointer' />}
                {loggedIn?<NavLink to='/logout' className='bg-sky-500 px-3 py-1 rounded-md text-white font-semibold cursor-pointer' onClick={()=>setLoggedIn(false)}>Logout</NavLink>:<NavLink to='/login' className='bg-sky-500 px-3 py-1 rounded-md text-white font-semibold cursor-pointer'>Login</NavLink>}
            </div>
          </div>
    </div>
  )
}

export default Navbar
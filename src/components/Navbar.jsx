import React from 'react'
import { IoSearch } from "react-icons/io5";

function Navbar() {
  return (
    <div className='hidden md:block bg-gray-700 h-14 md:ml-64'>
          <div className='flex justify-between items-center h-full'>
            <div className='ml-8'>
                <input type="text" className='text-white border-2 py-1 px-4 rounded-2xl border-white' placeholder='Type something to search..'/>
                
            </div>
            <div className='mr-8'>
                <img src="https://res.cloudinary.com/daootd1uo/image/upload/v1742757690/qi1onwszqlq6cxtcpm5b.png" alt="" className='h-8 rounded-3xl' />
            </div>
          </div>
    </div>
  )
}

export default Navbar
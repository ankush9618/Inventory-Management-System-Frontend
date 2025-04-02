import React from 'react'
import { LuLayoutDashboard } from "react-icons/lu";

function Dashboard() {
  return (
    <div className='h-screen bg-gray-600 md:ml-64 md:mt-0'>
        <div className='text-center font-semibold text-white flex justify-center gap-1 items-center'>
            <LuLayoutDashboard/>
            <h2 className=''>Dashboard</h2>
        </div>
    
    </div>
  )
}

export default Dashboard
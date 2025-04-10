import React, { useContext, useEffect } from 'react'
import { LuLayoutDashboard } from "react-icons/lu";
import UserContext from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const {loggedIn} = useContext(UserContext);
  const navigate = useNavigate()

  useEffect(()=>{
    if(!loggedIn){
      navigate("/login")
    }
  })

  return (
    <div className='h-screen bg-red-600'>
        <div className='text-center font-semibold text-white flex justify-center gap-1 items-center'>
            <LuLayoutDashboard/>
            <h2 className=''>Dashboard</h2>
        </div>
    
    </div>
  )
}

export default Dashboard
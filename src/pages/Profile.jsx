import React, { useEffect, useState } from 'react'
import axiosInstance from '../utils/axiosInstance'
import { useNavigate } from 'react-router-dom'

function Profile({loggedIn,setLoggedIn,user}) {
   
  return (
    <>
    <div className='md:flex md:justify-start w-full p-8 bg-gray-700 gap-8 dark:text-white'>
        <div className='flex justify-center'>
        <img src={user.avatar} alt="" className='h-40 rounded-full cursor-pointer' />
        </div>
        <div className='md:text-2xl'>
            <div className='flex justify-start gap-4 items-center h-14'>
                <div>
                    Name:
                </div>
                <div>
                    {user.name}
                </div>
            </div>
            <div className='flex justify-start gap-4 items-center h-14'>
                <div>
                    Email:
                </div>
                <div>
                    {user.email}
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Profile
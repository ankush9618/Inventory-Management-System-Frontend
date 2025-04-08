import React, { useContext, useEffect, useState } from 'react'
import axiosInstance from '../utils/axiosInstance'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import UserContext from '../context/UserContext'

function Profile({user,setUser}) {
    const navigate = useNavigate();
    const {loggedIn} = useContext(UserContext);
   useEffect(()=>{
    if(!loggedIn){
        navigate("/login")
    }
    axiosInstance.get("/users/details")
    .then((res)=>{
        setUser(res.data.data)
        console.log(res.data.data)
        //toast.success(res.data.message);
    }).catch((err)=>{
        console.log(err);
        //toast.error(res.data.message)
    })
   },[])

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
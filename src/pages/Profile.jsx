import React, { useContext, useEffect, useState } from 'react'
import axiosInstance from '../utils/axiosInstance'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import UserContext from '../context/UserContext'

function Profile({user,setUser}) {
    const navigate = useNavigate();
    const {loggedIn} = useContext(UserContext);
   useEffect(()=>{
    console.log(loggedIn)
    if(!loggedIn){
        navigate("/login")
        console.log("Log")
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
    <div className='md:flex md:justify-start w-full min-h-screen p-8 bg-gray-700 gap-8 dark:text-white'>
        <div className='flex justify-center'>
        <div className='flex justify-start items-center flex-col'>
        <img src={user.avatar} alt="" className='h-40 rounded-full cursor-pointer' />
        
{/* <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label> */}
<input class="block mt-4 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="avatar" type="file"/>

        </div>
        
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
            <div className='flex justify-start gap-4 items-center h-14'>
                <div>
                    Role:
                </div>
                <div>
                    {user.role}
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Profile
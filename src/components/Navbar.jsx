import React, { useContext, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { Navigate, NavLink } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';
import { toast } from 'react-toastify';
import UserContext from '../context/UserContext';


function Navbar({user,setUser}) {

  //const navigate = Navigate()
  const {loggedIn,setLoggedIn}=useContext(UserContext);
  const handleProfile = async(e)=>{
    try {
      // if(!loggedIn){
      //   navigate("/login")
      // }
      const res = await axiosInstance.get("/users/details");
      setUser(res.data.data)
     // console.log(res.data.data);
    } catch (error) {
      console.error(error);
    }
  }
  const handleLogout = async (e) => {
    try {
      const res = await axiosInstance.post("/users/logout");
      setLoggedIn(false);
      toast.warn(res.data.message);
      //console.log(res);
    } catch (err) {
      console.error(err);
      toast.error("Logout failed. Please try again.");
    }
  };
  
  return (
    <div className=' bg-gray-800 h-14 w-full'>
          <div className='flex justify-between items-center h-full'>
            <div className='ml-8 '>
              <div className='flex items-center px-4 gap-4 rounded-3xl border-2 border-white'>
                <input type="text" className='text-white py-1 outline-none' placeholder='Type something to search..'/>
                <IoSearch className='font-bold text-xl text-white cursor-pointer'/>
              </div>
                
            </div>
            <div className='mr-8 flex items-center gap-4'>
                {loggedIn&&<NavLink className="" to="/profile"><img onClick={handleProfile} src="https://res.cloudinary.com/daootd1uo/image/upload/v1742757690/qi1onwszqlq6cxtcpm5b.png" alt="" className='h-8 rounded-full cursor-pointer' /></NavLink>}
                {loggedIn?<NavLink to='/' className='bg-sky-500 px-3 py-1 rounded-md text-white font-semibold cursor-pointer' onClick={handleLogout}>Logout</NavLink>:<NavLink to='/login' className='bg-sky-500 px-3 py-1 rounded-md text-white font-semibold cursor-pointer'>Login</NavLink>}
            </div>
          </div>
    </div>
  )
}

export default Navbar
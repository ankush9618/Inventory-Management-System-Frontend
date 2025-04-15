import React, { useContext, useEffect, useRef, useState } from 'react'
import axiosInstance from '../utils/axiosInstance'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import UserContext from '../context/UserContext'
import Loader from '../components/Loader'
import ProfileLoader from '../components/ProfileLoader'
import { XMLParser } from 'fast-xml-parser'

function Profile() {
    const navigate = useNavigate();
    const {loggedIn,user,setUser,loading,setLoading} = useContext(UserContext);
//    useEffect(()=>{
//     //console.log(loggedIn)
//     axiosInstance.get("/users/details")
//     .then((res)=>{
//         setUser(res.data.data)
//         //console.log(res.data.data)
//         //toast.success(res.data.message);
//     }).catch((err)=>{
//         console.log(err);
//         //toast.error(res.data.message)
//     })
//    },[])

   const data = useRef()
  const parser = new XMLParser()
  const [error,setError] = useState("")
   const updateImage = async (e) => {
    e.preventDefault();
    setLoading(true)
    if (!data.current.files.length) {
      setError("Please select a Image.")
      toast.warn("Please select a Image.");
      setLoading(false)
      return;
    }
  
    const formData = new FormData();
    formData.append("avatar", data.current.files[0]);
    try {
      const res = await axiosInstance.patch("/api/users/update-avatar", formData);
      //console.log(res);
      toast.success(res.data.message)
      setLoading(false)
      //navigate("/")
      //navigate("/users/profile")
    } catch (error) {
      //console.error("Error:", error);
      
      setError(error.response.data.message)
      toast.error(error.response.data.message)
    }
  };
  

  return (
    <>
    {
        loading?<div className="bg-gradient-to-tr from-white via-zinc-400 to-gray-400 py-16 px-16 w-full min-h-screen"><ProfileLoader/></div>:<div className='md:flex md:justify-start w-full min-h-screen p-8 bg-gradient-to-br from-gray-500 via-zinc-400 to-white dark:text-white'>
        <div className='flex justify-center'>
        <div className='flex justify-start items-center flex-col'>
        <img src={user?.avatar} alt="" className='h-40 rounded-full cursor-pointer' />
        {error && <p className='text-red-500 mt-2 text-xl'>{error}</p>}
{/* <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label> */}
<div className='flex justify-center items-center mt-4'>
<form action="" encType="multipart/form-data" method="patch" onSubmit={updateImage}>
  <div className='flex justify-center items-center'>
  <input className="block px-1 border-r-0 text-gray-900 border border-gray-300 rounded-l-md cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 w-3/5" id="avatar" type="file" name="avatar" ref={data}/>
  <input type="submit" value="Update" className='bg-transparent border-1 border-white px-1 rounded-r-md cursor-pointer'/>
  </div>
</form>
</div>

        </div>
        
        </div>
        <div className='md:text-2xl'>
            <div className='flex justify-start gap-4 items-center h-14'>
                <div>
                    Name:
                </div>
                <div>
                    {user?.name}
                </div>
            </div>
            <div className='flex justify-start gap-4 items-center h-14'>
                <div>
                    Email:
                </div>
                <div>
                    {user?.email}
                </div>
            </div>
            <div className='flex justify-start gap-4 items-center h-14'>
                <div>
                    Role:
                </div>
                <div>
                    {user?.role}
                </div>
            </div>
        </div>
    </div>
    }
    </>
  )
}

export default Profile
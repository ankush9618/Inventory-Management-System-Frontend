import React, { useRef, useState } from 'react'
import { BsStack } from 'react-icons/bs'
import { NavLink, useNavigate } from 'react-router-dom'
import axiosInstance from '../utils/axiosInstance';
import { toast } from 'react-toastify';
import { XMLParser } from 'fast-xml-parser';

function Signup() {

  const name = useRef('')
  const email = useRef('');
  const password = useRef('');
  const role = useRef('');
  const [error,setError] = useState("")
  const parser = new XMLParser()
  const navigate = useNavigate()

  const [formData,setFormData] = useState({});
    const signupHandler = async(e)=>{
      
        e.preventDefault();
        if(password.current.value.length<8){
          setError("Password Cannot be less then 8 charecters")
          return 
        }
        const userData = {name:name.current.value,email:email.current.value,password:password.current.value,role:role.current.value};
        setFormData(userData)
        console.log(userData)
        await axiosInstance.post("/api/users/register",userData)
        .then((res)=>{
          toast.success(res.data.message);
          navigate("/")
        })
        .catch((err)=>{
            //console.log(jsonResponse)
            console.log(err.response)
            toast.error(err.response.data.message)
            setError(err.response.data.message)
        })
        
    }
  return (
    <>
    <div className=''>
    <section className="bg-gray-50 dark:bg-gray-500">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                  SignUp
              </h1>
              <form className="space-y-4 md:space-y-6" action="" onSubmit={signupHandler}>
                <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                      <input type="text" name="name" id="confirm-password" placeholder="Ankush Kumar Singh" ref={name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" ref={email} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" ref={password} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  
                  <div className='flex justify-start items-center gap-4'>
                      <label htmlFor="role" className="block  text-sm font-medium text-gray-900 dark:text-white">Role</label>
                      <select name="role" id="role" className='p-1 text-white dark:bg-gray-700 bg-gray-50 border border-gray-300 dark:border-gray-600 dark:placeholder-gray-400 rounded-md' ref={role}>
                        <option value="employee" className='text-gray-500'>Employee</option>
                        {/* <option value="admin" className='text-gray-500'>Admin</option> */}
                        </select>
                  </div>
                  
                  {/* <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                      </div>
                  </div> */}
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">SignUp</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <NavLink to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</NavLink>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    </div>
    </>
    
  )
}

export default Signup
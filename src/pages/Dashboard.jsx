import React, { useContext, useEffect } from 'react'
import { LuLayoutDashboard } from "react-icons/lu";
import UserContext from '../context/UserContext';
import { NavLink, useNavigate } from 'react-router-dom';
import DashboardCard from '../components/DashboardCard';
import { IoAddOutline } from 'react-icons/io5';
import ProductCard from '../components/ProductCard';
import ProductContext from '../context/ProductContext';
import DashboardPrice from '../components/DashboardPrice';

function Dashboard() {
  const {loggedIn} = useContext(UserContext);
  const {products,refresh,setRefresh} = useContext(ProductContext)
  const navigate = useNavigate()

  useEffect(()=>{
    if(!loggedIn){
      navigate("/login")
    }
  })
  const refreshHandler = () =>{
    navigate("/login")
    //setLoader(true)
    setRefresh(!refresh)
    setTimeout(()=>{
      
      //setLoader(false)
    },1000)
  }

  return (
    <div className='min-h-screen p-16 bg-gradient-to-tr from-gray-600 via-zinc-600 to-zinc-700'>
      <div className='md:flex justify-between w-full'><DashboardCard/>
      <DashboardPrice/></div>
    <div className="md:py-16 md:px-8 min-h-screen">
      <div className="container mx-auto px-4">
          <div className='flex justify-center md:gap-16 gap-4 items-center mb-8'>
          <h2 className="md:text-3xl font-bold text-white">Our Latest Product</h2> <NavLink to="/products/add" className="md:text-xl flex justify-center items-center gap-2 font-semibold bg-gray-900 px-3 py-1 rounded-full pr-4 dark:bg-white dark:text-gray-900"><IoAddOutline className='md:text-3xl'/>Add</NavLink>
          <div className='md:text-xl flex justify-center items-center gap-2 font-semibold bg-gray-900 px-3 py-1 rounded-full pr-4 dark:bg-white dark:text-gray-900 cursor-pointer' onClick={refreshHandler}>Refresh</div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4 md:gap-8">{[...products].reverse().map((product)=><div key={product._id}><ProductCard product={product}/></div>)}</div></div></div>
    </div>
  )
}

export default Dashboard
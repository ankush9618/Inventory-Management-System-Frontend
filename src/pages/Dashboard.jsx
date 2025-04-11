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
  const {products} = useContext(ProductContext)
  const navigate = useNavigate()

  useEffect(()=>{
    if(!loggedIn){
      navigate("/login")
    }
  })

  return (
    <div className='min-h-screen p-16'>
      <div className='flex justify-between'><DashboardCard/>
      <DashboardPrice/></div>
    <div className="py-16 px-16 min-h-screen">
      <div className="container mx-auto px-4">
          <div className='flex justify-center md:gap-16 gap-4 items-center mb-8'>
          <h2 className="md:text-3xl font-bold text-white">Our Latest Product</h2> <NavLink to="/products/add" className="md:text-xl flex justify-center items-center gap-2 font-semibold bg-gray-900 px-3 py-1 rounded-full pr-4 dark:bg-white dark:text-gray-900"><IoAddOutline className='md:text-3xl'/>Add</NavLink>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4 md:gap-8">{products.map((product)=><div key={product._id}><ProductCard product={product}/></div>)}</div></div></div>
    </div>
  )
}

export default Dashboard
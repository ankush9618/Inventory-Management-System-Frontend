import React, { useContext, useEffect, useState } from 'react'
import axiosInstance from '../utils/axiosInstance';
import { toast } from 'react-toastify';
import UserContext from '../context/UserContext';
import ProductCard from '../components/ProductCard';
import { NavLink } from 'react-router-dom';
import { IoAddOutline } from "react-icons/io5";
import Loader from '../components/Loader';
import ProductContext from '../context/ProductContext';

function Products() {
  const {loggedIn,setLoggedIn,loading,setLoading} = useContext(UserContext);
    const {products,setProducts,refresh,setRefresh}=useContext(ProductContext)
    //console.log(products)
    
  return (
    <>
    {
      loggedIn?(!loading?<div className="bg-gradient-to-tr from-white via-zinc-500 to-gray-500 py-16 px-8 min-h-screen">
      <div className="container mx-auto px-4">
          <div className='flex justify-center md:gap-16 gap-4 items-center mb-8'>
          <h2 className="md:text-3xl font-bold text-white">Our Latest Product</h2> <NavLink to="/products/add" className="md:text-xl dark:text-white flex justify-center items-center gap-2 font-semibold bg-gray-900 px-3 py-1 rounded-full pr-4"><IoAddOutline className='md:text-3xl'/>Add</NavLink>
          <div className='md:text-xl dark:text-white flex justify-center items-center gap-2 font-semibold bg-gray-900 px-3 py-1 rounded-full pr-4 cursor-pointer' onClick={()=>setRefresh(!refresh)}>Refresh</div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4 md:gap-8">{[...products].reverse().map((product)=><div key={product._id}><ProductCard product={product}/></div>)}</div></div></div>:<div className="bg-gradient-to-tr from-white via-zinc-400 to-gray-400 py-16 px-16 w-full min-h-screen"><Loader/></div>):<div className='bg-gradient-to-tr from-white via-zinc-400 to-gray-400 min-h-screen py-16 px-16'>
            <h2 className='text-3xl'>Please Login to View Products..</h2>
          </div>
    }
    </>
  )
}

export default Products
import React, { useContext, useEffect, useState } from 'react'
import ProductContext from '../context/ProductContext'
import { GrRefresh } from "react-icons/gr";
import ProfileLoader from './ProfileLoader';
import { useNavigate } from 'react-router-dom';

function DashboardPrice() {
  const navigate = useNavigate()
    const {products,refresh,setRefresh} = useContext(ProductContext);
    const [loader,setLoader] = useState(false);
    let cost = 0;
    products.map(product=>cost+=(product.price*product.stock))
    
    const refreshHandler = () =>{
      navigate("/login")
      setLoader(true)
      setRefresh(!refresh)
      setTimeout(()=>{
        
        setLoader(false)
      },1000)
    }

    useEffect(()=>{
      //console.log(1)
    },[refresh])

    //console.log(cost)
    //console.log(products)
  return (
    <>
    <div className="rounded-2xl border border-gray-200 bg-white p-5 bg-gradient-to-tr dark:from-purple-200 via-sky-100 to-zinc-400 md:p-6 md:w-90 mb-5">
    {
      loader?<ProfileLoader/>:<>
      
      <h4 className="text-title-sm font-bold dark:text-gray-800 text-white/90">
      Total Inventory Cost
    </h4>
    <div className="mt-4 flex items-end justify-between sm:mt-5">
      <div>
        <p className="text-theme-sm dark:text-gray-700 text-gray-400 text-2xl text-center">
          Rs. {cost}
        </p>
      </div>
      <div onClick={refreshHandler}>
        <p className="text-theme-sm dark:text-gray-700 text-gray-400 text-2xl text-center cursor-pointer">
          <GrRefresh/>
        </p>
      </div>
      
    </div></>
    }
  </div>
    </>
  )
}

export default DashboardPrice
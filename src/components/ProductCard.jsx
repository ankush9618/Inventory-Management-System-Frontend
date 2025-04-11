import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaRegEdit } from "react-icons/fa";

function ProductCard({product}) {
    const navigate = useNavigate();
    const updateHandler = (e) =>{
        navigate(`/products/update/${product._id}`)
    }
  return (
    
        <div className="bg-gradient-to-br from-gray-300 via-zinc-300 to-white rounded-lg shadow-lg p-8">
                <div className="relative overflow-hidden">
                    <img className=" w-full h-full" src="https://res.cloudinary.com/daootd1uo/image/upload/v1744225507/th_e4sczd.jpg" alt="Product"/>
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                </div>
                <div className='flex justify-between items-center h-auto mt-4'>
                <h3 className="text-xl font-bold text-gray-900">{product.name.slice(0,15)}..</h3><NavLink to={`/products/update/${product._id}`}className=" font-bold"><FaRegEdit/></NavLink>
                </div>
                <p className="text-gray-500 text-sm mt-2">{product.description.slice(0,50)}..</p>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-900 font-bold text-lg">Rs.{product.price}</span>
                </div>
            </div>
  )
}

export default ProductCard
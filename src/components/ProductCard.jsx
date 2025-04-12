import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaRegEdit } from "react-icons/fa";
import { RiSubtractFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import axiosInstance from '../utils/axiosInstance';
import { toast } from 'react-toastify';
import { GrClearOption } from "react-icons/gr";

function ProductCard({product}) {
    const navigate = useNavigate();
    //console.log(product.stock)
    const updateHandler = (e) =>{
        navigate(`/products/update/${product._id}`)
    }
    const [stock,setStock] = useState(product.stock)
    //console.log(stock)
    const addStock = async() =>{
        setStock((prev)=>prev+1);
            await axiosInstance.post(`/inventory/add/${product._id}`,{stock:1})
            .then((res)=>{
                setTimeout(()=>{
                    toast.success(res.data.message,{autoClose:500})
                },1000)
            })
            .catch((err)=>{
                console.log(err)
            })
    }
    const  removeStock= async() =>{
        setStock((prev)=>prev-1);
        await axiosInstance.patch(`/inventory/remove/${product._id}`,{stock:1})
        .then((res)=>{
            toast.success(res.data.message,{autoClose:500})
        })
        .catch((err)=>{
            console.log(err)
        })

    }
    const deleteStock = async() =>{
        setStock(0);
        await axiosInstance.patch(`/inventory/clear/${product._id}`)
        .then((res)=>{
            toast.success(res.data.message)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    

  return (
    
        <div className="bg-gradient-to-br from-gray-300 via-zinc-300 to-white rounded-lg shadow-lg p-4">
                <div className="relative overflow-hidden">
                    <img className=" w-full h-full" src="https://res.cloudinary.com/daootd1uo/image/upload/v1744225507/th_e4sczd.jpg" alt="Product"/>
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                </div>
                <div className='flex justify-between items-center h-auto mt-4'>
                <h3 className="text-xl font-bold text-gray-900">{product.name.slice(0,15)}..</h3><NavLink to={`/products/update/${product._id}`}className=" font-bold"><FaRegEdit/></NavLink>
                </div>
                <p className="text-gray-500 text-sm mt-2">{product.description.slice(0,50)}..</p>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-900 font-bold text-md"><span className='text-gray-600'>Rs. </span>{product.price}</span>
                    <span className="text-gray-900 font-bold text-md flex justify-center items-center gap-2"><span className='bg-red-400 rounded-sm cursor-pointer p-1 ' onClick={removeStock}><RiSubtractFill/></span> {stock}<span className='bg-green-400 rounded-sm p-1 cursor-pointer' onClick={addStock}><IoMdAdd/></span><span className='bg-red-500 rounded-sm p-1 cursor-pointer' onClick={deleteStock}><GrClearOption/></span></span>
                </div>
            </div>
  )
}

export default ProductCard
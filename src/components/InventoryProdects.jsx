import React, { useRef, useState } from 'react'
import { GrClearOption } from 'react-icons/gr'
import { IoMdAdd } from 'react-icons/io'
import { RiSubtractFill } from 'react-icons/ri'
import axiosInstance from '../utils/axiosInstance'
import { toast } from 'react-toastify'

function InventoryProdects({product}) {

  const [stock,setStock] = useState(product.stock)

  const bulkQun = useRef(0);

  const addBulk = async()=>{
    if(bulkQun.current.value<0){
      toast.error("Quantitity cannot be less than 0")
      return
    }
    setStock((prev)=>prev+Number(bulkQun.current.value))
    await axiosInstance.post(`/api/inventory/add/${product._id}`,{stock:bulkQun.current.value})
    .then((res)=>{
      toast.success(res.data.message);
    })
    .catch((err)=>{
      toast.error(err.response.data.message)
      console.log(err.response.data)
    })
  }
  const removeBulk = async()=>{
    if(bulkQun.current.value<0){
      toast.error("Quantitity cannot be less than 0")
      return
    }
    setStock((prev)=>prev-Number(bulkQun.current.value))
    await axiosInstance.patch(`/api/inventory/remove/${product._id}`,{stock:bulkQun.current.value})
    .then((res)=>{
      toast.success(res.data.message);
    })
    .catch((err)=>{
      toast.error(err.response.data.message)
      console.log(err.response.data)
    })
  }

  const addStock = async(e)=>{
    setStock((prev)=>prev+1)
    await axiosInstance.post(`/api/inventory/add/${product._id}`,{stock:1})
    .then((res)=>{
      //console.log(res.data.message)
      toast.success(res.data.message)
    })
    .catch((err)=>{
      toast.error(err.response.data.mess)
      console.log(err.response)
    })
  }
  const removeStock = async(e)=>{
    setStock((prev)=>prev-1)
    await axiosInstance.patch(`/api/inventory/remove/${product._id}`,{stock:1})
    .then((res)=>{
      //console.log(res.data.message)
      toast.success(res.data.message,{autoClose:500})
    })
    .catch((err)=>{
      toast.error(err.response.data.mess,{autoClose:500})
      console.log(err.response)
    })
  }

  const clearStock = async() =>{
    setStock(0)
    await axiosInstance.patch(`/api/inventory/clear/${product._id}`,{stock:0})
    .then((res)=>{
      toast.success(res.data.message);
    })
    .catch((err)=>{
      toast.error(err.response.data.message)
    })
  }

  return (
    <div
    className="w-full bg-gray-200 border-2 border-gray-400 outline-0 rounded-md py-3 px-5 mt-4 grid grid-cols-12 gap-4 items-center h-20 shadow shadow-gray-300"
  >
    <h2 className="dark:text-slate-700 font-bold text-xl truncate col-span-2">{product.name}</h2>
    <p className="text-gray-500 truncate font-semibold col-span-5">{product.description}..</p>
    <p className="text-gray-800 font-bold col-span-1"><span className='text-gray-500'>Rs.</span> {product.price}</p>
    <div className='flex justify-center gap-2 col-span-2'>
      <span className='text-3xl bg-gray-300 rounded-sm cursor-pointer' onClick={removeStock}><RiSubtractFill/></span>
      <span className='text-xl'>{stock}</span>
      <span className='text-3xl bg-gray-300 rounded-sm cursor-pointer' onClick={addStock}><IoMdAdd/></span>
      <span className='text-3xl text-gray-500 hover:bg-zinc-200 rounded-sm cursor-pointer' onClick={clearStock}><GrClearOption/></span>
    </div>

    <div className='flex justify-center col-span-2'>
      <span className='text-3xl cursor-pointer border-1 border-gray-500 rounded-l-md text-zinc-500' onClick={removeBulk}><RiSubtractFill/></span>
      <input type="text" className='w-10 border-y-1 border-gray-500 px-2 text-xl outline-0' ref={bulkQun}/>
      <span className='text-3xl cursor-pointer border-1 border-gray-500 rounded-r-md text-zinc-500' onClick={addBulk}><IoMdAdd/></span>
    </div>
  </div>
  )
}

export default InventoryProdects
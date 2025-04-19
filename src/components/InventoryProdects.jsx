import React, { useRef, useState } from 'react'
import { GrClearOption } from 'react-icons/gr'
import { IoMdAdd } from 'react-icons/io'
import { RiSubtractFill } from 'react-icons/ri'
import axiosInstance from '../utils/axiosInstance'
import { toast } from 'react-toastify'

function InventoryProdects({ product }) {
  const [stock, setStock] = useState(product.stock)
  const bulkQun = useRef(0)

  const addBulk = async () => {
    if (bulkQun.current.value < 0) {
      toast.error("Quantity cannot be less than 0",{autoClose:500})
      return
    }
    setStock((prev) => prev + Number(bulkQun.current.value))
    try {
      const res = await axiosInstance.post(`/api/inventory/add/${product._id}`, { stock: bulkQun.current.value })
      toast.success(res.data.message,{autoClose:500})
    } catch (err) {
      toast.error(err.response.data.message,{autoClose:500})
    }
  }

  const removeBulk = async () => {
    if(stock==0 || stock< bulkQuan.current.value){
      toast.error("Product Stock Cannot be Negative");
      return 
    }
    if (bulkQun.current.value < 0) {
      toast.error("Quantity cannot be less than 0")
      return
    }
    setStock((prev) => prev - Number(bulkQun.current.value))
    try {
      const res = await axiosInstance.patch(`/api/inventory/remove/${product._id}`, { stock: bulkQun.current.value })
      toast.success(res.data.message,{autoClose:500})
    } catch (err) {
      toast.error(err.response.data.message,{autoClose:500})
    }
  }

  const addStock = async () => {
    setStock((prev) => prev + 1)
    try {
      const res = await axiosInstance.post(`/api/inventory/add/${product._id}`, { stock: 1 })
      toast.success(res.data.message,{autoClose:500})
    } catch (err) {
      toast.error(err.response.data.message,{autoClose:500})
    }
  }

  const removeStock = async () => {
    if(stock==0){
      toast.error("Product Stock Cannot be Negative");
      return 
    }
    setStock((prev) => prev - 1)
    try {
      const res = await axiosInstance.patch(`/api/inventory/remove/${product._id}`, { stock: 1 })
      toast.success(res.data.message, { autoClose: 500 })
    } catch (err) {
      toast.error(err.response.data.message, { autoClose: 500 })
    }
  }

  const clearStock = async () => {
    setStock(0)
    try {
      const res = await axiosInstance.patch(`/api/inventory/clear/${product._id}`, { stock: 0 })
      toast.success(res.data.message,{autoClose:500})
    } catch (err) {
      toast.error(err.response.data.message)
    }
  }

  return (
    <div className="w-full bg-gray-200 border-2 border-gray-400 rounded-md py-4 px-4 mt-4 shadow shadow-gray-300
                    flex flex-col gap-2 lg:grid lg:grid-cols-12 lg:gap-4 md:items-center md:h-20">

      {/* Row 1 - Name & Description */}
      <div className="flex flex-wrap items-center gap-2 md:col-span-7">
        <h2 className="dark:text-slate-700 font-bold text-lg md:text-xl truncate">{product.name}</h2>
        <p className="text-gray-500 font-semibold truncate">{product.description}..</p>
      </div>

      {/* Row 2 - Price, Stock controls, Bulk controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 md:col-span-5">

        <p className="text-gray-800 font-bold">
          <span className='text-gray-500'>Rs.</span> {product.price}
        </p>

        <div className='flex gap-2 items-center'>
          <span className='text-3xl bg-gray-300 rounded-sm cursor-pointer' onClick={removeStock}><RiSubtractFill /></span>
          <span className='text-xl'>{stock}</span>
          <span className='text-3xl bg-gray-300 rounded-sm cursor-pointer' onClick={addStock}><IoMdAdd /></span>
          <span className='text-3xl text-gray-500 hover:bg-zinc-200 rounded-sm cursor-pointer' onClick={clearStock}><GrClearOption /></span>
        </div>

        <div className='flex justify-center'>
        <span className='text-3xl cursor-pointer border-1 border-gray-500 rounded-l-md text-zinc-500' onClick={removeBulk}><RiSubtractFill/></span>
      <input type="text" className='w-10 border-y-1 border-gray-500 px-2 text-2xl outline-0' ref={bulkQun}/>
      <span className='text-3xl cursor-pointer border-1 border-gray-500 rounded-r-md text-zinc-500' onClick={addBulk}><IoMdAdd/></span>
        </div>

      </div>
    </div>
  )
}

export default InventoryProdects

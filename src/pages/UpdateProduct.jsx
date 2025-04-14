import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../utils/axiosInstance';
import { toast } from 'react-toastify';
import { XMLParser } from 'fast-xml-parser';

function UpdateProduct() {
    const {id} = useParams();
    const [product,setProduct]=useState({})
    const [error,setError] = useState("")
    useEffect(()=>{
        //console.log("start",id)
        const getProduct = async()=>{
            await axiosInstance.get(`/api/products/${id}`)
        .then((res)=>{
            setProduct(res.data.data)
        })
        .catch((err)=>{
            console.log(err)
        })
        }
        getProduct()
    },[])
    const productName = useRef();
    const description = useRef();
    const price= useRef();
    const category = useRef();
    const navigate = useNavigate()
    const parser = new XMLParser()
    const handleUpdate = async(e)=>{
        e.preventDefault();
        let formData = {
            "productName":productName.current.value,
            "description":description.current.value,
            "price":Number(price.current.value),
            "category":category.current.value
        }
//console.log(formData)
        await axiosInstance.patch(`/api/products/update/${id}`,formData)
        .then((res)=>{
            toast.success(res.data.message)
            navigate("/products");
        }).catch((err)=>{
            console.log(err)
            const jsonResponse = parser.parse(err.response.data)?.html?.head?.body?.pre["#text"].slice(7,)
            //console.log(jsonResponse)
            setError(jsonResponse)
            toast.error(jsonResponse);
        })

        //console.log(name.current.value)
    }
  return (
    <>
    <div className='min-h-screen bg-gradient-to-tl from-zinc-500 via-zinc-200 to-zinc-400 md:p-16 p-2'>
         <form action="" className='bg-gradient-to-br from-zinc-500 via-zinc-300 to-zinc-400 h-auto p-8 w-auto' onSubmit={handleUpdate}>
            <img src="https://res.cloudinary.com/daootd1uo/image/upload/v1744225507/th_e4sczd.jpg" alt="" />
            <div className='flex justify-start gap-2 mt-2'><label className='font-semibold rounded-md' htmlFor='name'>Name:</label><input type="text" name="productName" id="productName" required className='outline-none border-1 px-2 rounded-md' defaultValue={product.name} ref={productName} /></div>
            <div className='flex justify-start gap-2 mt-2'><label className='font-semibold' htmlFor='price'>Price:</label><input type="text" name="price" id="price" required className='outline-none border-1 px-2 rounded-md' defaultValue={product.price} ref={price}/></div>
            <div className='flex justify-start gap-2 mt-2'><label className='font-semibold' htmlFor='category'>Category:</label><select name="category" defaultValue={product.category} id="category" ref={category}><option value="General">General</option><option value="Sirup">Sirup</option></select></div>
            <div className='flex justify-start gap-2 mt-2'><label className='font-semibold' htmlFor='description'>Description:</label><textarea type="text" name="description" id="description" ref={description} required className='outline-none border-1 px-2 rounded-md' rows='5' cols='80' defaultValue={product.description} /></div>
            {error && <p className='text-red-500 mt-2'>{error}</p>}
            <input type="submit" value="Update Product" className='cursor-pointer bg-sky-500 mt-4 px-2 py-1 rounded-md'/>
         </form>
    </div>
    </>
  )
}

export default UpdateProduct
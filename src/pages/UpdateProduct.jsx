import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axiosInstance from '../utils/axiosInstance';

function UpdateProduct() {
    const {id} = useParams();
    const [product,setProduct]=useState({})
    useEffect(()=>{
        console.log("start",id)
        const getProduct = async()=>{
            await axiosInstance.get(`/products/${id}`)
        .then((res)=>{
            setProduct(res.data.data)
        })
        .catch((err)=>{
            console.log(err)
        })
        }
        getProduct()
    },[])
  return (
    <div>{product.name}</div>
  )
}

export default UpdateProduct
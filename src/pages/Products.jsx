import React, { useEffect, useState } from 'react'
import axiosInstance from '../utils/axiosInstance';
import { toast } from 'react-toastify';

function Products() {
    const [products,setProducts]=useState([])
    useEffect(() => {
        axiosInstance.get("/products")
          .then((res) => {
            console.log(res.data.data)
            //console.log(req.user)
            toast.success(res.data.message)
            setProducts(res.data.data); // assuming you return { data: [...] }
          })
          .catch((err) => {
            console.error("Error fetching products:", err);
          });
      }, []);
    
  return (
    <>
    {
      products.map((product)=><div key={product._id}>{product.name}</div>)
    }
    </>
  )
}

export default Products
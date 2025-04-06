import React, { useEffect, useState } from 'react'
import axiosInstance from '../utils/axiosInstance';

function Products() {
    //const [products,setProducts]=useState()
    useEffect(() => {
        axiosInstance.get("/products")
          .then((res) => {
            console.log(res.data)
            //console.log(req.user)
            //setProducts(res.data.data); // assuming you return { data: [...] }
          })
          .catch((err) => {
            console.error("Error fetching products:", err);
          });
      }, []);
    
  return (
    <div>Products</div>
  )
}

export default Products
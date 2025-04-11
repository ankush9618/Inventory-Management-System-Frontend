import React, { useContext, useEffect, useState } from 'react'
import ProductContext from './ProductContext'
import UserContext from './UserContext';
import axiosInstance from '../utils/axiosInstance';

function ProductContextProvider({children}) {
    const {loading,setLoading} = useContext(UserContext)
    const [products,setProducts] = useState([]);
    useEffect(() => {
        setLoading(true)
          axiosInstance.get("/products")
            .then((res) => {
              //console.log(res.data.data)
              //console.log(req.user)
              //toast.success(res.data.message)
              setProducts(res.data.data); // assuming you return { data: [...] }
              setLoading(false)
            })
            .catch((err) => {
              console.error("Error fetching products:", err);
            });
        }, []);
  return (
    <ProductContext.Provider value={{products,setProducts}}>
        {children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider
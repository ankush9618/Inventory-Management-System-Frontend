import React, { useContext, useEffect, useState } from 'react'
import ProductContext from './ProductContext'
import UserContext from './UserContext';
import axiosInstance from '../utils/axiosInstance';

function ProductContextProvider({children}) {
    const {loading,setLoading,loggedIn} = useContext(UserContext);
    const [refresh,setRefresh] = useState(false);
    const [products,setProducts] = useState([]);
    //console.log(products)
    useEffect(() => {
        if(loggedIn){
          setLoading(true)
          axiosInstance.get("/products")
            .then((res) => {
              //console.log(res.data.data)
              //console.log(req.user)
              //toast.success(res.data.message)
              console.log(1)
              setProducts(res.data.data); // assuming you return { data: [...] }
              setLoading(false)
            })
            .catch((err) => {
              console.error("Error fetching products:", err);
            });
        }
        }, [refresh,loggedIn]);
  return (
    <ProductContext.Provider value={{products,setProducts,refresh,setRefresh}}>
        {children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider
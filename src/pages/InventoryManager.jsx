import React, { useContext, useEffect, useState } from 'react'
import ProductContext from '../context/ProductContext'
import InventoryProdects from '../components/InventoryProdects';
import UserContext from '../context/UserContext';

function InventoryManager() {
    const [query,setQuery] = useState("")
    const {products} = useContext(ProductContext);
    const [filteredProducts,setFilteredProducts] = useState(products);
    const[querLength,setQueryLength] = useState(filteredProducts.length)
    //console.log(querLength)
    const {loggedIn} = useContext(UserContext)
    useEffect(()=>{
      const latestProducts = products.filter((product)=>product.name.toLowerCase().includes(query.toLowerCase())||product.description.toLowerCase().includes(query.toLowerCase()));
        setFilteredProducts(latestProducts)
        setQueryLength(latestProducts.length)
    },[query,querLength])
    //console.log(querLength,query)

    //console.log(filteredProducts)

  return (
    <>
    <div className='bg-gradient-to-tr from-gray-500 via-zinc-400 to-gray-500 py-12 md:px-16 px-2 min-h-screen'>
        <input type="text" name="search" id="search"  placeholder='Enter Product Name to search (e.g: Dolo)' className='text-xl px-2 py-2 w-full outline-none border-white border-2 dark:text-white rounded-md' onChange={(e)=>setQuery(e.target.value)}/>

        {((querLength==0 && query)|| !loggedIn ) && <div
    className="w-full bg-white border border-gray-200 rounded-md py-3 px-5 mt-4 grid items-center h-20 font-semibold text-xl"
  >No Matching Products found..</div>}

        {
            query ? filteredProducts.map((product)=><InventoryProdects key={product._id} product={product}/>):products.map((product) => <InventoryProdects key={product._id} product={product}/>)

        }
    </div>
    </>
  )
}

export default InventoryManager
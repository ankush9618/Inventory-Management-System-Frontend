import React, { useContext } from 'react'
import ProductContext from '../context/ProductContext'
import Products from '../pages/Products'

function DashboardCard() {
    const {products} = useContext(ProductContext) 
    //console.log(products)
  return (
    <>
    <div className="rounded-2xl border border-gray-200 bg-white p-5 bg-gradient-to-tr dark:from-purple-200 via-sky-100 to-zinc-400 md:p-6 md:w-90 mb-5">
    <h4 className="text-title-sm font-bold dark:text-gray-800 text-white/90">
      Total Products
    </h4>

    <div className="mt-4 flex items-end justify-between sm:mt-5">
      <div>
        <p className="text-theme-sm dark:text-gray-700 text-gray-400 text-2xl text-center">
          {products.length}
        </p>
      </div>
      
    </div>
  </div>
    </>
  )
}

export default DashboardCard
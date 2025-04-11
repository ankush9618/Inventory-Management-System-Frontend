import React, { useContext } from 'react'
import ProductContext from '../context/ProductContext'
import Products from '../pages/Products'

function DashboardCard() {
    const {products} = useContext(ProductContext) 
    //console.log(products)
  return (
    <>
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 w-90 mb-5">
    <h4 className="text-title-sm font-bold text-gray-800 dark:text-white/90">
      Total Products
    </h4>

    <div className="mt-4 flex items-end justify-between sm:mt-5">
      <div>
        <p className="text-theme-sm text-gray-700 dark:text-gray-400 text-2xl text-center">
          {products.length}
        </p>
      </div>
      
    </div>
  </div>
    </>
  )
}

export default DashboardCard
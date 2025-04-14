import React from 'react'

function InventoryProdects({product}) {
  return (
    <div
    className="w-full bg-white border border-gray-200 rounded-md py-3 px-5 mt-4 grid grid-cols-4 gap-4 items-center"
  >
    <h2 className="dark:text-slate-700 font-bold text-xl truncate">{product.name}</h2>
    <p className="text-gray-500 truncate font-semibold">{product.description.slice(0, 30)}..</p>
    <p className="text-gray-800 font-bold"><span className='text-gray-500'>Rs.</span> {product.price}</p>
    <p className="text-gray-800">{product.stock}</p>
  </div>
  )
}

export default InventoryProdects
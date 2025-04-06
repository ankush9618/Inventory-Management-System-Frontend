import React from 'react'

function Profile() {
  return (
    <>
    <div className='md:flex md:justify-start w-full p-8 bg-gray-700 gap-8 dark:text-white'>
        <div className='flex justify-center'>
        <img src="https://res.cloudinary.com/daootd1uo/image/upload/v1742757690/qi1onwszqlq6cxtcpm5b.png" alt="" className='h-40 rounded-full cursor-pointer' />
        </div>
        <div className='md:text-2xl'>
            <div className='flex justify-start gap-4 items-center h-14'>
                <div>
                    Name:
                </div>
                <div>
                    Ankush Kumar Singh
                </div>
            </div>
            <div className='flex justify-start gap-4 items-center h-14'>
                <div>
                    Email:
                </div>
                <div>
                    ankushkumar@inventorypro.com
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Profile
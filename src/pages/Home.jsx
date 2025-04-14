import React from 'react'
import Loader from '../components/Loader'
import { NavLink } from 'react-router-dom'
import { BsStack } from 'react-icons/bs'
import { Typewriter } from 'react-simple-typewriter'

function Home() {
  return (
    <>
    <div className="bg-zinc-900 py-32 min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mb-6 text-center"><NavLink to="/" className="text-yellow-500 flex justify-center gap-2 items-center"><BsStack/>InventoryPro</NavLink></h2>
          <div className="relative text-center mt-5 mb-12 text-5xl font-medium">
          <h1 className="relative text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 pb-3 leading-[65px] text-4xl sm:text-5xl md:text-6xl font-bold">
            <Typewriter
            words={['We Create The Best Customer Experience For You']}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1000}
            />
          </h1>
            {/* <div className="absolute left-1/2 bottom-12 -translate-x-1/2 h-12 w-96 bg-blue-800 blur-[50px] z-[1] opacity-60">
            <Loader/>
          </div> */}
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
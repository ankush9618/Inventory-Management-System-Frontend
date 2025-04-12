import React from 'react'
import Loader from '../components/Loader'

function Home() {
  return (
    <>
    <div className="bg-black py-32 min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center justify-center rounded-full border border-zinc-600 px-2 py-[6px]">
          <div className="w-5 h-5 bg-zinc-900 rounded-full text-zinc-400 mr-2 p-[4px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="4"><path d="M19 32c-7.732 0-14-6.268-14-14S11.268 4 19 4s14 6.268 14 14"></path><path d="M44 18H18v26h26z"></path></g></svg>
            </div>
            <div className="text-zinc-400 text-sm">
              Why choose Augment?
            </div>
          </div>
          <div className="relative text-center mt-5 mb-12 text-5xl font-medium">
            <h1 className="relative text-white pb-3 leading-[65px] e">We Create The Best Customer Experience For You</h1> 
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
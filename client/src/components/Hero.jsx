import React from 'react'
import { TshirtCanvas } from "./canvas/Tshirt-2";
import {Link} from 'react-router-dom';

export const Hero = () => {
  return (
    <div className=" flex justify-evenly items-center gap-[450px] m-4 sm:m-8 md:m-12 lg:m-16 xl:m-20 bg-white h-full rounded-3xl">
      <div className='items-center'>
              <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl leading-normal font-semibold ml-4 sm:ml-8 md:ml-12 lg:ml-16'>LET'S EXPLORE</h1>
              <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black ml-4 sm:ml-8 text-yellow-500 md:ml-12 lg:ml-16'>HONESTLY</h1>
              <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black ml-4 sm:ml-8 md:ml-12 lg:ml-16'>NVRMIND.</h1>
              <Link to="/products"><button className='bg-black w-36 sm:w-60 md:w-72 lg:w-80 h-14 font-semibold text-white mt-6 rounded-lg ml-4 sm:ml-8 md:ml-8 lg:ml-16 transition-bg transition-text duration-200 hover:bg-customGray hover:text-black'>Our Products</button></Link>
      </div>
      <div className='w-96 h-96'><TshirtCanvas /></div>
    </div>

  )
}
export default Hero;
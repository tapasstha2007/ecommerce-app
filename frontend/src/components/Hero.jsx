import React from 'react'
import {assets} from '../assets/assets.js'

const Hero = () => {
  return (
    <div className='border border-gray-400 flex flex-col sm:flex-row justify-between' >
      <div className='flex flex-col justify-center items-center p-10'>
        <div className='flex justify-center items-center gap-2'>
          <p className='w-8 md:w-11 bg-[#414141] h-[2px]'></p>
          <p className='font-medium text-sm md:text-base'> OUR BESTSELLERS</p>
        </div>
        <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
        <div className='flex justify-center items-center gap-2'>
          <p className='font-medium text-sm md:text-base'>SHOP NOW</p>
          <p className='w-8 md:w-11 bg-[#414141] h-[2px]'></p>
        </div>
      </div>
      <img src={assets.hero_img} className='w-full sm:w-1/2'/>
    </div>
  )
}

export default Hero
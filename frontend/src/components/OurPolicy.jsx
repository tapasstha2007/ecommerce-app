import React, { useContext } from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {

    
  return (
    <div className='flex flex-col sm:flex-row gap-10 mt-20 mb-20 justify-center items-center'>
        <div className='flex flex-col items-center justify-center text-center w-1/3'>
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5' />
            <p className='font-bold text-sm'>Easy Exchange Policy</p>
            <p className='opacity-50 text-sm'>We offer hassle free exchange policy</p>
        </div>
        <div className='flex flex-col items-center justify-center text-center w-1/3'>
            <img src={assets.quality_icon} className='w-12 m-auto mb-5'/>
            <p className='font-bold text-sm'>7 Days Return Policy</p>
            <p className='opacity-50 text-sm'>We provide 7 days free return policy</p>
        </div>
        <div className='flex flex-col items-center justify-center text-center w-1/3'>
            <img src={assets.support_img} className='w-12 m-auto mb-5' />
            <p className='font-bold text-sm'>Best Customer Support</p>
            <p className='opacity-50 text-sm'>We provide 24/7 customer support</p>
        </div>
       
    </div>
  )
}

export default OurPolicy
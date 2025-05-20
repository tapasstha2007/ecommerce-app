import React from 'react'
import { assets } from '../assets/assets'
assets

const Footer = () => {
  return (
    <div>
       <div className='flex flex-col sm:flex-row justify-between items-start gap-10 mt-30 mb-10 '>
        <div>
            <img src={assets.logo} className='w-30  mb-5'/>
            <p className='text-gray-500 text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem labore, dolores dolore aspernatur impedit ullam </p>
            <p className='text-gray-500 text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem labore, dolores dolore aspernatur impedit ullam </p>
        </div>
        <div>
            <h2 className='font-bold text-xl mb-5'>COMPANY</h2>
            <ul className='text-gray-500'>
                <li>About</li>
                <li>Contact</li>
                <li>Careers</li>
                <li>Blog</li>
           </ul>
        </div>
        <div className='text-gray-500'> 
            <h2 className='font-bold text-xl text-black mb-5'>GET IN TOUCH</h2>
            <p className='text-sm'>+977-9829196610</p>
            <p className='text-sm'>tapasstha2007@gmail.com</p>
            <p className='text-sm'>Instagram</p>
        </div>

    </div>
    <div>
      <hr className='opacity-50'/>
      <p className='text-sm text-center p-5'>Copyright 2025@ tapasstha2007.dev - All Right Reserved.</p>
    </div>
    </div>
   
  )
}

export default Footer
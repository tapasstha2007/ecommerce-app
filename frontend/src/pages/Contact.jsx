import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import Subscribe from '../components/Subscribe'

const Contact = () => {
  return (
    <div>
       <div className='border-t pt-9 border-gray-300 text-2xl text-center'>
      <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-[2fr_1fr] gap-9 py-9'>
        <img src={assets.contact_img} className='w-full' />
        <div className='flex flex-col  gap-4'>
          <p className='text-gray-600 font-bold'>Our Store</p>
          <p className='text-gray-500'>54709 Willms Station <br />
Suite 350, Washington, USA</p>
          <p className='text-gray-500'>Tel: (415) 555-0132 <br />
Email: admin@forever.com</p>
          <p className='text-gray-600 font-bold text-lg'>Careers at Forever</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border bg-white hover:bg-black text-black hover:text-white py-6 transition ease-in w-40'> Explore Jobs</button>
        </div>
      </div>
      <Subscribe />
    </div>
  )
}

export default Contact
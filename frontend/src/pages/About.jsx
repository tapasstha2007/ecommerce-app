import React from 'react'
import Subscribe from '../components/Subscribe'
import Title from '../components/Title'
import { assets } from '../assets/assets'


const About = () => {
  return (
    <div>
      <div className='border-t pt-9 border-gray-300 text-2xl text-center'>
      <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 py-9 '>
        <img src={assets.about_img} alt="" className='h-full'/>
        <div className='text-gray-500 flex flex-col gap-4'>
          <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
          <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
          <p className='font-bold text-black'>Our Mission</p>
          <p>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
        </div>
      </div>
      <div className=' pt-9 border-gray-300 text-2xl text-center'>
      <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className='grid grid-cols-1  md:grid-cols-3'>
        <div className='py-14 border text-sm px-7 gap-6 flex flex-col border-gray-300'>
          <p className='font-bold'>Quality Assurance:</p>
          <p className='text-gray-500'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className='py-14 border text-sm px-7 gap-6 flex flex-col border-gray-300'>
          <p className='font-bold'>Convenience:</p>
          <p className='text-gray-500'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
        <div className='py-14 border text-sm px-7 gap-6 flex flex-col border-gray-300'>
          <p className='font-bold'>Exceptional Customer Service:</p>
          <p className='text-gray-500'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>
     <Subscribe/>
    </div>
  )
}

export default About
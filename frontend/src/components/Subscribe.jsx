import React from 'react'

const Subscribe = () => {
  return (
    <div>
        <div className='p-10 flex flex-col items-center justify-center gap-3'>
             <h2 className='font-bold text-xl'>
            Subscribe now & get 20% off
        </h2>
        <p className='text-gray-500'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, 
        </p>
        </div>

        <div className='mb-10'>
            <form className='flex flex-row items-center justify-center' onSubmit={(e)=>e.preventDefault()}>
                <input type="email" required placeholder='Enter your email' className='border-2 border-gray-300 py-4 px-1 '/>
                <button className='bg-black text-white px-10 py-5 text-xs ' type='submit'>SUBSCRIBE</button>
            </form>
        </div>
       
    </div>
  )
}

export default Subscribe
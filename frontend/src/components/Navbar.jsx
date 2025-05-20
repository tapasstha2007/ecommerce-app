import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  
  const [visible, setvisible] = useState(false)


  return (
    <div className='flex justify-between items-center py-5 font-medium'>
      
      <Link to={"/"}><img src={assets.logo} className='w-36'  /></Link>
     
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
            <NavLink className="flex flex-col items-center gap-1" to="/">
                <p>HOME</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink className="flex flex-col items-center gap-1" to="/collection">
                <p>COLLECTION</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink className="flex flex-col items-center gap-1" to="/about">
                <p>ABOUT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink className="flex flex-col items-center gap-1" to="/contact">
                <p>CONTACT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
        </ul>     

      <div className='flex items-center gap-6'>
        <img src={assets.search_icon} className='w-5 cursor-pointer' />
        <div className='group relative'>
          <img src={assets.profile_icon} className='w-5 cursor-pointer' />
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Log out</p>
            </div>
          </div>
          
        </div>
        <Link to={"/cart"} className='relative'>
          <img src={assets.cart_icon} className='w-5 min-w-5' />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
          </Link>
          <img onClick={()=>{setvisible(true)}} src={assets.menu_icon} className='sm:hidden w-5 cursor-pointer'/>
      </div>
         {/* Mobile Menu */}
         <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible? "w-full":"w-0"}`}>
          <div className='flex flex-col text-gray-600'>
            <div className='flex items-center gap-4 p-3' onClick={()=>{setvisible(false)}}>
             <img src={assets.dropdown_icon} className='h-4 rotate-180' />
             <p>Back</p>
           </div>
           <NavLink onClick={()=>setvisible(false)} to={"/"} className={"py-2 pl-6 border"}>HOME</NavLink>
           <NavLink onClick={()=>setvisible(false)} to={"/collection"} className={"py-2 pl-6 border"}>COLLECTION</NavLink>
           <NavLink onClick={()=>setvisible(false)} to={"/about"} className={"py-2 pl-6 border"}>ABOUT</NavLink>
           <NavLink onClick={()=>setvisible(false)} to={"/contact"} className={"py-2 pl-6 border"}>CONTACT</NavLink>
         </div>
         </div>
    </div>
  )
}

export default Navbar
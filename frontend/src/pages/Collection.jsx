import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'

const Collection = () => {

 const {products}=useContext(ShopContext)
 const [showFilter, setshowFilter] = useState(false)

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
     {/*Filter OPTIONS*/}
      <div className='flex flex-col gap-5 '>
        <h2 className='text-xl flex gap-2 cursor-pointer items-center' onClick={()=>{setshowFilter(!showFilter)}}>FILTERS
          <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter?"rotate-90":""}`} />
        </h2>
        <div className={`sm:flex flex-col gap-2 border-gray-300 border p-5 w-full sm:w-60 ${showFilter ? "" : "hidden"}`}>
          <h3>CATEGORIES</h3>
          <div className='flex gap-2 font-light text-sm'>
            <input type="checkbox" id="Men" name="Men" value="Men"/>
            <label htmlFor="Men">Men</label>
          </div>
          <div className='flex gap-2 font-light text-sm'>
            <input type="checkbox" id="Women" name="Women" value="Women"/>
            <label htmlFor="Women">Women</label>
          </div>
          <div className='flex gap-2 font-light text-sm'>
            <input type="checkbox" id="Kids" name="Kids" value="Kids"/>
            <label htmlFor="Kids">Kids</label>
          </div>

        </div>
        <div className={`sm:flex flex-col gap-2 border-gray-300 border p-5 w-full sm:w-60 ${showFilter ? "" : "hidden"}`}>
          <h3>TYPE</h3>
          <div className='flex gap-2 font-light text-sm'>
            <input type="checkbox" id="Topwear" name="Topwear" value="Topwear"/>
            <label htmlFor="Topwear">Topwear</label>
          </div>
          <div className='flex gap-2 font-light text-sm'>
            <input type="checkbox" id="Bottomwear" name="Bottomwear" value="Bottomwear"/>
            <label htmlFor="Bottomwear">Bottomwear</label>
          </div>
          <div className='flex gap-2 font-light text-sm'>
            <input type="checkbox" id="Winterwear" name="Winterwear" value="Winterwear"/>
            <label htmlFor="Winterwear">Winterwear</label>
          </div>

        </div>
      </div>

      {/*PRODUCTS*/}
      
    </div>
  )
}

export default Collection
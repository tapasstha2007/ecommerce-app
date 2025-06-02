import React, { use, useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProdctItems from '../components/ProductItems'

const Collection = () => {

 const {products,search,showSearch}=useContext(ShopContext)
 const [showFilter, setshowFilter] = useState(false)
 const [filterProducts, setfilterProducts] = useState([])
 const [category, setcategory] = useState([])
 const [subCategory, setsubCategory] = useState([])
 const [sorttype, setsorttype] = useState("relavent")

 const toogleCategory = (e) => {
  if (category.includes(e.target.value)) {
    setcategory((prev) => prev.filter((item) => item !== e.target.value));
  } else {
    setcategory((prev) => [...prev, e.target.value]);
  }
};

const toogleSubCategory = (e) => {
  if (subCategory.includes(e.target.value)) {
    setsubCategory((prev) => prev.filter((item) => item !== e.target.value));
  } else {
    setsubCategory((prev) => [...prev, e.target.value]);
  }
};

const applyFilter=()=>{


  let productCopy = products.slice();

  if(showSearch && search ){
    productCopy = productCopy.filter(item=> item.name.toLowerCase().includes(search.toLowerCase()))
  }



  if(category.length > 0){
    productCopy = productCopy.filter((item)=>category.includes(item.category))
  } 

  if(subCategory.length > 0){
    productCopy = productCopy.filter((item)=>subCategory.includes(item.subCategory))
  }

  setfilterProducts(productCopy)
}

const sortProduct = ()=>{
  let fpCopy = filterProducts.slice();

  switch(sorttype){
    case "low-high":
      setfilterProducts( fpCopy.sort((a,b)=>a.price-b.price))
      break;
    case "high-low":
      setfilterProducts( fpCopy.sort((a,b)=>b.price-a.price))
      break;
    default:
      applyFilter()
      break;     
  }

}

useEffect(()=>{
  sortProduct()
},[sorttype])


 useEffect(()=>{
  applyFilter()
 },[category,subCategory,search,showSearch])

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
            <input type="checkbox" id="Men" name="Men" value="Men" onChange={toogleCategory}/>
            <label htmlFor="Men">Men</label>
          </div>
          <div className='flex gap-2 font-light text-sm'>
            <input type="checkbox" id="Women" name="Women" value="Women" onChange={toogleCategory}/>
            <label htmlFor="Women">Women</label>
          </div>
          <div className='flex gap-2 font-light text-sm'>
            <input type="checkbox" id="Kids" name="Kids" value="Kids" onChange={toogleCategory}/>
            <label htmlFor="Kids">Kids</label>
          </div>

        </div>
        <div className={`sm:flex flex-col gap-2 border-gray-300 border p-5 w-full sm:w-60 ${showFilter ? "" : "hidden"}`}>
          <h3>TYPE</h3>
          <div className='flex gap-2 font-light text-sm'>
            <input type="checkbox" id="Topwear" name="Topwear" value="Topwear" onChange={toogleSubCategory}/>
            <label htmlFor="Topwear">Topwear</label>
          </div>
          <div className='flex gap-2 font-light text-sm'>
            <input type="checkbox" id="Bottomwear" name="Bottomwear" value="Bottomwear" onChange={toogleSubCategory}/>
            <label htmlFor="Bottomwear">Bottomwear</label>
          </div>
          <div className='flex gap-2 font-light text-sm'>
            <input type="checkbox" id="Winterwear" name="Winterwear" value="Winterwear" onChange={toogleSubCategory}/>
            <label htmlFor="Winterwear">Winterwear</label>
          </div>

        </div>
      </div>

      {/*PRODUCTS*/}
      <div className='flex-1'>

        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={"ALL"} text2={"COLLECTIONS"}/>
          {/* PRODUCT SORT*/}

          <select className='border border-gray-300 text-sm px-2' onChange={(e)=>setsorttype(e.target.value)}>
            <option value="relavent">Sort by : Relavent</option>
            <option value="low-high">Sort by : Low to High</option>
            <option value="high-low">Sort by : High to Low</option>
          </select>
        </div>

        {/* PRODUCT CARDS */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>

          {
            filterProducts.map((item,index)=>(
              <ProdctItems key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Collection
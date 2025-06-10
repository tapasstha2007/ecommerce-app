import { createContext,  useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = "$";
    const delivery_fee = 10 
    const [search, setSearch] = useState(""); // <-- Capital S
    const [showSearch, setshowSearch] = useState(false);
    const [cartItems,setCartItems] =useState({})
    const navigate = useNavigate();

    const addToCart = async (itemId , size)=>{


        if(!size){
            toast.error("Select Product Size")
            return
        }


     
        let cartData = structuredClone(cartItems)

        if(cartData[itemId]){
            if (cartData[itemId][size]){
                cartData[itemId][size] += 1;
            }else{
                cartData[itemId][size] = 1;
            }

        }else{
            cartData[itemId]={}
            cartData[itemId][size] = 1;

        }
        setCartItems(cartData)   
    }

    const getCartAmount = ()=>{
        let totalamount = 0
        for(const items in cartItems ){
            let itemInfo = products.find((product)=>product._id === items)
            for (const item in cartItems[items]){
                try{
                    if(cartItems[items][item] > 0){
                        totalamount += (cartItems[items][item] * itemInfo.price)
                    }
                }catch(error){
                    console.error("Error calculating cart amount:", error);
                }
            } 
        }
        return totalamount
    
    }
             


  const getCartCount =()=>{
    let totalcount=0
    for(const items in cartItems ){
        for(const item in cartItems[items]){
            try{
                if(cartItems[items][item] > 0){
                    totalcount += cartItems[items][item]
                }
            }catch(error){
                    
                }
        }
    }
     return totalcount
  }

  const updateQuantity = async (itemId,size,quantity)=>{
     let cartData = structuredClone(cartItems)

     cartData[itemId][size] = quantity

     setCartItems(cartData)
  }
     
    const value ={
        products, currency, delivery_fee, search, setSearch, showSearch, setshowSearch, cartItems , addToCart , getCartCount , updateQuantity,
        getCartAmount, navigate// <-- Capital S

    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
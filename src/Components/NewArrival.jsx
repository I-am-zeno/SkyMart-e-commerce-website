import { Check, ShoppingBag } from "lucide-react";
import React, { useContext } from "react";
import { SkyMartContext } from "../Context/ContextProvider";
import { useNavigate } from "react-router";

const NewArrival = ({ p, inCart }) => {
    const {addToCart, setShowCart} = useContext(SkyMartContext)

    const navigate = useNavigate()
  return (
    <div onClick={(e)=>{
      if(e.target.closest(".add"))return
      navigate(`/product/${p.id}`)
    }} className="flex items-center cursor-pointer gap-3 bg-black/40 border border-white/10 rounded-xl px-3 py-2">
      <img src={p.image} alt="image not found" className="w-10 p-[5px.] h-10 rounded-lg bg-[#1a1a1a] shrink-0" />
      <span className="text-[#d4ff2f] font-semibold flex-1">${p.price}</span>
      <button onClick={()=>{
        if(inCart)return
        addToCart(p.id)
        setShowCart(true)
      }} className="w-8 add h-8 cursor-pointer rounded-lg bg-[#3a3d10] flex items-center justify-center">
        {inCart ? (
          <Check className="w-4 h-4 text-[#d4ff2f]" />
        ) : (
          <ShoppingBag className="w-4 h-4 text-[#d4ff2f]" />
        )}
      </button>
    </div>
  );
};

export default NewArrival;

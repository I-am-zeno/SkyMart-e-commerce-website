import React, { useContext } from "react";
import { ShoppingBag, X, Minus, Plus, Trash2, ArrowRight } from "lucide-react";
import { SkyMartContext } from "../Context/ContextProvider";

const CartCard = ({c}) => {
    const {removeFromCart, updateQty} = useContext(SkyMartContext)

  return (
    <div className="bg-[#111111] border border-white/10 rounded-2xl p-4 flex gap-4">
      <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-[#1a1a1a] shrink-0" >
        <img className="w-10" src={c.image} alt="" />
      </div>

      <div className="flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="text-white text-sm font-semibold">{c.name}</div>
          <Trash2 onClick={()=>removeFromCart(c.id)} className="w-4 h-4 text-gray-500 shrink-0" />
        </div>
        <div className="text-[#d4ff2f] font-bold mt-1">${c.price * c.quantity}</div>
        <div className="text-gray-500 text-xs">${(c.price)?.toFixed(2)} each</div>

        <div className="flex items-center gap-2 mt-3">
          <button onClick={()=>updateQty(c.id, 0)} className="w-7 h-7 rounded-lg border border-white/15 flex items-center justify-center">
            <Minus className="w-3.5 h-3.5 text-gray-300" />
          </button>
          <span className="text-white text-sm font-semibold w-4 text-center">
            {c.quantity}
          </span>
          <button onClick={()=>updateQty(c.id, 1)} className="w-7 h-7 rounded-lg border border-white/15 flex items-center justify-center">
            <Plus className="w-3.5 h-3.5 text-gray-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;

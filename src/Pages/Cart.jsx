import { ShoppingBag, X, Minus, Plus, Trash2, ArrowRight } from "lucide-react";
import { useContext } from "react";
import { SkyMartContext } from "../Context/ContextProvider";
import CartCard from "../Components/CartCard";
import { NavLink } from "react-router";

export default function Cart() {
  const { setShowCart, cartItems, setCartItems } = useContext(SkyMartContext);

    const calcTotal = cartItems.reduce((acc, curr)=>{
        return acc + (curr.quantity * curr.price)
    }, 0)

    const  getTotalQty = cartItems.reduce((acc, curr)=>{
        return acc + curr.quantity
    }, 0)

  return (
    <div className="relative min-h-screen w-full bg-black">
      {/* backdrop */}
      <div className="fixed inset-0 bg-black/80 animate-[fadeIn_0.3s_ease-out]" />

      {/* drawer, fixed to viewport, slides in from the right */}
      <div className="fixed top-0 right-0 h-screen w-full max-w-md bg-[#0a0a0a]/90 border-l border-white/10 flex flex-col animate-[slideIn_0.35s_cubic-bezier(0.32,0.72,0,1)]">
        <style>{`
          @keyframes slideIn {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}</style>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#d4ff2f]" />
            <span className="text-white font-bold text-lg">Cart</span>
            <span className="bg-[#3a3d10] text-[#d4ff2f] text-xs font-semibold px-2 py-0.5 rounded-full">
              {getTotalQty} items
            </span>
          </div>
          <X
            onClick={() => setShowCart(false)}
            className="w-5 h-5 text-gray-400"
          />
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4 relative">
          {cartItems.length !== 0 ? (
            cartItems.map((item) => {
              return <CartCard key={item.id} c={item} />;
            })
          ) : (
            <div className="flex flex-col gap-2 absolute top-[50%] left-[50%] translate-[-50%] font-semibold text-lg text-center text-gray-500">
              Empty Cart <br />
              <NavLink to={"/products"} onClick={()=>setShowCart(false)} className='p-2 px-5 text-black bg-[#d4ff2f] rounded-full'>
                Browse products
              </NavLink>
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length !== 0 && <div className="border-t border-white/10 px-6 py-5">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-400 text-sm">Total</span>
            <span className="text-white text-xl font-bold">${(calcTotal).toFixed(2)}</span>
          </div>

          <button className="w-full bg-[#d4ff2f] text-black font-semibold rounded-lg py-3 flex items-center justify-center gap-2">
            Checkout
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="text-center text-gray-500 text-sm mt-3">
            Clear cart
          </div>
        </div>}
      </div>
    </div>
  );
}

import {
  Laptop,
  Package,
  ArrowRight,
  Star,
  Zap,
  ShoppingBag,
} from "lucide-react";
import CategoryCard from "./CategoryCard";
import TopRatedCard from "./TopRatedCard";
import NewArrival from "./NewArrival";
import { useContext } from "react";
import { SkyMartContext } from "../Context/ContextProvider";

const topRated = [
  { price: "$599.99" },
  { price: "$199.99" },
  { price: "$349.99" },
  { price: "$49.99" },
  { price: "$149.99" },
];

const newArrivals = [
  { price: "$99.99" },
  { price: "$299.99" },
  { price: "$24.99" },
  { price: "$199.99" },
  { price: "$34.99" },
];

export default function ShopSections() {
  const {products, cartItems} = useContext(SkyMartContext)

  const getTopRated = products.slice(0,5).sort((a,b) => b.rating.rate - a.rating.rate)
  const getWomens = products.filter(p=>p.category == "women's clothing").sort((a,b)=>b.rating.rate - a.rating.rate)

  return (
    <div className="w-full bg-black px-0 py-14 space-y-9">
      

      {/* Top rated & New arrivals */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#111111] border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-bold flex items-center gap-2">
              <Star className="w-4 h-4 text-amber-400" />
              Top Rated
            </h3>
            <span className="text-[#d4ff2f] text-sm flex items-center gap-1">
              See all <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>

          <div className="space-y-3">
            {getTopRated.map(p=>{
              const inCart = cartItems.find(i=>i.id == p.id)
              return <TopRatedCard key={p.id} inCart={inCart} id={p.id} img={p.image} price={p.price}/>
            })
            }
          </div>
        </div>

        <div className="bg-[#111111] border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-bold flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#d4ff2f]" />
              New Arrivals
            </h3>
            <span className="text-[#d4ff2f] text-sm flex items-center gap-1">
              See all <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>

          <div className="space-y-3">
            {getWomens.slice(0,5).map(p=>{
              const inCart = cartItems.find(i=>i.id == p.id)
              return <NewArrival key={p.id} p={p} inCart={inCart}/>
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

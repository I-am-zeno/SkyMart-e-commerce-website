import {
  Package,
  Laptop,
  TrendingUp,
  Star,
  Tag,
  ArrowRight,
  Zap,
  Shield,
} from "lucide-react";
import ShopSections from "../Components/ShopSection";
import Footer from "../Components/Footer";
import Cart from "./Cart";
import { NavLink, Outlet, useNavigate } from "react-router";
import { useContext } from "react";
import { SkyMartContext } from "../Context/ContextProvider";
import CategoryCard from "../Components/CategoryCard";

export default function Home() {
  const { products, cartItems, showCart, filterCategory, filterFeatured } =
    useContext(SkyMartContext);
  const navigate = useNavigate();

  const categories = [
    "Men's Clothing",
    "Women's Clothing",
    "Electronics",
    "Jewelery",
  ];

  const calcTotal = cartItems.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price;
  }, 0);

  const  getTotalQty = cartItems.reduce((acc, curr)=>{
        return acc + curr.quantity
    }, 0)

  return (
    <div className="min-h-screen max-w-[1200px] bg-black px-8 py-10 pb-0 m-auto">
      {/* Hero */}
      <div
        className="relative rounded-3xl border border-white/10 p-10 overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      >
        <div className="flex items-start justify-between gap-8 flex-wrap">
          <div className="max-w-xl">
            <p className="text-[#d4ff2f] text-xs font-bold tracking-[0.15em] flex items-center gap-2 mb-4">
              GOOD EVENING <span>👋</span>
            </p>
            <h1 className="text-5xl font-extrabold text-white leading-tight">
              Welcome back,
            </h1>
            <h1 className="text-5xl font-extrabold text-[#d4ff2f] leading-tight mb-4">
              first!
            </h1>
            <p className="text-gray-400 text-base mb-8">
              Discover today's picks — hand-curated products across electronics,
              fashion, and more.
            </p>

            <div className="flex items-center gap-3">
              <NavLink
                to={"/products"}
                className="bg-[#d4ff2f] text-black font-semibold rounded-lg px-6 py-3 flex items-center gap-2"
              >
                Shop Now
                <ArrowRight className="w-4 h-4" />
              </NavLink>
              <button className="border border-white/15 text-white font-medium rounded-lg px-6 py-3">
                View All Products
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-[#3a3d10]/40 border border-[#d4ff2f]/30 rounded-2xl px-8 py-5 text-center">
              <div className="text-[#d4ff2f] text-2xl font-extrabold">20+</div>
              <div className="text-gray-300 text-xs mt-1">
                Products Available
              </div>
            </div>
            <div className="border border-white/15 rounded-2xl px-8 py-5 text-center">
              <div className="text-white text-2xl font-extrabold">Free</div>
              <div className="text-gray-400 text-xs mt-1">Delivery on $99+</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
        <div
          className="border border-white/10 rounded-2xl p-6 flex items-start gap-4"
        >
          <div className="w-11 h-11 rounded-xl bg-[#3a3d10] flex items-center justify-center shrink-0">
            <Package className="w-5 h-5 text-[#d4ff2f]" />
          </div>
          <div>
            <div className="text-white text-2xl font-bold">
              {getTotalQty}
            </div>
            <div className="text-gray-300 text-sm">Cart Items</div>
            <div className="text-gray-500 text-xs">In your bag</div>
          </div>
        </div>

        <div className="border border-white/10 rounded-2xl p-6 flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl bg-[#132033] flex items-center justify-center shrink-0">
            <TrendingUp className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <div className="text-white text-2xl font-bold">
              ${calcTotal.toFixed(2)}
            </div>
            <div className="text-gray-300 text-sm">Cart Value</div>
            <div className="text-gray-500 text-xs">Ready to checkout</div>
          </div>
        </div>

        <div className="border border-white/10 rounded-2xl p-6 flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl bg-[#2e2210] flex items-center justify-center shrink-0">
            <Star className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <div className="text-white text-2xl font-bold">5</div>
            <div className="text-gray-300 text-sm">Top Products</div>
            <div className="text-gray-500 text-xs">Highly rated</div>
          </div>
        </div>

        <div className="border border-white/10 rounded-2xl p-6 flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl bg-[#241830] flex items-center justify-center shrink-0">
            <Tag className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <div className="text-white text-2xl font-bold">4</div>
            <div className="text-gray-300 text-sm">Categories</div>
            <div className="text-gray-500 text-xs">To explore</div>
          </div>
        </div>
      </div>

      {/* Shop by category */}
      <div className="mt-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white text-xl font-bold">Shop by Category</h2>
          <NavLink
            to={"/products"}
            className="text-[#d4ff2f] text-sm font-medium flex items-center gap-1"
          >
            View All <ArrowRight className="w-4 h-4" />
          </NavLink>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => {
            if (cat == "Men's Clothing") {
              const items = products.filter(
                (p) => p.category == "men's clothing",
              );
              return <CategoryCard key={i} name={cat} items={items.length} />;
            }
            if (cat == "Women's Clothing") {
              const items = products.filter(
                (p) => p.category == "women's clothing",
              );
              return <CategoryCard key={i} name={cat} items={items.length} />;
            }
            if (cat == "Jewelery") {
              const items = products.filter((p) => p.category == "jewelery");
              return <CategoryCard key={i} name={cat} items={items.length} />;
            }
            if (cat == "Electronics") {
              const items = products.filter((p) => p.category == "electronics");
              return <CategoryCard key={i} name={cat} items={items.length} />;
            }
          })}
        </div>
      </div>

      <ShopSections />
      <div className="px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="border border-white/10 rounded-xl px-6 py-5 flex items-center gap-3">
            <Zap className="w-5 h-5 text-[#d4ff2f] shrink-0" />
            <div>
              <div className="text-white text-sm font-semibold">
                Fast Delivery
              </div>
              <div className="text-gray-500 text-xs mt-0.5">
                Same-day on select items
              </div>
            </div>
          </div>

          <div className="border border-white/10 rounded-xl px-6 py-5 flex items-center gap-3">
            <Shield className="w-5 h-5 text-blue-400 shrink-0" />
            <div>
              <div className="text-white text-sm font-semibold">
                Secure Payments
              </div>
              <div className="text-gray-500 text-xs mt-0.5">
                100% encrypted checkout
              </div>
            </div>
          </div>

          <div className="border border-white/10 rounded-xl px-6 py-5 flex items-center gap-3">
            <Tag className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <div className="text-white text-sm font-semibold">
                Best Prices
              </div>
              <div className="text-gray-500 text-xs mt-0.5">
                Price-match guarantee
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

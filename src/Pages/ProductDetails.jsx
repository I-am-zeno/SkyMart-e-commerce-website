import {
  ArrowLeft,
  Star,
  ShoppingCart,
  Heart,
  Truck,
  Shield,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { NavLink, useNavigate, useParams } from "react-router";
import { SkyMartContext } from "../Context/ContextProvider";
import { useContext } from "react";
import ProductRating from "../Components/ProductRating";

export default function ProductDetail() {
  const { products } = useContext(SkyMartContext);
  const navigate = useNavigate()

  const { id } = useParams();

  const product = products.find((p) => p.id == id);
  console.log(product)
  const name =
    product.category.split(" ").length == 2
      ? product.category
          .split(" ")
          .map((word) => {
            return word.slice(0, 1).toUpperCase() + word.slice(1);
          })
          .join(" ")
      : product.category.slice(0, 1).toUpperCase() + product.category.slice(1);

  const handlePrevious = ()=>{
    navigate(`/product/${id - 1}`)
  }

  const handleNext = ()=>{
    if(id == products.length)return
    navigate(`/product/${Number(id) + 1}`)
  }

  return (
    <div className="min-h-screen w-full bg-black px-6 pt-15">
      {/* Breadcrumb */}
      <div className="flex items-center max-w-300 mx-auto gap-2 text-sm text-gray-400 mb-8">
        <NavLink
          to={"/products"}
          className="flex gap-2 hover:text-gray-200 cursor-pointer items-center"
        >
          <ArrowLeft className="w-4 h-4" />
          Products
        </NavLink>
        <span>/</span>
        <span>Clothing</span>
        <span>/</span>
        <span className="text-white font-medium">
          Comfortable Cotton T-Shirt
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 max-w-5xl mx-auto">
        {/* Image */}
        <div className="border-[2px] border-[#d4ff2f] rounded-3xl p-[2px] h-fit"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}>
          <img src={product.image} className="w-full p-10 rounded-2xl overflow-hidden aspect-square bg-trasparent" />
        </div>

        {/* Details */}
        <div>
          <span className="inline-block bg-[#3a3d10] text-[#d4ff2f] text-xs font-semibold px-3 py-1 rounded-full mb-4">
            {name}
          </span>

          <h1 className="text-white text-3xl font-extrabold mb-3">
            {product.title}
          </h1>

          <div className="flex items-center gap-2 mb-4">
            <ProductRating rating={product.rating.rate}/>
            <span className="text-white text-sm font-semibold ml-1">{product.rating.rate}</span>
            <span className="text-gray-500 text-sm">({product.rating.count})</span>
          </div>

          <div className="border-t border-white/80 pt-4 mb-4">
            <div className="text-[#d4ff2f] text-4xl font-extrabold">${product.price}</div>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed border-t border-white/80 pt-4 mb-6">
            {product.description}
          </p>

          <div className="flex items-center gap-3 mb-4">
            <button className="flex-1 bg-[#d4ff2f] text-black font-semibold rounded-xl py-3.5 flex items-center justify-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </button>
            <button className="w-12 h-12 rounded-xl border border-white/15 flex items-center justify-center shrink-0">
              <Heart className="w-4 h-4 text-gray-300" />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="border border-white/10 rounded-xl px-3 py-4 text-center">
              <Truck className="w-4 h-4 text-[#d4ff2f] mx-auto mb-2" />
              <div className="text-white text-xs font-semibold">
                Free Delivery
              </div>
              <div className="text-gray-500 text-[11px] mt-0.5">
                On orders $50+
              </div>
            </div>
            <div className="border border-white/10 rounded-xl px-3 py-4 text-center">
              <Shield className="w-4 h-4 text-[#d4ff2f] mx-auto mb-2" />
              <div className="text-white text-xs font-semibold">Secure Pay</div>
              <div className="text-gray-500 text-[11px] mt-0.5">
                256-bit SSL
              </div>
            </div>
            <div className="border border-white/10 rounded-xl px-3 py-4 text-center">
              <RotateCcw className="w-4 h-4 text-[#d4ff2f] mx-auto mb-2" />
              <div className="text-white text-xs font-semibold">
                Easy Returns
              </div>
              <div className="text-gray-500 text-[11px] mt-0.5">
                30-day policy
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {id > 1 && <button onClick={()=>handlePrevious()} className="flex-1 bg-[#1a1a1a] text-white font-semibold rounded-xl py-3 flex items-center justify-center gap-1.5">
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>}
            {id != products.length && <button onClick={()=>handleNext()} className="flex-1 bg-[#d4ff2f] text-black font-semibold rounded-xl py-3 flex items-center justify-center gap-1.5">
              Next
              <ChevronRight className="w-4 h-4" />
            </button>}
          </div>
        </div>
      </div>
    </div>
  );
}

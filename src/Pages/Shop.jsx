import { Search, ChevronDown, Star, Check, X } from "lucide-react";
import ProductCard from "../Components/ProductCard";
import { useContext, useEffect } from "react";
import { SkyMartContext } from "../Context/ContextProvider";
import Footer from "../Components/Footer";
import Cart from "./Cart";

export default function ShopPage() {
  const {
    filteredProducts,
    setFilteredProducts,
    filterCategory,
    filterFeatured,
    products,
    showCart,
    cartItems,
    setCategory,
    setFeatured,
    category,
    featured,
  } = useContext(SkyMartContext);

  // useEffect(() => {
  //   filterCategory("All Categories");
  // }, []);

  return (
    <div className="min-h-screen max-w-[1200px] m-auto bg-black px-8 py-10">
      <h1 className="text-white text-4xl font-extrabold mb-1">All Products</h1>
      <p className="text-gray-500 text-sm mb-6">
        {filteredProducts.length + " products found"}
      </p>

      <div className="border border-white/80 rounded-2xl p-3 flex flex-col md:flex-row gap-3 mb-8">
        <div className="flex-1 flex items-center gap-3 bg-black/40 border border-white/10 rounded-xl px-4 py-3">
          <Search className="w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search Products..."
            className=" w-full outline-none border-none text-gray-200 text-md"
          />
        </div>

        <div className="flex items-center justify-between gap-2 bg-black/40 border border-white/10 rounded-xl pr-3 min-w-[160px]">
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value)
              filterCategory(e.target.value)
            }}
            className="text-gray-300 text-sm bg-black outline-none px-4 py-3"
          >
            <option value="All Categories">All Categories</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
            <option value="electronics">Electronics</option>
          </select>
        </div>

        <div className="flex items-center justify-between gap-2 bg-black/40 border border-white/10 rounded-xl pr-3 min-w-[140px]">
          <select
          value={featured}
            onChange={(e) => {
              setFeatured(e.target.value)
              filterFeatured(e.target.value)
            }}
            className="text-gray-300 text-sm bg-black outline-none px-4 py-3"
          >
            <option value="Featured">Featured</option>
            <option value="Price High - Low">Price High - Low</option>
            <option value="Price Low - High">Price Low - High</option>
            <option value="Top Rated">Top Rated</option>
            <option value="Lowest Rated">Lowest Rated</option>
          </select>
          {/* <ChevronDown className="w-4 h-4 text-gray-500" /> */}
        </div>
        {(category !== 'All Categories' || featured !== "Featured") && (
          <div className="flex items-center">
            <button
              onClick={() => {
                setCategory("All Categories");
                setFeatured("Featured");
                filterCategory("All Categories")
              }}
              className="text-red-400/70 text-sm border-[1px] font-semibold border-red-400/40 bg-red-400/15 flex gap-1 items-center px-4 py-2 rounded-full cursor-pointer"
            >
              <X size={"1rem"} />
              Clear
            </button>
          </div>
        )}
      </div>

      <div
        className="grid grid-cols-5
       gap-4"
      >
        {filteredProducts.length !== 0
          ? filteredProducts.map((p) => {
              const inCart = cartItems.find((i) => i.id == p.id);
              return (
                <ProductCard key={p.id} product={p} inCart={inCart || null} />
              );
            })
          : products.map((p) => {
              const inCart = cartItems.find((i) => i.id == p.id);
              return (
                <ProductCard key={p.id} product={p} inCart={inCart || null} />
              );
            })}
      </div>
    </div>
  );
}

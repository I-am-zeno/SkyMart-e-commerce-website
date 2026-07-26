import React, { useContext } from "react";
import { Check } from "lucide-react";
import ProductRating from "./ProductRating";
import { SkyMartContext } from "../Context/ContextProvider";
import { useNavigate } from "react-router";

const ProductCard = ({ product, inCart }) => {
  const { addToCart, setShowCart } = useContext(SkyMartContext);
  const navigate = useNavigate();

  const name =
    product.category.split(" ").length == 2
      ? product.category
          .split(" ")
          .map((word) => {
            return word.slice(0, 1).toUpperCase() + word.slice(1);
          })
          .join(" ")
      : product.category.slice(0, 1).toUpperCase() + product.category.slice(1);

  return (
    <div
      onClick={(e) => {
        if (e.target.closest(".add")) return;
        navigate(`/product/${product.id}`);
      }}
      className="cursor-pointer group w-full max-w-xs bg-[#111111] border border-white/10 hover:border-[#d4ff2f]/50 rounded-2xl overflow-hidden transition-colors duration-300"
    >
      <div className="relative h-48 bg-white/100 flex items-center justify-center p-6 overflow-hidden">
        <img
          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
          src={product.image}
          alt={product.title}
        />
        <span className="absolute top-3 left-3 bg-[#3a3d10]/70 text-[#d4ff2f] text-xs font-semibold px-3 py-1 rounded-full">
          {name.split(' ')[0]}
        </span>
      </div>

      <div className="p-4">
        <div className="text-gray-500 text-xs font-medium mb-1">{name}</div>
        <div className="text-white font-bold text-base leading-snug mb-2 line-clamp-2">
          {product.title}
        </div>

        <div className="flex items-center gap-1 pb-3 border-b border-white/10 mb-3">
          <ProductRating rating={product.rating.rate} />
          <span className="text-gray-500 text-xs ml-1">
            ({product.rating.count})
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[#d4ff2f] font-bold text-lg">
            ${product.price}
          </span>
          <button
            onClick={() => {
              if (inCart) return;
              addToCart(product.id);
              setShowCart(true)
            }}
            className="cursor-pointer bg-[#d4ff2f] text-black text-sm font-semibold px-4 py-2 rounded-full"
          >
            {!inCart ? (
              <span className="font-semibold add">Add To Cart</span>
            ) : (
              <div className="flex items-center add gap-1">
                <Check className="w-3.5 h-3.5" />
                <p>Added</p>
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

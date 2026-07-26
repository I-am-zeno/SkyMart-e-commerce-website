import React, { useContext } from "react";
import {
  Laptop,
  Package,
  ArrowRight,
  Star,
  Zap,
  ShoppingBag,
  PackageCheck,
} from "lucide-react";
import { useNavigate } from "react-router";
import { SkyMartContext } from "../Context/ContextProvider";

const CategoryCard = ({name, items}) => {
  const { filterCategory } = useContext(SkyMartContext)
  const navigate = useNavigate()

  return (
    <div onClick={() => {
      console.log(name)
      filterCategory(name);
      navigate("/products");
          }} className="bg-[#111111] cursor-pointer transition all duration-200 ease-in-out hover:translate-y-[-4px] border border-white/10 hover:border-[#d4ff2f] rounded-2xl p-6 flex flex-col items-center text-center">
      {name == "Electronics" ? <Laptop className="w-6 h-6 text-[#d4ff2f] mb-3" />
      : <PackageCheck className="w-6 h-6 text-[#d4ff2f] mb-3" />}
      <div className="text-white font-semibold">{name}</div>
      <div className="text-gray-500 text-xs mt-1">{items}</div>
    </div>
  );
};

export default CategoryCard;

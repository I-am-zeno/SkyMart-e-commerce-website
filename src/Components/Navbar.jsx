import { Zap, ShoppingCart, LogOut } from "lucide-react";
import { useContext } from "react";
import { SkyMartContext } from "../Context/ContextProvider";
import { NavLink, useNavigate } from "react-router";

export default function Navbar() {
  const { session, setSession, setShowCart, cartItems } = useContext(SkyMartContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    setSession(null);
    localStorage.removeItem("session"); // Deletes the key completely
    navigate("/login");
  };

  return (
    <nav className="w-full bg-black border-b border-white/10 px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-[#d4ff2f] flex items-center justify-center">
          <Zap className="w-4 h-4 text-black" fill="black" />
        </div>
        <NavLink to={"/"} className="text-white text-lg font-bold">
          Sky<span className="text-[#d4ff2f]">Mart</span>
        </NavLink>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `${isActive ? "text-[#d4ff2f] " : "text-gray-400"} text-sm font-semibold`
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/products"}
          className={({ isActive }) =>
            `${isActive ? "text-[#d4ff2f] " : "text-gray-400"} text-sm font-semibold`
          }
        >
          Shop
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            `${isActive ? "text-[#d4ff2f] " : "text-gray-400"} text-sm font-semibold`
          }
        >
          About
        </NavLink>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 bg-[#111111] border border-white/10 rounded-full pl-1 pr-4 py-1">
          <div className="w-6 h-6 rounded-full bg-[#d4ff2f] flex items-center justify-center text-black text-xs font-bold">
            {session.avatar}
          </div>
          <span className="text-gray-300 text-sm">{session.name}</span>
        </div>

        <button
          onClick={() => setShowCart(true)}
          className="w-9 h-9 rounded-lg relative bg-[#111111] border border-white/10 flex items-center justify-center"
        >
          <ShoppingCart className="w-4 h-4 text-gray-300" />
          {cartItems.length !== 0 && <span className="text-black text-xs absolute cursor-pointer right-[-3px] top-0 bg-[#d4ff2f] rounded-full px-1">{cartItems.length}</span>}
        </button>

        <button
          type="button"
          onClick={handleLogout}
          className="w-9 h-9 rounded-lg bg-[#111111] border border-white/10 flex items-center justify-center"
        >
          <LogOut className="w-4 h-4 text-gray-300" />
        </button>
      </div>
    </nav>
  );
}

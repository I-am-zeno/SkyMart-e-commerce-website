import { Zap, Shield, Tag } from "lucide-react";

export default function Footer() {
  return (
    <div className="w-full bg-black mt-15">

      <footer className="w-full border-t border-white/10 py-8 flex flex-col items-center justify-center gap-1">
        <span className="text-[#d4ff2f] text-lg font-bold">SkyMart</span>
        <span className="text-gray-500 text-sm">
          © 2025 SkyMart • Built with React + Redux + TanStack Query
        </span>
      </footer>
    </div>
  );
}
import { Link } from "react-router-dom";
import {
  FaShoppingBag,
  FaHeart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";
import logo from "../assets/image/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-[#050517] to-[#0a0a1f] text-white">

        {/* ===== Top Icons ===== */}
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-6 text-white/80">
            <FaShoppingBag className="cursor-pointer hover:text-[#d4af37] transition" />
            <FaHeart className="cursor-pointer hover:text-[#d4af37] transition" />
          </div>

          <div className="flex flex-col items-center">
            <span className="font-serif text-[24px] md:text-[26px] tracking-[0.35em] uppercase">
              Dream Jewelry
            </span>
          </div>

          <div className="flex items-center gap-6 text-white/80">
            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setOpen(!open)}
            >
              {open ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>
        </div>
        
        <div className="relative flex items-center justify-center">
          <div className="absolute left-0 right-0 h-[1.5px] bg-[#d4af37]/70"></div>
          <div className="relative bg-[#0a0a1f] px-4">
            <img
              src={logo}
              alt="Dream Jewelry"
              className="h-[40px] md:h-[65px] mx-auto"
            />
          </div>
        </div>

        {/* ===== Desktop Navigation ===== */}
        <div className="hidden md:block max-w-7xl mx-auto px-6">
          <ul className="flex justify-center gap-12 py-6 text-[12px] tracking-[0.3em] uppercase font-light ">
            <li className="relative group cursor-pointer">
              <Link to="/" className="transition hover:text-[#d4af37]">
                Home
              </Link>
              <span className="absolute left-1/2 -bottom-2 h-[1.5px] w-0 bg-[#d4af37] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </li>
            <li className="relative group cursor-pointer">
              <Link to="/catalogue" className="transition hover:text-[#d4af37]">
                Catalogue
              </Link>
              <span className="absolute left-1/2 -bottom-2 h-[1.5px] w-0 bg-[#d4af37] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </li>
          </ul>
        </div>
      </nav>

      {/* ===== Mobile Menu ===== */}
      {open && (
        <div className="fixed top-[140px] left-0 w-full bg-[#050517] z-40 md:hidden border-t border-white/10">
          <ul className="flex flex-col items-center gap-6 py-10 text-xs tracking-[0.35em] uppercase font-light text-white">
            <li>
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="hover:text-[#d4af37] transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/catalogue"
                onClick={() => setOpen(false)}
                className="hover:text-[#d4af37] transition"
              >
                Catalogue
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

import { Link } from "react-router-dom";
import { FaShoppingBag, FaHeart, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import logo from "../assets/images/logo.png";
import { useSelector } from "react-redux";
import CartSidebar from "./CartSidebar";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const total = useSelector((state)=>state.wishliste.total)
  const navigate = useNavigate();
  // const cartItems =useSelector((state) => state.cart.cartItems);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-linear-to-b from-[#050517] to-[#0a0a1f] text-white">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-6 text-white/80">
            <button className="relative" onClick={() => setCartOpen(true)}>
              <FaShoppingBag className="cursor-pointer hover:text-yellow-600 transition" />
                <span className="absolute -top-2 -right-2 bg-yellow-600 text-black text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                  {totalQuantity}
                </span>
              
            </button>

            <button className="relative">
              <FaHeart onClick={() => navigate("/wishlist")} className="cursor-pointer hover:text-yellow-600 transition" />
                <span className="absolute -top-2 -right-2 bg-yellow-600 text-black text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                  {total}
                </span>
              
            </button>
            

            {/* <Link
              to="/wishlist"
              className="relative text-white hover:text-[#beaf7b] transition-colors"
            >
              <FaHeart className="cursor-pointer hover:text-yellow-600 transition" />
            </Link> */}
          </div>

          <div className="flex flex-col items-center">
            <span className="font-serif text-[22px] md:text-[24px] tracking-[0.35em] uppercase">
              Dream Jewelry
            </span>
          </div>

          <div className="flex items-center gap-6 text-white/80">
            {/* Mobile menu button */}
            <button className="md:hidden" onClick={() => setOpen(!open)}>
              {open ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute left-0 right-0 h-[1.5px] bg-yellow-600"></div>
          <div className="relative bg-[#0a0a1f] px-4">
            <img
              src={logo}
              alt="Dream Jewelry"
              className="h-9 md:h-12 mx-auto"
            />
          </div>
        </div>

        {/* ===== Desktop Navigation ===== */}
        <div className="hidden md:block max-w-7xl mx-auto px-6">
          <ul className="flex justify-center gap-12 py-4 text-[11px] tracking-[0.3em] uppercase font-light ">
            <li className="relative group cursor-pointer">
              <Link
                to="/"
                className="transition hover:text-yellow-600 text-white"
              >
                Home
              </Link>
              <span className="absolute left-1/2 -bottom-2 h-[1.5px] w-0 bg-yellow-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </li>
            <li className="relative group cursor-pointer">
              <Link
                to="/catalogue"
                className="transition hover:text-yellow-600 text-white"
              >
                Catalogue
              </Link>
              <span className="absolute left-1/2 -bottom-2 h-[1.5px] w-0 bg-yellow-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </li>
          </ul>
        </div>
        <CartSidebar open={cartOpen} onClose={() => setCartOpen(false)} />
      </nav>
      

      {/* ===== Mobile Menu ===== */}
      {open && (
        <div className="fixed top-32 left-0 w-full bg-[#050517] z-40 md:hidden border-t border-white/10">
          <ul className="flex flex-col items-center gap-4 py-6 text-xs tracking-[0.35em] uppercase font-light text-white">
            <li>
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="hover:text-yellow-600 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/catalogue"
                onClick={() => setOpen(false)}
                className="hover:text-yellow-600 transition"
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

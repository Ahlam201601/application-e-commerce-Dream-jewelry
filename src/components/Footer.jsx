import { useState } from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-[#050517] text-white py-16 px-6 mt-32">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-serif mb-6">CONTACT US</h3>
            <div className="space-y-3 text-gray-300">
              <p>Tower of London , United Kingdom.</p>
              <p className="mt-4">(+84) 987 000 123</p>
              <p className="underline">Dreamjewelry@gmail.com</p>
            </div>
            {/* Social Media Icons */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white hover:bg-yellow-600 hover:text-[#050517] hover:border-yellow-600 transition-all duration-300"
              >
                <Youtube size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white hover:bg-yellow-600 hover:text-[#050517] hover:border-yellow-600 transition-all duration-300"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white hover:bg-yellow-600 hover:text-[#050517] hover:border-yellow-600 transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white hover:bg-yellow-600 hover:text-[#050517] hover:border-yellow-600 transition-all duration-300"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-serif mb-6">CUSTOMER SERVICE</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#" className="hover:text-yellow-600 transition">
                  Faq
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-600 transition">
                  Size guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-600 transition">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-600 transition">
                  Order status
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-600 transition">
                  Exchanges
                </a>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-xl font-serif mb-6">ABOUT US</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#" className="hover:text-yellow-600 transition">
                  Our Shops
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-600 transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-600 transition">
                  Artists
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-600 transition">
                  Local Giving
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-600 transition">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Join Our Community */}
          <div>
            <h3 className="text-xl font-serif mb-2">Newsletter</h3>

            <p className="text-sm text-gray-400 mb-6">
              Sign up to receive the earliest promotional notifications!
            </p>

            <div className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b border-gray-500 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                required
              />

              <button className="w-full bg-yellow-500 text-[#050517] py-3 px-6 font-semibold hover:bg-yellow-600 transition-colors">
                SEND
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-yellow-600 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            Copyright © 2025. All Right Reserved
          </p>
          <div className="flex gap-6 text-gray-300">
            <Link to="/" className="hover:text-yellow-600 transition">
              Home
            </Link>
            <Link to="/catalogue" className="hover:text-yellow-600 transition">
              Catalogue
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

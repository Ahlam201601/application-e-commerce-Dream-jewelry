import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import box1 from "../assets/images/box1.png"
import box2 from "../assets/images/box2.png"
import box3 from "../assets/images/box3.png"

export default function Home() {
  return (
    <div className="relative w-screen overflow-hidden">
      {/* Hero image */}
      <div className="w-full h-screen bg-center bg-cover bg-[url('/src/assets/images/home.jpeg')]"></div>

      {/* Hero text */}
      <div className="absolute top-0 left-0 w-full h-screen z-10 flex flex-col items-start justify-center px-8 md:px-20">
        <p className="text-[#0a0a1f] text-xl mb-2">
          A Unique, Intangible Quality.
        </p>
        <h1 className="text-[#0a0a1f] text-3xl md:text-5xl font-bold mb-6">
          Perfect Match for Elegant Impression
        </h1>
        <Link
          to="/catalogue"
          className="inline-block px-8 py-4 font-semibold text-yellow-600 
             border-2 border-yellow-600 rounded-lg shadow-lg 
             bg-transparent 
             hover:bg-yellow-600 hover:text-white 
             transition-all duration-300"
        >
          VIEW CATALOGUE
        </Link>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-24 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* World-Class Craftsmanship */}
          <div className="text-center px-6 group">
            <div className="mb-8 flex justify-center">
              <img
                src={box1}
                alt="World-Class Craftsmanship"
                className="w-24 h-24 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 tracking-widest">
              WORLD-CLASS CRAFTSMANSHIP
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
              We source the finest metals and partner with world-renowned
              artisans who craft every piece with precision.
            </p>
          </div>

          {/* Ethical Labor */}
          <div className="text-center px-6 group">
            <div className="mb-8 flex justify-center">
              <img
                src={box2}
                alt="Ethical Labor"
                className="w-24 h-24 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 tracking-widest">
              ETHICAL LABOR
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
              Natural, conflict-free gemstones responsibly sourced from trusted
              partners around the globe.
            </p>
          </div>

          {/* Honest Price */}
          <div className="text-center px-6 group">
            <div className="mb-8 flex justify-center">
              <img
                src={box3}
                alt="Honest Price"
                className="w-24 h-24 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 tracking-widest">
              HONEST PRICE
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
              By eliminating middlemen, we offer exceptional quality jewelry at
              prices that truly reflect its value.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-20">
        {/* Title */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-serif tracking-wide text-gray-800">
            Top Products
          </h1>
          <div className="mt-3 mx-auto w-20 h-[2px] bg-[#d4af37]"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5">
          {products.slice(0, 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-10 text-center">
          <Link
            to="/catalogue"
            className="inline-block px-8 py-3 text-sm font-medium tracking-wide 
                 text-white bg-[#d4af37] rounded-full 
                 hover:bg-[#b8962e] transition duration-300"
          >
            View More Products
          </Link>
        </div>
      </div>
    </div>
  );
}

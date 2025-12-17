import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Home() {
  return (
    <div className="relative w-screen overflow-hidden">
      {/* Hero image */}
      <div className="w-full h-screen bg-center bg-cover bg-[url('/src/assets/images/home.jpeg')]"></div>

      {/* Hero text */}
      <div className="absolute top-0 left-0 w-full h-screen z-10 flex flex-col items-start justify-center px-8 md:px-20">
        <p className="text-[#0a0a1f] text-sm mb-2">
          A Unique, Intangible Quality.
        </p>
        <h1 className="text-[#0a0a1f] text-3xl md:text-5xl font-bold mb-6">
          Perfect Match for Elegant Impression
        </h1>
        <Link
          to="/catalogue"
          className="inline-block px-8 py-4 font-semibold text-[#d4af37] border-2 border-[#d4af37] rounded-lg shadow-lg transition-all duration-300"
        >
          VIEW CATALOGUE
        </Link>
      </div>

      {/* Products grid */}
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
      </div>
    </div>
  );
}

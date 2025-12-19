import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import box1 from "../assets/images/box1.png";
import box2 from "../assets/images/box2.png";
import box3 from "../assets/images/box3.png";
import section from "../assets/images/section.jpeg";
import home1 from "../assets/images/home1.jpeg";
import { Truck, Package, Shield, MessageCircle } from "lucide-react";

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

      <section className="w-full min-h-screen bg-[#faf9f7] flex items-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 px-6">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-5xl font-serif text-[#0a0a1f] leading-tight">
              Preserve The Moment
            </h1>

            <p className="text-gray-700 max-w-md leading-relaxed">
              Jewelry has a remarkable ability to preserve moments and memories,
              serving as tangible. <br />A gift from a loved one, or an
              accessory worn during a special occasion.
            </p>

            <a
              href="#"
              className="border border-yellow-600 px-10 py-4 text-sm tracking-widest hover:bg-yellow-600 hover:text-white transition-all duration-300"
            >
              SHOP NOW
            </a>
          </div>

          {/* Right Image */}
          <div className="w-full h-full">
            <img
              src={section}
              alt="Jewelry Hero"
              className="w-full h-full object-cover rounded-sm"
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 relative z-20">
        {/* Title */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-serif tracking-wide text-gray-800">
            Top Products
          </h1>
          <div className="mt-3 mx-auto w-20 h-0.5 bg-[#d4af37]"></div>
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

      <div className="min-h-screen bg-white mt-10">
        {/* Hero Section */}
        <div className="relative h-190 w-full">
          <img
            src={home1}
            alt="Engagement Ring"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-3xl md:text-4xl font-light tracking-widest italic text-center px-4">
              AMAZING, BEAUTIFUL <br />
              DAINTY LITTLE THINGS
            </h1>
          </div>

          {/* Card OVER image */}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-32 z-30">
            <div className="bg-gray-900 px-14 py-14 max-w-3xl text-center shadow-lg">
              <p className="text-white text-base md:text-lg leading-relaxed font-serif mb-10">
                They say you should always ask someone about their values on a
                first date, so here are ours. We make our pieces at the same
                places other premium brands do, so you're getting that
                high-level quality — but without the high-level price. You're
                welcome.
              </p>

              <a
                href="#"
                className="relative inline-block text-sm tracking-widest text-white font-medium pb-1after:absolute after:left-0 after:bottom-0 after:w-full after:h-px after:bg-white hover:text-yellow-600 hover:after:bg-yellow-600 transition-all duration-300">
                GET TO KNOW US
              </a>
            </div>
          </div>
        </div>

        {/* Section under */}
        <div className="bg-white pt-24 pb-24 px-4"></div>
      </div>

      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-start gap-4">
              <div className="shrink-0">
                <Truck className="w-12 h-12 text-gray-800" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Free Shipping
                </h3>
                <p className="text-sm text-gray-600">
                  Free shipping for orders from $200
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="shrink-0">
                <Package className="w-12 h-12 text-gray-800" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Easy Returns
                </h3>
                <p className="text-sm text-gray-600">Refund within 14 days</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="shrink-0">
                <Shield className="w-12 h-12 text-gray-800" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Secure Payment
                </h3>
                <p className="text-sm text-gray-600">
                  Payment information is safe
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="shrink-0">
                <MessageCircle className="w-12 h-12 text-gray-800" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Customer Care
                </h3>
                <p className="text-sm text-gray-600">
                  Outstanding premium support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React, { useState } from 'react';
import { Heart, Eye } from 'lucide-react';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 relative border border-gray-200 hover:border-yellow-600"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative p-6">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-56 object-contain"
        />
        
        {/* Icons au hover */}
        <div className={`absolute top-3 right-3 flex flex-col gap-2 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
        }`}>
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-yellow-600 hover:text-white transition-colors">
            <Heart size={16} />
          </button>
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-yellow-600 hover:text-white transition-colors">
            <Eye size={16} />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="px-4 pb-5 text-center">
        <h3 className="text-gray-800 font-semibold text-sm mb-3 leading-tight uppercase">
          {product.name}
        </h3>
        
        {/* Price */}
        <p className="text-yellow-600 font-bold text-xl mb-4">
          {product.price}
        </p>

        {/* Button */}
        <button className="text-gray-800 font-medium text-sm hover:text-yellow-600 transition-colors flex items-center justify-center gap-1 mx-auto">
          {product.buttonText || 'Add to cart'}
          <span>→</span>
        </button>
      </div>
    </div>
  );
}
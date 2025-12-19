import { useSelector, useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { addToCart } from "../lib/cartSlice";
import { removeFromWishlist } from "../lib/wishlistSlice";

export default function Wishlist() {
  const dispatch = useDispatch();
  const { wishlisteItems } = useSelector((state) => state.wishliste);

  if (wishlisteItems.length === 0) {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-gray-400">
        <p className="mt-4 text-lg">Your wishlist is empty ❤️</p>
      </div>
    );
  }

  return (
    <div className="pt-50 md:pt-60 px-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-8 text-black text-center">
        My Wishlist ❤️
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {wishlisteItems.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Remove icon */}
              <button
                onClick={() => dispatch(removeFromWishlist(product.id))}
                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition bg-white/90 hover:bg-red-600 text-gray-700 hover:text-white p-2 rounded-full shadow"
              >
                <FaTrash size={14} />
              </button>
            </div>

            {/* Content */}
            <div className="px-4 pb-5 text-center">
              {/* name */}
              <h4 className="text-xs tracking-widest text-gray-500 uppercase mb-1">
                {product.name}
              </h4>

              {/* title */}
              <h3 className="text-gray-800 font-semibold text-sm mb-3 leading-tight uppercase">
                {product.title}
              </h3>

              {/* price */}
              <p className="text-yellow-600 font-semibold text-base mb-4">
                ${product.price}
              </p>

              {/* Add to cart */}
              <button
                onClick={() => dispatch(addToCart(product))}
                className="w-full border border-gray-900 text-gray-900 text-sm py-2 rounded-full hover:bg-gray-900 hover:text-white transition flex items-center justify-center gap-2"
              >
                Add to cart
                <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

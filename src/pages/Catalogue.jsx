import ProductCard from "../components/ProductCard";
import { products } from '../data/products';

export default function Catalogue() {
  return (
    <div className="min-h-screen bg-gray-50 pt-52 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Our Catalogue
          </h1>
          <p className="text-gray-600">
            Discover our exclusive collection of fine jewelry
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </div>
  );
}

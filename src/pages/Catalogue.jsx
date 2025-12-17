import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Catalogue() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // Get unique categories
  const categories = ["All", ...new Set(products.map(p => p.category))];

  // Filter logic
  const filteredProducts = products.filter(product => {
    const matchName = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || product.category === category;

    return matchName && matchCategory;
  });

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

        {/* Search & Filter */}
        <div className="mb-10 flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-6 rounded-2xl shadow-sm">
          
          {/* Search */}
          <input
            type="text"
            placeholder="Search by product name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/2 px-4 py-3 rounded-full 
           border border-yellow-600
           focus:outline-none focus:ring-2 focus:ring-yellow-600"
          />

          {/* Category Filter */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full md:w-1/4 px-4 py-3 rounded-full 
           border border-yellow-600
           bg-white focus:outline-none focus:ring-2 focus:ring-yellow-600"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-20">
            No products found.
          </p>
        )}

      </div>
    </div>
  );
}
